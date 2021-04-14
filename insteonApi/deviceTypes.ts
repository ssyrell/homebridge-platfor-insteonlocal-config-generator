interface DeviceType {
    category: number,
    subcategory: Number,
    sku: string,
    name: string,
    homebridgeType: string,
    dimmable?: string
}

// The below values are based on deviceDatabase.json from 
// the homebridge-platform-insteonlocal github project.
// https://github.com/kuestess/homebridge-platform-insteonlocal/blob/master/deviceDatabase.json
const deviceTypes: DeviceType[][] = [
    // Category 0
    [
        null,
        null,
        null,
        null, // no devices for sub-categories 0-3
        {
            category: 0,
            subcategory: 4,
            sku: '2430',
            name: 'ControLinc',
            homebridgeType: 'remote'
        },
        {
            category: 0,
            subcategory: 5,
            sku: '2440',
            name: 'RemoteLinc',
            homebridgeType: 'remote'
        },
        {
            category: 0,
            subcategory: 6,
            sku: '2830',
            name: 'ICON Tabletop Controller',
            homebridgeType: 'remote'
        },
        null,
        null, // no devies for sub-categories 7-8
        {
            category: 0,
            subcategory: 9,
            sku: '2442',
            name: 'SignaLinc RF Signal Enhancer',
            homebridgeType: 'unsupported'
        },
        null,
        {
            category: 0,
            subcategory: 11,
            sku: '2443',
            name: 'Access Point (Wireless Phase Coupler)',
            homebridgeType: 'unsupported'
        },
        {
            category: 0,
            subcategory: 12,
            sku: '12005',
            name: 'IES Color Touchscreen',
            homebridgeType: 'unsupported'
        },
        null,
        {
            category: 0,
            subcategory: 14,
            sku: '2440EZ',
            name: 'RemoteLinc EZ',
            homebridgeType: 'remote'
        },
        null,
        {
            category: 0,
            subcategory: 16,
            sku: '2444A2xx4',
            name: 'RemoteLinc 2 Keypad, 4 Scene',
            homebridgeType: 'remote'
        },
        {
            category: 0,
            subcategory: 17,
            sku: '2444A3xx',
            name: 'RemoteLinc 2 Switch',
            homebridgeType: 'remote'
        },
        {
            category: 0,
            subcategory: 18,
            sku: '2444A2xx8',
            name: 'RemoteLinc 2 Keypad, 8 Scene',
            homebridgeType: 'remote'
        },
        {
            category: 0,
            subcategory: 19,
            sku: '2993-222',
            name: 'Insteon Diagnostics Keypad',
            homebridgeType: 'unsupported'
        },
        {
            category: 0,
            subcategory: 20,
            sku: '2342-432',
            name: 'Insteon Mini Remote - 4 Scene (869 MHz)',
            homebridgeType: 'remote'
        },
        {
            category: 0,
            subcategory: 21,
            sku: '2342-442',
            name: 'Insteon Mini Remote - Switch (869 MHz)',
            homebridgeType: 'remote'
        },
        {
            category: 0,
            subcategory: 22,
            sku: '2342-422',
            name: 'Insteon Mini Remote - 8 Scene (869 MHz)',
            homebridgeType: 'remote'
        },
        {
            category: 0,
            subcategory: 23,
            sku: '2342-532',
            name: 'Insteon Mini Remote - 4 Scene (921 MHz)',
            homebridgeType: 'remote'
        },
        {
            category: 0,
            subcategory: 24,
            sku: '2342-522',
            name: 'Insteon Mini Remote - 8 Scene (921 MHz)',
            homebridgeType: 'remote'
        },
        {
            category: 0,
            subcategory: 25,
            sku: '2342-542',
            name: 'Insteon Mini Remote - Switch (921 MHz)',
            homebridgeType: 'remote'
        },
        {
            category: 0,
            subcategory: 26,
            sku: '2342-222',
            name: 'Insteon Mini Remote - 8 Scene (915 MHz)',
            homebridgeType: 'remote'
        },
        {
            category: 0,
            subcategory: 27,
            sku: '2342-232',
            name: 'Insteon Mini Remote - 4 Scene (915 MHz)',
            homebridgeType: 'remote'
        },
        {
            category: 0,
            subcategory: 28,
            sku: '2342-242',
            name: 'Insteon Mini Remote - Switch (915 MHz)',
            homebridgeType: 'remote'
        },
        {
            category: 0,
            subcategory: 29,
            sku: '2992-222',
            name: 'Range Extender',
            homebridgeType: 'remote'
        }
    ],

    // Category 1
    [
        {
            category: 1,
            subcategory: 0,
            sku: '2456D3',
            name: 'LampLinc 3-Pin',
            homebridgeType: 'dimmer',
            dimmable: 'yes'
        },
        {
            category: 1,
            subcategory: 1,
            sku: '2476D',
            name: 'SwitchLinc Dimmer',
            homebridgeType: 'dimmer',
            dimmable: 'yes'
        },
        {
            category: 1,
            subcategory: 2,
            sku: '2475D',
            name: 'In-LineLinc Dimmer',
            homebridgeType: 'dimmer',
            dimmable: 'yes'
        },
        {
            category: 1,
            subcategory: 3,
            sku: '2876DB',
            name: 'ICON Dimmer Switch',
            homebridgeType: 'dimmer',
            dimmable: 'yes'
        },
        {
            category: 1,
            subcategory: 4,
            sku: '2476DH',
            name: 'SwitchLinc Dimmer (High Wattage)',
            homebridgeType: 'dimmer',
            dimmable: 'yes'
        },
        {
            category: 1,
            subcategory: 5,
            sku: '2484DWH8',
            name: 'Keypad Countdown Timer w/ Dimmer',
            homebridgeType: 'dimmer',
            dimmable: 'yes'
        },
        {
            category: 1,
            subcategory: 6,
            sku: '2456D2',
            name: 'LampLinc Dimmer (2-Pin)',
            homebridgeType: 'dimmer',
            dimmable: 'yes'
        },
        {
            category: 1,
            subcategory: 7,
            sku: '2856D2B',
            name: 'ICON LampLinc',
            homebridgeType: 'dimmer',
            dimmable: 'yes'
        },
        {
            category: 1,
            subcategory: 8,
            sku: '2476DT',
            name: 'SwitchLinc Dimmer Count-down Timer',
            homebridgeType: 'dimmer',
            dimmable: 'yes'
        },
        {
            category: 1,
            subcategory: 9,
            sku: '2486D',
            name: 'KeypadLinc Dimmer',
            homebridgeType: 'dimmer',
            dimmable: 'yes'
        },
        {
            category: 1,
            subcategory: 10,
            sku: '2886D',
            name: 'Icon In-Wall Controller',
            homebridgeType: 'dimmer',
            dimmable: 'yes'
        },
        {
            category: 1,
            subcategory: 11,
            sku: '2632-422',
            name: 'Insteon Dimmer Module, France (869 MHz)',
            homebridgeType: 'dimmer',
            dimmable: 'yes'
        },
        {
            category: 1,
            subcategory: 12,
            sku: '2486DWH8',
            name: 'KeypadLinc Dimmer',
            homebridgeType: 'keypad',
            dimmable: 'yes'
        },
        {
            category: 1,
            subcategory: 13,
            sku: '2454D',
            name: 'SocketLinc',
            homebridgeType: 'outlet'
        },
        {
            category: 1,
            subcategory: 14,
            sku: '2457D2',
            name: 'LampLinc (Dual-Band)',
            homebridgeType: 'dimmer',
            dimmable: 'yes'
        },
        {
            category: 1,
            subcategory: 15,
            sku: '2632-432',
            name: 'Insteon Dimmer Module, Germany (869 MHz)',
            homebridgeType: 'dimmer',
            dimmable: 'yes'
        },
        null,
        {
            category: 1,
            subcategory: 17,
            sku: '2632-442',
            name: 'Insteon Dimmer Module, UK (869 MHz)',
            homebridgeType: 'dimmer',
            dimmable: 'yes'
        },
        {
            category: 1,
            subcategory: 18,
            sku: '2632-522',
            name: 'Insteon Dimmer Module, Aus/NZ (921 MHz)',
            homebridgeType: 'dimmer',
            dimmable: 'yes'
        },
        {
            category: 1,
            subcategory: 19,
            sku: '2676D - B',
            name: 'ICON SwitchLinc Dimmer Lixar/Bell Canada',
            homebridgeType: 'dimmer',
            dimmable: 'yes'
        },
        null,
        null,
        null,
        {
            category: 1,
            subcategory: 23,
            sku: '2466D',
            name: 'ToggleLinc Dimmer',
            homebridgeType: 'dimmer',
            dimmable: 'yes'
        },
        {
            category: 1,
            subcategory: 24,
            sku: '2474D',
            name: 'Icon SwitchLinc Dimmer Inline Companion',
            homebridgeType: 'dimmer',
            dimmable: 'yes'
        },
        {
            category: 1,
            subcategory: 25,
            sku: '2476D',
            name: 'SwitchLinc Dimmer [with beeper]',
            homebridgeType: 'dimmer',
            dimmable: 'yes'
        },
        {
            category: 1,
            subcategory: 26,
            sku: '2475D',
            name: 'In-LineLinc Dimmer [with beeper]',
            homebridgeType: 'dimmer',
            dimmable: 'yes'
        },
        {
            category: 1,
            subcategory: 27,
            sku: '2486DWH6',
            name: 'KeypadLinc Dimmer',
            homebridgeType: 'keypad',
            dimmable: 'yes'
        },
        {
            category: 1,
            subcategory: 28,
            sku: '2486DWH8',
            name: 'KeypadLinc Dimmer',
            homebridgeType: 'keypad',
            dimmable: 'yes'
        },
        {
            category: 1,
            subcategory: 29,
            sku: '2476DH',
            name: 'SwitchLinc Dimmer (High Wattage)[beeper]',
            homebridgeType: 'dimmer',
            dimmable: 'yes'
        },
        {
            category: 1,
            subcategory: 30,
            sku: '2876DB',
            name: 'ICON Switch Dimmer',
            homebridgeType: 'dimmer',
            dimmable: 'yes'
        },
        {
            category: 1,
            subcategory: 31,
            sku: '2466Dx',
            name: 'ToggleLinc Dimmer [with beeper]',
            homebridgeType: 'dimmer',
            dimmable: 'yes'
        },
        {
            category: 1,
            subcategory: 32,
            sku: '2477D',
            name: 'SwitchLinc Dimmer (Dual-Band)',
            homebridgeType: 'dimmer',
            dimmable: 'yes'
        },
        {
            category: 1,
            subcategory: 33,
            sku: '2472D',
            name: 'OutletLinc Dimmer (Dual-Band)',
            homebridgeType: 'dimmer',
            dimmable: 'yes'
        },
        {
            category: 1,
            subcategory: 34,
            sku: '2457D2X',
            name: 'LampLinc',
            homebridgeType: 'dimmer',
            dimmable: 'yes'
        },
        {
            category: 1,
            subcategory: 35,
            sku: '2457D2EZ',
            name: 'LampLinc Dual-Band EZ',
            homebridgeType: 'dimmer',
            dimmable: 'yes'
        },
        {
            category: 1,
            subcategory: 36,
            sku: '2474DWH',
            name: 'SwitchLinc 2-Wire Dimmer (RF)',
            homebridgeType: 'dimmer',
            dimmable: 'yes'
        },
        {
            category: 1,
            subcategory: 37,
            sku: '2475DA2',
            name: 'In-LineLinc 0-10VDC Dimmer/Dual-SwitchDB',
            homebridgeType: 'dimmer',
            dimmable: 'yes'
        },
        null,
        null,
        null,
        null,
        null,
        null,
        null,
        {
            category: 1,
            subcategory: 45,
            sku: '2477DH',
            name: 'SwitchLinc-Dimmer Dual-Band 1000W',
            homebridgeType: 'dimmer',
            dimmable: 'yes'
        },
        {
            category: 1,
            subcategory: 46,
            sku: '2475F',
            name: 'FanLinc',
            homebridgeType: 'fan'
        },
        {
            category: 1,
            subcategory: 47,
            sku: '2484DST6',
            name: 'KeypadLinc Schedule Timer with Dimmer',
            homebridgeType: 'dimmer',
            dimmable: 'yes'
        },
        {
            category: 1,
            subcategory: 48,
            sku: '2476D',
            name: 'SwitchLinc Dimmer',
            homebridgeType: 'dimmer',
            dimmable: 'yes'
        },
        {
            category: 1,
            subcategory: 49,
            sku: '2478D',
            name: 'SwitchLinc Dimmer 240V-50/60Hz Dual-Band',
            homebridgeType: 'dimmer',
            dimmable: 'yes'
        },
        {
            category: 1,
            subcategory: 50,
            sku: '2475DA1',
            name: 'In-LineLinc Dimmer (Dual Band)',
            homebridgeType: 'dimmer',
            dimmable: 'yes'
        },
        null,
        {
            category: 1,
            subcategory: 52,
            sku: '2452-222',
            name: 'Insteon DIN Rail Dimmer (915 MHz)',
            homebridgeType: 'dimmer',
            dimmable: 'yes'
        },
        {
            category: 1,
            subcategory: 53,
            sku: '2442-222',
            name: 'Insteon Micro Dimmer (915 MHz)',
            homebridgeType: 'dimmer',
            dimmable: 'yes'
        },
        {
            category: 1,
            subcategory: 54,
            sku: '2452-422',
            name: 'Insteon DIN Rail Dimmer (869 MHz)',
            homebridgeType: 'dimmer',
            dimmable: 'yes'
        },
        {
            category: 1,
            subcategory: 55,
            sku: '2452-522',
            name: 'Insteon DIN Rail Dimmer (921 MHz)',
            homebridgeType: 'dimmer',
            dimmable: 'yes'
        },
        {
            category: 1,
            subcategory: 56,
            sku: '2442-422',
            name: 'Insteon Micro Dimmer (869 MHz)',
            homebridgeType: 'dimmer',
            dimmable: 'yes'
        },
        {
            category: 1,
            subcategory: 57,
            sku: '2442-522',
            name: 'Insteon Micro Dimmer (921 MHz)',
            homebridgeType: 'dimmer',
            dimmable: 'yes'
        },
        {
            category: 1,
            subcategory: 58,
            sku: '2672-222',
            name: 'LED Bulb 240V (915 MHz) - Screw-in Base',
            homebridgeType: 'lightbulb',
            dimmable: 'yes'
        },
        {
            category: 1,
            subcategory: 59,
            sku: '2672-422',
            name: 'LED Bulb 240V Europe - Screw-in Base',
            homebridgeType: 'lightbulb',
            dimmable: 'yes'
        },
        {
            category: 1,
            subcategory: 60,
            sku: '2672-522',
            name: 'LED Bulb 240V Aus/NZ - Screw-in Base',
            homebridgeType: 'lightbulb',
            dimmable: 'yes'
        },
        {
            category: 1,
            subcategory: 61,
            sku: '2446-422',
            name: 'Insteon Ballast Dimmer (869 MHz)',
            homebridgeType: 'dimmer',
            dimmable: 'yes'
        },
        {
            category: 1,
            subcategory: 62,
            sku: '2446-522',
            name: 'Insteon Ballast Dimmer (921 MHz)',
            homebridgeType: 'dimmer',
            dimmable: 'yes'
        },
        {
            category: 1,
            subcategory: 63,
            sku: '2447-422',
            name: 'Insteon Fixture Dimmer (869 MHz)',
            homebridgeType: 'dimmer',
            dimmable: 'yes'
        },
        {
            category: 1,
            subcategory: 64,
            sku: '2447-522',
            name: 'Insteon Fixture Dimmer (921 MHz)',
            homebridgeType: 'dimmer',
            dimmable: 'yes'
        },
        {
            category: 1,
            subcategory: 65,
            sku: '2334-222',
            name: 'Keypad Dimmer Dual-Band, 8 Button',
            homebridgeType: 'keypad',
            dimmable: 'yes'
        },
        {
            category: 1,
            subcategory: 66,
            sku: '2334-232',
            name: 'Keypad Dimmer Dual-Band, 6 Button',
            homebridgeType: 'keypad',
            dimmable: 'yes'
        },
        null,
        null,
        null,
        null,
        null,
        null,
        {
            category: 1,
            subcategory: 73,
            sku: '2674-222',
            name: 'LED Bulb PAR38 US/Can - Screw-in Base',
            homebridgeType: 'lightbulb',
            dimmable: 'yes'
        },
        {
            category: 1,
            subcategory: 74,
            sku: '2674-422',
            name: 'LED Bulb PAR38 Europe - Screw-in Base',
            homebridgeType: 'lightbulb',
            dimmable: 'yes'
        },
        {
            category: 1,
            subcategory: 75,
            sku: '2674-522',
            name: 'LED Bulb PAR38 Aus/NZ - Screw-in Base',
            homebridgeType: 'lightbulb',
            dimmable: 'yes'
        },
        {
            category: 1,
            subcategory: 76,
            sku: '2672-432',
            name: 'LED Bulb 240V Europe - Bayonet Base',
            homebridgeType: 'lightbulb',
            dimmable: 'yes'
        },
        {
            category: 1,
            subcategory: 77,
            sku: '2672-532',
            name: 'LED Bulb 240V Aus/NZ - Bayonet Base',
            homebridgeType: 'lightbulb',
            dimmable: 'yes'
        },
        {
            category: 1,
            subcategory: 78,
            sku: '2674-432',
            name: 'LED Bulb PAR38 Europe - Bayonet Base',
            homebridgeType: 'lightbulb',
            dimmable: 'yes'
        },
        {
            category: 1,
            subcategory: 79,
            sku: '2674-532',
            name: 'LED Bulb PAR38 Aus/NZ - Bayonet Base',
            homebridgeType: 'lightbulb',
            dimmable: 'yes'
        },
        {
            category: 1,
            subcategory: 80,
            sku: '2632-452',
            name: 'Insteon Dimmer Module, Chile (915 MHz)',
            homebridgeType: 'lightbulb',
            dimmable: 'yes'
        },
        {
            category: 1,
            subcategory: 81,
            sku: '2672-452',
            name: 'LED Bulb 240V (915 MHz) - Screw-in Base',
            homebridgeType: 'lightbulb',
            dimmable: 'yes'
        }
    ],

    // Category 2
    [
        null,
        null,
        null,
        null,
        null,
        {
            category: 2,
            subcategory: 5,
            sku: '2486SWH8',
            name: 'KeypadLinc 8-button On/Off Switch',
            homebridgeType: 'keypad',
            dimmable: 'no'
        },
        {
            category: 2,
            subcategory: 6,
            sku: '2456S3E',
            name: 'Outdoor ApplianceLinc',
            homebridgeType: 'switch'
        },
        {
            category: 2,
            subcategory: 7,
            sku: '2456S3T',
            name: 'TimerLinc',
            homebridgeType: 'switch'
        },
        {
            category: 2,
            subcategory: 8,
            sku: '2473S',
            name: 'OutletLinc',
            homebridgeType: 'switch'
        },
        {
            category: 2,
            subcategory: 9,
            sku: '2456S3',
            name: 'ApplianceLinc (3-Pin)',
            homebridgeType: 'switch'
        },
        {
            category: 2,
            subcategory: 10,
            sku: '2476S',
            name: 'SwitchLinc Relay',
            homebridgeType: 'switch'
        },
        {
            category: 2,
            subcategory: 11,
            sku: '2876S',
            name: 'ICON On/Off Switch',
            homebridgeType: 'switch'
        },
        {
            category: 2,
            subcategory: 12,
            sku: '2856S3',
            name: 'Icon Appliance Module',
            homebridgeType: 'switch'
        },
        {
            category: 2,
            subcategory: 13,
            sku: '2466S',
            name: 'ToggleLinc Relay',
            homebridgeType: 'switch'
        },
        {
            category: 2,
            subcategory: 14,
            sku: '2476ST',
            name: 'SwitchLinc Relay Countdown Timer',
            homebridgeType: 'switch'
        },
        {
            category: 2,
            subcategory: 15,
            sku: '2486SWH6',
            name: 'KeypadLinc On/Off',
            homebridgeType: 'switch'
        },
        {
            category: 2,
            subcategory: 16,
            sku: '2475S',
            name: 'In-LineLinc Relay',
            homebridgeType: 'switch'
        },
        null,
        {
            category: 2,
            subcategory: 18,
            sku: '2474 S / D',
            name: 'ICON In-lineLinc Relay Companion',
            homebridgeType: 'switch'
        },
        {
            category: 2,
            subcategory: 19,
            sku: '2676R - B',
            name: 'ICON SwitchLinc Relay Lixar/Bell Canada',
            homebridgeType: 'switch'
        },
        {
            category: 2,
            subcategory: 20,
            sku: '2475S2',
            name: 'In-LineLinc Relay with Sense',
            homebridgeType: 'switch'
        },
        {
            category: 2,
            subcategory: 21,
            sku: '2476SS',
            name: 'SwitchLinc Relay with Sense',
            homebridgeType: 'switch'
        },
        {
            category: 2,
            subcategory: 22,
            sku: '2876S',
            name: 'ICON On/Off Switch (25 max links)',
            homebridgeType: 'switch'
        },
        {
            category: 2,
            subcategory: 23,
            sku: '2856S3B',
            name: 'ICON Appliance Module',
            homebridgeType: 'switch'
        },
        {
            category: 2,
            subcategory: 24,
            sku: '2494S220',
            name: 'SwitchLinc 220V Relay',
            homebridgeType: 'switch'
        },
        {
            category: 2,
            subcategory: 25,
            sku: '2494S220',
            name: 'SwitchLinc 220V Relay [with beeper]',
            homebridgeType: 'switch'
        },
        {
            category: 2,
            subcategory: 26,
            sku: '2466Sx',
            name: 'ToggleLinc Relay [with Beeper]',
            homebridgeType: 'switch'
        },
        null,
        {
            category: 2,
            subcategory: 28,
            sku: '2476S',
            name: 'SwitchLinc Relay',
            homebridgeType: 'switch'
        },
        {
            category: 2,
            subcategory: 29,
            sku: '4101',
            name: 'Commercial Switch with relay',
            homebridgeType: 'switch'
        },
        {
            category: 2,
            subcategory: 30,
            sku: '2487S',
            name: 'KeypadLinc On/Off (Dual-Band)',
            homebridgeType: 'switch'
        },
        {
            category: 2,
            subcategory: 31,
            sku: '2475SDB',
            name: 'In-LineLinc On/Off (Dual-Band)',
            homebridgeType: 'switch'
        },
        null,
        null,
        null,
        null,
        null,
        {
            category: 2,
            subcategory: 37,
            sku: '2484SWH8',
            name: 'KeypadLinc 8-Button Countdown On/Off Switch Timer',
            homebridgeType: 'keypad',
            dimmable: 'no'
        },
        {
            category: 2,
            subcategory: 38,
            sku: '2485SWH6',
            name: 'Keypad Schedule Timer with On/Off Switch',
            homebridgeType: 'keypad',
            dimmable: 'no'
        },
        null,
        null,
        {
            category: 2,
            subcategory: 41,
            sku: '2476ST',
            name: 'SwitchLinc Relay Countdown Timer',
            homebridgeType: 'switch'
        },
        {
            category: 2,
            subcategory: 42,
            sku: '2477S',
            name: 'SwitchLinc Relay (Dual-Band)',
            homebridgeType: 'switch'
        },
        {
            category: 2,
            subcategory: 43,
            sku: '2475SDB - 50',
            name: 'In-LineLinc On/Off (Dual Band, 50/60 Hz)',
            homebridgeType: 'switch'
        },
        {
            category: 2,
            subcategory: 44,
            sku: '2487S',
            name: 'KeypadLinc On/Off (Dual-Band,50/60 Hz)',
            homebridgeType: 'keypad',
            dimmable: 'no'
        },
        {
            category: 2,
            subcategory: 45,
            sku: '2633-422',
            name: 'Insteon On/Off Module, France (869 MHz)',
            homebridgeType: 'switch'
        },
        {
            category: 2,
            subcategory: 46,
            sku: '2453-222',
            name: 'Insteon DIN Rail On/Off (915 MHz)',
            homebridgeType: 'switch'
        },
        {
            category: 2,
            subcategory: 47,
            sku: '2443-222',
            name: 'Insteon Micro On/Off (915 MHz)',
            homebridgeType: 'switch'
        },
        {
            category: 2,
            subcategory: 48,
            sku: '2633-432',
            name: 'Insteon On/Off Module, Germany (869 MHz)',
            homebridgeType: 'switch'
        },
        {
            category: 2,
            subcategory: 49,
            sku: '2443-422',
            name: 'Insteon Micro On/Off (869 MHz)',
            homebridgeType: 'switch'
        },
        {
            category: 2,
            subcategory: 50,
            sku: '2443-522',
            name: 'Insteon Micro On/Off (921 MHz)',
            homebridgeType: 'switch'
        },
        {
            category: 2,
            subcategory: 51,
            sku: '2453-422',
            name: 'Insteon DIN Rail On/Off (869 MHz)',
            homebridgeType: 'switch'
        },
        {
            category: 2,
            subcategory: 52,
            sku: '2453-522',
            name: 'Insteon DIN Rail On/Off (921 MHz)',
            homebridgeType: 'switch'
        },
        {
            category: 2,
            subcategory: 53,
            sku: '2633-442',
            name: 'Insteon On/Off Module, UK (869 MHz)',
            homebridgeType: 'switch'
        },
        {
            category: 2,
            subcategory: 54,
            sku: '2633-522',
            name: 'Insteon On/Off Module, Aus/NZ (921 MHz)',
            homebridgeType: 'switch'
        },
        {
            category: 2,
            subcategory: 55,
            sku: '2635-222',
            name: 'Insteon On/Off Module, US (915 MHz)',
            homebridgeType: 'switch'
        },
        {
            category: 2,
            subcategory: 56,
            sku: '2634-222',
            name: 'On/Off Outdoor Module (Dual-Band)',
            homebridgeType: 'switch'
        },
        {
            category: 2,
            subcategory: 57,
            sku: '2663-222',
            name: 'On/Off Outlet',
            homebridgeType: 'outlet'
        },
        {
            category: 2,
            subcategory: 58,
            sku: '2633-452',
            name: 'Insteon On/Off Module, Chile (915 MHz)',
            homebridgeType: 'switch'
        },
    ],

    // Category 3
    [
        null,
        {
            category: 3,
            subcategory: 1,
            sku: '2414S',
            name: 'PowerLinc Serial Controller',
            homebridgeType: 'unsupported'
        },
        {
            category: 3,
            subcategory: 2,
            sku: '2414U',
            name: 'PowerLinc USB Controller',
            homebridgeType: 'unsupported'
        },
        {
            category: 3,
            subcategory: 3,
            sku: '2814S',
            name: 'ICON PowerLinc Serial',
            homebridgeType: 'unsupported'
        },
        {
            category: 3,
            subcategory: 4,
            sku: '2814U',
            name: 'ICON PowerLinc USB',
            homebridgeType: 'unsupported'
        },
        {
            category: 3,
            subcategory: 5,
            sku: '2412S',
            name: 'PowerLinc Serial Modem',
            homebridgeType: 'unsupported'
        },
        {
            category: 3,
            subcategory: 6,
            sku: '2411R',
            name: 'IRLinc Receiver',
            homebridgeType: 'unsupported'
        },
        {
            category: 3,
            subcategory: 7,
            sku: '2411T',
            name: 'IRLinc Transmitter',
            homebridgeType: 'unsupported'
        },
        null,
        {
            category: 3,
            subcategory: 9,
            sku: '2600RF',
            name: 'SmartLabs RF Developer’s Board',
            homebridgeType: 'unsupported'
        },
        {
            category: 3,
            subcategory: 10,
            sku: '2410S',
            name: 'SeriaLinc - Insteon to RS232',
            homebridgeType: 'unsupported'
        },
        {
            category: 3,
            subcategory: 11,
            sku: '2412U',
            name: 'PowerLinc USB Modem',
            homebridgeType: 'unsupported'
        },
        null,
        null,
        null,
        {
            category: 3,
            subcategory: 15,
            sku: 'EZX10IR',
            name: 'EZX10IR X10 IR Receiver',
            homebridgeType: 'unsupported'
        },
        {
            category: 3,
            subcategory: 16,
            sku: '2412N',
            name: 'SmartLinc',
            homebridgeType: 'unsupported'
        },
        {
            category: 3,
            subcategory: 17,
            sku: '2413S',
            name: 'PowerLinc Serial Modem (Dual Band)',
            homebridgeType: 'unsupported'
        },
        null,
        {
            category: 3,
            subcategory: 19,
            sku: '2412UH',
            name: 'PowerLinc USB Modem for HouseLinc',
            homebridgeType: 'unsupported'
        },
        {
            category: 3,
            subcategory: 20,
            sku: '2412SH',
            name: 'PowerLinc Serial Modem for HouseLinc',
            homebridgeType: 'unsupported'
        },
        {
            category: 3,
            subcategory: 21,
            sku: '2413U',
            name: 'PowerLinc USB Modem (Dual Band)',
            homebridgeType: 'unsupported'
        },
        null,
        null,
        {
            category: 3,
            subcategory: 24,
            sku: '2243-222',
            name: 'Insteon Central Controller (915 MHz)',
            homebridgeType: 'unsupported'
        },
        {
            category: 3,
            subcategory: 25,
            sku: '2413SH',
            name: 'PowerLinc Serial Modem for HL(Dual Band)',
            homebridgeType: 'unsupported'
        },
        {
            category: 3,
            subcategory: 26,
            sku: '2413UH',
            name: 'PowerLinc USB Modem for HL (Dual Band)',
            homebridgeType: 'unsupported'
        },
        {
            category: 3,
            subcategory: 27,
            sku: '2423A4',
            name: 'iGateway',
            homebridgeType: 'unsupported'
        },
        {
            category: 3,
            subcategory: 28,
            sku: '2423A7',
            name: 'iGateway 2.0',
            homebridgeType: 'unsupported'
        },
        null,
        {
            category: 3,
            subcategory: 30,
            sku: '2412S',
            name: 'PowerLincModemSerial w/o EEPROM(w/o RF)',
            homebridgeType: 'unsupported'
        },
        {
            category: 3,
            subcategory: 31,
            sku: '2448A7',
            name: 'USB Adapter - Domestically made',
            homebridgeType: 'unsupported'
        },
        {
            category: 3,
            subcategory: 32,
            sku: '2448A7',
            name: 'USB Adapter',
            homebridgeType: 'unsupported'
        },
        {
            category: 3,
            subcategory: 33,
            sku: '2448A7H',
            name: 'Portable USB Adapter for HouseLinc',
            homebridgeType: 'unsupported'
        },
        null,
        {
            category: 3,
            subcategory: 35,
            sku: '2448A7H',
            name: 'Portable USB Adapter for HouseLinc',
            homebridgeType: 'unsupported'
        },
        {
            category: 3,
            subcategory: 36,
            sku: '2448A7T',
            name: 'TouchLinc',
            homebridgeType: 'unsupported'
        },
        null,
        null,
        {
            category: 3,
            subcategory: 39,
            sku: '2448A7T',
            name: 'TouchLinc',
            homebridgeType: 'unsupported'
        },
        {
            category: 3,
            subcategory: 40,
            sku: '2413Gxx',
            name: 'Global PLM, Dual Band (915 MHz)',
            homebridgeType: 'unsupported'
        },
        {
            category: 3,
            subcategory: 41,
            sku: '2413SAD',
            name: 'PowerLinc Serial Modem (Dual Band) RF OFF, Auto Detect 128K',
            homebridgeType: 'unsupported'
        },
        null,
        {
            category: 3,
            subcategory: 43,
            sku: '2242-222',
            name: 'Insteon Hub (915 MHz) - no RF',
            homebridgeType: 'unsupported'
        },
        null,
        null,
        {
            category: 3,
            subcategory: 46,
            sku: '2242-422',
            name: 'Insteon Hub (EU - 869 MHz)',
            homebridgeType: 'unsupported'
        },
        {
            category: 3,
            subcategory: 47,
            sku: '2242-522',
            name: 'Insteon Hub (921 MHz)',
            homebridgeType: 'unsupported'
        },
        {
            category: 3,
            subcategory: 48,
            sku: '2242-442',
            name: 'Insteon Hub (UK - 869 MHz)',
            homebridgeType: 'unsupported'
        },
        {
            category: 3,
            subcategory: 49,
            sku: '2242-232',
            name: 'Insteon Hub (Plug-In Version)',
            homebridgeType: 'unsupported'
        },
        null,
        {
            category: 3,
            subcategory: 51,
            sku: '2245-222',
            name: 'Insteon Hub II (915 MHz)',
            homebridgeType: 'unsupported'
        },
        null,
        null,
        null,
        {
            category: 3,
            subcategory: 55,
            sku: '2242-222',
            name: 'Insteon Hub (915 MHz) - RF',
            homebridgeType: 'unsupported'
        },
    ],

    // Category 4
    [
        {
            category: 4,
            subcategory: 0,
            sku: '31270',
            name: 'Compacta EZRain Sprinkler Controller',
            homebridgeType: 'unsupported'
        },
    ],

    // Category 5
    [
        {
            category: 5,
            subcategory: 0,
            sku: '2670IAQ - 80',
            name: 'Broan SMSC080 Exhaust Fan (no beeper)',
            homebridgeType: 'switch'
        },
        null,
        {
            category: 5,
            subcategory: 2,
            sku: '2670IAQ - 110',
            name: 'Broan SMSC110 Exhaust Fan (no beeper)',
            homebridgeType: 'switch'
        },
        {
            category: 5,
            subcategory: 3,
            sku: '2441V',
            name: 'Thermostat Adapter',
            homebridgeType: 'unsupported'
        },
        null,
        null,
        null,
        {
            category: 5,
            subcategory: 7,
            sku: '2441ZT',
            name: 'Insteon Wireless Thermostat',
            homebridgeType: 'unsupported'
        },
        null,
        null,
        {
            category: 5,
            subcategory: 10,
            sku: '2441ZTH',
            name: 'Insteon Wireless Thermostat (915 MHz)',
            homebridgeType: 'unsupported'
        },
        {
            category: 5,
            subcategory: 11,
            sku: '2441TH',
            name: 'Insteon Thermostat (915 MHz)',
            homebridgeType: 'unsupported'
        },
        {
            category: 5,
            subcategory: 12,
            sku: '2670IAQ - 80',
            name: 'Broan SMSC080 Switch for 80CFM Fans',
            homebridgeType: 'switch'
        },
        {
            category: 5,
            subcategory: 13,
            sku: '2670IAQ - 110',
            name: 'Broan SMSC110 Switch for 110CFM Fans',
            homebridgeType: 'switch'
        },
        {
            category: 5,
            subcategory: 14,
            sku: '2491TxE',
            name: 'Integrated Remote Control Thermostat',
            homebridgeType: 'unsupported'
        },
        {
            category: 5,
            subcategory: 15,
            sku: '2732-422',
            name: 'Insteon Thermostat (869 MHz)',
            homebridgeType: 'unsupported'
        },
        {
            category: 5,
            subcategory: 16,
            sku: '2732-522',
            name: 'Insteon Thermostat (921 MHz)',
            homebridgeType: 'unsupported'
        },
        {
            category: 5,
            subcategory: 17,
            sku: '2732-432',
            name: 'Insteon Zone Thermostat (869 MHz)',
            homebridgeType: 'unsupported'
        },
        {
            category: 5,
            subcategory: 18,
            sku: '2732-532',
            name: 'Insteon Zone Thermostat (921 MHz)',
            homebridgeType: 'unsupported'
        },
        {
            category: 5,
            subcategory: 19,
            sku: '2732-242',
            name: 'Heat Pump Thermostat - US/Can (915MHz',
            homebridgeType: 'unsupported'
        },
        {
            category: 5,
            subcategory: 20,
            sku: '2732-242',
            name: 'Heat Pump Thermostat - Europe (869.85MHz',
            homebridgeType: 'unsupported'
        },
        {
            category: 5,
            subcategory: 21,
            sku: '2732-242',
            name: 'Heat Pump Thermostat - Aus/NZ (921MHz',
            homebridgeType: 'unsupported'
        },
    ],

    // Category 6 - there are currently no devices in this category
    [],

    // Category 7
    [
        {
            category: 7,
            subcategory: 0,
            sku: '2450',
            name: 'I/OLinc',
            homebridgeType: 'iolinc'
        },
        null,
        null,
        {
            category: 7,
            subcategory: 3,
            sku: '31274',
            name: 'Compacta EZIO2X4 #5010D',
            homebridgeType: 'iolinc'
        },
        null,
        {
            category: 7,
            subcategory: 5,
            sku: '31275',
            name: 'Compacta EZSnsRF RcvrIntrfc Dakota Alert',
            homebridgeType: 'iolinc'
        },
        null,
        {
            category: 7,
            subcategory: 7,
            sku: '31280',
            name: 'EZIO6I (6 inputs)',
            homebridgeType: 'iolinc'
        },
        {
            category: 7,
            subcategory: 8,
            sku: '31283',
            name: 'EZIO4O (4 relay outputs)',
            homebridgeType: 'iolinc'
        },
        {
            category: 7,
            subcategory: 9,
            sku: '2423A5',
            name: 'SynchroLinc',
            homebridgeType: 'iolinc'
        },
        null,
        null,
        {
            category: 7,
            subcategory: 12,
            sku: '2448A5',
            name: 'Lumistat',
            homebridgeType: 'unsupported' // ?
        },
        {
            category: 7,
            subcategory: 13,
            sku: '2450',
            name: 'I/OLinc 50/60Hz Auto Detect',
            homebridgeType: 'iolinc'
        },
        null,
        {
            category: 7,
            subcategory: 14,
            sku: '2248-222',
            name: 'I/O Module - US (915 MHz)',
            homebridgeType: 'iolinc'
        },
        {
            category: 7,
            subcategory: 15,
            sku: '2248-422',
            name: 'I/O Module - EU (869.85 MHz)',
            homebridgeType: 'iolinc'
        },
        {
            category: 7,
            subcategory: 16,
            sku: '2248-442',
            name: 'I/O Module - UK (869.85 MHz)',
            homebridgeType: 'iolinc'
        },
        {
            category: 7,
            subcategory: 17,
            sku: '2248-522',
            name: 'I/O Module - AUS (921 MHz)',
            homebridgeType: 'iolinc'
        },
        {
            category: 7,
            subcategory: 18,
            sku: '2822-222',
            name: 'IOLinc Dual-Band - US',
            homebridgeType: 'iolinc'
        },
        {
            category: 7,
            subcategory: 19,
            sku: '2822-422',
            name: 'IOLinc Dual-Band - EU',
            homebridgeType: 'iolinc'
        },
        {
            category: 7,
            subcategory: 20,
            sku: '2822-442',
            name: 'IOLinc Dual-Band - UK',
            homebridgeType: 'iolinc'
        },
        {
            category: 7,
            subcategory: 21,
            sku: '2822-522',
            name: 'IOLinc Dual-Band - AUS/NZ',
            homebridgeType: 'iolinc'
        },
        {
            category: 7,
            subcategory: 22,
            sku: '2822-222',
            name: 'Low Voltage/Contact Closure Interface (Dual Band) - US',
            homebridgeType: 'iolinc'
        },
        {
            category: 7,
            subcategory: 23,
            sku: '2822-422',
            name: 'Low Voltage/Contact Closure Interface (Dual Band) - EU',
            homebridgeType: 'iolinc'
        },
        {
            category: 7,
            subcategory: 24,
            sku: '2822-442',
            name: 'Low Voltage/Contact Closure Interface (Dual Band) - UK',
            homebridgeType: 'iolinc'
        },
        {
            category: 7,
            subcategory: 25,
            sku: '2822-522',
            name: 'Low Voltage/Contact Closure Interface (Dual Band) - AUS/NZ',
            homebridgeType: 'iolinc'
        },
    ],

    // Category 8 - there are currently no devices in this category
    [],

    // Category 9
    [
        null,
        null,
        null,
        null,
        null,
        null,
        null,
        null,
        {
            category: 9,
            subcategory: 7,
            sku: '2423A1',
            name: 'iMeter Solo',
            homebridgeType: 'unsupported'
        },
        {
            category: 9,
            subcategory: 8,
            sku: '2423A2',
            name: 'iMeter Home (Breaker Panel)',
            homebridgeType: 'unsupported'
        },
        {
            category: 9,
            subcategory: 9,
            sku: '2423A3',
            name: 'iMeter Home (Meter)',
            homebridgeType: 'unsupported'
        },
        {
            category: 9,
            subcategory: 10,
            sku: '2477SA1',
            name: '220/240V 30A Load Controller NO (DB)',
            homebridgeType: 'unsupported'
        },
        {
            category: 9,
            subcategory: 11,
            sku: '2477SA2',
            name: '220/240V 30A Load Controller NC (DB)',
            homebridgeType: 'unsupported'
        },
        {
            category: 9,
            subcategory: 12,
            sku: '2630A1',
            name: 'GE Water Heater U-SNAP module',
            homebridgeType: 'unsupported'
        },
        {
            category: 9,
            subcategory: 13,
            sku: '2448A2',
            name: 'Energy Display',
            homebridgeType: 'unsupported'
        },
        {
            category: 9,
            subcategory: 14,
            sku: '2423A6',
            name: 'Power Strip with iMeter and SynchroLinc',
            homebridgeType: 'unsupported'
        },
        null,
        null,
        {
            category: 9,
            subcategory: 17,
            sku: '2423A8',
            name: 'Insteon Digital Meter Reader',
            homebridgeType: 'unsupported'
        },
    ],

    // Category 10 - there are currently no devices in this category
    [],

    // Category 11 - there are currently no devices in this category
    [],

    // Category 12 - there are currently no devices in this category
    [],

    // Category 13 - there are currently no devices in this category
    [],

    // Category 14
    [
        {
            category: 14,
            subcategory: 0,
            sku: '318276I',
            name: 'Somfy Drape Controller RF Bridge',
            homebridgeType: 'shades'
        },
        {
            category: 14,
            subcategory: 1,
            sku: '2444-222',
            name: 'Insteon Micro Open/Close (915 MHz)',
            homebridgeType: 'shades'
        },
        {
            category: 14,
            subcategory: 2,
            sku: '2444-422',
            name: 'Insteon Micro Open/Close (869 MHz)',
            homebridgeType: 'shades'
        },
        {
            category: 14,
            subcategory: 3,
            sku: '2444-522',
            name: 'Insteon Micro Open/Close (921 MHz)',
            homebridgeType: 'shades'
        },
        {
            category: 14,
            subcategory: 4,
            sku: '2772-222',
            name: 'Window Shade Kit - US',
            homebridgeType: 'shades'
        },
        {
            category: 14,
            subcategory: 5,
            sku: '2772-422',
            name: 'Window Shade Kit - EU',
            homebridgeType: 'shades'
        },
        {
            category: 14,
            subcategory: 6,
            sku: '2772-522',
            name: 'Window Shade Kit - AUS/NZ',
            homebridgeType: 'shades'
        },
    ],

    // Category 15
    [
        null,
        null,
        null,
        null,
        null,
        null,
        {
            category: 15,
            subcategory: 6,
            sku: '2458A1',
            name: 'MorningLinc',
            homebridgeType: 'unsupported' // ? 
        },
    ],

    // Category 16
    [
        null,
        {
            category: 16,
            subcategory: 1,
            sku: '2842-222',
            name: 'Motion Sensor - US (915 MHz)',
            homebridgeType: 'motionsensor'
        },
        {
            category: 16,
            subcategory: 2,
            sku: '2843-222',
            name: 'Insteon Open/Close Sensor (915 MHz)',
            homebridgeType: 'doorsensor'
        },
        null,
        {
            category: 16,
            subcategory: 4,
            sku: '2842-422',
            name: 'Insteon Motion Sensor (869 MHz)',
            homebridgeType: 'motionsensor'
        },
        {
            category: 16,
            subcategory: 5,
            sku: '2842-522',
            name: 'Insteon Motion Sensor (921 MHz)',
            homebridgeType: 'motionsensor'
        },
        {
            category: 16,
            subcategory: 6,
            sku: '2843-422',
            name: 'Insteon Open/Close Sensor (869 MHz)',
            homebridgeType: 'doorsensor'
        },
        {
            category: 16,
            subcategory: 7,
            sku: '2843-522',
            name: 'Insteon Open/Close Sensor (921 MHz)',
            homebridgeType: 'doorsensor'
        },
        {
            category: 16,
            subcategory: 8,
            sku: '2852-222',
            name: 'Leak Sensor - US (915 MHz)',
            homebridgeType: 'leaksensor'
        },
        {
            category: 16,
            subcategory: 9,
            sku: '2843-232',
            name: 'Insteon Door Senso',
            homebridgeType: 'doorsensor'
        },
        {
            category: 16,
            subcategory: 10,
            sku: '2982-222',
            name: 'Smoke Bridge',
            homebridgeType: 'smoke'
        },
        null,
        null,
        {
            category: 16,
            subcategory: 13,
            sku: '2852-422',
            name: 'Leak Sensor - EU (869 MHz)',
            homebridgeType: 'leaksensor'
        },
        {
            category: 16,
            subcategory: 14,
            sku: '2852-522',
            name: 'Leak Sensor - AUS/NZ (921 MHz)',
            homebridgeType: 'leaksensor'
        },
        null,
        {
            category: 16,
            subcategory: 17,
            sku: '2845-222',
            name: 'Door Sensor II (915 MHz)',
            homebridgeType: 'doorsensor'
        },
        null,
        null,
        {
            category: 16,
            subcategory: 20,
            sku: '2845-422',
            name: 'Door Sensor II (869 MHz)',
            homebridgeType: 'doorsensor'
        },
        {
            category: 16,
            subcategory: 21,
            sku: '2845-522',
            name: 'Door Sensor II (921 MHz',
            homebridgeType: 'doorsensor'
        },
        {
            category: 16,
            subcategory: 22,
            sku: '2844-222',
            name: 'Motion Sensor  - US (915 MHz)',
            homebridgeType: 'motionsensor'
        }
    ],
];

export class DeviceTypes {
    static getDeviceInfo(category: number, subcategory: number): DeviceType {
        if (category > deviceTypes.length - 1 || subcategory > deviceTypes[category].length - 1) {
            return null;
        }

        return deviceTypes[category][subcategory];
    }
}