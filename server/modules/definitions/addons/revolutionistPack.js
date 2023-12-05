// An addon is guaranteed to run only after all groups are loaded.
// This is helpful, if your group relies on all other definitions already being loaded.
// Addons that are dependant on other addons should be named something like
// "[PARENT ADDON NAME]-[EXTENSION NAME].js", to make sure that it would run after that addon ran.

const { combineStats, makeDeco, makeAuto, makeCeption } = require('../facilitators');
const g = require('../gunvals');

module.exports = ({ Class }) => {
  
  	// This addon is enabled by default.
	// If you want to disable, uncomment the line below.
  //return console.log('[revolutionistPack.js] Addon disabled by default');
  
  Class.revoautoTurret = {
    PARENT: "genericTank",
    LABEL: "Turret",
    BODY: {
        FOV: 0.8,
    },
    COLOR: "grey",
    GUNS: [
        {
            POSITION: [22, 10, 1, 0, 0, 0, 0],
            PROPERTIES: {
                SHOOT_SETTINGS: combineStats([g.basic, g.gunner, g.turret, g.auto]),
                TYPE: "bullet",
            },
        },
    ],
}
    Class.solarioTurret1 = {
    PARENT: "genericTank",
    LABEL: "Turret",
    COLOR: 3,
    BODY: {
        FOV: 0.8,
    },
    COLOR: "grey",
    GUNS: [
        {
            POSITION: [22, 10, 1, 0, 0, 0, 0],
            PROPERTIES: {
                SHOOT_SETTINGS: combineStats([g.basic, g.gunner, g.turret, g.auto]),
                TYPE: "bullet",
            },
        },
    ],
}
      Class.solarioTurret2 = {
    PARENT: "genericTank",
    LABEL: "Turret",
    COLOR: 3,
    BODY: {
        FOV: 0.8,
    },
    COLOR: "grey",
    GUNS: [
        {
            POSITION: [22, 10, 1, 0, 0, 0, 0],
            PROPERTIES: {
                SHOOT_SETTINGS: combineStats([g.basic, g.gunner, g.turret, g.auto]),
                TYPE: "bullet",
            },
        },
    ],
}
      Class.solarioTurret3 = {
    PARENT: "genericTank",
    LABEL: "Turret",
    COLOR: 3,
    BODY: {
        FOV: 0.8,
    },
    COLOR: "grey",
    GUNS: [
        {
            POSITION: [22, 10, 1, 0, 0, 0, 0],
            PROPERTIES: {
                SHOOT_SETTINGS: combineStats([g.basic, g.gunner, g.turret, g.auto]),
                TYPE: "bullet",
            },
        },
    ],
}
      Class.solarioTurret4 = {
    PARENT: "genericTank",
    LABEL: "Turret",
    COLOR: 3,
    BODY: {
        FOV: 0.8,
    },
    COLOR: "grey",
    GUNS: [
        {
            POSITION: [22, 10, 1, 0, 0, 0, 0],
            PROPERTIES: {
                SHOOT_SETTINGS: combineStats([g.basic, g.gunner, g.turret, g.auto]),
                TYPE: "bullet",
            },
        },
    ],
}
  Class.turretBase = {
    LABEL: "Base",
    SHAPE: 'M 0 -1.1 A 1 1 0 0 0 0 1.1 A 1 1 0 0 0 0 -1.1 Z M 0 -1 A 0.001 0.001 0 0 1 0 1 A 0.001 0.001 0 0 1 0 -1',
    COLOR: 9,
    CONTROLLERS: [["spin", { independent: true }]],
    INDEPENDENT: true,
    TURRETS: [{
        POSITION: [4.65, 9.85, 0, 90, 220, 1],
        TYPE: "revoautoTurret",
    }, {
        POSITION: [4.65, 9.85, 0, 270, 220, 1],
        TYPE: "revoautoTurret",
    }]
};
Class.revolution = {
    PARENT: "genericTank",
    LABEL: "Revolutionist",
    DANGER: 6,
    GUNS: [{
        POSITION: [20, 8, 1, 0, 0, 0, 0],
        PROPERTIES: {
            SHOOT_SETTINGS: combineStats([g.basic, g.flank]),
            TYPE: "bullet",
        },
    },
          ],
    TURRETS: [{
        POSITION: [34, 0, 0, 0, 360, 0],
        TYPE: "turretBase",
    },
  ],
};
Class.solario = {
    PARENT: "genericTank",
    LABEL: "Solario",
    COLOR: 3,
    SIZE: 10,
    DANGER: 6,
    GUNS: [{
        POSITION: [20, 8, 1, 0, 0, 0, 0],
        PROPERTIES: {
            SHOOT_SETTINGS: combineStats([g.basic, g.flank]),
            TYPE: "bullet",
        },
    },
          ],
    TURRETS: [{
        POSITION: [34, 0, 0, 0, 360, 0],
        TYPE: "turretBase",
    },
  ],
};
    Class.autorevol = makeAuto(Class.revolution, "Auto-Revolutionist");
    Class.revoceptionist = makeCeption(Class.revolution, "Revo-Ception");
  	Class.revolution.UPGRADES_TIER_0 = [];
    Class.addons.UPGRADES_TIER_0.push('revolution');
    Class.revolution.UPGRADES_TIER_0.push('revoceptionist', 'autorevol');
}