const data = [
    {
        name: 'Machine Gun',
        code: ['down', 'left', 'down', 'up', 'right'],
    },
    {
        name: 'Anti-Materiel Rifle',
        code: ['down', 'left', 'right', 'up', 'down'],
    },
    {
        name: 'Stalwart',
        code: ['down', 'left', 'down', 'up', 'up', 'left'],
    },
    {
        name: 'Expendable Anti-Tank',
        code: ['down', 'down', 'left', 'up', 'right'],
    },
    {
        name: 'Recoilless Rifle',
        code: ['down', 'left', 'right', 'right', 'left'],

    },
    {
        name: 'Flamethrower',
        code: ['down', 'left', 'up', 'down', 'up'],

    },
    {
        name: 'Autocannon',
        code: ['down', 'left', 'down', 'up', 'up', 'right'],

    },
    {
        name: 'Railgun',
        code: ['down', 'right', 'down', 'up', 'left', 'right'],

    },
    {
        name: 'Spear',
        code: ['down', 'down', 'up', 'down', 'down'],

    }, {
        name: 'Orbital Gatling Barrage',
        code: ['right', 'down', 'left', 'up', 'up'],

    },
    {
        name: 'Orbital Airburst Strike',
        code: ['right', 'right', 'right'],

    },
    {
        name: 'Orbital 120MM HE Barrage',
        code: ['right', 'right', 'down', 'left', 'right', 'down'],

    },
    {
        name: 'Orbital 380MM HE Barrage',
        code: ['right', 'down', 'up', 'up', 'left', 'down', 'down'],

    },
    {
        name: 'Orbital Walking Barrage',
        code: ['right', 'down', 'right', 'down', 'right', 'down'],

    },
    {
        name: 'Orbital Laser',
        code: ['right', 'down', 'up', 'right', 'down'],

    },
    {
        name: 'Orbital Railcannon Strike',
        code: ['right', 'up', 'down', 'down', 'right'],

    }, {
        name: 'Eagle Strafing Run',
        code: ['up', 'right', 'right'],

    },
    {
        name: 'Eagle Airstrike',
        code: ['up', 'right', 'down', 'right'],

    },
    {
        name: 'Eagle Cluster Bomb',
        code: ['up', 'right', 'down', 'down', 'right'],

    },
    {
        name: 'Eagle Napalm Airstrike',
        code: ['up', 'right', 'down', 'up'],

    },
    {
        name: 'Jump Pack',
        code: ['down', 'up', 'up', 'down', 'up'],

    },
    {
        name: 'Eagle Smoke Strike',
        code: ['up', 'right', 'up', 'down'],

    },
    {
        name: 'Eagle 110MM Rocket Pods',
        code: ['up', 'right', 'up', 'left'],

    },
    {
        name: 'Eagle 500KG Bomb',
        code: ['up', 'right', 'down', 'down', 'down'],

    },
    {
        name: 'Eagle Rearm',
        code: ['up', 'up', 'left', 'up', 'right'],

    }, {
        name: 'Orbital Precision Strike',
        code: ['right', 'right', 'up'],

    },
    {
        name: 'Orbital Gas Strike',
        code: ['right', 'right', 'down', 'right'],

    },
    {
        name: 'Orbital EMS Strike',
        code: ['right', 'right', 'left', 'down'],

    },
    {
        name: 'Orbital Smoke Strike',
        code: ['right', 'right', 'down', 'up'],

    },
    {
        name: 'HMG Emplacement',
        code: ['down', 'up', 'left', 'right', 'right', 'left'],

    },
    {
        name: 'Shield Generator Relay',
        code: ['down', 'down', 'left', 'right', 'left', 'right'],

    },
    {
        name: 'Tesla Tower',
        code: ['down', 'up', 'right', 'up', 'left', 'right'],

    }, {
        name: 'Anti-Personnel Minefield',
        code: ['down', 'left', 'up', 'right'],

    },
    {
        name: 'Supply Pack',
        code: ['down', 'left', 'down', 'up', 'up', 'down'],

    },
    {
        name: 'Grenade Launcher',
        code: ['down', 'left', 'up', 'left', 'down'],

    },
    {
        name: 'Laser Cannon',
        code: ['down', 'left', 'down', 'up', 'left'],

    },
    {
        name: 'Incendiary Mines',
        code: ['down', 'left', 'left', 'down'],

    },
    {
        name: 'Guard Dog Rover',
        code: ['down', 'up', 'left', 'up', 'right', 'right'],

    },
    {
        name: 'Ballistic Shield Backpack',
        code: ['down', 'left', 'down', 'down', 'up', 'left'],

    },
    {
        name: 'Arc Thrower',
        code: ['down', 'right', 'down', 'up', 'left', 'left'],

    },
    {
        name: 'Shield Generator Pack',
        code: ['down', 'up', 'left', 'right', 'left', 'right'],

    }, {
        name: 'Machine Gun Sentry',
        code: ['down', 'up', 'right', 'right', 'up'],

    },
    {
        name: 'Gatling Sentry',
        code: ['down', 'up', 'right', 'left'],

    },
    {
        name: 'Mortar Sentry',
        code: ['down', 'up', 'right', 'right', 'down'],

    },
    {
        name: 'Guard Dog',
        code: ['down', 'up', 'left', 'up', 'right', 'down'],

    },
    {
        name: 'Autocannon Sentry',
        code: ['down', 'up', 'right', 'up', 'left', 'up'],

    },
    {
        name: 'Rocket Sentry',
        code: ['down', 'up', 'right', 'right', 'left'],

    },
    {
        name: 'EMS Mortar Sentry',
        code: ['down', 'up', 'right', 'down', 'right'],

    },
    {
        name: 'Resupply',
        code: ['down', 'down', 'up', 'right'],

    },
    {
        name: 'Reinforce',
        code: ['up', 'down', 'right', 'left', 'up'],

    },
    {
        name: 'SOS Beacon',
        code: ['up', 'down', 'right', 'up'],

    },
    {
        name: 'Hellbomb',
        code: ['down', 'up', 'left', 'down', 'up', 'right', 'down', 'up'],

    },
    {
        name: 'SEAF Artillery',
        code: ['right', 'up', 'up', 'down'],

    },
    {
        name: 'Seismic Probe',
        code: ['up', 'up', 'left', 'right', 'down', 'down'],

    },
    {
        name: 'Prospecting Drill',
        code: ['down', 'down', 'left', 'right', 'down', 'down'],

    },
    {
        name: 'Super Earth Flag',
        code: ['down', 'up', 'down', 'up'],

    },
    {
        name: 'Orbital Illumination Flare',
        code: ['right', 'right', 'left', 'left'],

    }
];

export default data;