import { AzureFunction, Context, HttpRequest } from "@azure/functions"
import { parse } from 'querystring';

import { Api, Device, DeviceTypes, Dimmable, Room, Scene, SceneDevice } from '../insteonApi';
import { Configuration, HomebridgeDevice, HomebridgeScene } from "./dataModels";

const IncludeGroupMembers = false;
const IncludeRoomNameInDeviceName = true;
const IgnoredDeviceTypes = ['remote'];

const httpTrigger: AzureFunction = async function (context: Context, req: HttpRequest): Promise<void> {
    const parsedBody = parse(req.body);
    const username = parsedBody.username as string;
    const password = parsedBody.password as string;

    if (!username || !password)
    {
        context.res = {
            status: 401,
            body: "Missing username/password in request body"
        };
        return;
    }

    const api = new Api();
    try {
        const token = await api.getAccessToken(username, password);
        api.setAccessTokenForAllRequests(token);
    } catch(error) {
        context.res = {
            status: 401,
            body: "Invalid credentials"
        };
        return;
    }

    const houses = await api.getHouses();
    context.log(`Found ${houses.HouseList.length} houses`);
    const configurations:  Configuration[] = [];
    for (const houseListHouse of houses.HouseList)
    {
        const houseDevices = await api.getHouseDevices(houseListHouse.HouseID);

        // Get details for all devices
        const deviceFetchTasks: Promise<Device>[] = [];
        context.log(`Getting properties for ${houseDevices.DeviceList.length} devices`);
        for (const device of houseDevices.DeviceList)
        {
            deviceFetchTasks.push(api.getDevice(device.DeviceID));
        }

        const deviceAndSceneRoomMap = new Map<number, [Room]>();
        if (IncludeRoomNameInDeviceName) {
            const houseRooms = await api.getHouseRooms(houseListHouse.HouseID);
            const roomFetchTasks: Promise<Room>[] = [];
            for(const room of houseRooms.RoomList) {
                roomFetchTasks.push(api.getRoom(room.RoomID));
            }

            const rooms = await Promise.all(roomFetchTasks);
            
            for(const room of rooms) {
                for (const device of room.DeviceList) {
                    if (deviceAndSceneRoomMap.has(device.DeviceID)) {
                        deviceAndSceneRoomMap.get(device.DeviceID).push(room);
                    }

                    deviceAndSceneRoomMap.set(device.DeviceID, [room]);
                }

                for (const scene of room.SceneList) {
                    if (deviceAndSceneRoomMap.has(scene.SceneID)) {
                        deviceAndSceneRoomMap.get(scene.SceneID).push(room);
                    }

                    deviceAndSceneRoomMap.set(scene.SceneID, [room]);
                }
            }
        }

        const homebridgeDeviceConfigs: (HomebridgeDevice | HomebridgeScene)[] = [];
        const unsupportedDeviceConfigs: Device[] = [];
        const ignoredDeviceConfigs: Device[] = [];
        const devices = await Promise.all(deviceFetchTasks);
        for (const device of devices) {
            const deviceRoomMemberships = deviceAndSceneRoomMap.has(device.DeviceID) ? deviceAndSceneRoomMap.get(device.DeviceID) : undefined;
            const homebridgeConfig = getDeviceHomebridgeConfig(device, deviceRoomMemberships);
            if (!homebridgeConfig || homebridgeConfig.deviceType === 'unsupported') {
                unsupportedDeviceConfigs.push(device);
            } else if(IgnoredDeviceTypes.includes(homebridgeConfig.deviceType, 0)) {
                ignoredDeviceConfigs.push(device);
            } else {
                homebridgeDeviceConfigs.push(homebridgeConfig);
            }
        }

        context.log(`Successfully got homebridge configurations for ${homebridgeDeviceConfigs.length} out of ${houseDevices.DeviceList.length} devices. ${unsupportedDeviceConfigs.length} devices are unsuppored by homebridge. Ignored ${ignoredDeviceConfigs.length} devices`);

        const houseScenes = await api.getHouseScenes(houseListHouse.HouseID);
        const sceneFetchTasks: Promise<Scene>[] = [];
        for (const scene of houseScenes.SceneList) {
            sceneFetchTasks.push(api.getScene(scene.SceneID));
        }

        const scenes = await Promise.all(sceneFetchTasks);
        let processedScenes: Scene[] = [];
        for(const scene of scenes) {
            context.log(`Processing scene ${scene.SceneID}`);
            const sceneRoomMemberships = deviceAndSceneRoomMap.has(scene.SceneID) ? deviceAndSceneRoomMap.get(scene.SceneID) : undefined;
            homebridgeDeviceConfigs.push(getSceneHomebridgeConfig(scene, devices, context));
            processedScenes.push(addDeviceNamesToSceneDevices(scene, devices, context));
        }

        const house = await api.getHouse(houseListHouse.HouseID);
        configurations.push({
            homebridgeConfiguration: {
                platform: 'InsteonLocal',
                name: 'Insteon Local Platform',
                user: house.HubUsername,
                pass: house.HubPassword,
                host: house.IP,
                port: house.Port,
                model: house.HubType === 'HUB2' ? '2245' : '2242',
                refresh: '0',
                server_port: '3000',
                keepAlive: '3600',
                devices: homebridgeDeviceConfigs
            },
            unsupportedDevices: unsupportedDeviceConfigs,
            ignoredDevices: ignoredDeviceConfigs,
            scenes: processedScenes            
        });
    }

    context.res = {
        headers: {
            'Content-Type': 'application/json'
        },
        // status: 200, /* Defaults to 200 */
        body: JSON.stringify(configurations)
    };

};

