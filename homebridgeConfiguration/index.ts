import { AzureFunction, Context, HttpRequest } from "@azure/functions"
import { Api, DeviceTypes } from '../insteonApi';

const httpTrigger: AzureFunction = async function (context: Context, req: HttpRequest): Promise<void> {
    const authToken = (req.headers['Authorization'] || req.headers['authorization']).split(' ')[1]; 
    
    if (!authToken) {
        context.res = {
            status: 401,
            body: "Invalid/missing authorization token"
        };
        return;
    }

    const api = new Api(authToken);
    const houses = await api.getHouses();
    const firstHouse = await api.getHouse(houses[0].HouseID);
    const houseDevices = await api.getHouseDevices(firstHouse.HouseID);

    // Get details for all devices
    const deviceFetchTasks = [];
    context.log(`Getting properties for ${houseDevices.DeviceList.length} devices`);
    for (const device of houseDevices.DeviceList)
    {
        deviceFetchTasks.push(api.getDevice(device.DeviceID));
    }

    const homebridgeDeviceConfigs = [];
    const unsupportedDeviceConfigs = [];
    const devices = await Promise.all(deviceFetchTasks);
    for (const device of devices) {
        const homebridgeConfig = getDeviceHomebridgeConfig(device);
        if (homebridgeConfig === null || homebridgeConfig.deviceType === 'unsupported') {
            unsupportedDeviceConfigs.push(device);
        } else {
            homebridgeDeviceConfigs.push(homebridgeConfig);
        }
    }

    context.log(`Successfully got homebridge configurations for ${homebridgeDeviceConfigs.length} out of ${houseDevices.DeviceList.length} devices`);
    context.log('***** Unsupported devices: *****');
    context.log(unsupportedDeviceConfigs);

    const houseScenes = await api.getHouseScenes(firstHouse.HouseID);
    const sceneFetchTasks = [];
    for (const scene of houseScenes.SceneList) {
        sceneFetchTasks.push(api.getScene(scene.SceneID));
    }

    const scenes = await Promise.all(sceneFetchTasks);
    for(const scene of scenes) {
        context.log(`Processing scene ${scene.SceneName}`);
        homebridgeDeviceConfigs.push(getSceneHomebridgeConfig(scene, devices, context));
    }

    const config = {
        platform: 'InsteonLocal',
        name: 'Insteon Local Platform',
        user: firstHouse.HubUsername,
        pass: firstHouse.HubPassword,
        host: firstHouse.IP,
        port: firstHouse.Port,
        model: firstHouse.HubType === 'HUB2' ? '2245' : '2242',
        refresh: '0',
        server_port: '3000',
        keepAlive: '3600',
        devices: homebridgeDeviceConfigs
    };

    context.res = {
        headers: {
            'Content-Type': 'application/json'
        },
        // status: 200, /* Defaults to 200 */
        body: JSON.stringify(config)
    };

};

function getDeviceHomebridgeConfig(deviceProperties) {
    const homebridgeDeviceType = DeviceTypes.getDeviceInfo(deviceProperties.DevCat, deviceProperties.SubCat);
    const dimmable = (homebridgeDeviceType === null || homebridgeDeviceType.dimmable === undefined) ? 'no' : homebridgeDeviceType.dimmable;
    return {
        name: deviceProperties.DeviceName,
        deviceId: deviceProperties.InsteonID,
        deviceType: homebridgeDeviceType.homebridgeType,
        dimmable: dimmable
    };
}

function getSceneHomebridgeConfig(scene, allDevices, context) {
    const sceneControllers = scene.DeviceList.filter(d => d.DeviceRoleMask === 1 || d.DeviceRoleMask === 3);
    context.log(`Found ${sceneControllers.length} scene controllers for ${scene.SceneName}`);

    let sceneController = null;
    let sceneControllerKeypad = null;
    if (sceneControllers.length > 0) {
        const controllers = []
        const keypads = []
        for (const controller of sceneControllers) {
            const device = allDevices.filter(d => d.DeviceID === controller.DeviceID)[0];
            const deviceInfo = DeviceTypes.getDeviceInfo(device.DevCat, device.SubCat)
            if (deviceInfo !== null && deviceInfo.homebridgeType === 'keypad') {
                controllers.push(controller);
                keypads.push(device);
            }
        }

        switch(keypads.length) {
            case 0:
                context.warn(`No keypad controllers found for ${scene.SceneName}`);
                break;

            case 1:
                sceneController = controllers[0];
                sceneControllerKeypad = keypads[0];

                break
            
            default:
                context.warn(`Multiple keypad controllers were found for ${scene.SceneName}: ${keypads.forEach(k => k.DeviceName)}`);
                break;
        }
    }

    let groupMembers = '';
    for(const member of scene.DeviceList) {
        const insteonId = allDevices.filter(d => d.DeviceID === member.DeviceID)[0].InsteonID;
        groupMembers += `${insteonId},`;
    }
    groupMembers = groupMembers.substring(0, groupMembers.length - 1);

    if (sceneControllerKeypad === null) {
        return {
            name: scene.SceneName,
            groupId: scene.Group,
            groupMembers: groupMembers
        };
    }

    const sceneButton = sceneControllerKeypad.GroupList.filter(g => g.SceneID === scene.SceneID || g.DeviceGroupDetailID === sceneController.DeviceGroupDetailID)[0];
    const sceneButtonName = sceneButton.GroupName === 'Main Button' ? 'ON' : sceneButton.GroupName.substring(sceneButton.GroupName.length - 1);
    return {
        name: scene.SceneName,
        groupId: scene.Group.toString(),
        groupMembers: groupMembers,
        deviceId: sceneControllerKeypad.InsteonID,
        six_btn: sceneControllerKeypad.GroupList[0].GroupName === 'Main Button',
        keypadbtn: sceneButtonName,
        dimmable: 'no',
        deviceType: 'scene'
    };
}

export default httpTrigger;