import { Device, Dimmable, Scene } from "../insteonApi"

export interface Configuration {
    homebridgeConfiguration: HomebridgeConfiguration,
    unsupportedDevices: Device[],
    ignoredDevices: Device[],
    scenes: Scene[];
}

export interface HomebridgeConfiguration {
    platform: string;
    name: string;
    user: string;
    pass: string;
    host: string;
    port: string;
    model: string;
    refresh: string;
    server_port: string;
    keepAlive: string;
    devices: (HomebridgeDevice | HomebridgeScene)[];
}

export interface HomebridgeDevice {
    name: string;
    deviceID: string;
    deviceType: string;
    dimmable: Dimmable;
}

export interface HomebridgeScene {
    name: string;
    groupID: string;
    deviceType: string;
    deviceID?: string;
    six_btn?: boolean;
    keypadbtn?: string;
    dimmable?: Dimmable;
    groupMembers?: string;
}