function getDeviceHomebridgeConfig(device: Device, rooms?: Room[]): HomebridgeDevice {
    const homebridgeDeviceType = DeviceTypes.getDeviceInfo(device.DevCat, device.SubCat);
    const dimmable = (!homebridgeDeviceType || !homebridgeDeviceType.dimmable) ? Dimmable.No : homebridgeDeviceType.dimmable;
    return {
        name: rooms?.length > 0 ? `${rooms[0].RoomName} ${device.DeviceName}` : device.DeviceName,
        deviceID: device.InsteonID,
        deviceType: homebridgeDeviceType.homebridgeType,
        dimmable: dimmable
    };
}

function getSceneHomebridgeConfig(scene: Scene, allDevices: Device[], context: Context, rooms?: Room[]): HomebridgeScene {
    const sceneControllers = scene.DeviceList.filter(d => d.DeviceRoleMask === 1 || d.DeviceRoleMask === 3);
    context.log(`Found ${sceneControllers.length} scene controllers for ${scene.SceneID}: ${JSON.stringify(sceneControllers)}`);

    let sceneController: SceneDevice = null;
    let sceneControllerKeypad: Device = null;
    if (sceneControllers.length > 0) {
        const controllers: SceneDevice[] = [];
        const keypads: Device[] = [];
        for (const controller of sceneControllers) {
            const device = allDevices.filter(d => d.DeviceID === controller.DeviceID)[0];
            const deviceInfo = DeviceTypes.getDeviceInfo(device.DevCat, device.SubCat)
            context.log(JSON.stringify(deviceInfo));
            if (deviceInfo !== null && deviceInfo.canControlScenes) {
                controllers.push(controller);
                keypads.push(device);
            }
        }

        switch(keypads.length) {
            case 0:
                context.log.warn(`No keypad controllers found for ${scene.SceneID}`);
                break;

            case 1:
                sceneController = controllers[0];
                sceneControllerKeypad = keypads[0];

                break
            
            default:
                context.log.warn(`Multiple keypad controllers were found for ${scene.SceneID}: ${keypads.forEach(k => k.DeviceID)}`);
                break;
        }
    }

    let groupMembers = '';
    for(const member of scene.DeviceList) {
        const insteonId = allDevices.filter(d => d.DeviceID === member.DeviceID)[0].InsteonID;
        groupMembers += `${insteonId},`;
    }
    groupMembers = groupMembers.substring(0, groupMembers.length - 1);

    let config: HomebridgeScene = {
        name: rooms?.length > 0 ? `${rooms[0].RoomName} ${scene.SceneName}` : scene.SceneName,
        groupID: scene.Group.toString(),
        deviceType: 'scene'
    };
    if (sceneControllerKeypad) {
        const sceneButton = sceneControllerKeypad.GroupList.filter(g => g.SceneID === scene.SceneID || g.DeviceGroupDetailID === sceneController.DeviceGroupDetailID)[0];
        const sceneButtonName = sceneButton.GroupName === 'Main Button' ? 'ON' : sceneButton.GroupName.substring(sceneButton.GroupName.length - 1);
        config = {
            ...config,
            deviceID: sceneControllerKeypad.InsteonID,
            six_btn: sceneControllerKeypad.GroupList[0].GroupName === 'Main Button',
            keypadbtn: sceneButtonName,
            dimmable: Dimmable.No
        };
    }

    if (IncludeGroupMembers) {
        config = {
            ...config,
            groupMembers
        };
    }

    return config;
}

function addDeviceNamesToSceneDevices(scene: Scene, allDevices: Device[], context: Context) {
    const updatedDeviceList: SceneDevice[] = [];
    for(const device of scene.DeviceList) {
        const deviceDetails = allDevices.filter(d => d.DeviceID === device.DeviceID)[0];
        updatedDeviceList.push({
            ...device,
            DeviceName: deviceDetails.DeviceName
        });
    }

    const updatedScene = {
        ...scene,
        DeviceList: updatedDeviceList
    };

    context.log(JSON.stringify(updatedScene));
    return updatedScene;
}

export default httpTrigger;