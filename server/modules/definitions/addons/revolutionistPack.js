// An addon is guaranteed to run only after all groups are loaded.
// This is helpful, if your group relies on all other definitions already being loaded.
// Addons that are dependant on other addons should be named something like
// "[PARENT ADDON NAME]-[EXTENSION NAME].js", to make sure that it would run after that addon ran.

const { combineStats, makeDeco, makeAuto, makeCeption } = require('../facilitators');
const g = require('../gunvals');

module.exports = ({ Class }) => {
  exports.turretBase = {
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
};exports.revolutionist = {
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
  exports.autorevol = makeCeption(exports.revolutionist, "Auto-Revolutionist");
exports.revoception = makeCeption(exports.revolutionist, "Revo-Ceptionist");
    Class.addons.UPGRADES_TIER_0.push('Revolutionist');
}