export interface AccessToken {
    access_token: string;
    refresh_token: string;
    token_type: string;
    expires_in: number;
};

export interface HouseList {
    HouseList: [HouseListHouse];
}

export interface HouseListHouse {
    HouseID: number;
    HouseName: string;
    IconID: number;
}
export interface House {
    HouseID: number;
    HouseName: string;
    IconID: number;
    InsteonHubID: string;
    BinVer: string;
    PLMVer: string;
    FirmwareVer: string;
    IP: string;
    Port: string;
    Gateway: string;
    Mask: string;
    Mac: string;
    City: string;
    DHCP: string;
    DaylightSavings: string;
    HubUsername: string;
    HubPassword: string;
    HubType: string;
    HubReachable: boolean;
}

export interface RoomListRoom {
    RoomId: number,
    HouseId: number,
    RoomName: string,
    IconId: number
};

export interface RoomList {
    RoomList: [RoomListRoom]
}

export interface DeviceList {
    DeviceList: [DeviceListDevice];
}

export interface DeviceListDevice {
    HouseID: number;
    DeviceID: number;
    DeviceName: string;
    IconID: number; 
}

export interface SceneList {
    SceneList: [SceneListScene];
}

export interface SceneListScene {
    SceneID: number;
    HouseID: number;
    SceneName: string;
    IconID: number;
}

export interface Device {
    HouseID: number;
    DeviceID: number;
    DeviceName: string;
    InsteonID: string;
    DeviceType: number;
    DevCat: number;
    SubCat: number;
    IconID: number;
    AutoStatus: boolean;
    CustomOn: string;
    CustomOff: string;
    EnableCustomOn: boolean;
    EnableCustomOff: boolean;
    DimLevel: number;
    RampRate: number;
    OperationFlags: number;
    LEDLevel: number;
    AlertsEnabled: boolean;
    AlertOn: number;
    AlertOff: number;
    Favorite: boolean;
    Humidity: boolean;
    DayMask: number;
    OnTime: string;
    OffTime: string;
    TimerEnabled: boolean;
    Group: number;
    FirmwareVersion: number;
    LinkWithHub: number;
    BeepOnPress: boolean;
    LocalProgramLock: boolean;
    BlinkOnTraffic: boolean;
    ConfiguredGroups: number;
    InsteonEngine: number;
    SerialNumber: string;
    DeviceTypeTraits: {
        SecurityDevice: boolean;
        TypeDescription: string;
    };
    HasConnectedLight: boolean;
    BxmlSecondStatusGroup: boolean;
    GroupList: []
}

export interface Scene {
    SceneID: number;
    HouseID: number;
    SceneName: string;
    StatusDevice: string;
    OnTime: string;
    OffTime: string;
    CustomOn: string;
    CustomOff: string;
    Group: number;
    IconID: number;
    SecurityDevice: boolean;
    Visible: boolean;
    Favorite: boolean;
    AutoStatus: boolean;
    DayMask: number;
    TimerEnabled: boolean;
    EnableCustomOn: boolean;
    EnableCustomOff: boolean;
    DeviceList: [SceneDevice]
}

export interface SceneDevice {
    DeviceID: number;
    OnLevel: number;
    DeviceRoleMask: number;
    RampRate: number;
    DeviceGroupDetailID: number;
}

export interface Room {
    RoomID: number;
    HouseID: number;
    RoomName: string;
    IconID: number;
    Favorite: boolean;
    Visible: boolean;
    DefaultCamera: number;
    DeviceList: [RoomDevice];
    SceneList: [RoomScene];
    CameraList: [RoomCamera]
}

export interface RoomDevice {
    DeviceID: number;
}

export interface RoomScene {
    SceneID: number;
}

// Just guessing for this once since I don't have any cameras...
export interface RoomCamera {
    CameraID: number;
}