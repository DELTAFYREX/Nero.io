// An addon is guaranteed to run only after all groups are loaded.
// This is helpful, if your group relies on all other definitions already being loaded.
// Addons that are dependant on other addons should be named something like
// "[PARENT ADDON NAME]-[EXTENSION NAME].js", to make sure that it would run after that addon ran.

const { combineStats, makeDeco, makeAuto, makeCeption } = require('../facilitators');
const g = require('../gunvals');

// This addon is enabled by default.
// If you want to disable, uncomment the line below.
//return console.log('[revolutionistPack.js] Addon disabled by default');

Class.placeableWallwhite = {
    PARENT: ["rock"],
    LABEL: "Wall",
    SIZE: 30,
    SHAPE: 4,
    CLEAR_ON_MASTER_UPGRADE: true,
    TEAM: TEAM_ENEMIES,
    VARIES_IN_SIZE: false,
};
Class.wallPlacerThingwhite = {
    PARENT: ["genericTank"],
    SHAPE: 0,
    MIRROR_MASTER_ANGLE: true,
    INTANGIBLE: true,
    DRAW_SELF: false,
    COLOR: 16,
    CLEAR_ON_MASTER_UPGRADE: true,
    BODY: {
        ACCELERATION: 0.1,
        SPEED: true,
        HEALTH: 340282366920938463463374607431768211455,
        RESIST: 1,
        SHIELD: 340282366920938463463374607431768211455,
        REGEN: 340282366920938463463374607431768211455,
        DAMAGE: false,
        PENETRATION: true,
        RANGE: true,
        FOV: true,
        SHOCK_ABSORB: 340282366920938463463374607431768211455,
        RECOIL_MULTIPLIER: false,
        DENSITY: 340282366920938463463374607431768211455,
        STEALTH: true,
        PUSHABILITY: false,
        HETERO: false,
    },
    MOTION_TYPE: "aimassist",
    GUNS: [
       {
            POSITION: [0, 20, 1, 10, 0, 0, 0],
            PROPERTIES: {
                SHOOT_SETTINGS: combineStats([{ reload:10, speed:0, maxSpeed:0, shudder:0.0001, spray:0.0001 }]),
                TYPE: "placeableWall",
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

};
Class.wallPlacer = {
    PARENT: ["genericTank"],
    LABEL: "Messin' Around",
    BODY: {
        ACCELERATION: base.ACCEL * 1,
        SPEED: base.SPEED * 1,
        HEALTH: base.HEALTH * 1,
        DAMAGE: base.DAMAGE * 1,
        PENETRATION: base.PENETRATION * 1,
        SHIELD: base.SHIELD * 1,
        REGEN: base.REGEN * 1,
        FOV: base.FOV * 1,
        DENSITY: base.DENSITY * 1,
        PUSHABILITY: 1,
        HETERO: 3,
    },
    GUNS: [
       {
            POSITION: [16, 20, 1, 0, 0, 0, 0],
            PROPERTIES: {
                SHOOT_SETTINGS: combineStats([g.basic,{reload:1/8}]),
                TYPE: "wallPlacerThing",
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
};