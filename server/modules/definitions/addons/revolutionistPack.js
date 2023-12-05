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
  
  Class.turretBase = {
    LABEL: "Base",
    SHAPE: 'M 0 -1.1 A 1 1 0 0 0 0 1.1 A 1 1 0 0 0 0 -1.1 Z M 0 -1 A 0.001 0.001 0 0 1 0 1 A 0.001 0.001 0 0 1 0 -1',
    COLOR: 9,
    CONTROLLERS: [["spin", { independent: true }]],
    INDEPENDENT: true,
    TURRETS: [{
        POSITION: [4.65, 9.85, 0, 90, 220, 1],
        TYPE: "autoTurret",
    }, {
        POSITION: [4.65, 9.85, 0, 270, 220, 1],
        TYPE: "autoTurret",
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
  
    Class.autorevol = makeAuto(Class.revolution, "Auto-Revolutionist");
  
    Class.revoceptionist = makeCeption(Class.revolution, "Revo-Ception");
  
  	Class.revolution.UPGRADES_TIER_0 = [];
  
    Class.addons.UPGRADES_TIER_0.push('revolution');
  
    Class.revolution.UPGRADES_TIER_0.push('revoceptionist', 'autorevol');
}