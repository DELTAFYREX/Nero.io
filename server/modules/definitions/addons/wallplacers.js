// An addon is guaranteed to run only after all groups are loaded.
// This is helpful, if your group relies on all other definitions already being loaded.
// Addons that are dependant on other addons should be named something like
// "[PARENT ADDON NAME]-[EXTENSION NAME].js", to make sure that it would run after that addon ran.

const { combineStats } = require('../facilitators.js');
const { base, gunCalcNames, basePolygonDamage, basePolygonHealth, dfltskl, statnames } = require('../constants.js');
const g = require('../gunvals.js');

// This addon is enabled by default.
// If you want to disable, uncomment the line below.
//return console.log('[revolutionistPack.js] Addon disabled by default');

Class.placeableWallwhite = {
    PARENT: ["placeableWall"],
    COLOR: "white"
}
Class.wallPlacerThingwhite = {
    PARENT: ["wallPlacerThing"],
    GUNS: [
       {
            POSITION: [0, 20, 1, 10, 0, 0, 0],
            PROPERTIES: {
                SHOOT_SETTINGS: combineStats([{ reload:10, speed:0, maxSpeed:0, shudder:0.0001, spray:0.0001 }]),
                TYPE: "placeableWallwhite",
                COLOR: 16,
                LABEL: "",
                STAT_CALCULATOR: 0,
                WAIT_TO_CYCLE: false,
                AUTOFIRE: false,
                SYNCS_SKILLS: false,
                MAX_CHILDREN: 0,
                ALT_FIRE: false,
                NEGATIVE_RECOIL: false,
                DRAW_FILL: false,
                BORDERLESS: true,
            },
        },
    ],
}
Class.wallPlacerwhite = {
    PARENT: ["wallPlacer"],
    LABEL: "White",
    GUNS: [
       {
            POSITION: [16, 20, 1, 0, 0, 0, 0],
            PROPERTIES: {
                SHOOT_SETTINGS: combineStats([g.basic,{reload:1/8}]),
                TYPE: "wallPlacerThingwhite",
                COLOR: 16,
                LABEL: "",
                STAT_CALCULATOR: 0,
                WAIT_TO_CYCLE: false,
                AUTOFIRE: false,
                SYNCS_SKILLS: false,
                MAX_CHILDREN: 1,
                ALT_FIRE: false,
                NEGATIVE_RECOIL: false,
            },
        },
    ],
}
Class.wallPlacer.UPGRADES_TIER_0 = ['wallPlacerwhite']