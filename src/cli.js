import minimist from 'minimist';
import chalk from 'chalk';
import dotenv from 'dotenv';

import { Api } from './api';
import { DeviceTypes } from './deviceTypes';

export async function cli(args) {
    const argsObj = minimist(args.slice(2));
    console.log(argsObj);
    if (argsObj._.length !== 2 || argsObj._[0] === 'help') {
        printUsage();
    } else {
        const username = argsObj._[0];
        const password = argsObj._[1];

        var output = dotenv.config();

        const api = new Api();
        await api.getAccessToken(username, password);

        const houses = await api.getHouses();
        const firstHouse = await api.getHouse(houses[0].HouseID);
        const houseDevices = await api.getHouseDevices(firstHouse.HouseID);

        // Get details for all devices
        const deviceFetchTasks = [];
        console.log(`Getting properties for ${houseDevices.DeviceList.length} devices`);
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

        console.log(`Successfully got homebridge configurations for ${homebridgeDeviceConfigs.length} out of ${houseDevices.DeviceList.length} devices`);
        console.log('***** Unsupported devices: *****');
        console.log(unsupportedDeviceConfigs);

        const houseScenes = await api.getHouseScenes(firstHouse.HouseID);
        const sceneFetchTasks = [];
        for (const scene of houseScenes.SceneList) {
            sceneFetchTasks.push(api.getScene(scene.SceneID));
        }

        const scenes = await Promise.all(sceneFetchTasks);
        for(const scene of scenes) {
            console.log(`Processing scene ${scene.SceneName}`);
            homebridgeDeviceConfigs.push(getSceneHomebridgeConfig(scene, devices));
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
        }

        console.log(JSON.stringify(config, null, 4));
    }
}

function printUsage() {
    const usage = chalk.greenBright('insteon-config-generator [username] [password]');
    console.log(usage);
}

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

function getSceneHomebridgeConfig(scene, allDevices) {
    const sceneControllers = scene.DeviceList.filter(d => d.DeviceRoleMask === 1 || d.DeviceRoleMask === 3);
    console.log(`Found ${sceneControllers.length} scene controllers for ${scene.SceneName}`);

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
                console.warn(`No keypad controllers found for ${scene.SceneName}`);
                break;

            case 1:
                sceneController = controllers[0];
                sceneControllerKeypad = keypads[0];

                break
            
            default:
                console.warn(`Multiple keypad controllers were found for ${scene.SceneName}: ${keypads.foreach(k => k.DeviceName)}`);
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

