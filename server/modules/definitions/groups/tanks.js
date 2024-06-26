const { combineStats, makeAuto, makeHybrid, makeHybridDrive, makeOver, makeDeco, makeGuard, makeBird, makeMulti, makeCeption, makeCeptionNerf, makeTracker, addBackTurret, makeAura } = require('../facilitators.js');
const { base, statnames, gunCalcNames, dfltskl, smshskl } = require('../constants.js');
require('./generics.js');
const g = require('../gunvals.js');

// Basic & starting upgrades
Class.basic = {
    PARENT: "genericTank",
    LABEL: "Basic",
    DANGER: 4,
    SKILL_CAP: [12, 12, 12, 12, 12, 12, 12, 12, 12, 12],
    SKILL: Array(10).fill(12),
    /*BODY: {
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
        HETERO: 3
    },*/
    GUNS: [
        {
            POSITION: [18, 8, 1, 0, 0, 0, 0],
            PROPERTIES: {
                SHOOT_SETTINGS: combineStats([g.basic]),
                TYPE: "bullet",
                /*COLOR: "grey",
                LABEL: "",
                STAT_CALCULATOR: 0,
                WAIT_TO_CYCLE: false,
                AUTOFIRE: false,
                SYNCS_SKILLS: false,
                MAX_CHILDREN: 0,
                ALT_FIRE: false,
                NEGATIVE_RECOIL: false*/
            }
        }
    ]
}
Class.twin = {
    PARENT: "genericTank",
    LABEL: "Twin",
    GUNS: [
        {
            POSITION: [20, 8, 1, 0, 5.5, 0, 0],
            PROPERTIES: {
                SHOOT_SETTINGS: combineStats([g.basic, g.twin]),
                TYPE: "bullet"
            }
        },
        {
            POSITION: [20, 8, 1, 0, -5.5, 0, 0.5],
            PROPERTIES: {
                SHOOT_SETTINGS: combineStats([g.basic, g.twin]),
                TYPE: "bullet"
            }
        }
    ]
}
Class.sniper = {
    PARENT: "genericTank",
    LABEL: "Sniper",
    BODY: {
        FOV: 1.2 * base.FOV
    },
    GUNS: [
        {
            POSITION: [24, 8.5, 1, 0, 0, 0, 0],
            PROPERTIES: {
                SHOOT_SETTINGS: combineStats([g.basic, g.sniper]),
                TYPE: "bullet"
            }
        }
    ]
}
Class.machineGun = {
    PARENT: "genericTank",
    LABEL: "Machine Gun",
    GUNS: [
        {
            POSITION: [12, 10, 1.4, 8, 0, 0, 0],
            PROPERTIES: {
                SHOOT_SETTINGS: combineStats([g.basic, g.machineGun]),
                TYPE: "bullet"
            }
        }
    ]
}
Class.flankGuard = makeMulti({
    PARENT: "genericTank",
    BODY: {
        SPEED: 1.1 * base.SPEED
    },
    GUNS: [
        {
            POSITION: [18, 8, 1, 0, 0, 0, 0],
            PROPERTIES: {
                SHOOT_SETTINGS: combineStats([g.basic, g.flankGuard]),
                TYPE: "bullet"
            }
        }
    ]
}, 3, "Flank Guard")
Class.director = {
    PARENT: "genericTank",
    LABEL: "Director",
    STAT_NAMES: statnames.drone,
    BODY: {
        FOV: base.FOV * 1.1
    },
    GUNS: [
        {
            POSITION: [6, 11, 1.3, 7, 0, 0, 0],
            PROPERTIES: {
                SHOOT_SETTINGS: combineStats([g.drone]),
                TYPE: "drone",
                AUTOFIRE: true,
                SYNCS_SKILLS: true,
                STAT_CALCULATOR: gunCalcNames.drone,
                MAX_CHILDREN: 6,
                WAIT_TO_CYCLE: true
            }
        }
    ]
}
Class.pounder = {
    PARENT: "genericTank",
    LABEL: "Pounder",
    GUNS: [
        {
            POSITION: [20.5, 12, 1, 0, 0, 0, 0],
            PROPERTIES: {
                SHOOT_SETTINGS: combineStats([g.basic, g.pounder]),
                TYPE: "bullet"
            }
        }
    ]
}
Class.trapper = {
    PARENT: "genericTank",
    LABEL: "Trapper",
    STAT_NAMES: statnames.trap,
    GUNS: [
        {
            POSITION: [15, 7, 1, 0, 0, 0, 0]
        },
        {
            POSITION: [3, 7, 1.7, 15, 0, 0, 0],
            PROPERTIES: {
                SHOOT_SETTINGS: combineStats([g.trap]),
                TYPE: "trap",
                STAT_CALCULATOR: gunCalcNames.trap
            }
        }
    ]
}
Class.desmos = {
    PARENT: "genericTank",
    LABEL: "Desmos",
    STAT_NAMES: statnames.desmos,
    GUNS: [
        {
            POSITION: [20, 10, 0.8, 0, 0, 0, 0],
            PROPERTIES: {
                SHOOT_SETTINGS: combineStats([g.basic, g.desmos]),
                TYPE: ["bullet", {MOTION_TYPE: "desmos"}]
            }
        },
        {
            POSITION: [3.75, 10, 2.125, 1.25, -6.25, 90, 0]
        },
        {
            POSITION: [3.75, 10, 2.125, 1.25, 6.25, -90, 0]
        }
    ]
}
Class.smasher = {
    PARENT: "genericSmasher",
    LABEL: "Smasher",
    DANGER: 6,
    TURRETS: [
        {
            POSITION: [21.5, 0, 0, 0, 360, 0],
            TYPE: "smasherBody"
        }
    ]
}
Class.healer = {
    PARENT: "genericTank",
    LABEL: "Healer",
    STAT_NAMES: statnames.heal,
    TURRETS: [
        {
            POSITION: [13, 0, 0, 0, 360, 1],
            TYPE: "healerSymbol"
        }
    ],
    GUNS: [
        {
            POSITION: [8, 9, -0.5, 12.5, 0, 0, 0]
        },
        {
            POSITION: [18, 10, 1, 0, 0, 0, 0],
            PROPERTIES: {
                SHOOT_SETTINGS: combineStats([g.basic, g.healer]),
                TYPE: "healerBullet"
            }
        }
    ]
}

// Twin upgrades
Class.doubleTwin = makeMulti({
    PARENT: "genericTank",
    LABEL: "Twin",
    DANGER: 6,
    GUNS: [
        {
            POSITION: [20, 8, 1, 0, 5.5, 0, 0],
            PROPERTIES: {
                SHOOT_SETTINGS: combineStats([g.basic, g.twin, g.doubleTwin]),
                TYPE: "bullet"
            }
        },
        {
            POSITION: [20, 8, 1, 0, -5.5, 0, 0.5],
            PROPERTIES: {
                SHOOT_SETTINGS: combineStats([g.basic, g.twin, g.doubleTwin]),
                TYPE: "bullet"
            }
        }
    ]
}, 2)
Class.tripleShot = {
    PARENT: "genericTank",
    LABEL: "Triple Shot",
    DANGER: 6,
    BODY: {
        SPEED: base.SPEED * 0.9
    },
    GUNS: [
        {
            POSITION: [19, 8, 1, 0, -2, -17.5, 0.5],
            PROPERTIES: {
                SHOOT_SETTINGS: combineStats([g.basic, g.twin, g.tripleShot]),
                TYPE: "bullet"
            }
        },
        {
            POSITION: [19, 8, 1, 0, 2, 17.5, 0.5],
            PROPERTIES: {
                SHOOT_SETTINGS: combineStats([g.basic, g.twin, g.tripleShot]),
                TYPE: "bullet"
            }
        },
        {
            POSITION: [22, 8, 1, 0, 0, 0, 0],
            PROPERTIES: {
                SHOOT_SETTINGS: combineStats([g.basic, g.twin, g.tripleShot]),
                TYPE: "bullet"
            }
        }
    ]
}

// Double Twin upgrades
Class.tripleTwin = makeMulti({
    PARENT: "genericTank",
    LABEL: "Twin",
    DANGER: 7,
    GUNS: [
        {
            POSITION: [20, 8, 1, 0, 5.5, 0, 0],
            PROPERTIES: {
                SHOOT_SETTINGS: combineStats([g.basic, g.twin, g.spam, g.doubleTwin]),
                TYPE: "bullet"
            }
        },
        {
            POSITION: [20, 8, 1, 0, -5.5, 0, 0.5],
            PROPERTIES: {
                SHOOT_SETTINGS: combineStats([g.basic, g.twin, g.spam, g.doubleTwin]),
                TYPE: "bullet"
            }
        }
    ]
}, 3)
Class.hewnDouble = {
    PARENT: "genericTank",
    LABEL: "Hewn Double",
    DANGER: 7,
    GUNS: [
        {
            POSITION: [19, 8, 1, 0, 5.5, 205, 0.5],
            PROPERTIES: {
                SHOOT_SETTINGS: combineStats([g.basic, g.twin, g.twin, g.doubleTwin, g.hewnDouble, { recoil: 1.15 }]),
                TYPE: "bullet"
            }
        },
        {
            POSITION: [19, 8, 1, 0, -5.5, -205, 0],
            PROPERTIES: {
                SHOOT_SETTINGS: combineStats([g.basic, g.twin, g.twin, g.doubleTwin, g.hewnDouble, { recoil: 1.15 }]),
                TYPE: "bullet"
            }
        },
        {
            POSITION: [20, 8, 1, 0, 5.5, 180, 0],
            PROPERTIES: {
                SHOOT_SETTINGS: combineStats([g.basic, g.twin, g.doubleTwin, g.hewnDouble, { recoil: 1.15 }]),
                TYPE: "bullet"
            }
        },
        {
            POSITION: [20, 8, 1, 0, -5.5, 180, 0.5],
            PROPERTIES: {
                SHOOT_SETTINGS: combineStats([g.basic, g.twin, g.doubleTwin, g.hewnDouble, { recoil: 1.15 }]),
                TYPE: "bullet"
            }
        },
        {
            POSITION: [20, 8, 1, 0, 5.5, 0, 0],
            PROPERTIES: {
                SHOOT_SETTINGS: combineStats([g.basic, g.twin, g.doubleTwin, g.hewnDouble]),
                TYPE: "bullet"
            }
        },
        {
            POSITION: [20, 8, 1, 0, -5.5, 0, 0.5],
            PROPERTIES: {
                SHOOT_SETTINGS: combineStats([g.basic, g.twin, g.doubleTwin, g.hewnDouble]),
                TYPE: "bullet"
            }
        }
    ]
}

// Triple Shot upgrades
Class.pentaShot = {
    PARENT: "genericTank",
    LABEL: "Penta Shot",
    DANGER: 7,
    BODY: {
        SPEED: 0.85 * base.SPEED
    },
    GUNS: [
        {
            POSITION: [16, 8, 1, 0, -3, -30, 0.667],
            PROPERTIES: {
                SHOOT_SETTINGS: combineStats([g.basic, g.twin, g.tripleShot]),
                TYPE: "bullet"
            }
        },
        {
            POSITION: [16, 8, 1, 0, 3, 30, 0.667],
            PROPERTIES: {
                SHOOT_SETTINGS: combineStats([g.basic, g.twin, g.tripleShot]),
                TYPE: "bullet"
            }
        },
        {
            POSITION: [19, 8, 1, 0, -2, -15, 0.333],
            PROPERTIES: {
                SHOOT_SETTINGS: combineStats([g.basic, g.twin, g.tripleShot]),
                TYPE: "bullet"
            }
        },
        {
            POSITION: [19, 8, 1, 0, 2, 15, 0.333],
            PROPERTIES: {
                SHOOT_SETTINGS: combineStats([g.basic, g.twin, g.tripleShot]),
                TYPE: "bullet"
            }
        },
        {
            POSITION: [22, 8, 1, 0, 0, 0, 0],
            PROPERTIES: {
                SHOOT_SETTINGS: combineStats([g.basic, g.twin, g.tripleShot]),
                TYPE: "bullet"
            }
        }
    ]
}
Class.spreadshot = {
    PARENT: "genericTank",
    LABEL: "Spreadshot",
    DANGER: 7,
    GUNS: [
        {
            POSITION: [13, 4, 1, 0, -0.5, -75, 5 / 6],
            PROPERTIES: {
                SHOOT_SETTINGS: combineStats([g.basic, g.pelleter, g.artillery, g.twin, g.spreadshot]),
                TYPE: "bullet",
                LABEL: "Spread"
            }
        },
        {
            POSITION: [13, 4, 1, 0, 0.5, 75, 5 / 6],
            PROPERTIES: {
                SHOOT_SETTINGS: combineStats([g.basic, g.pelleter, g.artillery, g.twin, g.spreadshot]),
                TYPE: "bullet",
                LABEL: "Spread"
            }
        },
        {
            POSITION: [14.5, 4, 1, 0, -0.5, -60, 4 / 6],
            PROPERTIES: {
                SHOOT_SETTINGS: combineStats([g.basic, g.pelleter, g.artillery, g.twin, g.spreadshot]),
                TYPE: "bullet",
                LABEL: "Spread"
            }
        },
        {
            POSITION: [14.5, 4, 1, 0, 0.5, 60, 4 / 6],
            PROPERTIES: {
                SHOOT_SETTINGS: combineStats([g.basic, g.pelleter, g.artillery, g.twin, g.spreadshot]),
                TYPE: "bullet",
                LABEL: "Spread"
            }
        },
        {
            POSITION: [16, 4, 1, 0, -0.5, -45, 3 / 6],
            PROPERTIES: {
                SHOOT_SETTINGS: combineStats([g.basic, g.pelleter, g.artillery, g.twin, g.spreadshot]),
                TYPE: "bullet",
                LABEL: "Spread"
            }
        },
        {
            POSITION: [16, 4, 1, 0, 0.5, 45, 3 / 6],
            PROPERTIES: {
                SHOOT_SETTINGS: combineStats([g.basic, g.pelleter, g.artillery, g.twin, g.spreadshot]),
                TYPE: "bullet",
                LABEL: "Spread"
            }
        },
        {
            POSITION: [17.5, 4, 1, 0, -0.5, -30, 2 / 6],
            PROPERTIES: {
                SHOOT_SETTINGS: combineStats([g.basic, g.pelleter, g.artillery, g.twin, g.spreadshot]),
                TYPE: "bullet",
                LABEL: "Spread"
            }
        },
        {
            POSITION: [17.5, 4, 1, 0, 0.5, 30, 2 / 6],
            PROPERTIES: {
                SHOOT_SETTINGS: combineStats([g.basic, g.pelleter, g.artillery, g.twin, g.spreadshot]),
                TYPE: "bullet",
                LABEL: "Spread"
            }
        },
        {
            POSITION: [19, 4, 1, 0, -1, -15, 1 / 6],
            PROPERTIES: {
                SHOOT_SETTINGS: combineStats([g.basic, g.pelleter, g.artillery, g.twin, g.spreadshot]),
                TYPE: "bullet",
                LABEL: "Spread"
            }
        },
        {
            POSITION: [19, 4, 1, 0, 1, 15, 1 / 6],
            PROPERTIES: {
                SHOOT_SETTINGS: combineStats([g.basic, g.pelleter, g.artillery, g.twin, g.spreadshot]),
                TYPE: "bullet",
                LABEL: "Spread"
            }
        },
        {
            POSITION: [12, 8, 1, 8, 0, 0, 0],
            PROPERTIES: {
                SHOOT_SETTINGS: combineStats([g.basic, g.pounder, g.spreadshotMain, g.spreadshot]),
                TYPE: "bullet"
            }
        }
    ]
}
Class.bentDouble = makeMulti({
    PARENT: "genericTank",
    DANGER: 7,
    GUNS: [
        {
            POSITION: [19, 8, 1, 0, -2, -17.5, 0.5],
            PROPERTIES: {
                SHOOT_SETTINGS: combineStats([g.basic, g.twin, g.tripleShot, g.doubleTwin]),
                TYPE: "bullet"
            }
        },
        {
            POSITION: [19, 8, 1, 0, 2, 17.5, 0.5],
            PROPERTIES: {
                SHOOT_SETTINGS: combineStats([g.basic, g.twin, g.tripleShot, g.doubleTwin]),
                TYPE: "bullet"
            }
        },
        {
            POSITION: [22, 8, 1, 0, 0, 0, 0],
            PROPERTIES: {
                SHOOT_SETTINGS: combineStats([g.basic, g.twin, g.tripleShot, g.doubleTwin]),
                TYPE: "bullet"
            }
        }
    ]
}, 2, "Bent Double")
Class.triplet = {
    PARENT: "genericTank",
    DANGER: 7,
    LABEL: "Triplet",
    BODY: {
        FOV: 1.05 * base.FOV
    },
    GUNS: [
        {
            POSITION: [18, 10, 1, 0, 5, 0, 0.5],
            PROPERTIES: {
                SHOOT_SETTINGS: combineStats([g.basic, g.twin, g.triplet]),
                TYPE: "bullet"
            }
        },
        {
            POSITION: [18, 10, 1, 0, -5, 0, 0.5],
            PROPERTIES: {
                SHOOT_SETTINGS: combineStats([g.basic, g.twin, g.triplet]),
                TYPE: "bullet"
            }
        },
        {
            POSITION: [21, 10, 1, 0, 0, 0, 0],
            PROPERTIES: {
                SHOOT_SETTINGS: combineStats([g.basic, g.twin, g.triplet]),
                TYPE: "bullet"
            }
        }
    ]
}

// Sniper upgrades
Class.assassin = {
    PARENT: "genericTank",
    DANGER: 6,
    LABEL: "Assassin",
    BODY: {
        SPEED: 0.85 * base.SPEED,
        FOV: 1.4 * base.FOV
    },
    GUNS: [
        {
            POSITION: [27, 8, 1, 0, 0, 0, 0],
            PROPERTIES: {
                SHOOT_SETTINGS: combineStats([g.basic, g.sniper, g.assassin]),
                TYPE: "bullet"
            }
        },
        {
            POSITION: [5, 8, -1.4, 8, 0, 0, 0]
        }
    ]
}
Class.hunter = {
    PARENT: "genericTank",
    LABEL: "Hunter",
    DANGER: 6,
    BODY: {
        SPEED: base.SPEED * 0.9,
        FOV: base.FOV * 1.25
    },
    CONTROLLERS: ["zoom"],
    TOOLTIP: "Hold right click to zoom.",
    GUNS: [
        {
            POSITION: [24, 8, 1, 0, 0, 0, 0],
            PROPERTIES: {
                SHOOT_SETTINGS: combineStats([g.basic, g.sniper, g.hunter, g.hunterSecondary]),
                TYPE: "bullet"
            }
        },
        {
            POSITION: [21, 12, 1, 0, 0, 0, 0.25],
            PROPERTIES: {
                SHOOT_SETTINGS: combineStats([g.basic, g.sniper, g.hunter]),
                TYPE: "bullet"
            }
        }
    ]
}
Class.rifle = {
    PARENT: "genericTank",
    LABEL: "Rifle",
    DANGER: 6,
    BODY: {
        FOV: base.FOV * 1.225
    },
    GUNS: [
        {
            POSITION: [20, 12, 1, 0, 0, 0, 0]
        },
        {
            POSITION: [24, 7, 1, 0, 0, 0, 0],
            PROPERTIES: {
                SHOOT_SETTINGS: combineStats([g.basic, g.sniper, g.rifle]),
                TYPE: "bullet"
            }
        }
    ]
}

// Assassin upgrades
Class.ranger = {
    PARENT: "genericTank",
    LABEL: "Ranger",
    DANGER: 7,
    BODY: {
        SPEED: 0.8 * base.SPEED,
        FOV: 1.5 * base.FOV,
    },
    GUNS: [
        {
            POSITION: [32, 8, 1, 0, 0, 0, 0],
            PROPERTIES: {
                SHOOT_SETTINGS: combineStats([g.basic, g.sniper, g.assassin]),
                TYPE: "bullet",
            },
        },
        {
            POSITION: [5, 8, -1.4, 8, 0, 0, 0],
        },
    ],
}
Class.stalker = {
    PARENT: "genericTank",
    DANGER: 7,
    LABEL: "Stalker",
    BODY: {
        SPEED: 0.85 * base.SPEED,
        FOV: 1.35 * base.FOV
    },
    INVISIBLE: [0.08, 0.03],
    TOOLTIP: "Stay still to turn invisible.",
    GUNS: [
        {
            POSITION: [27, 8, -1.8, 0, 0, 0, 0],
            PROPERTIES: {
                SHOOT_SETTINGS: combineStats([g.basic, g.sniper, g.assassin]),
                TYPE: "bullet"
            }
        }
    ]
}
Class.single = {
    PARENT: "genericTank",
    LABEL: "Single",
    DANGER: 7,
    GUNS: [
        {
            POSITION: [19, 8, 1, 0, 0, 0, 0],
            PROPERTIES: {
                SHOOT_SETTINGS: combineStats([g.basic, g.single]),
                TYPE: "bullet"
            }
        },
        {
            POSITION: [5.5, 8, -1.8, 6.5, 0, 0, 0]
        }
    ]
}

// Hunter upgrades
Class.predator = {
    PARENT: "genericTank",
    LABEL: "Predator",
    DANGER: 7,
    BODY: {
        SPEED: base.SPEED * 0.9,
        FOV: base.FOV * 1.25
    },
    CONTROLLERS: ["zoom"],
    TOOLTIP: "Hold right click to zoom.",
    GUNS: [
        {
            POSITION: [24, 8, 1, 0, 0, 0, 0],
            PROPERTIES: {
                SHOOT_SETTINGS: combineStats([g.basic, g.sniper, g.hunter, g.hunterSecondary, g.hunterSecondary, g.predator]),
                TYPE: "bullet"
            }
        },
        {
            POSITION: [21, 12, 1, 0, 0, 0, 0.15],
            PROPERTIES: {
                SHOOT_SETTINGS: combineStats([g.basic, g.sniper, g.hunter, g.hunterSecondary, g.predator]),
                TYPE: "bullet"
            }
        },
        {
            POSITION: [18, 16, 1, 0, 0, 0, 0.3],
            PROPERTIES: {
                SHOOT_SETTINGS: combineStats([g.basic, g.sniper, g.hunter, g.predator]),
                TYPE: "bullet"
            }
        }
    ]
}
Class.xHunter = {
    PARENT: "genericTank",
    LABEL: "X-Hunter",
    DANGER: 7,
    BODY: {
        SPEED: base.SPEED * 0.9,
        FOV: base.FOV * 1.25
    },
    CONTROLLERS: [["zoom", { distance: 550 }]],
    TOOLTIP: "Hold right click to zoom.",
    GUNS: [
        {
            POSITION: [24, 8, 1, 0, 0, 0, 0],
            PROPERTIES: {
                SHOOT_SETTINGS: combineStats([g.basic, g.sniper, g.hunter, g.hunterSecondary]),
                TYPE: "bullet"
            }
        },
        {
            POSITION: [21, 12, 1, 0, 0, 0, 0.25],
            PROPERTIES: {
                SHOOT_SETTINGS: combineStats([g.basic, g.sniper, g.hunter]),
                TYPE: "bullet"
            }
        },
        {
            POSITION: [5, 12, -1.2, 7, 0, 0, 0]
        }
    ]
}
Class.dual = {
    PARENT: "genericTank",
    LABEL: "Dual",
    DANGER: 7,
    BODY: {
        FOV: 1.1 * base.FOV
    },
    CONTROLLERS: ["zoom"],
    TOOLTIP: "Hold right click to zoom.",
    GUNS: [
        {
            POSITION: [18, 7, 1, 0, 5.5, 0, 0],
            PROPERTIES: {
                SHOOT_SETTINGS: combineStats([g.basic, g.twin, g.dual, g.lowPower]),
                TYPE: "bullet",
                LABEL: "Small"
            }
        },
        {
            POSITION: [18, 7, 1, 0, -5.5, 0, .5],
            PROPERTIES: {
                SHOOT_SETTINGS: combineStats([g.basic, g.twin, g.dual, g.lowPower]),
                TYPE: "bullet",
                LABEL: "Small"
            }
        },
        {
            POSITION: [16, 8.5, 1, 0, 5.5, 0, 0.25],
            PROPERTIES: {
                SHOOT_SETTINGS: combineStats([g.basic, g.twin, g.dual]),
                TYPE: "bullet"
            }
        },
        {
            POSITION: [16, 8.5, 1, 0, -5.5, 0, .75],
            PROPERTIES: {
                SHOOT_SETTINGS: combineStats([g.basic, g.twin, g.dual]),
                TYPE: "bullet"
            }
        }
    ]
}

// Rifle upgrades
Class.musket = {
    PARENT: "genericTank",
    LABEL: "Musket",
    DANGER: 7,
    BODY: {
        FOV: base.FOV * 1.225
    },
    GUNS: [
        {
            POSITION: [16, 19, 1, 0, 0, 0, 0],
        },
        {
            POSITION: [18, 7, 1, 0, 4, 0, 0],
            PROPERTIES: {
                SHOOT_SETTINGS: combineStats([g.basic, g.sniper, g.rifle, g.twin]),
                TYPE: "bullet"
            }
        },
        {
            POSITION: [18, 7, 1, 0, -4, 0, 0.5],
            PROPERTIES: {
                SHOOT_SETTINGS: combineStats([g.basic, g.sniper, g.rifle, g.twin]),
                TYPE: "bullet"
            }
        }
    ]
}
Class.crossbow = {
    PARENT: "genericTank",
    LABEL: "Crossbow",
    DANGER: 7,
    BODY: {
        FOV: base.FOV * 1.225
    },
    GUNS: [
        {
            POSITION: [12.5, 2.5, 1, 0, 3.5, 35, 1],
            PROPERTIES: {
                SHOOT_SETTINGS: combineStats([g.basic, g.sniper, g.rifle, g.crossbow, { recoil: 0.5 }]),
                TYPE: "bullet"
            }
        },
        {
            POSITION: [12.5, 2.5, 1, 0, -3.5, -35, 1],
            PROPERTIES: {
                SHOOT_SETTINGS: combineStats([g.basic, g.sniper, g.rifle, g.crossbow, { recoil: 0.5 }]),
                TYPE: "bullet"
            }
        },
        {
            POSITION: [15, 2.5, 1, 0, 3.5, 35/2, 2/3],
            PROPERTIES: {
                SHOOT_SETTINGS: combineStats([g.basic, g.sniper, g.rifle, g.crossbow, { recoil: 0.5 }]),
                TYPE: "bullet"
            }
        },
        {
            POSITION: [15, 2.5, 1, 0, -3.5, -35/2, 2/3],
            PROPERTIES: {
                SHOOT_SETTINGS: combineStats([g.basic, g.sniper, g.rifle, g.crossbow, { speed: 0.7, maxSpeed: 0.7 }, { recoil: 0.5 }]),
                TYPE: "bullet"
            }
        },
        {
            POSITION: [20, 3.5, 1, 0, 4, 0, 1/3],
            PROPERTIES: {
                SHOOT_SETTINGS: combineStats([g.basic, g.sniper, g.rifle, g.crossbow, { speed: 0.7, maxSpeed: 0.7 }, { recoil: 0.5 }]),
                TYPE: "bullet"
            }
        },
        {
            POSITION: [20, 3.5, 1, 0, -4, 0, 1/3],
            PROPERTIES: {
                SHOOT_SETTINGS: combineStats([g.basic, g.sniper, g.rifle, g.crossbow, { speed: 0.7, maxSpeed: 0.7 }, { recoil: 0.5 }]),
                TYPE: "bullet"
            }
        },
        {
            POSITION: [24, 7, 1, 0, 0, 0, 0],
            PROPERTIES: {
                SHOOT_SETTINGS: combineStats([g.basic, g.sniper, g.rifle, g.crossbow, { speed: 0.7, maxSpeed: 0.7 }, { recoil: 0.5 }]),
                TYPE: "bullet"
            }
        }
    ]
}

// Machine Gun upgrades
Class.minigun = {
    PARENT: "genericTank",
    LABEL: "Minigun",
    DANGER: 6,
    BODY: {
        FOV: base.FOV * 1.2
    },
    GUNS: [
        {
            POSITION: [21, 8, 1, 0, 0, 0, 0],
            PROPERTIES: {
                SHOOT_SETTINGS: combineStats([g.basic, g.minigun]),
                TYPE: "bullet"
            }
        },
        {
            POSITION: [19, 8, 1, 0, 0, 0, 1/3],
            PROPERTIES: {
                SHOOT_SETTINGS: combineStats([g.basic, g.minigun]),
                TYPE: "bullet"
            }
        },
        {
            POSITION: [17, 8, 1, 0, 0, 0, 2/3],
            PROPERTIES: {
                SHOOT_SETTINGS: combineStats([g.basic, g.minigun]),
                TYPE: "bullet"
            }
        }
    ]
}
Class.gunner = {
    PARENT: "genericTank",
    LABEL: "Gunner",
    DANGER: 6,
    GUNS: [
        {
            POSITION: [12, 3.5, 1, 0, 7.25, 0, 0.5],
            PROPERTIES: {
                SHOOT_SETTINGS: combineStats([g.basic, g.twin, g.gunner, { speed: 1.2 }]),
                TYPE: "bullet"
            }
        },
        {
            POSITION: [12, 3.5, 1, 0, -7.25, 0, 0.75],
            PROPERTIES: {
                SHOOT_SETTINGS: combineStats([g.basic, g.twin, g.gunner, { speed: 1.2 }]),
                TYPE: "bullet"
            }
        },
        {
            POSITION: [16, 3.5, 1, 0, 3.75, 0, 0],
            PROPERTIES: {
                SHOOT_SETTINGS: combineStats([g.basic, g.twin, g.gunner, { speed: 1.2 }]),
                TYPE: "bullet"
            }
        },
        {
            POSITION: [16, 3.5, 1, 0, -3.75, 0, 0.25],
            PROPERTIES: {
                SHOOT_SETTINGS: combineStats([g.basic, g.twin, g.gunner, { speed: 1.2 }]),
                TYPE: "bullet"
            }
        }
    ]
}
Class.sprayer = {
    PARENT: "genericTank",
    LABEL: "Sprayer",
    DANGER: 6,
    GUNS: [
        {
            POSITION: [23, 7, 1, 0, 0, 0, 0],
            PROPERTIES: {
                SHOOT_SETTINGS: combineStats([g.basic, g.machineGun, g.lowPower, g.pelleter, { recoil: 1.15 }]),
                TYPE: "bullet"
            }
        },
        {
            POSITION: [12, 10, 1.4, 8, 0, 0, 0],
            PROPERTIES: {
                SHOOT_SETTINGS: combineStats([g.basic, g.machineGun]),
                TYPE: "bullet"
            }
        }
    ]
}

// Minigun upgrades
Class.streamliner = {
    PARENT: "genericTank",
    LABEL: "Streamliner",
    DANGER: 7,
    BODY: {
        FOV: 1.3,
    },
    GUNS: [
        {
            POSITION: [25, 8, 1, 0, 0, 0, 0],
            PROPERTIES: {
                SHOOT_SETTINGS: combineStats([g.basic, g.minigun, g.streamliner]),
                TYPE: "bullet",
            },
        },
        {
            POSITION: [23, 8, 1, 0, 0, 0, 0.2],
            PROPERTIES: {
                SHOOT_SETTINGS: combineStats([g.basic, g.minigun, g.streamliner]),
                TYPE: "bullet",
            },
        },
        {
            POSITION: [21, 8, 1, 0, 0, 0, 0.4],
            PROPERTIES: {
                SHOOT_SETTINGS: combineStats([g.basic, g.minigun, g.streamliner]),
                TYPE: "bullet",
            },
        },
        {
            POSITION: [19, 8, 1, 0, 0, 0, 0.6],
            PROPERTIES: {
                SHOOT_SETTINGS: combineStats([g.basic, g.minigun, g.streamliner]),
                TYPE: "bullet",
            },
        },
        {
            POSITION: [17, 8, 1, 0, 0, 0, 0.8],
            PROPERTIES: {
                SHOOT_SETTINGS: combineStats([g.basic, g.minigun, g.streamliner]),
                TYPE: "bullet",
            },
        },
    ],
}
Class.barricade = {
    PARENT: "genericTank",
    DANGER: 7,
    LABEL: "Barricade",
    STAT_NAMES: statnames.trap,
    BODY: {
        FOV: 1.15,
    },
    GUNS: [
        {
            POSITION: [24, 8, 1, 0, 0, 0, 0],
        },
        {
            POSITION: [4, 8, 1.3, 22, 0, 0, 0],
            PROPERTIES: {
                SHOOT_SETTINGS: combineStats([g.trap, g.minigun, { range: 0.5 }]),
                TYPE: "trap",
                STAT_CALCULATOR: gunCalcNames.trap,
            },
        },
        {
            POSITION: [4, 8, 1.3, 18, 0, 0, 1/3],
            PROPERTIES: {
                SHOOT_SETTINGS: combineStats([g.trap, g.minigun, { range: 0.5 }]),
                TYPE: "trap",
                STAT_CALCULATOR: gunCalcNames.trap,
            },
        },
        {
            POSITION: [4, 8, 1.3, 14, 0, 0, 2/3],
            PROPERTIES: {
                SHOOT_SETTINGS: combineStats([g.trap, g.minigun, { range: 0.5 }]),
                TYPE: "trap",
                STAT_CALCULATOR: gunCalcNames.trap,
            },
        },
    ],
}

// Gunner upgrades
Class.nailgun = {
    PARENT: "genericTank",
    LABEL: "Nailgun",
    DANGER: 7,
    BODY: {
        FOV: base.FOV * 1.1,
        SPEED: base.SPEED * 0.9,
    },
    GUNS: [
        {
            POSITION: [19, 2, 1, 0, -2.5, 0, 0.25],
            PROPERTIES: {
                SHOOT_SETTINGS: combineStats([g.basic, g.pelleter, g.power, g.twin, g.nailgun]),
                TYPE: "bullet",
            },
        },
        {
            POSITION: [19, 2, 1, 0, 2.5, 0, 0.75],
            PROPERTIES: {
                SHOOT_SETTINGS: combineStats([g.basic, g.pelleter, g.power, g.twin, g.nailgun]),
                TYPE: "bullet",
            },
        },
        {
            POSITION: [20, 2, 1, 0, 0, 0, 0],
            PROPERTIES: {
                SHOOT_SETTINGS: combineStats([g.basic, g.pelleter, g.power, g.twin, g.nailgun]),
                TYPE: "bullet",
            },
        },
        {
            POSITION: [5.5, 7, -1.8, 6.5, 0, 0, 0],
        },
    ],
}
Class.machineGunner = {
    PARENT: "genericTank",
    LABEL: "Machine Gunner",
    DANGER: 7,
    BODY: {
        SPEED: 0.9 * base.SPEED,
    },
    GUNS: [
        {
            POSITION: [14, 3, 4, -3, 5, 0, 0.6],
            PROPERTIES: {
                SHOOT_SETTINGS: combineStats([g.basic, g.twin, g.gunner, g.machineGunner]),
                TYPE: "bullet",
            },
        },
        {
            POSITION: [14, 3, 4, -3, -5, 0, 0.8],
            PROPERTIES: {
                SHOOT_SETTINGS: combineStats([g.basic, g.twin, g.gunner, g.machineGunner]),
                TYPE: "bullet",
            },
        },
        {
            POSITION: [14, 3, 4, 0, 2.5, 0, 0.4],
            PROPERTIES: {
                SHOOT_SETTINGS: combineStats([g.basic, g.twin, g.gunner, g.machineGunner]),
                TYPE: "bullet",
            },
        },
        {
            POSITION: [14, 3, 4, 0, -2.5, 0, 0.2],
            PROPERTIES: {
                SHOOT_SETTINGS: combineStats([g.basic, g.twin, g.gunner, g.machineGunner]),
                TYPE: "bullet",
            },
        },
        {
            POSITION: [14, 3, 4, 3, 0, 0, 0],
            PROPERTIES: {
                SHOOT_SETTINGS: combineStats([g.basic, g.twin, g.gunner, g.machineGunner]),
                TYPE: "bullet",
            },
        },
    ],
}

// Sprayer upgrades
Class.redistributor = {
    PARENT: "genericTank",
    LABEL: "Redistributor",
    DANGER: 7,
    GUNS: [
        {
            POSITION: [26, 7, 1, 0, 0, 0, 0],
            PROPERTIES: {
                SHOOT_SETTINGS: combineStats([g.basic, g.pelleter, g.lowPower, g.machineGun, { recoil: 1.15 }]),
                TYPE: "bullet",
            },
        },
        {
            POSITION: [23, 10, 1, 0, 0, 0, 0.5],
            PROPERTIES: {
                SHOOT_SETTINGS: combineStats([g.basic, g.pelleter, g.lowPower, g.machineGun, { recoil: 1.15 }]),
                TYPE: "bullet",
            },
        },
        {
            POSITION: [12, 10, 1.4, 8, 0, 0, 0],
            PROPERTIES: {
                SHOOT_SETTINGS: combineStats([g.basic, g.machineGun]),
                TYPE: "bullet",
            },
        },
    ],
}
Class.atomizer = {
    PARENT: "genericTank",
    LABEL: "Atomizer",
    DANGER: 7,
    GUNS: [
        {
            POSITION: [5, 7.5, 1.3, 18.5, 0, 0, 0],
            PROPERTIES: {
                SHOOT_SETTINGS: combineStats([g.basic, g.pelleter, g.lowPower, g.machineGun, { recoil: 1.15 }, g.atomizer]),
                TYPE: "bullet",
            },
        },
        {
            POSITION: [12, 10, 1.4, 8, 0, 0, 0],
            PROPERTIES: {
                SHOOT_SETTINGS: combineStats([g.basic, g.machineGun]),
                TYPE: "bullet",
            },
        },
    ],
}
Class.focal = {
    PARENT: "genericTank",
    LABEL: "Focal",
    DANGER: 7,
    GUNS: [
        {
            POSITION: [25, 7, 1, 0, 0, 0, 0],
            PROPERTIES: {
                SHOOT_SETTINGS: combineStats([g.basic, g.pelleter, g.lowPower, g.machineGun, { recoil: 1.15 }]),
                TYPE: "bullet",
            },
        },
        {
            POSITION: [14, 10, 1.3, 8, 0, 0, 0],
            PROPERTIES: {
                SHOOT_SETTINGS: combineStats([g.basic, g.machineGun, g.focal]),
                TYPE: "bullet",
            },
        },
    ],
}

// Flank Guard upgrades
Class.hexaTank = makeMulti({
    PARENT: "genericTank",
    DANGER: 6,
    GUNS: [
        {
            POSITION: [18, 8, 1, 0, 0, 0, 0],
            PROPERTIES: {
                SHOOT_SETTINGS: combineStats([g.basic, g.flankGuard, g.flankGuard]),
                TYPE: "bullet"
            }
        },
        {
            POSITION: [18, 8, 1, 0, 0, 180, 0.5],
            PROPERTIES: {
                SHOOT_SETTINGS: combineStats([g.basic, g.flankGuard, g.flankGuard]),
                TYPE: "bullet"
            }
        }
    ]
}, 3, "Hexa Tank")
Class.triAngle = {
    PARENT: "genericTank",
    LABEL: "Tri-Angle",
    BODY: {
        HEALTH: 0.8 * base.HEALTH,
        SHIELD: 0.8 * base.SHIELD,
        DENSITY: 0.6 * base.DENSITY,
    },
    DANGER: 6,
    GUNS: [
        {
            POSITION: [18, 8, 1, 0, 0, 0, 0],
            PROPERTIES: {
                SHOOT_SETTINGS: combineStats([g.basic, g.flankGuard, g.triAngle, g.triAngleFront, { recoil: 4 }]),
                TYPE: "bullet",
                LABEL: "Front",
            },
        },
        {
            POSITION: [16, 8, 1, 0, 0, 150, 0.1],
            PROPERTIES: {
                SHOOT_SETTINGS: combineStats([g.basic, g.flankGuard, g.triAngle, g.thruster]),
                TYPE: "bullet",
                LABEL: gunCalcNames.thruster,
            },
        },
        {
            POSITION: [16, 8, 1, 0, 0, 210, 0.1],
            PROPERTIES: {
                SHOOT_SETTINGS: combineStats([g.basic, g.flankGuard, g.triAngle, g.thruster]),
                TYPE: "bullet",
                LABEL: gunCalcNames.thruster,
            },
        },
    ],
}
Class.auto3 = {
    PARENT: "genericTank",
    LABEL: "Auto-3",
    DANGER: 6,
    FACING_TYPE: ["spin", {speed: 0.02}],
    TURRETS: [
        {
            POSITION: [11, 8, 0, 0, 190, 0],
            TYPE: "autoTankGun",
        },
        {
            POSITION: [11, 8, 0, 120, 190, 0],
            TYPE: "autoTankGun",
        },
        {
            POSITION: [11, 8, 0, 240, 190, 0],
            TYPE: "autoTankGun",
        },
    ],
}

// Hexa Tank upgrades
Class.octoTank = makeMulti({
    PARENT: "genericTank",
    DANGER: 6,
    GUNS: [
        {
            POSITION: [18, 8, 1, 0, 0, 45, 0.5],
            PROPERTIES: {
                SHOOT_SETTINGS: combineStats([g.basic, g.flankGuard, g.flankGuard, g.spam]),
                TYPE: "bullet"
            }
        },
        {
            POSITION: [18, 8, 1, 0, 0, 0, 0],
            PROPERTIES: {
                SHOOT_SETTINGS: combineStats([g.basic, g.flankGuard, g.flankGuard, g.spam]),
                TYPE: "bullet"
            }
        }
    ]
}, 4, "Octo Tank")
Class.cyclone = makeMulti({
    PARENT: "genericTank",
    DANGER: 7,
    GUNS: [
        {
            POSITION: [15, 3.5, 1, 0, 0, 0, 0],
            PROPERTIES: {
                SHOOT_SETTINGS: combineStats([g.basic, g.twin, g.gunner, g.cyclone]),
                TYPE: "bullet"
            }
        },
        {
            POSITION: [15, 3.5, 1, 0, 0, 30, 0.5],
            PROPERTIES: {
                SHOOT_SETTINGS: combineStats([g.basic, g.twin, g.gunner, g.cyclone]),
                TYPE: "bullet"
            }
        },
        {
            POSITION: [15, 3.5, 1, 0, 0, 60, 0.25],
            PROPERTIES: {
                SHOOT_SETTINGS: combineStats([g.basic, g.twin, g.gunner, g.cyclone]),
                TYPE: "bullet"
            }
        },
        {
            POSITION: [15, 3.5, 1, 0, 0, 90, 0.75],
            PROPERTIES: {
                SHOOT_SETTINGS: combineStats([g.basic, g.twin, g.gunner, g.cyclone]),
                TYPE: "bullet"
            }
        }
    ]
}, 3, "Cyclone")

// Tri-Angle upgrades
Class.fighter = {
    PARENT: "genericTank",
    LABEL: "Fighter",
    BODY: {
        DENSITY: 0.6 * base.DENSITY,
    },
    DANGER: 7,
    GUNS: [
        {
            POSITION: [18, 8, 1, 0, 0, 0, 0],
            PROPERTIES: {
                SHOOT_SETTINGS: combineStats([g.basic, g.flankGuard, g.triAngle, g.triAngleFront, { recoil: 4 }]),
                TYPE: "bullet",
                LABEL: "Front",
            },
        },
        {
            POSITION: [16, 8, 1, 0, -1, 90, 0],
            PROPERTIES: {
                SHOOT_SETTINGS: combineStats([g.basic, g.flankGuard, g.triAngle, g.triAngleFront]),
                TYPE: "bullet",
                LABEL: "Side",
            },
        },
        {
            POSITION: [16, 8, 1, 0, 1, -90, 0],
            PROPERTIES: {
                SHOOT_SETTINGS: combineStats([g.basic, g.flankGuard, g.triAngle, g.triAngleFront]),
                TYPE: "bullet",
                LABEL: "Side",
            },
        },
        {
            POSITION: [16, 8, 1, 0, 0, 150, 0.1],
            PROPERTIES: {
                SHOOT_SETTINGS: combineStats([g.basic, g.flankGuard, g.triAngle, g.thruster]),
                TYPE: "bullet",
                LABEL: gunCalcNames.thruster,
            },
        },
        {
            POSITION: [16, 8, 1, 0, 0, 210, 0.1],
            PROPERTIES: {
                SHOOT_SETTINGS: combineStats([g.basic, g.flankGuard, g.triAngle, g.thruster]),
                TYPE: "bullet",
                LABEL: gunCalcNames.thruster,
            },
        },
    ],
}
Class.booster = {
    PARENT: "genericTank",
    LABEL: "Booster",
    BODY: {
        HEALTH: base.HEALTH * 0.4,
        SHIELD: base.SHIELD * 0.4,
        DENSITY: base.DENSITY * 0.3
    },
    DANGER: 7,
    GUNS: [
        {
            POSITION: [18, 8, 1, 0, 0, 0, 0],
            PROPERTIES: {
                SHOOT_SETTINGS: combineStats([g.basic, g.flankGuard, g.triAngle, g.triAngleFront, { recoil: 4 }]),
                TYPE: "bullet",
                LABEL: "Front"
            }
        },
        {
            POSITION: [14, 8, 1, 0, -1, 140, 0.6],
            PROPERTIES: {
                SHOOT_SETTINGS: combineStats([g.basic, g.flankGuard, g.triAngle, g.thruster]),
                TYPE: "bullet",
                LABEL: gunCalcNames.thruster
            }
        },
        {
            POSITION: [14, 8, 1, 0, 1, -140, 0.6],
            PROPERTIES: {
                SHOOT_SETTINGS: combineStats([g.basic, g.flankGuard, g.triAngle, g.thruster]),
                TYPE: "bullet",
                LABEL: gunCalcNames.thruster
            }
        },
        {
            POSITION: [16, 8, 1, 0, 0, 150, 0.1],
            PROPERTIES: {
                SHOOT_SETTINGS: combineStats([g.basic, g.flankGuard, g.triAngle, g.thruster]),
                TYPE: "bullet",
                LABEL: gunCalcNames.thruster
            }
        },
        {
            POSITION: [16, 8, 1, 0, 0, -150, 0.1],
            PROPERTIES: {
                SHOOT_SETTINGS: combineStats([g.basic, g.flankGuard, g.triAngle, g.thruster]),
                TYPE: "bullet",
                LABEL: gunCalcNames.thruster
            }
        }
    ]
}
Class.surfer = {
    PARENT: "genericTank",
    LABEL: "Surfer",
    BODY: {
        DENSITY: 0.6 * base.DENSITY,
    },
    DANGER: 7,
    GUNS: [
        {
            POSITION: [18, 8, 1, 0, 0, 0, 0],
            PROPERTIES: {
                SHOOT_SETTINGS: combineStats([g.basic, g.flankGuard, g.triAngle, g.triAngleFront]),
                TYPE: "bullet",
                LABEL: "Front",
            },
        },
        {
            POSITION: [7, 7.5, 0.6, 7, -1, 90, 0],
            PROPERTIES: {
                SHOOT_SETTINGS: combineStats([g.swarm]),
                TYPE: "autoswarm",
                STAT_CALCULATOR: gunCalcNames.swarm,
            },
        },
        {
            POSITION: [7, 7.5, 0.6, 7, 1, -90, 0],
            PROPERTIES: {
                SHOOT_SETTINGS: combineStats([g.swarm]),
                TYPE: "autoswarm",
                STAT_CALCULATOR: gunCalcNames.swarm,
            },
        },
        {
            POSITION: [16, 8, 1, 0, 0, 150, 0.1],
            PROPERTIES: {
                SHOOT_SETTINGS: combineStats([g.basic, g.flankGuard, g.triAngle, g.thruster]),
                TYPE: "bullet",
                LABEL: gunCalcNames.thruster,
            },
        },
        {
            POSITION: [16, 8, 1, 0, 0, 210, 0.1],
            PROPERTIES: {
                SHOOT_SETTINGS: combineStats([g.basic, g.flankGuard, g.triAngle, g.thruster]),
                TYPE: "bullet",
                LABEL: gunCalcNames.thruster,
            },
        },
    ],
}

// Auto-3 upgrades
Class.auto5 = {
    PARENT: "genericTank",
    LABEL: "Auto-5",
    DANGER: 7,
    FACING_TYPE: ["spin", {speed: 0.02}],
    TURRETS: [
        {
            POSITION: [11, 8, 0, 0, 190, 0],
            TYPE: "autoTankGun",
        },
        {
            POSITION: [11, 8, 0, 72, 190, 0],
            TYPE: "autoTankGun",
        },
        {
            POSITION: [11, 8, 0, 144, 190, 0],
            TYPE: "autoTankGun",
        },
        {
            POSITION: [11, 8, 0, 216, 190, 0],
            TYPE: "autoTankGun",
        },
        {
            POSITION: [11, 8, 0, 288, 190, 0],
            TYPE: "autoTankGun",
        },
    ],
}
Class.mega3 = {
    PARENT: "genericTank",
    LABEL: "Mega-3",
    BODY: {
        SPEED: 0.95 * base.SPEED,
    },
    DANGER: 7,
    FACING_TYPE: ["spin", {speed: 0.02}],
    TURRETS: [
        {
            POSITION: [14, 8, 0, 0, 190, 0],
            TYPE: "megaAutoTankGun",
        },
        {
            POSITION: [14, 8, 0, 120, 190, 0],
            TYPE: "megaAutoTankGun",
        },
        {
            POSITION: [14, 8, 0, 240, 190, 0],
            TYPE: "megaAutoTankGun",
        },
    ],
}
Class.auto4 = {
    PARENT: "genericTank",
    LABEL: "Auto-4",
    FACING_TYPE: ["spin", {speed: 0.02}],
    DANGER: 7,
    TURRETS: [
        {
            POSITION: [13, 6, 0, 45, 160, 0],
            TYPE: "auto4gun",
        },
        {
            POSITION: [13, 6, 0, 135, 160, 0],
            TYPE: "auto4gun",
        },
        {
            POSITION: [13, 6, 0, 225, 160, 0],
            TYPE: "auto4gun",
        },
        {
            POSITION: [13, 6, 0, 315, 160, 0],
            TYPE: "auto4gun",
        },
    ],
}
Class.banshee = {
    PARENT: "genericTank",
    LABEL: "Banshee",
    DANGER: 7,
    BODY: {
        SPEED: 0.8 * base.SPEED,
        FOV: 1.1 * base.FOV,
    },
    FACING_TYPE: ["spin", {speed: 0.02}],
    TURRETS: [
        {
            POSITION: [10, 8, 0, 0, 80, 0],
            TYPE: "bansheegun",
        },
        {
            POSITION: [10, 8, 0, 120, 80, 0],
            TYPE: "bansheegun",
        },
        {
            POSITION: [10, 8, 0, 240, 80, 0],
            TYPE: "bansheegun",
        },
    ],
    GUNS: [
        {
            POSITION: [6, 11, 1.2, 8, 0, 60, 0],
            PROPERTIES: {
                SHOOT_SETTINGS: combineStats([g.drone, g.overseer]),
                TYPE: "drone",
                AUTOFIRE: true,
                SYNCS_SKILLS: true,
                STAT_CALCULATOR: gunCalcNames.drone,
                WAIT_TO_CYCLE: true,
                MAX_CHILDREN: 2,
            },
        },
        {
            POSITION: [6, 11, 1.2, 8, 0, 180, 0],
            PROPERTIES: {
                SHOOT_SETTINGS: combineStats([g.drone, g.overseer]),
                TYPE: "drone",
                AUTOFIRE: true,
                SYNCS_SKILLS: true,
                STAT_CALCULATOR: gunCalcNames.drone,
                WAIT_TO_CYCLE: true,
                MAX_CHILDREN: 2,
            },
        },
        {
            POSITION: [6, 11, 1.2, 8, 0, 300, 0],
            PROPERTIES: {
                SHOOT_SETTINGS: combineStats([g.drone, g.overseer]),
                TYPE: "drone",
                AUTOFIRE: true,
                SYNCS_SKILLS: true,
                STAT_CALCULATOR: gunCalcNames.drone,
                WAIT_TO_CYCLE: true,
                MAX_CHILDREN: 2,
            },
        },
    ],
}

// Director upgrades
Class.overseer = makeMulti({
    PARENT: "genericTank",
    DANGER: 6,
    STAT_NAMES: statnames.drone,
    BODY: {
        SPEED: 0.9 * base.SPEED,
        FOV: 1.1 * base.FOV,
    },
    MAX_CHILDREN: 8,
    GUNS: [
        {
            POSITION: [6, 12, 1.2, 8, 0, 0, 0],
            PROPERTIES: {
                SHOOT_SETTINGS: combineStats([g.drone, g.overseer]),
                TYPE: "drone",
                AUTOFIRE: true,
                SYNCS_SKILLS: true,
                STAT_CALCULATOR: gunCalcNames.drone,
                WAIT_TO_CYCLE: true
            }
        }
    ]
}, 2, "Overseer", 90)
Class.cruiser = {
    PARENT: "genericTank",
    LABEL: "Cruiser",
    DANGER: 6,
    FACING_TYPE: "locksFacing",
    STAT_NAMES: statnames.swarm,
    BODY: {
        FOV: 1.2 * base.FOV,
    },
    GUNS: [
        {
            POSITION: [7, 7.5, 0.6, 7, 4, 0, 0],
            PROPERTIES: {
                SHOOT_SETTINGS: combineStats([g.swarm]),
                TYPE: "swarm",
                STAT_CALCULATOR: gunCalcNames.swarm,
            },
        },
        {
            POSITION: [7, 7.5, 0.6, 7, -4, 0, 0.5],
            PROPERTIES: {
                SHOOT_SETTINGS: combineStats([g.swarm]),
                TYPE: "swarm",
                STAT_CALCULATOR: gunCalcNames.swarm,
            },
        },
    ],
}
Class.underseer = makeMulti({
    PARENT: "genericTank",
    DANGER: 6,
    STAT_NAMES: statnames.drone,
    BODY: {
        SPEED: 0.9 * base.SPEED,
    },
    SHAPE: 4,
    MAX_CHILDREN: 14,
    GUNS: [
        {
            POSITION: [5.25, 12, 1.2, 8, 0, 0, 0],
            PROPERTIES: {
                SHOOT_SETTINGS: combineStats([g.drone, g.sunchip]),
                TYPE: "sunchip",
                AUTOFIRE: true,
                SYNCS_SKILLS: true,
                STAT_CALCULATOR: gunCalcNames.necro,
            }
        }
    ]
}, 2, "Underseer", 90)
Class.spawner = {
    PARENT: "genericTank",
    LABEL: "Spawner",
    DANGER: 6,
    STAT_NAMES: statnames.drone,
    BODY: {
        SPEED: base.SPEED * 0.8,
        FOV: 1.1,
    },
    GUNS: [
        {
            POSITION: [4.5, 10, 1, 10.5, 0, 0, 0],
        },
        {
            POSITION: [1, 12, 1, 15, 0, 0, 0],
            PROPERTIES: {
                MAX_CHILDREN: 4,
                SHOOT_SETTINGS: combineStats([g.factory, g.babyfactory]),
                TYPE: "minion",
                STAT_CALCULATOR: gunCalcNames.drone,
                AUTOFIRE: true,
                SYNCS_SKILLS: true,
            },
        },
        {
            POSITION: [11.5, 12, 1, 0, 0, 0, 0],
        },
    ],
}
Class.manager = {
    PARENT: "genericTank",
    LABEL: "Manager",
    DANGER: 7,
    STAT_NAMES: statnames.drone,
    BODY: {
        SPEED: 0.85 * base.SPEED,
        FOV: 1.1 * base.FOV,
    },
    INVISIBLE: [0.08, 0.03],
    TOOLTIP: "Stay still to turn invisible.",
    MAX_CHILDREN: 8,
    GUNS: [
        {
            POSITION: [6, 12, 1.2, 8, 0, 0, 0],
            PROPERTIES: {
                SHOOT_SETTINGS: combineStats([g.drone, g.overseer, { reload: 0.5 }]),
                TYPE: "drone",
                AUTOFIRE: true,
                SYNCS_SKILLS: true,
                STAT_CALCULATOR: gunCalcNames.drone,
            },
        },
    ],
}
Class.bigCheese = {
    PARENT: "genericTank",
    LABEL: "Big Cheese",
    STAT_NAMES: statnames.drone,
    DANGER: 7,
    BODY: {
        FOV: base.FOV * 1.1,
    },
    GUNS: [
        {
            POSITION: [16, 16, 1.4, 0, 0, 0, 0],
            PROPERTIES: {
                SHOOT_SETTINGS: combineStats([g.drone, g.bigCheese]),
                TYPE: "drone",
                AUTOFIRE: true,
                SYNCS_SKILLS: true,
                STAT_CALCULATOR: gunCalcNames.drone,
                MAX_CHILDREN: 1,
            },
        },
    ],
}

// Overseer upgrades
Class.overlord = makeMulti({
    PARENT: "genericTank",
    DANGER: 7,
    STAT_NAMES: statnames.drone,
    BODY: {
        SPEED: 0.8 * base.SPEED,
        FOV: 1.1 * base.FOV,
    },
    MAX_CHILDREN: 8,
    GUNS: [
        {
            POSITION: [6, 12, 1.2, 8, 0, 0, 0],
            PROPERTIES: {
                SHOOT_SETTINGS: combineStats([g.drone, g.overseer]),
                TYPE: "drone",
                AUTOFIRE: true,
                SYNCS_SKILLS: true,
                STAT_CALCULATOR: gunCalcNames.drone,
                WAIT_TO_CYCLE: true
            }
        }
    ]
}, 4, "Overlord", 90)
Class.overdrive = makeMulti({
    PARENT: "genericTank",
    DANGER: 7,
    STAT_NAMES: statnames.drone,
    BODY: {
        SPEED: 0.9 * base.SPEED,
        FOV: 1.1 * base.FOV,
    },
    TURRETS: [
        {
            POSITION: [9, 0, 0, 0, 360, 1],
            TYPE: "overdriveDeco",
        },
    ],
    GUNS: [
        {
            POSITION: [6, 12, 1.2, 8, 0, 0, 0],
            PROPERTIES: {
                SHOOT_SETTINGS: combineStats([g.drone, g.overseer]),
                TYPE: "turretedDrone",
                AUTOFIRE: true,
                SYNCS_SKILLS: true,
                STAT_CALCULATOR: gunCalcNames.drone,
                WAIT_TO_CYCLE: true,
                MAX_CHILDREN: 4
            }
        }
    ]
}, 2, "Overdrive", 90)
Class.commander = makeMulti({
    PARENT: "genericTank",
    STAT_NAMES: statnames.drone,
    DANGER: 7,
    BODY: {
        FOV: base.FOV * 1.15,
    },
    GUNS: [
        {
            POSITION: [8, 11, 1.3, 6, 0, 0, 0],
            PROPERTIES: {
                SHOOT_SETTINGS: combineStats([g.drone]),
                TYPE: "drone",
                AUTOFIRE: true,
                SYNCS_SKILLS: true,
                MAX_CHILDREN: 2,
                STAT_CALCULATOR: gunCalcNames.drone,
            },
        },
        {
            POSITION: [7, 7.5, 0.6, 7, 0, 180, 0],
            PROPERTIES: {
                SHOOT_SETTINGS: combineStats([g.swarm, g.commander]),
                TYPE: "swarm",
                STAT_CALCULATOR: gunCalcNames.swarm,
            },
        }
    ]
}, 3, "Commander")

// Cruiser upgrades
Class.carrier = {
    PARENT: "genericTank",
    LABEL: "Carrier",
    DANGER: 7,
    STAT_NAMES: statnames.swarm,
    FACING_TYPE: "locksFacing",
    BODY: {
        FOV: base.FOV * 1.2,
    },
    GUNS: [
        {
            POSITION: [7, 8, 0.6, 7, 0, 0, 0],
            PROPERTIES: {
                SHOOT_SETTINGS: combineStats([g.swarm, g.battleship, g.carrier]),
                TYPE: "swarm",
                STAT_CALCULATOR: gunCalcNames.swarm,
            },
        },
        {
            POSITION: [7, 8, 0.6, 7, 2, 30, 0.5],
            PROPERTIES: {
                SHOOT_SETTINGS: combineStats([g.swarm, g.battleship, g.carrier]),
                TYPE: "swarm",
                STAT_CALCULATOR: gunCalcNames.swarm,
            },
        },
        {
            POSITION: [7, 8, 0.6, 7, -2, -30, 0.5],
            PROPERTIES: {
                SHOOT_SETTINGS: combineStats([g.swarm, g.battleship, g.carrier]),
                TYPE: "swarm",
                STAT_CALCULATOR: gunCalcNames.swarm,
            },
        },
    ],
}
Class.battleship = {
    PARENT: "genericTank",
    LABEL: "Battleship",
    DANGER: 7,
    STAT_NAMES: statnames.swarm,
    FACING_TYPE: "locksFacing",
    BODY: {
        FOV: 1.2 * base.FOV
    },
    GUNS: [
        {
            POSITION: [7, 7.5, 0.6, 7, 4, 90, 0],
            PROPERTIES: {
                SHOOT_SETTINGS: combineStats([g.swarm, g.battleship]),
                TYPE: "swarm",
                STAT_CALCULATOR: gunCalcNames.swarm,
                LABEL: "Guided"
            }
        },
        {
            POSITION: [7, 7.5, 0.6, 7, -4, 90, 0.5],
            PROPERTIES: {
                SHOOT_SETTINGS: combineStats([g.swarm]),
                TYPE: ["autoswarm"],
                STAT_CALCULATOR: gunCalcNames.swarm,
                LABEL: "Autonomous"
            }
        },
        {
            POSITION: [7, 7.5, 0.6, 7, 4, 270, 0],
            PROPERTIES: {
                SHOOT_SETTINGS: combineStats([g.swarm]),
                TYPE: ["autoswarm"],
                STAT_CALCULATOR: gunCalcNames.swarm,
                LABEL: "Autonomous"
            }
        },
        {
            POSITION: [7, 7.5, 0.6, 7, -4, 270, 0.5],
            PROPERTIES: {
                SHOOT_SETTINGS: combineStats([g.swarm, g.battleship]),
                TYPE: "swarm",
                STAT_CALCULATOR: gunCalcNames.swarm,
                LABEL: "Guided"
            }
        }
    ]
}
Class.fortress = {
    PARENT: "genericTank",
    LABEL: "Fortress",
    DANGER: 7,
    STAT_NAMES: statnames.mixed,
    BODY: {
        SPEED: 0.8 * base.SPEED,
        FOV: 1.2 * base.FOV,
    },
    GUNS: [
        {
            POSITION: [7, 7.5, 0.6, 7, 0, 60, 0],
            PROPERTIES: {
                SHOOT_SETTINGS: combineStats([g.swarm]),
                TYPE: [
                    "swarm",
                    {
                        CONTROLLERS: ["canRepel"],
                    },
                ],
                STAT_CALCULATOR: gunCalcNames.swarm,
            },
        },
        {
            POSITION: [7, 7.5, 0.6, 7, 0, 180, 1 / 3],
            PROPERTIES: {
                SHOOT_SETTINGS: combineStats([g.swarm]),
                TYPE: [
                    "swarm",
                    {
                        CONTROLLERS: ["canRepel"],
                    },
                ],
                STAT_CALCULATOR: gunCalcNames.swarm,
            },
        },
        {
            POSITION: [7, 7.5, 0.6, 7, 0, 300, 2 / 3],
            PROPERTIES: {
                SHOOT_SETTINGS: combineStats([g.swarm]),
                TYPE: [
                    "swarm",
                    {
                        CONTROLLERS: ["canRepel"],
                    },
                ],
                STAT_CALCULATOR: gunCalcNames.swarm,
            },
        },
        {
            POSITION: [14, 9, 1, 0, 0, 0, 0],
        },
        {
            POSITION: [4, 9, 1.5, 14, 0, 0, 0],
            PROPERTIES: {
                SHOOT_SETTINGS: combineStats([g.trap, { range: 0.5 }, { speed: 0.7, maxSpeed: 0.7 }]),
                TYPE: "trap",
                STAT_CALCULATOR: gunCalcNames.trap,
            },
        },
        {
            POSITION: [14, 9, 1, 0, 0, 120, 0],
        },
        {
            POSITION: [4, 9, 1.5, 14, 0, 120, 0],
            PROPERTIES: {
                SHOOT_SETTINGS: combineStats([g.trap, { range: 0.5 }, { speed: 0.7, maxSpeed: 0.7 }]),
                TYPE: "trap",
                STAT_CALCULATOR: gunCalcNames.trap,
            },
        },
        {
            POSITION: [14, 9, 1, 0, 0, 240, 0],
        },
        {
            POSITION: [4, 9, 1.5, 14, 0, 240, 0],
            PROPERTIES: {
                SHOOT_SETTINGS: combineStats([g.trap, { range: 0.5 }, { speed: 0.7, maxSpeed: 0.7 }]),
                TYPE: "trap",
                STAT_CALCULATOR: gunCalcNames.trap,
            },
        },
    ],
}

// Underseer upgrades
Class.necromancer = {
    PARENT: "genericTank",
    LABEL: "Necromancer",
    DANGER: 7,
    STAT_NAMES: statnames.necro,
    BODY: {
        SPEED: 0.8 * base.SPEED,
    },
    SHAPE: 4,
    MAX_CHILDREN: 14,
    GUNS: [
        {
            POSITION: [5.25, 12, 1.2, 8, 0, 90, 0],
            PROPERTIES: {
                SHOOT_SETTINGS: combineStats([g.drone, g.sunchip]),
                TYPE: "sunchip",
                AUTOFIRE: true,
                SYNCS_SKILLS: true,
                STAT_CALCULATOR: gunCalcNames.necro,
            },
        },
        {
            POSITION: [5.25, 12, 1.2, 8, 0, 270, 0.5],
            PROPERTIES: {
                SHOOT_SETTINGS: combineStats([g.drone, g.sunchip]),
                TYPE: "sunchip",
                AUTOFIRE: true,
                SYNCS_SKILLS: true,
                STAT_CALCULATOR: gunCalcNames.necro,
            },
        },
        {
            POSITION: [5.25, 12, 1.2, 8, 0, 0, 0.25],
            PROPERTIES: {
                SHOOT_SETTINGS: combineStats([g.drone, g.sunchip]),
                TYPE: "sunchip",
                AUTOFIRE: true,
                SYNCS_SKILLS: true,
                MAX_CHILDREN: 4,
                STAT_CALCULATOR: gunCalcNames.necro,
            },
        },
        {
            POSITION: [5.25, 12, 1.2, 8, 0, 180, 0.75],
            PROPERTIES: {
                SHOOT_SETTINGS: combineStats([g.drone, g.sunchip]),
                TYPE: "sunchip",
                AUTOFIRE: true,
                SYNCS_SKILLS: true,
                MAX_CHILDREN: 4,
                STAT_CALCULATOR: gunCalcNames.necro,
            },
        },
    ],
}
Class.maleficitor = {
    PARENT: "genericTank",
    LABEL: "Maleficitor",
    DANGER: 7,
    TOOLTIP: "Press R and wait to turn your drones invisible.",
    STAT_NAMES: statnames.necro,
    BODY: {
        SPEED: base.SPEED * 0.85,
    },
    SHAPE: 4,
    MAX_CHILDREN: 20,
    GUNS: [
        {
            POSITION: [5.25, 12, 1.2, 8, 0, 0, 0],
            PROPERTIES: {
                SHOOT_SETTINGS: combineStats([g.drone, g.sunchip, g.maleficitor]),
                TYPE: [
                    "sunchip",
                    {
                        INVISIBLE: [0.06, 0.03],
                    },
                ],
                AUTOFIRE: true,
                SYNCS_SKILLS: true,
                STAT_CALCULATOR: gunCalcNames.necro,
            },
        },
    ],
}
Class.infestor = makeMulti({
    PARENT: "genericTank",
    DANGER: 7,
    STAT_NAMES: statnames.drone,
    BODY: {
        SPEED: base.SPEED * 0.9,
    },
    MAX_CHILDREN: 20,
    GUNS: [
        {
            POSITION: [7.25, 6, 1.2, 6, -5, 0, 0],
            PROPERTIES: {
                SHOOT_SETTINGS: combineStats([g.drone, g.sunchip]),
                TYPE: "eggchip",
                AUTOFIRE: true,
                SYNCS_SKILLS: true,
                STAT_CALCULATOR: gunCalcNames.necro
            }
        },
        {
            POSITION: [7.25, 6, 1.2, 6, 5, 0, 0],
            PROPERTIES: {
                SHOOT_SETTINGS: combineStats([g.drone, g.sunchip]),
                TYPE: "eggchip",
                AUTOFIRE: true,
                SYNCS_SKILLS: true,
                STAT_CALCULATOR: gunCalcNames.necro
            }
        }
    ]
}, 2, "Infestor", 90)

// Spawner upgrades
Class.factory = {
    PARENT: "genericTank",
    LABEL: "Factory",
    DANGER: 7,
    STAT_NAMES: statnames.drone,
    BODY: {
        SPEED: base.SPEED * 0.8,
        FOV: 1.1,
    },
    MAX_CHILDREN: 6,
    GUNS: [
        {
            POSITION: [5, 11, 1, 10.5, 0, 0, 0],
        },
        {
            POSITION: [2, 14, 1, 15.5, 0, 0, 0],
            PROPERTIES: {
                SHOOT_SETTINGS: combineStats([g.factory]),
                TYPE: "minion",
                STAT_CALCULATOR: gunCalcNames.drone,
                AUTOFIRE: true,
                SYNCS_SKILLS: true,
            },
        },
        {
            POSITION: [12, 14, 1, 0, 0, 0, 0],
        },
    ],
}

// Pounder upgrades
Class.destroyer = {
    PARENT: "genericTank",
    LABEL: "Destroyer",
    DANGER: 6,
    GUNS: [
        {
            POSITION: [21, 14, 1, 0, 0, 0, 0],
            PROPERTIES: {
                SHOOT_SETTINGS: combineStats([g.basic, g.pounder, g.destroyer]),
                TYPE: "bullet",
            },
        },
    ],
}
Class.artillery = {
    PARENT: "genericTank",
    LABEL: "Artillery",
    DANGER: 6,
    GUNS: [
        {
            POSITION: [17, 3, 1, 0, -6, -7, 0.25],
            PROPERTIES: {
                SHOOT_SETTINGS: combineStats([g.basic, g.pelleter, g.artillery]),
                TYPE: "bullet",
                LABEL: "Secondary",
            },
        },
        {
            POSITION: [17, 3, 1, 0, 6, 7, 0.75],
            PROPERTIES: {
                SHOOT_SETTINGS: combineStats([g.basic, g.pelleter, g.artillery]),
                TYPE: "bullet",
                LABEL: "Secondary",
            },
        },
        {
            POSITION: [19, 12, 1, 0, 0, 0, 0],
            PROPERTIES: {
                SHOOT_SETTINGS: combineStats([g.basic, g.pounder, g.artillery]),
                TYPE: "bullet",
                LABEL: "Heavy",
            },
        },
    ],
}
Class.launcher = {
    PARENT: "genericTank",
    LABEL: "Launcher",
    DANGER: 6,
    BODY: {
        FOV: base.FOV * 1.1,
    },
    GUNS: [
        {
            POSITION: [10, 9, 1, 9, 0, 0, 0],
        },
        {
            POSITION: [17, 13, 1, 0, 0, 0, 0],
            PROPERTIES: {
                SHOOT_SETTINGS: combineStats([g.basic, g.pounder, g.launcher]),
                TYPE: "minimissile",
                STAT_CALCULATOR: gunCalcNames.sustained,
            },
        },
    ],
}
Class.shotgun = {
    PARENT: "genericTank",
    LABEL: "Shotgun",
    DANGER: 7,
    GUNS: [
        {
            POSITION: [4, 3, 1, 11, -3, 0, 0],
            PROPERTIES: {
                SHOOT_SETTINGS: combineStats([g.basic, g.machineGun, g.shotgun]),
                TYPE: "bullet",
            },
        },
        {
            POSITION: [4, 3, 1, 11, 3, 0, 0],
            PROPERTIES: {
                SHOOT_SETTINGS: combineStats([g.basic, g.machineGun, g.shotgun]),
                TYPE: "bullet",
            },
        },
        {
            POSITION: [4, 4, 1, 13, 0, 0, 0],
            PROPERTIES: {
                SHOOT_SETTINGS: combineStats([g.basic, g.machineGun, g.shotgun]),
                TYPE: "casing",
            },
        },
        {
            POSITION: [1, 4, 1, 12, -1, 0, 0],
            PROPERTIES: {
                SHOOT_SETTINGS: combineStats([g.basic, g.machineGun, g.shotgun]),
                TYPE: "casing",
            },
        },
        {
            POSITION: [1, 4, 1, 11, 1, 0, 0],
            PROPERTIES: {
                SHOOT_SETTINGS: combineStats([g.basic, g.machineGun, g.shotgun]),
                TYPE: "casing",
            },
        },
        {
            POSITION: [1, 3, 1, 13, -1, 0, 0],
            PROPERTIES: {
                SHOOT_SETTINGS: combineStats([g.basic, g.machineGun, g.shotgun]),
                TYPE: "bullet",
            },
        },
        {
            POSITION: [1, 3, 1, 13, 1, 0, 0],
            PROPERTIES: {
                SHOOT_SETTINGS: combineStats([g.basic, g.machineGun, g.shotgun]),
                TYPE: "bullet",
            },
        },
        {
            POSITION: [1, 2, 1, 13, 2, 0, 0],
            PROPERTIES: {
                SHOOT_SETTINGS: combineStats([g.basic, g.machineGun, g.shotgun]),
                TYPE: "casing",
            },
        },
        {
            POSITION: [1, 2, 1, 13, -2, 0, 0],
            PROPERTIES: {
                SHOOT_SETTINGS: combineStats([g.basic, g.machineGun, g.shotgun]),
                TYPE: "casing",
            },
        },
        {
            POSITION: [15, 14, 1, 6, 0, 0, 0],
            PROPERTIES: {
                SHOOT_SETTINGS: combineStats([g.basic, g.machineGun, g.shotgun, g.fake]),
                TYPE: "casing",
            },
        },
        {
            POSITION: [8, 14, -1.3, 4, 0, 0, 0],
        },
    ],
}

// Destroyer upgrades
Class.annihilator = {
    PARENT: "genericTank",
    LABEL: "Annihilator",
    DANGER: 7,
    GUNS: [
        {
            POSITION: [20.5, 19.5, 1, 0, 0, 0, 0],
            PROPERTIES: {
                SHOOT_SETTINGS: combineStats([g.basic, g.pounder, g.destroyer, g.annihilator]),
                TYPE: "bullet",
            },
        },
    ],
}

// Artillery upgrades
Class.mortar = {
    PARENT: "genericTank",
    LABEL: "Mortar",
    DANGER: 7,
    GUNS: [
        {
            POSITION: [13, 3, 1, 0, -8, -7, 0.6],
            PROPERTIES: {
                SHOOT_SETTINGS: combineStats([g.basic, g.pelleter, g.artillery, g.twin]),
                TYPE: "bullet",
                LABEL: "Secondary",
            },
        },
        {
            POSITION: [13, 3, 1, 0, 8, 7, 0.8],
            PROPERTIES: {
                SHOOT_SETTINGS: combineStats([g.basic, g.pelleter, g.artillery, g.twin]),
                TYPE: "bullet",
                LABEL: "Secondary",
            },
        },
        {
            POSITION: [17, 3, 1, 0, -6, -7, 0.2],
            PROPERTIES: {
                SHOOT_SETTINGS: combineStats([g.basic, g.pelleter, g.artillery, g.twin]),
                TYPE: "bullet",
                LABEL: "Secondary",
            },
        },
        {
            POSITION: [17, 3, 1, 0, 6, 7, 0.4],
            PROPERTIES: {
                SHOOT_SETTINGS: combineStats([g.basic, g.pelleter, g.artillery, g.twin]),
                TYPE: "bullet",
                LABEL: "Secondary",
            },
        },
        {
            POSITION: [19, 12, 1, 0, 0, 0, 0],
            PROPERTIES: {
                SHOOT_SETTINGS: combineStats([g.basic, g.pounder, g.artillery]),
                TYPE: "bullet",
                LABEL: "Heavy",
            },
        },
    ],
}
Class.ordnance = {
    PARENT: "genericTank",
    LABEL: "Ordnance",
    DANGER: 7,
    BODY: {
        SPEED: base.SPEED * 0.9,
        FOV: base.FOV * 1.25,
    },
    CONTROLLERS: ["zoom"],
    TOOLTIP: "Hold right click to zoom.",
    GUNS: [
        {
            POSITION: [17, 3, 1, 0, -5.75, -6, 0.25],
            PROPERTIES: {
                SHOOT_SETTINGS: combineStats([g.basic, g.pelleter, g.artillery]),
                TYPE: "bullet",
                LABEL: "Secondary",
            },
        },
        {
            POSITION: [17, 3, 1, 0, 5.75, 6, 0.75],
            PROPERTIES: {
                SHOOT_SETTINGS: combineStats([g.basic, g.pelleter, g.artillery]),
                TYPE: "bullet",
                LABEL: "Secondary",
            },
        },
        {
            POSITION: [24, 8, 1, 0, 0, 0, 0],
            PROPERTIES: {
                SHOOT_SETTINGS: combineStats([g.basic, g.sniper, g.hunter, g.hunterSecondary]),
                TYPE: "bullet",
            },
        },
        {
            POSITION: [21, 11, 1, 0, 0, 0, 0.25],
            PROPERTIES: {
                SHOOT_SETTINGS: combineStats([g.basic, g.sniper, g.hunter]),
                TYPE: "bullet",
            },
        },
    ],
}
Class.beekeeper = {
    PARENT: "genericTank",
    LABEL: "Beekeeper",
    DANGER: 7,
    GUNS: [
        {
            POSITION: [14, 3, 1, 0, -6, -7, 0.25],
            PROPERTIES: {
                SHOOT_SETTINGS: combineStats([g.swarm, g.bee]),
                TYPE: ["bee", { INDEPENDENT: true }],
                SYNCS_SKILLS: true,
                STAT_CALCULATOR: gunCalcNames.drone,
                WAIT_TO_CYCLE: true,
                LABEL: "Secondary",
            },
        },
        {
            POSITION: [14, 3, 1, 0, 6, 7, 0.75],
            PROPERTIES: {
                SHOOT_SETTINGS: combineStats([g.swarm, g.bee]),
                TYPE: ["bee", { INDEPENDENT: true }],
                SYNCS_SKILLS: true,
                STAT_CALCULATOR: gunCalcNames.drone,
                WAIT_TO_CYCLE: true,
                LABEL: "Secondary",
            },
        },
        {
            POSITION: [19, 12, 1, 0, 0, 0, 0],
            PROPERTIES: {
                SHOOT_SETTINGS: combineStats([g.basic, g.pounder, g.artillery]),
                TYPE: "bullet",
                LABEL: "Heavy",
            },
        },
    ],
}
Class.fieldGun = {
    PARENT: "genericTank",
    LABEL: "Field Gun",
    BODY: {
        FOV: base.FOV * 1.1,
    },
    DANGER: 7,
    GUNS: [
        {
            POSITION: [15, 3, 1, 0, -6, -7, 0.25],
            PROPERTIES: {
                SHOOT_SETTINGS: combineStats([g.basic, g.pelleter, g.artillery]),
                TYPE: "bullet",
                LABEL: "Secondary",
            },
        },
        {
            POSITION: [15, 3, 1, 0, 6, 7, 0.75],
            PROPERTIES: {
                SHOOT_SETTINGS: combineStats([g.basic, g.pelleter, g.artillery]),
                TYPE: "bullet",
                LABEL: "Secondary",
            },
        },
        {
            /*** LENGTH  WIDTH   ASPECT    X       Y     ANGLE   DELAY */
            POSITION: [10, 9, 1, 9, 0, 0, 0],
        },
        {
            POSITION: [17, 13, 1, 0, 0, 0, 0],
            PROPERTIES: {
                SHOOT_SETTINGS: combineStats([g.basic, g.pounder, g.artillery, g.artillery]),
                TYPE: "minimissile",
                STAT_CALCULATOR: gunCalcNames.sustained,
            },
        },
    ],
}

// Launcher upgrades
Class.skimmer = {
    PARENT: "genericTank",
    LABEL: "Skimmer",
    DANGER: 7,
    BODY: {
        FOV: 1.15 * base.FOV,
    },
    GUNS: [
        {
            POSITION: [10, 14, -0.5, 9, 0, 0, 0],
        },
        {
            POSITION: [17, 15, 1, 0, 0, 0, 0],
            PROPERTIES: {
                SHOOT_SETTINGS: combineStats([g.basic, g.pounder, g.artillery, g.artillery, g.skimmer]),
                TYPE: "missile",
                STAT_CALCULATOR: gunCalcNames.sustained,
            },
        },
    ],
}
Class.twister = {
    PARENT: "genericTank",
    LABEL: "Twister",
    TOOLTIP: "Hold right click to reverse missile rotation.",
    DANGER: 7,
    BODY: {
        FOV: 1.1 * base.FOV,
    },
    GUNS: [
        {
            POSITION: [10, 13, -0.5, 9, 0, 0, 0],
        },
        {
            POSITION: [17, 14, -1.4, 0, 0, 0, 0],
            PROPERTIES: {
                SHOOT_SETTINGS: combineStats([g.basic, g.pounder, g.artillery, g.artillery, g.skimmer, { reload: 4/3 }]),
                TYPE: "spinmissile",
                STAT_CALCULATOR: gunCalcNames.sustained,
            },
        },
    ],
}
Class.swarmer = {
    PARENT: "genericTank",
    DANGER: 7,
    LABEL: "Swarmer",
    GUNS: [
        {
            POSITION: [15, 14, -1.2, 5, 0, 0, 0],
            PROPERTIES: {
                SHOOT_SETTINGS: combineStats([g.basic, g.pounder, g.destroyer, g.hive]),
                TYPE: "hive",
            },
        },
        {
            POSITION: [15, 12, 1, 5, 0, 0, 0],
        },
    ],
}
Class.rocketeer = {
    PARENT: "genericTank",
    LABEL: "Rocketeer",
    BODY: {
        FOV: 1.15 * base.FOV,
    },
    DANGER: 7,
    GUNS: [
        {
            POSITION: [10, 12.5, -0.7, 10, 0, 0, 0],
            PROPERTIES: {
                SHOOT_SETTINGS: combineStats([g.basic, g.pounder, g.launcher, g.rocketeer]),
                TYPE: "rocketeerMissile",
                STAT_CALCULATOR: gunCalcNames.sustained,
            },
        },
        {
            POSITION: [17, 18, 0.65, 0, 0, 0, 0],
        },
    ],
}

// Trapper upgrades
Class.builder = {
    PARENT: "genericTank",
    LABEL: "Builder",
    DANGER: 6,
    STAT_NAMES: statnames.trap,
    BODY: {
        SPEED: 0.8 * base.SPEED,
        FOV: 1.15 * base.FOV
    },
    GUNS: [
        {
            POSITION: [18, 12, 1, 0, 0, 0, 0],
        },
        {
            POSITION: [2, 12, 1.1, 18, 0, 0, 0],
            PROPERTIES: {
                SHOOT_SETTINGS: combineStats([g.trap, g.setTrap]),
                TYPE: "setTrap",
                STAT_CALCULATOR: gunCalcNames.block
            }
        }
    ]
}
Class.triTrapper = makeMulti({
    PARENT: "genericTank",
    DANGER: 6,
    STAT_NAMES: statnames.trap,
    GUNS: [
        {
            POSITION: [15, 7, 1, 0, 0, 0, 0],
        },
        {
            POSITION: [3, 7, 1.7, 15, 0, 0, 0],
            PROPERTIES: {
                SHOOT_SETTINGS: combineStats([g.trap, g.flankGuard]),
                TYPE: "trap",
                STAT_CALCULATOR: gunCalcNames.trap
            }
        }
    ]
}, 3, "Tri-Trapper")
Class.trapGuard = makeGuard({
    PARENT: "genericTank",
    LABEL: "Trap",
    STAT_NAMES: statnames.mixed,
    GUNS: [
        {
            POSITION: [20, 8, 1, 0, 0, 0, 0],
            PROPERTIES: {
                SHOOT_SETTINGS: combineStats([g.basic, g.flankGuard, g.flankGuard]),
                TYPE: "bullet"
            }
        }
    ]
})

// Builder upgrades
Class.construct = { // it's "construct" and not "constructor" because "constructor" breaks things
    PARENT: "genericTank",
    LABEL: "Constructor",
    STAT_NAMES: statnames.trap,
    DANGER: 7,
    BODY: {
        SPEED: 0.7 * base.SPEED,
        FOV: 1.15 * base.FOV
    },
    GUNS: [
        {
            POSITION: [18, 18, 1, 0, 0, 0, 0],
        },
        {
            POSITION: [2, 18, 1.2, 18, 0, 0, 0],
            PROPERTIES: {
                SHOOT_SETTINGS: combineStats([g.trap, g.setTrap, g.construct]),
                TYPE: "setTrap",
                STAT_CALCULATOR: gunCalcNames.block
            }
        }
    ]
}
Class.engineer = {
    PARENT: "genericTank",
    DANGER: 7,
    LABEL: "Engineer",
    STAT_NAMES: statnames.trap,
    BODY: {
        SPEED: 0.75 * base.SPEED,
        FOV: 1.15 * base.FOV,
    },
    GUNS: [
        {
            POSITION: [5, 11, 1, 10.5, 0, 0, 0],
        },
        {
            POSITION: [3, 14, 1, 15.5, 0, 0, 0],
        },
        {
            POSITION: [2, 14, 1.3, 18, 0, 0, 0],
            PROPERTIES: {
                MAX_CHILDREN: 6,
                SHOOT_SETTINGS: combineStats([g.trap, g.setTrap]),
                TYPE: "pillbox",
                SYNCS_SKILLS: true,
                DESTROY_OLDEST_CHILD: true,
                STAT_CALCULATOR: gunCalcNames.block
            },
        },
        {
            POSITION: [4, 14, 1, 8, 0, 0, 0],
        },
    ],
}
Class.boomer = {
    PARENT: "genericTank",
    DANGER: 7,
    LABEL: "Boomer",
    STAT_NAMES: statnames.trap,
    FACING_TYPE: "locksFacing",
    BODY: {
        SPEED: base.SPEED * 0.8,
        FOV: base.FOV * 1.15,
    },
    GUNS: [
        {
            POSITION: [5, 10, 1, 14, 0, 0, 0],
        },
        {
            POSITION: [6, 10, -1.5, 7, 0, 0, 0],
        },
        {
            POSITION: [2, 10, 1.3, 18, 0, 0, 0],
            PROPERTIES: {
                SHOOT_SETTINGS: combineStats([g.trap, g.setTrap, g.boomerang]),
                TYPE: "boomerang",
                STAT_CALCULATOR: gunCalcNames.block
            },
        },
    ],
}
Class.assembler = {
    PARENT: "genericTank",
    DANGER: 7,
    LABEL: 'Assembler',
    STAT_NAMES: statnames.trap,
    BODY: {
        SPEED: 0.8 * base.SPEED,
        FOV: 1.15 * base.FOV,
    },
    GUNS: [
        {
            POSITION: [18, 12, 1, 0, 0, 0, 0],
        },
        {
            POSITION: [2, 12, 1.1, 18, 0, 0, 0],
            PROPERTIES: {
                SHOOT_SETTINGS: combineStats([g.trap, g.setTrap]),
                TYPE: 'assemblerTrap',
                MAX_CHILDREN: 8,
                STAT_CALCULATOR: gunCalcNames.block,
            }
        }
    ],
    TURRETS: [
        {
            /**        SIZE X   Y  ANGLE ARC */
            POSITION: [2.5, 14, 0, 0,    360, 1],
            TYPE: 'assemblerDot'
        }
    ]
}

// Tri-Trapper upgrades
Class.hexaTrapper = makeAuto(makeMulti({
    PARENT: "genericTank",
    DANGER: 7,
    BODY: {
        SPEED: 0.8 * base.SPEED,
    },
    STAT_NAMES: statnames.trap,
    HAS_NO_RECOIL: true,
    GUNS: [
        {
            POSITION: [15, 7, 1, 0, 0, 0, 0],
        },
        {
            POSITION: [3, 7, 1.7, 15, 0, 0, 0],
            PROPERTIES: {
                SHOOT_SETTINGS: combineStats([g.trap, g.hexaTrapper]),
                TYPE: "trap",
                STAT_CALCULATOR: gunCalcNames.trap,
            },
        },
        {
            POSITION: [15, 7, 1, 0, 0, 180, 0.5],
        },
        {
            POSITION: [3, 7, 1.7, 15, 0, 180, 0.5],
            PROPERTIES: {
                SHOOT_SETTINGS: combineStats([g.trap, g.hexaTrapper]),
                TYPE: "trap",
                STAT_CALCULATOR: gunCalcNames.trap,
            },
        },
    ],
}, 3), "Hexa-Trapper")
Class.septaTrapper = (() => {
    let a = 360 / 7,
        d = 1 / 7;
    return {
        PARENT: "genericTank",
        LABEL: "Septa-Trapper",
        DANGER: 7,
        BODY: {
            SPEED: base.SPEED * 0.8,
        },
        STAT_NAMES: statnames.trap,
        HAS_NO_RECOIL: true,
        GUNS: [
            {
                POSITION: [15, 7, 1, 0, 0, 0, 0],
            },
            {
                POSITION: [3, 7, 1.7, 15, 0, 0, 0],
                PROPERTIES: {
                    SHOOT_SETTINGS: combineStats([g.trap, g.hexaTrapper]),
                    TYPE: "trap",
                    STAT_CALCULATOR: gunCalcNames.trap,
                },
            },
            {
                POSITION: [15, 7, 1, 0, 0, a, 4 * d],
            },
            {
                POSITION: [3, 7, 1.7, 15, 0, a, 4 * d],
                PROPERTIES: {
                    SHOOT_SETTINGS: combineStats([g.trap, g.hexaTrapper]),
                    TYPE: "trap",
                    STAT_CALCULATOR: gunCalcNames.trap,
                },
            },
            {
                POSITION: [15, 7, 1, 0, 0, 2 * a, 1 * d],
            },
            {
                POSITION: [3, 7, 1.7, 15, 0, 2 * a, 1 * d],
                PROPERTIES: {
                    SHOOT_SETTINGS: combineStats([g.trap, g.hexaTrapper]),
                    TYPE: "trap",
                    STAT_CALCULATOR: gunCalcNames.trap,
                },
            },
            {
                POSITION: [15, 7, 1, 0, 0, 3 * a, 5 * d],
            },
            {
                POSITION: [3, 7, 1.7, 15, 0, 3 * a, 5 * d],
                PROPERTIES: {
                    SHOOT_SETTINGS: combineStats([g.trap, g.hexaTrapper]),
                    TYPE: "trap",
                    STAT_CALCULATOR: gunCalcNames.trap,
                },
            },
            {
                POSITION: [15, 7, 1, 0, 0, 4 * a, 2 * d],
            },
            {
                POSITION: [3, 7, 1.7, 15, 0, 4 * a, 2 * d],
                PROPERTIES: {
                    SHOOT_SETTINGS: combineStats([g.trap, g.hexaTrapper]),
                    TYPE: "trap",
                    STAT_CALCULATOR: gunCalcNames.trap,
                },
            },
            {
                POSITION: [15, 7, 1, 0, 0, 5 * a, 6 * d],
            },
            {
                POSITION: [3, 7, 1.7, 15, 0, 5 * a, 6 * d],
                PROPERTIES: {
                    SHOOT_SETTINGS: combineStats([g.trap, g.hexaTrapper]),
                    TYPE: "trap",
                    STAT_CALCULATOR: gunCalcNames.trap,
                },
            },
            {
                POSITION: [15, 7, 1, 0, 0, 6 * a, 3 * d],
            },
            {
                POSITION: [3, 7, 1.7, 15, 0, 6 * a, 3 * d],
                PROPERTIES: {
                    SHOOT_SETTINGS: combineStats([g.trap, g.hexaTrapper]),
                    TYPE: "trap",
                    STAT_CALCULATOR: gunCalcNames.trap,
                },
            },
        ],
    };
})()
Class.architect = {
    PARENT: "genericTank",
    LABEL: "Architect",
    DANGER: 7,
    BODY: {
        SPEED: 1.1 * base.SPEED,
    },
    FACING_TYPE: ["spin", {speed: 0.02}],
    TURRETS: [
        {
            POSITION: [12, 8, 0, 0, 190, 0],
            TYPE: "architectGun",
        },
        {
            POSITION: [12, 8, 0, 120, 190, 0],
            TYPE: "architectGun",
        },
        {
            POSITION: [12, 8, 0, 240, 190, 0],
            TYPE: "architectGun",
        },
    ],
}

// Trap Guard upgrades
Class.bushwhacker = makeGuard(Class.sniper, "Bushwhacker")
Class.gunnerTrapper = {
    PARENT: "genericTank",
    LABEL: "Gunner Trapper",
    DANGER: 7,
    STAT_NAMES: statnames.mixed,
    BODY: {
        FOV: 1.25 * base.FOV,
    },
    GUNS: [
        {
            POSITION: [19, 2, 1, 0, -2.5, 0, 0],
            PROPERTIES: {
                SHOOT_SETTINGS: combineStats([g.basic, g.pelleter, g.power, g.twin, { recoil: 4 }, { recoil: 1.8 }]),
                TYPE: "bullet",
            },
        },
        {
            POSITION: [19, 2, 1, 0, 2.5, 0, 0.5],
            PROPERTIES: {
                SHOOT_SETTINGS: combineStats([g.basic, g.pelleter, g.power, g.twin, { recoil: 4 }, { recoil: 1.8 }]),
                TYPE: "bullet",
            },
        },
        {
            POSITION: [12, 11, 1, 0, 0, 0, 0],
        },
        {
            POSITION: [13, 11, 1, 0, 0, 180, 0],
        },
        {
            POSITION: [4, 11, 1.7, 13, 0, 180, 0],
            PROPERTIES: {
                SHOOT_SETTINGS: combineStats([g.trap, { speed: 1.2 }, { recoil: 0.5 }]),
                TYPE: "trap",
                STAT_CALCULATOR: gunCalcNames.trap,
            },
        },
    ],
}
Class.bomber = {
    PARENT: "genericTank",
    LABEL: "Bomber",
    BODY: {
        DENSITY: base.DENSITY * 0.6,
    },
    DANGER: 7,
    GUNS: [
        {
            POSITION: [20, 8, 1, 0, 0, 0, 0],
            PROPERTIES: {
                SHOOT_SETTINGS: combineStats([g.basic, g.flankGuard, g.triAngle, g.triAngleFront]),
                TYPE: "bullet",
                LABEL: "Front",
            },
        },
        {
            POSITION: [18, 8, 1, 0, 0, 130, 0.1],
            PROPERTIES: {
                SHOOT_SETTINGS: combineStats([g.basic, g.flankGuard, g.triAngle]),
                TYPE: "bullet",
                LABEL: "Wing",
            },
        },
        {
            POSITION: [18, 8, 1, 0, 0, 230, 0.1],
            PROPERTIES: {
                SHOOT_SETTINGS: combineStats([g.basic, g.flankGuard, g.triAngle]),
                TYPE: "bullet",
                LABEL: "Wing",
            },
        },
        {
            POSITION: [13, 8, 1, 0, 0, 180, 0],
        },
        {
            POSITION: [4, 8, 1.7, 13, 0, 180, 0],
            PROPERTIES: {
                SHOOT_SETTINGS: combineStats([g.trap]),
                TYPE: "trap",
                STAT_CALCULATOR: gunCalcNames.trap,
            },
        },
    ],
}
Class.conqueror = {
    PARENT: "genericTank",
    DANGER: 7,
    LABEL: "Conqueror",
    STAT_NAMES: statnames.mixed,
    BODY: {
        SPEED: 0.8 * base.SPEED,
    },
    REVERSE_TARGET_WITH_TANK: true,
    GUNS: [
        {
            POSITION: [21, 14, 1, 0, 0, 180, 0],
            PROPERTIES: {
                SHOOT_SETTINGS: combineStats([g.basic, g.pounder, g.destroyer]),
                TYPE: "bullet",
            },
        },
        {
            POSITION: [18, 12, 1, 0, 0, 0, 0],
        },
        {
            POSITION: [2, 12, 1.1, 18, 0, 0, 0],
            PROPERTIES: {
                SHOOT_SETTINGS: combineStats([g.trap, g.setTrap]),
                TYPE: "setTrap",
                STAT_CALCULATOR: gunCalcNames.block
            },
        },
    ],
}
Class.bulwark = {
    PARENT: "genericTank",
    LABEL: "Bulwark",
    STAT_NAMES: statnames.mixed,
    DANGER: 7,
    GUNS: [
        {
            POSITION: [20, 8, 1, 0, 5.5, 0, 0],
            PROPERTIES: {
                SHOOT_SETTINGS: combineStats([g.basic, g.flankGuard, g.flankGuard, g.twin]),
                TYPE: "bullet",
            },
        },
        {
            POSITION: [20, 8, 1, 0, -5.5, 0, 0.5],
            PROPERTIES: {
                SHOOT_SETTINGS: combineStats([g.basic, g.flankGuard, g.flankGuard, g.twin]),
                TYPE: "bullet",
            },
        },
        {
            POSITION: [14, 8, 1, 0, 5.5, 185, 0],
        },
        {
            POSITION: [3, 9, 1.5, 14, 5.5, 185, 0],
            PROPERTIES: {
                SHOOT_SETTINGS: combineStats([g.trap, g.twin]),
                TYPE: "trap",
                STAT_CALCULATOR: gunCalcNames.trap,
            },
        },
        {
            POSITION: [14, 8, 1, 0, -5.5, 175, 0],
        },
        {
            POSITION: [3, 9, 1.5, 14, -5.5, 175, 0.5],
            PROPERTIES: {
                SHOOT_SETTINGS: combineStats([g.trap, g.twin]),
                TYPE: "trap",
                STAT_CALCULATOR: gunCalcNames.trap,
            },
        },
    ],
}

// Desmos upgrades
Class.volute = {
    PARENT: "genericTank",
    LABEL: "Volute",
    DANGER: 6,
    STAT_NAMES: statnames.desmos,
    GUNS: [
        {
            POSITION: [20, 13, 0.8, 0, 0, 0, 0],
            PROPERTIES: {
                SHOOT_SETTINGS: combineStats([g.basic, g.desmos, g.pounder]),
                TYPE: ["bullet", {MOTION_TYPE: "desmos"}]
            },
        },
        {
            POSITION: [5, 10, 2.125, 1, -6.375, 90, 0],
        },
        {
            POSITION: [5, 10, 2.125, 1, 6.375, -90, 0],
        },
    ],
}
Class.helix = {
    PARENT: "genericTank",
    LABEL: "Helix",
    DANGER: 6,
    STAT_NAMES: statnames.desmos,
    GUNS: [
        {
            POSITION: [20, 8, 0.75, 0, -5, 0, 0],
            PROPERTIES: {
                SHOOT_SETTINGS: combineStats([g.basic, g.twin, g.desmos]),
                TYPE: ["bullet", {MOTION_TYPE: ["desmos", {invert: false}]}]
            },
        },
        {
            POSITION: [20, 8, 0.75, 0, 5, 0, 0],
            PROPERTIES: {
                SHOOT_SETTINGS: combineStats([g.basic, g.twin, g.desmos]),
                TYPE: ["bullet", {MOTION_TYPE: ["desmos", {invert: true}]}]
            },
        },
        {
            POSITION: [3.625, 7.5, 2.75, 5.75, -6.75, 90, 0],
        },
        {
            POSITION: [3.625, 7.5, 2.75, 5.75, 6.75, -90, 0],
        },
        {
            POSITION: [6, 8, 0.25, 10.5, 0, 0, 0],
        },
    ],
}
Class.undertow = {
    PARENT: "genericTank",
    LABEL: "Undertow",
    DANGER: 6,
    TOOLTIP: "[DEV NOTE] The Undertow does not function as intended yet!",
    GUNS: [
        {
            POSITION: [14, 12, 0.8, 0, 0, 0, 0],
            PROPERTIES: {
                SHOOT_SETTINGS: combineStats([g.basic, g.desmos, { reload: 1.2 }]),
                TYPE: "bullet"
            }
        },
        {
            POSITION: [11.25, 8, 0.15, 4.25, 4, 13.5, 0]
        },
        {
            POSITION: [11.25, 8, 0.15, 4.25, -4, -13.5, 0]
        }
    ]
}
Class.repeater = {
    PARENT: "genericTank",
    LABEL: "Repeater",
    GUNS: [
        {
            POSITION: [20, 10, 0.8, 0, 0, 0, 0],
            PROPERTIES: {
                SHOOT_SETTINGS: combineStats([g.basic, g.desmos]),
                TYPE: ["splitterBullet", {MOTION_TYPE: "desmos"}]
            }
        },
        {
            POSITION: [4.625, 9.5, 2, 0.375, -8, 91.5, 0]
        },
        {
            POSITION: [4.625, 9.5, 2, 0.375, 8, -91.5, 0]
        },
        {
            POSITION: [3.75, 10, 2.125, 0, -4.75, 50, 0]
        },
        {
            POSITION: [3.75, 10, 2.125, 0, 4.75, -50, 0]
        }
    ]
}

// Volute upgrades
Class.sidewinder = {
    PARENT: "genericTank",
    LABEL: "Sidewinder",
    DANGER: 7,
    BODY: {
        SPEED: 0.8 * base.SPEED,
        FOV: 1.3 * base.FOV,
    },
    GUNS: [
        {
            POSITION: [10, 11, -0.5, 14, 0, 0, 0],
        },
        {
            POSITION: [21, 12, -1.1, 0, 0, 0, 0],
            PROPERTIES: {
                SHOOT_SETTINGS: combineStats([g.basic, g.sniper, g.hunter, g.sidewinder]),
                TYPE: "snake",
                STAT_CALCULATOR: gunCalcNames.sustained,
            },
        },
    ],
}

// Helix upgrades
Class.triplex = {
    PARENT: "genericTank",
    LABEL: "Triplex",
    DANGER: 7,
    STAT_NAMES: statnames.desmos,
    GUNS: [
        {
            POSITION: [18, 10, 0.7, 0, 0, 0, 0],
            PROPERTIES: {
                SHOOT_SETTINGS: combineStats([g.basic, g.twin, g.tripleShot, g.desmos]),
                TYPE: "bullet",
            },
        },
        {
            POSITION: [18, 10, 0.7, 0, 0, 45, 0.5],
            PROPERTIES: {
                SHOOT_SETTINGS: combineStats([g.basic, g.twin, g.tripleShot, g.desmos]),
                TYPE: ["bullet", {MOTION_TYPE: "desmos"}]
            },
        },
        {
            POSITION: [18, 10, 0.7, 0, 0, -45, 0.5],
            PROPERTIES: {
                SHOOT_SETTINGS: combineStats([g.basic, g.twin, g.tripleShot, g.desmos]),
                TYPE: ["bullet", {MOTION_TYPE: ["desmos", {invert: true}]}]
            },
        },
        {
            POSITION: [3.75, 10, 2.125, 1, -4.25, 10, 0],
        },
        {
            POSITION: [3.75, 10, 2.125, 1, 4.25, -10, 0],
        },
        {
            POSITION: [5, 6, 0.5, 10.5, 0, 22.5, 0],
        },
        {
            POSITION: [5, 6, 0.5, 10.5, 0, -22.5, 0],
        },
    ],
}
Class.quadruplex = {
    PARENT: "genericTank",
    LABEL: "Quadruplex",
    DANGER: 7,
    STAT_NAMES: statnames.desmos,
    GUNS: [
        {
            POSITION: [20, 10, 0.8, 0, 0, 45, 0],
            PROPERTIES: {
                SHOOT_SETTINGS: combineStats([g.basic, g.desmos, g.twin]),
                TYPE: ["bullet", {MOTION_TYPE: ["desmos", {amplitude: 25}]}]
            }
        },
        {
            POSITION: [3.75, 10, 2.125, 1.25, -6.25, 135, 0]
        },
        {
            POSITION: [3.75, 10, 2.125, 1.25, 6.25, -45, 0]
        },
        {
            POSITION: [20, 10, 0.8, 0, 0, -45, 0],
            PROPERTIES: {
                SHOOT_SETTINGS: combineStats([g.basic, g.desmos, g.twin]),
                TYPE: ["bullet", {MOTION_TYPE: ["desmos", {amplitude: 25, invert: true}]}]
            }
        },
        {
            POSITION: [3.75, 10, 2.125, 1.25, -6.25, 45, 0]
        },
        {
            POSITION: [3.75, 10, 2.125, 1.25, 6.25, -135, 0]
        },
        {
            POSITION: [20, 10, 0.8, 0, 0, 135, 0],
            PROPERTIES: {
                SHOOT_SETTINGS: combineStats([g.basic, g.desmos, g.twin]),
                TYPE: ["bullet", {MOTION_TYPE: ["desmos", {period: 7, amplitude: 10}]}]
            }
        },
        {
            POSITION: [3.75, 10, 2.125, 1.25, -6.25, -135, 0]
        },
        {
            POSITION: [3.75, 10, 2.125, 1.25, 6.25, 45, 0]
        },
        {
            POSITION: [20, 10, 0.8, 0, 0, -135, 0],
            PROPERTIES: {
                SHOOT_SETTINGS: combineStats([g.basic, g.desmos, g.twin]),
                TYPE: ["bullet", {MOTION_TYPE: ["desmos", {period: 7, amplitude: 10, invert: true}]}]
            }
        },
        {
            POSITION: [3.75, 10, 2.125, 1.25, -6.25, -45, 0]
        },
        {
            POSITION: [3.75, 10, 2.125, 1.25, 6.25, 135, 0]
        },
    ],
}
// Undertow upgrades
Class.riptide = {
    PARENT: "genericTank",
    LABEL: "Riptide",
    DANGER: 7,
    TOOLTIP: "[DEV NOTE] The Riptide does not function as intended yet!",
    GUNS: [
        {
            POSITION: [6.5, 23.5, 0.25, 3, 0, 180, 0],
        },
        {
            POSITION: [18, 16, 0.75, 0, 0, 0, 0],
            PROPERTIES: {
                SHOOT_SETTINGS: combineStats([g.basic, g.desmos, { size: 0.9, reload: 1.2 }]),
                TYPE: "bullet"
            }
        },
        {
            POSITION: [17, 16, 0.1, 0.25, 4, 13.5, 0]
        },
        {
            POSITION: [17, 16, 0.1, 0.25, -4, -13.5, 0]
        }
    ]
}
// Repeater upgrades
Class.iterator = {
    PARENT: "genericTank",
    LABEL: "Iterator",
    DANGER: 7,
    STAT_NAMES: statnames.desmos,
    GUNS: [
        {
            POSITION: [22, 10, 0.8, 0, 0, 0, 0],
            PROPERTIES: {
                SHOOT_SETTINGS: combineStats([g.basic, g.desmos]),
                TYPE: ["superSplitterBullet", {MOTION_TYPE: "desmos"}]
            }
        },
        {
            POSITION: [4.625, 10.5, 2.75, 0.375, -7, 91.5, 0]
        },
        {
            POSITION: [4.625, 10.5, 2.75, 0.375, 7, -91.5, 0]
        },
        {
            POSITION: [4, 9, 3, 1.5, -5, 95, 0]
        },
        {
            POSITION: [4, 9, 3, 1.5, 5, -95, 0]
        },
        {
            POSITION: [3.75, 10, 2.125, -1.5, -5.25, 50, 0]
        },
        {
            POSITION: [3.75, 10, 2.125, -1.5, 5.25, -50, 0]
        }
    ]
}
Class.duplicator = {
    PARENT: "genericTank",
    LABEL: "Duplicator",
    DANGER: 7,
    STAT_NAMES: statnames.desmos,
    GUNS: [
        {
            POSITION: [20, 10, 0.8, 0, 0, 20, 0],
            PROPERTIES: {
                SHOOT_SETTINGS: combineStats([g.basic, g.twin, g.desmos]),
                TYPE: ["splitterBullet", {MOTION_TYPE: ["desmos", {invert: false}]}]
            }
        },
        {
            POSITION: [20, 10, 0.8, 0, 0, -20, 0],
            PROPERTIES: {
                SHOOT_SETTINGS: combineStats([g.basic, g.twin, g.desmos]),
                TYPE: ["splitterBullet", {MOTION_TYPE: ["desmos", {invert: true}]}]
            }
        },
        {
            POSITION: [5.625, 9.5, 2, 0.375-1, -8, 111.5, 0]
        },
        {
            POSITION: [3.75, 10, 2.125, 0, 4.75, -30, 0]
        },
        {
            POSITION: [5.625, 9.5, 2, 0.375-1, 8, -111.5, 0]
        },
        {
            POSITION: [3.75, 10, 2.125, 0, -4.75, 30, 0]
        },
        {
            POSITION: [18, 8, 0.65, 0, 0, 0, 0]
        },
        {
            POSITION: [19, 6, 0.45, 0, 0, 0, 0]
        },
    ]
}



// Smasher upgrades
Class.megaSmasher = {
    PARENT: "genericSmasher",
    LABEL: "Mega-Smasher",
    BODY: {
        SPEED: 1.05 * base.SPEED,
        FOV: 1.1 * base.FOV,
        DENSITY: 4 * base.DENSITY,
    },
    TURRETS: [
        {
            POSITION: [25, 0, 0, 0, 360, 0],
            TYPE: "smasherBody",
        },
    ],
}
Class.spike = {
    PARENT: "genericSmasher",
    LABEL: "Spike",
    BODY: {
        SPEED: base.SPEED * 0.9,
        DAMAGE: base.DAMAGE * 1.1,
    },
    TURRETS: [
        {
            POSITION: [18.5, 0, 0, 0, 360, 0],
            TYPE: "spikeBody",
        },
        {
            POSITION: [18.5, 0, 0, 90, 360, 0],
            TYPE: "spikeBody",
        },
        {
            POSITION: [18.5, 0, 0, 180, 360, 0],
            TYPE: "spikeBody",
        },
        {
            POSITION: [18.5, 0, 0, 270, 360, 0],
            TYPE: "spikeBody",
        },
    ],
}
Class.landmine = {
    PARENT: "genericSmasher",
    LABEL: "Landmine",
    INVISIBLE: [0.06, 0.01],
    TOOLTIP: "Stay still to turn invisible.",
    BODY: {
        SPEED: 1.1 * base.SPEED
    },
    TURRETS: [
        {
            POSITION: [21.5, 0, 0, 0, 360, 0],
            TYPE: "smasherBody"
        },
        {
            POSITION: [21.5, 0, 0, 30, 360, 0],
            TYPE: "landmineBody"
        }
    ]
}

// Healer upgrades
Class.medic = {
    PARENT: "genericTank",
    LABEL: "Medic",
    BODY: {
        FOV: base.FOV * 1.2,
    },
    TURRETS: [
        {
            POSITION: [13, 0, 0, 0, 360, 1],
            TYPE: "healerSymbol",
        },
    ],
    GUNS: [
        {
            POSITION: [8, 9, -0.5, 16.5, 0, 0, 0],
        },
        {
            POSITION: [22, 10, 1, 0, 0, 0, 0],
            PROPERTIES: {
                SHOOT_SETTINGS: combineStats([g.basic, g.healer, g.sniper]),
                TYPE: "healerBullet",
            },
        },
    ],
    STAT_NAMES: statnames.heal,
}
Class.ambulance = {
    PARENT: "genericTank",
    LABEL: "Ambulance",
    BODY: {
        HEALTH: base.HEALTH * 0.8,
        SHIELD: base.SHIELD * 0.8,
        DENSITY: base.DENSITY * 0.6,
    },
    TURRETS: [
        {
            POSITION: [13, 0, 0, 0, 360, 1],
            TYPE: "healerSymbol",
        },
    ],
    GUNS: [
        {
            POSITION: [8, 9, -0.5, 12.5, 0, 0, 0],
        },
        {
            POSITION: [18, 10, 1, 0, 0, 0, 0],
            PROPERTIES: {
                SHOOT_SETTINGS: combineStats([g.basic, g.flankGuard, g.triAngle, g.triAngleFront, { recoil: 4 }, g.healer]),
                TYPE: "healerBullet",
                LABEL: "Front",
            },
        },
        {
            POSITION: [16, 8, 1, 0, 0, 150, 0.1],
            PROPERTIES: {
                SHOOT_SETTINGS: combineStats([g.basic, g.flankGuard, g.triAngle, g.thruster]),
                TYPE: "bullet",
                LABEL: gunCalcNames.thruster,
            },
        },
        {
            POSITION: [16, 8, 1, 0, 0, 210, 0.1],
            PROPERTIES: {
                SHOOT_SETTINGS: combineStats([g.basic, g.flankGuard, g.triAngle, g.thruster]),
                TYPE: "bullet",
                LABEL: gunCalcNames.thruster,
            },
        },
    ],
    STAT_NAMES: statnames.heal,
}
Class.surgeon = {
    PARENT: "genericTank",
    LABEL: "Surgeon",
    STAT_NAMES: statnames.trap,
    BODY: {
        SPEED: base.SPEED * 0.75,
        FOV: base.FOV * 1.15,
    },
    TURRETS: [
        {
            POSITION: [13, 0, 0, 0, 360, 1],
            TYPE: "healerSymbol",
        },
    ],
    GUNS: [
        {
            POSITION: [5, 11, 1, 10.5, 0, 0, 0],
        },
        {
            POSITION: [3, 14, 1, 15.5, 0, 0, 0],
        },
        {
            POSITION: [2, 14, 1.3, 18, 0, 0, 0],
            PROPERTIES: {
                MAX_CHILDREN: 2,
                SHOOT_SETTINGS: combineStats([g.trap, g.setTrap, { speed: 0.7, maxSpeed: 0.7 }]),
                TYPE: "surgeonPillbox",
                SYNCS_SKILLS: true,
                STAT_CALCULATOR: gunCalcNames.block
            },
        },
        {
            POSITION: [4, 14, 1, 8, 0, 0, 0],
        },
    ],
    STAT_NAMES: statnames.heal,
}
Class.paramedic = {
    PARENT: "genericTank",
    LABEL: "Paramedic",
    BODY: {
        SPEED: base.SPEED * 0.9,
    },
    TURRETS: [
        {
            POSITION: [13, 0, 0, 0, 360, 1],
            TYPE: "healerSymbol",
        },
    ],
    GUNS: [
        {
            POSITION: [8, 9, -0.5, 10, 0, -17.5, 0.5],
        },
        {
            POSITION: [15.5, 10, 1, 0, 0, -17.5, 0.5],
            PROPERTIES: {
                SHOOT_SETTINGS: combineStats([g.basic, g.twin, g.tripleShot, g.healer]),
                TYPE: "healerBullet",
            },
        },
        {
            POSITION: [8, 9, -0.5, 10, 0, 17.5, 0.5],
        },
        {
            POSITION: [15.5, 10, 1, 0, 0, 17.5, 0.5],
            PROPERTIES: {
                SHOOT_SETTINGS: combineStats([g.basic, g.twin, g.tripleShot, g.healer]),
                TYPE: "healerBullet",
            },
        },
        {
            POSITION: [8, 9, -0.5, 12.5, 0, 0, 0],
        },
        {
            POSITION: [18, 10, 1, 0, 0, 0, 0],
            PROPERTIES: {
                SHOOT_SETTINGS: combineStats([g.basic, g.twin, g.tripleShot, g.healer]),
                TYPE: "healerBullet",
            },
        },
    ],
    STAT_NAMES: statnames.heal,
}

// Bird tanks
Class.falcon = makeBird("assassin", "Falcon")

Class.vulture = makeBird({
    PARENT: "genericTank",
    DANGER: 7,
    BODY: {
        FOV: base.FOV * 1.2,
    },
    GUNS: [
        {
            POSITION: [22, 7, -1.5, 0, 0, 0, 0],
            PROPERTIES: {
                SHOOT_SETTINGS: combineStats([g.basic, g.minigun]),
                TYPE: "bullet"
            }
        },
        {
            POSITION: [20, 7.5, -1.5, 0, 0, 0, 0.333],
            PROPERTIES: {
                SHOOT_SETTINGS: combineStats([g.basic, g.minigun, {size: 7/7.5}]),
                TYPE: "bullet"
            }
        },
        {
            POSITION: [18, 8, -1.5, 0, 0, 0, 0.667],
            PROPERTIES: {
                SHOOT_SETTINGS: combineStats([g.basic, g.minigun, {size: 7/8}]),
                TYPE: "bullet"
            }
        }
    ]
}, "Vulture")
Class.phoenix = makeBird("sprayer", "Phoenix")
Class.eagle = makeBird("pounder", "Eagle")

// Over tanks
Class.overgunner = makeOver({
    PARENT: "genericTank",
    LABEL: "Gunner",
    DANGER: 6,
    GUNS: [
        {
            POSITION: [19, 2, 1, 0, -2.5, 0, 0],
            PROPERTIES: {
                SHOOT_SETTINGS: combineStats([g.basic, g.pelleter, g.power, g.twin, { speed: 0.7, maxSpeed: 0.7 }, g.flankGuard, { recoil: 1.8 }]),
                TYPE: "bullet",
            },
        },
        {
            POSITION: [19, 2, 1, 0, 2.5, 0, 0.5],
            PROPERTIES: {
                SHOOT_SETTINGS: combineStats([g.basic, g.pelleter, g.power, g.twin, { speed: 0.7, maxSpeed: 0.7 }, g.flankGuard, { recoil: 1.8 }]),
                TYPE: "bullet",
            },
        },
        {
            POSITION: [12, 11, 1, 0, 0, 0, 0],
        },
    ],
})
Class.overtrapper = makeOver({
    PARENT: "genericTank",
    LABEL: "Trapper",
    DANGER: 6,
    STAT_NAMES: statnames.mixed,
    BODY: {
        SPEED: base.SPEED * 0.8,
        FOV: base.FOV * 1.2
    },
    GUNS: [
        {
            POSITION: [14, 8, 1, 0, 0, 0, 0],
        },
        {
            POSITION: [4, 8, 1.5, 14, 0, 0, 0],
            PROPERTIES: {
                SHOOT_SETTINGS: combineStats([g.trap]),
                TYPE: "trap",
                STAT_CALCULATOR: gunCalcNames.trap
            }
        }
    ]
})

//delta upgrades
Class.minilaser = {
    PARENT: "genericTank",
    LABEL: "Plasma SMG",
    DANGER: 6,
    BODY: {
        FOV: 1.2,
    },
    GUNS: [
        {
            /*** LENGTH  WIDTH   ASPECT    X       Y     ANGLE   DELAY */
            POSITION: [21, 8, 1, 0, 0, 0, 0],
            PROPERTIES: {
                SHOOT_SETTINGS: combineStats([g.basic, g.minigun, g.doublereload, g.one_third_reload]),
                TYPE: "laser",
            },
        },
        {
            POSITION: [19, 8, 1, 0, 0, 0, 1 / 3],
            PROPERTIES: {
                SHOOT_SETTINGS: combineStats([g.basic, g.minigun, g.doublereload, g.one_third_reload]),
                TYPE: "laser",
            },
        },
        {
            POSITION: [17, 8, 1, 0, 0, 0, 2 / 3],
            PROPERTIES: {
                SHOOT_SETTINGS: combineStats([g.basic, g.minigun, g.doublereload, g.one_third_reload]),
                TYPE: "laser",
            },
        },
        {
            POSITION: [24, 1, 1, 0, 0, 0, 2 / 3],
            PROPERTIES: {
                COLOR: 'red',
                SHOOT_SETTINGS: combineStats([g.fake]),
                TYPE: "laser",
            },
        }
    ],
}
Class.cruiserdrive = {
    PARENT: "genericTank",
    LABEL: "Swarmdrive",
    DANGER: 6,
    FACING_TYPE: "locksFacing",
    STAT_NAMES: statnames.swarm,
    BODY: {
        FOV: 1.2 * base.FOV,
    },
    GUNS: [
        {
            POSITION: [7, 7.5, 0.6, 7, 4, 0, 0],
            PROPERTIES: {
                SHOOT_SETTINGS: combineStats([g.swarm]),
                TYPE: "autoturretswarm",
                STAT_CALCULATOR: gunCalcNames.swarm,
            },
        },
        {
            POSITION: [7, 7.5, 0.6, 7, -4, 0, 0.5],
            PROPERTIES: {
                SHOOT_SETTINGS: combineStats([g.swarm]),
                TYPE: "autoturretswarm",
                STAT_CALCULATOR: gunCalcNames.swarm,
            },
        },
    ],
}
Class.shrapnelgun = {
    PARENT: "genericTank",
    LABEL: "Albuquerque",
    DANGER: 7,
    GUNS: [{
            POSITION: [17, 13, 1, 0, 0, 0, 0],
            PROPERTIES: {
                SHOOT_SETTINGS: combineStats([g.basic, g.pounder, g.artillery, g.artillery, g.halfspeed, { reload: 1.8 }]),
                TYPE: "grenade"
            }
        }
    ],
      TURRETS: [{
        POSITION: [8.2, 16.7, 0, 0, 0, 0],
        TYPE: ["grenadeDeco", { MIRROR_MASTER_ANGLE: true }],
    }
  ]
}
Class.firecracker = {
    PARENT: "genericTank",
    LABEL: "Firecracker",
    DANGER: 7,
    GUNS: [{
            POSITION: [17, 13, 1, 0, 0, 0, 0],
            PROPERTIES: {
                SHOOT_SETTINGS: combineStats([g.basic, g.pounder, g.artillery, g.artillery, g.halfspeed, g.halfspeed, { reload: 2.5 }]),
                TYPE: "firecrackerbomb"
            }
        }
    ],
      TURRETS: [{
        POSITION: [8.2, 13, 0, 0, 0, 2],
        TYPE: ["firecrackerDeco", { MIRROR_MASTER_ANGLE: true }],
    }
  ]
}
Class.inception = {
    PARENT: "genericTank",
    LABEL: "Inception",
    DANGER: 4,
    GUNS: [
        {
            POSITION: [18, 8, 1, 0, 0, 0, 0],
            PROPERTIES: {
                SHOOT_SETTINGS: combineStats([g.basic]),
                TYPE: "autobullet",
            }
        }
    ],
      TURRETS: [{
        POSITION: [5.5, 18, 0, 0, 0, 0],
        TYPE: ["autoTurret", { INDEPENDENT: true, MIRROR_MASTER_ANGLE: true }]
    }
  ]
}
Class.inceptionist = {
    PARENT: "genericTank",
    LABEL: "Ceptionist",
    DANGER: 4,
    GUNS: [
        {
            POSITION: [18, 8, 1, 0, 0, 0, 0],
            PROPERTIES: {
                SHOOT_SETTINGS: combineStats([g.basic]),
                TYPE: "ceptionistbullet",
            }
        }
    ],
      TURRETS: [{
        POSITION: [10, 0, 0, 0, 0, 1],
        TYPE: ["ceptionistturret", { INDEPENDENT: true, MIRROR_MASTER_ANGLE: true }]
    }
  ]
}
Class.twinceptionist = {
    PARENT: "genericTank",
    LABEL: "Twinceptionist",
    DANGER: 4,
    GUNS: [
        {
            POSITION: [20, 8, 1, 0, 5.5, 0, 0],
            PROPERTIES: {
                SHOOT_SETTINGS: combineStats([g.basic, g.twin]),
                TYPE: "ceptionistbullet"
            }
        },
        {
            POSITION: [20, 8, 1, 0, -5.5, 0, 0.5],
            PROPERTIES: {
                SHOOT_SETTINGS: combineStats([g.basic, g.twin]),
                TYPE: "ceptionistbullet"
            }
        }
    ],
      TURRETS: [{
        POSITION: [10, 0, 0, 0, 0, 1],
        TYPE: ["ceptionistturret", { INDEPENDENT: true, MIRROR_MASTER_ANGLE: true }]
    }
  ]
}
Class.machinception = {
    PARENT: "genericTank",
    LABEL: "Machceptioner",
    DANGER: 4,
    GUNS: [
        {
            POSITION: [12, 10, 1.4, 8, 0, 0, 0],
            PROPERTIES: {
                SHOOT_SETTINGS: combineStats([g.basic, g.machineGun]),
                TYPE: "autobullet"
            }
        }
    ],
    TURRETS: [{
        POSITION: [6.5, 20, 0, 0, 0, 0],
        TYPE: ["autoTurret", { INDEPENDENT: true, MIRROR_MASTER_ANGLE: true }]
    }
  ]
}
Class.machceptionist = {
    PARENT: "genericTank",
    LABEL: "Machceptionist",
    DANGER: 4,
    GUNS: [
        {
            POSITION: [12, 10, 1.4, 8, 0, 0, 0],
            PROPERTIES: {
                SHOOT_SETTINGS: combineStats([g.basic, g.machineGun]),
                TYPE: "ceptionistbullet"
            }
        }
    ],
    TURRETS: [{
        POSITION: [10, 0, 0, 0, 0, 1],
        TYPE: ["ceptionistturret", { INDEPENDENT: true, MIRROR_MASTER_ANGLE: true }]
    }
  ]
}
Class.flankinception = makeMulti({
    PARENT: "genericTank",
    BODY: {
        SPEED: 1.1 * base.SPEED
    },
    GUNS: [
        {
            POSITION: [18, 8, 1, 0, 0, 0, 0],
            PROPERTIES: {
                SHOOT_SETTINGS: combineStats([g.basic, g.flankGuard]),
                TYPE: "autobullet"
            }
        }
    ],
      TURRETS: [{
        POSITION: [5.5, 18, 0, 0, 0, 0],
        TYPE: ["autoTurret", { INDEPENDENT: true, MIRROR_MASTER_ANGLE: true }]
    },{
        POSITION: [5.5, 18, 0, 120, 0, 0],
        TYPE: ["autoTurret", { INDEPENDENT: true, MIRROR_MASTER_ANGLE: true }]
    },{
        POSITION: [5.5, 18, 0, 240, 0, 0],
        TYPE: ["autoTurret", { INDEPENDENT: true, MIRROR_MASTER_ANGLE: true }]
    }
  ]
}, 3, "Flankceptioner")
Class.flankceptionist = makeMulti({
    PARENT: "genericTank",
    BODY: {
        SPEED: 1.1 * base.SPEED
    },
    GUNS: [
        {
            POSITION: [18, 8, 1, 0, 0, 0, 0],
            PROPERTIES: {
                SHOOT_SETTINGS: combineStats([g.basic, g.flankGuard]),
                TYPE: "ceptionistbullet"
            }
        }
    ],
      TURRETS: [{
        POSITION: [5.5, 18, 0, 0, 0, 0],
        TYPE: ["ceptionistturret", { INDEPENDENT: true, MIRROR_MASTER_ANGLE: true }]
    },{
        POSITION: [5.5, 18, 0, 120, 0, 0],
        TYPE: ["ceptionistturret", { INDEPENDENT: true, MIRROR_MASTER_ANGLE: true }]
    },{
        POSITION: [5.5, 18, 0, 240, 0, 0],
        TYPE: ["ceptionistturret", { INDEPENDENT: true, MIRROR_MASTER_ANGLE: true }]
    }
  ]
}, 3, "Flankceptionist")
Class.flankdue = makeMulti({
    PARENT: "genericTank",
    DANGER: 5,
    BODY: {
        ACCELERATION: base.ACCEL * 0.9,
        FOV: 1.1,
        SPEED: base.SPEED * 1.1,
    },
    GUNS: [{
        POSITION: [23, 5, 1, 0, 0, 0, 0],
        PROPERTIES: {
            SHOOT_SETTINGS: combineStats([g.basic, g.flankGuard, g.hunter, g.hunterSecondary]),
            TYPE: "bullet"
        }
    }, {
        POSITION: [20, 8, 1, 0, 0, 0, 0.2],
        PROPERTIES: {
            SHOOT_SETTINGS: combineStats([g.basic, g.flankGuard, g.hunter]),
            TYPE: "bullet"
        }
    }]
}, 3, "Flankduer")
Class.tailgator = {
    PARENT: "genericTank",
    LABEL: "Tailgator",
    DANGER: 4,
    GUNS: [
        {
            POSITION: [20.5, 12, 1, 0, 0, 0, 0],
            PROPERTIES: {
                SHOOT_SETTINGS: combineStats([g.basic, g.pounder]),
                TYPE: "heavyautobullet"
            }
        }
    ],
      TURRETS: [{
        POSITION: [7.5, 20, 0, 0, 0, 0],
        TYPE: ["autoTurret", { INDEPENDENT: true, MIRROR_MASTER_ANGLE: true }]
    }
  ]
}
Class.poundceptionist = {
    PARENT: "genericTank",
    LABEL: "PoundCeptionist",
    DANGER: 4,
    GUNS: [
        {
            POSITION: [20.5, 12, 1, 0, 0, 0, 0],
            PROPERTIES: {
                SHOOT_SETTINGS: combineStats([g.basic, g.pounder]),
                TYPE: "ceptionistbullet"
            }
        }
    ],
      TURRETS: [{
        POSITION: [10, 0, 0, 0, 0, 1],
        TYPE: ["ceptionistturret", { INDEPENDENT: true, MIRROR_MASTER_ANGLE: true }]
    }
  ]
}
Class.interceptor = {
    PARENT: "genericTank",
    LABEL: "Interceptor",
    DANGER: 4,
    GUNS: [
        {
            POSITION: [21, 14, 1, 0, 0, 0, 0],
            PROPERTIES: {
                SHOOT_SETTINGS: combineStats([g.basic, g.pounder, g.destroyer]),
                TYPE: "heavyautobullet"
            }
        }
    ],
      TURRETS: [{
        POSITION: [7.5, 20, 0, 0, 0, 0],
        TYPE: ["autoTurret", { INDEPENDENT: true, MIRROR_MASTER_ANGLE: true }]
    }
  ]
}
Class.revolutionist = {
    PARENT: "genericTank",
    LABEL: "Revolutionist",
    DANGER: 6,
    GUNS: [{
        POSITION: [20, 8, 1, 0, 0, 0, 0],
        PROPERTIES: {
            SHOOT_SETTINGS: combineStats([g.basic, g.flankGuard]),
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
Class.proton = {
    PARENT: "genericTank",
    LABEL: "Proton",
    DANGER: 6,
    GUNS: [{
        POSITION: [20, 8, 1, 0, 0, 0, 0],
        PROPERTIES: {
            SHOOT_SETTINGS: combineStats([g.basic, g.flankGuard]),
            TYPE: "bullet",
        },
    },
          ],
    TURRETS: [{
        POSITION: [34, 0, 0, 0, 360, 0],
        TYPE: "protonturretBase",
    },
  ],
};
Class.baseThrower = {
    PARENT: "genericTank",
    LABEL: "Kivaaritehdas",
    DANGER: 6,
    SYNC_TURRET_SKILLS: true,
    GUNS: [{
        POSITION: [20, 8, 1, 0, 0, 0, 0.2],
        PROPERTIES: {
            SHOOT_SETTINGS: combineStats([g.basic, g.flankGuard]),
            TYPE: "bullet"
        }
    }, {
        POSITION: [1, 38, 1, 0, 0, 0, 0],
        PROPERTIES: {
            SHOOT_SETTINGS: combineStats([g.trap, g.setTrap, g.boomerang, g.bitlessspeed, g.halfdamage, g.halfpen, g.kiva]),
            TYPE: ["baseBullet", { COLOR: "orange", KEEP_OWN_COLOR: false }],
            ALT_FIRE: true,
            ALPHA: 0
        }
    }],
    TURRETS: [{
        POSITION: [34, 0, 0, 0, 360, 0],
        TYPE: "turretBaseKiva"
    }],
  ON: [{
        event: "altFire",
        handler: ({ body }) => {
            body.define(Class.baseThrowerFire)
        }
      }
    ]
};
Class.baseThrowerFire = {
    PARENT: "genericTank",
    LABEL: "Kivaaritehdas",
    DANGER: 6,
    GUNS: [{
        POSITION: [20, 8, 1, 0, 0, 0, 0.2],
        PROPERTIES: {
            SHOOT_SETTINGS: combineStats([g.basic, g.flankGuard]),
            TYPE: "bullet"
        }
    }]
};
Class.subverter = {
    PARENT: "genericTank",
    LABEL: "Subverter",
    DANGER: 6,
    GUNS: [{
        POSITION: [20, 8, 1, 0, 0, 0, 0],
        PROPERTIES: {
            SHOOT_SETTINGS: combineStats([g.basic, g.flankGuard]),
            TYPE: "bullet",
        },
    },
          ],
    TURRETS: [{
        POSITION: [34, 0, 0, 0, 360, 0],
        TYPE: "subverterturretBase",
    },
  ],
};
Class.pion = {
    PARENT: "genericSmasher",
    LABEL: "Pion",
    DANGER: 6,
    TURRETS: [
        {
            POSITION: [21.5, 0, 0, 0, 360, 0],
            TYPE: "smasherBody"
        }, {
        POSITION: [34, 0, 0, 0, 360, 0],
        TYPE: "pionturretBase",
    }]
}
Class.equilibrium = {
    PARENT: "genericTank",
    LABEL: "Equilibrium",
    DANGER: 6,
    GUNS: [
        {
            POSITION: [20, 8, 1, 0, 5.5, 0, 0],
            PROPERTIES: {
                SHOOT_SETTINGS: combineStats([g.basic, g.flankGuard, g.twin]),
                TYPE: "bullet"
            }
        },
        {
            POSITION: [20, 8, 1, 0, -5.5, 0, 0.5],
            PROPERTIES: {
                SHOOT_SETTINGS: combineStats([g.basic, g.flankGuard, g.twin]),
                TYPE: "bullet"
            }
        }
    ],
    TURRETS: [{
        POSITION: [34, 0, 0, 0, 360, 0],
        TYPE: "turretBase",
    },
  ],
};
Class.hadron = {
    PARENT: "genericTank",
    LABEL: "Hadron",
    DANGER: 6,
    GUNS: [{
        POSITION: [20, 8, 1, 0, 0, 0, 0],
        PROPERTIES: {
            SHOOT_SETTINGS: combineStats([g.basic, g.flankGuard]),
            TYPE: "bullet",
        },
    },
          ],
    TURRETS: [{
        POSITION: [34, 0, 0, 0, 360, 0],
        TYPE: "hadronturretBase",
    }
  ],
};
Class.hivemind = {
  PARENT: "genericTank",
  LABEL: "Hivemind",
  //CONTROLLERS: ['nearestDifferentMaster'],
  GUNS: [
    {
      /*** LENGTH  WIDTH   ASPECT    X       Y     ANGLE   DELAY */
      POSITION: [18, 8, 1, 0, 0, 0, 0],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.basic]),
        TYPE: "bullet"
      }
    },
    {
      POSITION: [0, 20, 1, 0, 0, 90, 3],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.basic, g.slow]),
        TYPE: "hiveprobe",
        MAX_CHILDREN: 1
      }
    },
    {
      POSITION: [0, 20, 1, 0, 0, 270, 3.5],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.basic, g.slow]),
        TYPE: "hiveprobe",
        MAX_CHILDREN: 1
      }
    }
  ],
  TURRETS: [
    {
      /*  SIZE     X       Y     ANGLE    ARC */
      POSITION: [27, 0, 0, 0, 360, 0],
      TYPE: "mindindicator"
    }
  ]
};
Class.cloner = {
  PARENT: ["genericTank"],
  LABEL: "Cloner",
  //CONTROLLERS: ['nearestDifferentMaster'],
  GUNS: [
    {
      /*** LENGTH  WIDTH   ASPECT    X       Y     ANGLE   DELAY */
      POSITION: [18, 8, 1, 0, 0, 0, 0],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.basic]),
        TYPE: "bullet"
      }
    },
    {
      POSITION: [0, 20, 1, 0, 0, 180, 3],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.basic, g.slow]),
        TYPE: "clonerprobe",
        MAX_CHILDREN: 1
      }
    }
  ],
  TURRETS: [
    {
      /*  SIZE     X       Y     ANGLE    ARC */
      POSITION: [24, 0, 0, 0, 360, 0],
      TYPE: "mindindicator"
    }
  ]
};
    Class.dictator = {
        PARENT: ["genericTank"],
        LABEL: "Dictator",  
        STAT_NAMES: statnames.drone,
        DANGER: 5,
        SHAPE: 8,
        BODY: {
            ACCELERATION: base.ACCEL * 0.75,
            FOV: base.FOV * 1.1,
        },
        MAX_CHILDREN: 4,
        GUNS: [ { /*** LENGTH  WIDTH   ASPECT    X       Y     ANGLE   DELAY */
            POSITION: [   6,     12,    1.2,     8,      0,      0,      0,   ], 
                PROPERTIES: {
                    SHOOT_SETTINGS: combineStats([g.drone, g.overseer]),
                    TYPE: "fastdrone",
                    AUTOFIRE: true,
                    SYNCS_SKILLS: true,
                    STAT_CALCULATOR: gunCalcNames.drone,
                }, },
        ],
    };
Class.littleHunter = {
    PARENT: "genericTank",
    LABEL: "Subduer",
    DANGER: 5,
    BODY: {
        ACCELERATION: base.ACCEL * 0.9,
        FOV: 1.1
    },
    GUNS: [{
        POSITION: [23, 5, 1, 0, 0, 0, 0],
        PROPERTIES: {
            SHOOT_SETTINGS: combineStats([g.basic, g.littleHunter, g.hunter, g.hunterSecondary]),
            TYPE: "bullet"
        }
    }, {
        POSITION: [20, 8, 1, 0, 0, 0, 0.2],
        PROPERTIES: {
            SHOOT_SETTINGS: combineStats([g.basic, g.littleHunter, g.hunter]),
            TYPE: "bullet"
        }
    }]
};
Class.subway = makeBird({
    PARENT: "genericTank",
    DANGER: 5,
    BODY: {
        ACCELERATION: base.ACCEL * 0.9,
        FOV: 1.05
    },
    GUNS: [{
        POSITION: [23, 5, 1, 0, 0, 0, 0],
        PROPERTIES: {
            SHOOT_SETTINGS: combineStats([g.basic, g.littleHunter, g.flankGuard, g.triAngle, g.triAngleFront, g.hunter, g.hunterSecondary]),
            TYPE: "bullet"
        }
    }, {
        POSITION: [20, 8, 1, 0, 0, 0, 0.2],
        PROPERTIES: {
            SHOOT_SETTINGS: combineStats([g.basic, g.littleHunter, g.flankGuard, g.triAngle, g.triAngleFront, g.hunter]),
            TYPE: "bullet"
        }
    }]
}, "Subway")
Class.binary = {
    PARENT: "genericTank",
    LABEL: "Binary",
    DANGER: 5,
    BODY: {
        ACCELERATION: base.ACCEL * 0.9,
        FOV: 1.1
    },
    GUNS: [{
        POSITION: [20, 5, 1, 0, 5.5, 0, 0],
        PROPERTIES: {
            SHOOT_SETTINGS: combineStats([g.basic, g.littleHunter, g.twin, g.hunter, g.hunterSecondary]),
            TYPE: "bullet"
        }
    }, {
        POSITION: [17, 8, 1, 0, 5.5, 0, 0.2],
        PROPERTIES: {
            SHOOT_SETTINGS: combineStats([g.basic, g.littleHunter, g.twin, g.hunter]),
            TYPE: "bullet"
        }
    }, {
        POSITION: [20, 5, 1, 0, -5.5, 0, 0.5],
        PROPERTIES: {
            SHOOT_SETTINGS: combineStats([g.basic, g.littleHunter, g.twin, g.hunter, g.hunterSecondary]),
            TYPE: "bullet"
        }
    }, {
        POSITION: [17, 8, 1, 0, -5.5, 0, 0.7],
        PROPERTIES: {
            SHOOT_SETTINGS: combineStats([g.basic, g.littleHunter, g.twin, g.hunter]),
            TYPE: "bullet"
        }
    }]
}
Class.trinary = {
    PARENT: "genericTank",
    LABEL: 'Trinary',
    DANGER: 7,
    BODY: {
        ACCELERATION: base.ACCEL * .7,
        FOV: 1.1
    },
    GUNS: [{
        POSITION: [22, 5, 1, 0, 2, 20, .5],
        PROPERTIES: {
            SHOOT_SETTINGS: combineStats([g.basic, g.littleHunter, g.hunter, g.hunterSecondary, g.twin, g.tripleShot]),
            TYPE: "bullet"
        }
    }, {
        POSITION: [19, 8, 1, 0, 2, 20, .7],
        PROPERTIES: {
            SHOOT_SETTINGS: combineStats([g.basic, g.littleHunter, g.hunter, g.twin, g.tripleShot]),
            TYPE: "bullet"
        }
    }, {
        POSITION: [22, 5, 1, 0, -2, -20, .5],
        PROPERTIES: {
            SHOOT_SETTINGS: combineStats([g.basic, g.littleHunter, g.hunter, g.hunterSecondary, g.twin, g.tripleShot]),
            TYPE: "bullet"
        }
    }, {
        POSITION: [19, 8, 1, 0, -2, -20, .7],
        PROPERTIES: {
            SHOOT_SETTINGS: combineStats([g.basic, g.littleHunter, g.hunter, g.twin, g.tripleShot]),
            TYPE: "bullet"
        }
    }, {
        POSITION: [25, 5, 1, 0, 0, 0, 0],
        PROPERTIES: {
            SHOOT_SETTINGS: combineStats([g.basic, g.littleHunter, g.hunter, g.hunterSecondary, g.twin, g.tripleShot]),
            TYPE: "bullet"
        }
    }, {
        POSITION: [22, 8, 1, 0, 0, 0, .2],
        PROPERTIES: {
            SHOOT_SETTINGS: combineStats([g.basic, g.littleHunter, g.hunter, g.twin, g.tripleShot]),
            TYPE: "bullet"
        }
    }]
};
Class.bigSubduer = {
    PARENT: "genericTank",
    LABEL: 'Mitochondrion',
    DANGER: 7,
    BODY: {
        ACCELERATION: base.ACCEL * .9,
        FOV: 1.1
    },
    GUNS: [{
        POSITION: [26, 2, 1, 0, 0, 0, 0],
        PROPERTIES: {
            SHOOT_SETTINGS: combineStats([g.basic, g.littleHunter, g.hunter, g.hunterSecondary, g.hunterSecondary, g.predator]),
            TYPE: "bullet"
        }
    }, {
        POSITION: [23, 5, 1, 0, 0, 0, .15],
        PROPERTIES: {
            SHOOT_SETTINGS: combineStats([g.basic, g.littleHunter, g.hunter, g.hunterSecondary, g.predator]),
            TYPE: "bullet"
        }
    }, {
        POSITION: [20, 8, 1, 0, 0, 0, .3],
        PROPERTIES: {
            SHOOT_SETTINGS: combineStats([g.basic, g.littleHunter, g.hunter, g.predator]),
            TYPE: "bullet"
        }
    }]
}
Class.clubbin = makeMulti({
      PARENT: "genericTank",
    LABEL: 'Mitochondrion',
    DANGER: 7,
    BODY: {
        ACCELERATION: base.ACCEL * .9,
        FOV: 1.1
    },
    GUNS: [{
        POSITION: [26, 2, 1, 0, 0, 0, 0],
        PROPERTIES: {
            SHOOT_SETTINGS: combineStats([g.basic, g.littleHunter, g.flankGuard, g.hunter, g.hunterSecondary, g.hunterSecondary, g.predator]),
            TYPE: "bullet"
        }
    }, {
        POSITION: [23, 5, 1, 0, 0, 0, .15],
        PROPERTIES: {
            SHOOT_SETTINGS: combineStats([g.basic, g.littleHunter, g.flankGuard, g.hunter, g.hunterSecondary, g.predator]),
            TYPE: "bullet"
        }
    }, {
        POSITION: [20, 8, 1, 0, 0, 0, .3],
        PROPERTIES: {
            SHOOT_SETTINGS: combineStats([g.basic, g.littleHunter, g.flankGuard, g.hunter, g.predator]),
            TYPE: "bullet"
        }
    }]
}, 3, "Clubbin")
Class.biggerSubduer = {
    PARENT: "genericTank",
    LABEL: 'Cytochrome',
    DANGER: 7,
    BODY: {
        ACCELERATION: base.ACCEL * 0.8,
        SPEED: base.SPEED * 0.95,
        FOV: 1.1
    },
    GUNS: [{
        POSITION: [29, 2, 1, 0, 0, 0, 0],
        PROPERTIES: {
            SHOOT_SETTINGS: combineStats([g.basic, g.littleHunter, g.hunter, g.hunterSecondary, g.hunterSecondary, g.hunterSecondary, g.predator, g.lessrecoil]),
            TYPE: "bullet"
        }
    }, {
        POSITION: [26, 4, 1, 0, 0, 0, 2/15],
        PROPERTIES: {
            SHOOT_SETTINGS: combineStats([g.basic, g.littleHunter, g.hunter, g.hunterSecondary, g.hunterSecondary, g.predator, g.lessrecoil]),
            TYPE: "bullet"
        }
    }, {
        POSITION: [23, 6, 1, 0, 0, 0, 4/15],
        PROPERTIES: {
            SHOOT_SETTINGS: combineStats([g.basic, g.littleHunter, g.hunter, g.hunterSecondary, g.predator]),
            TYPE: "bullet"
        }
    }, {
        POSITION: [20, 8, 1, 0, 0, 0, 0.4],
        PROPERTIES: {
            SHOOT_SETTINGS: combineStats([g.basic, g.littleHunter, g.hunter, g.predator]),
            TYPE: "bullet"
        }
    }]
}
Class.accelminigun = {
    PARENT: "genericTank",
    LABEL: "Rainmaker",
    DANGER: 6,
    BODY: {
        FOV: base.FOV * 1.4
    },
    GUNS: [
      {
        POSITION: [8, .1, -54, 21, 0, 0, 0],
        PROPERTIES: {
            SHOOT_SETTINGS: combineStats([g.basic, g.minigun, g.fake, g.triplereload]),
            TYPE: "bullet",
            COLOR: 12
            }
        }, 
        {
            POSITION: [21, 8, 1, 0, 0, 0, 0],
            PROPERTIES: {
                SHOOT_SETTINGS: combineStats([g.basic, g.minigun, g.rainmaker, g.morerange]),
                TYPE: ["bullet", { MOTION_TYPE: "accelerate" }]
            }
        },
        {
            POSITION: [19, 8, 1, 0, 0, 0, 1/3],
            PROPERTIES: {
                SHOOT_SETTINGS: combineStats([g.basic, g.minigun, g.rainmaker, g.morerange]),
                TYPE: ["bullet", { MOTION_TYPE: "accelerate" }]
            }
        },
        {
            POSITION: [17, 8, 1, 0, 0, 0, 2/3],
            PROPERTIES: {
                SHOOT_SETTINGS: combineStats([g.basic, g.minigun, g.rainmaker, g.morerange]),
                TYPE: ["bullet", { MOTION_TYPE: "accelerate" }]
            }
        }
    ]
}
Class.railgun = {
    PARENT: "genericTank",
    DANGER: 6,
    LABEL: "Railgun",
    BODY: {
        SPEED: 0.9 * base.SPEED,
        FOV: 1.25 * base.FOV
    },
    GUNS: [
          {
      /*** LENGTH  WIDTH   ASPECT    X       Y     ANGLE   DELAY */
      POSITION: [1, 6.5, 1, 25, 0, 0, 0.15],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.basic, g.sniper, g.assassin, g.one_third_reload, g.fast, g.fast, g.fast, g.fast, g.railgun]),
        TYPE: "bullet"
      }
    }, {
      POSITION: [1, 6.5, 1, 10, 0, 0, 0],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.basic, g.sniper, g.assassin, g.one_third_reload, g.fast, g.fast, g.railgun]),
        TYPE: "bullet"
            }
        },    {
      POSITION: [1, 6.5, 1, 15, 0, 0, 0.05],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.basic, g.sniper, g.assassin, g.one_third_reload, g.fast, g.fast, g.railgun]),
        TYPE: "bullet"
      }
      },
    {
      POSITION: [1, 6.5, 1, 20, 0, 0, 0.1],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.basic, g.sniper, g.assassin, g.one_third_reload, g.fast, g.fast, g.fast, g.railgun]),
        TYPE: "bullet"
      }
    },
    {
      POSITION: [22, 1.9, 1, 5, 4, 0, 0]
    },
    {
      POSITION: [22, 1.9, 1, 5, -4, 0, 0]
    }
    ]
}
Class.skater = {
    PARENT: "genericSmasher",
    LABEL: "Skater",
    DANGER: 6,
    BODY: {
        SPEED: base.SPEED * 2.4,
        ACCELERATION: base.ACCEL * 0.56,
    },
  
    TURRETS: [
        {
            POSITION: [21.5, 0, 0, 0, 360, 0],
            TYPE: "smasherBody"
        }, {
            POSITION: [15, 0, 0, 0, 360, 1],
            TYPE: ["skaterDeco", { COLOR: "#49bdde" }]
        }
    ]
}
Class.revodirector = {
    PARENT: "genericTank",
    LABEL: "Solar System",
    STAT_NAMES: statnames.drone,
    BODY: {
        FOV: base.FOV * 1.1
    },
    GUNS: [
        {
            POSITION: [6, 11, 1.3, 7, 0, 0, 0],
            PROPERTIES: {
                SHOOT_SETTINGS: combineStats([g.drone]),
                TYPE: "revoorbitdrone",
                AUTOFIRE: true,
                SYNCS_SKILLS: true,
                STAT_CALCULATOR: gunCalcNames.drone,
                MAX_CHILDREN: 5
            }
        }
    ],
      TURRETS: [{
        POSITION: [34, 0, 0, 0, 360, 0],
        TYPE: "turretBasenoguns",
    }, {
        POSITION: [9, 0, 0, 0, 360, 1],
        TYPE: "overdriveDeco",
    },
  ],
}
Class.directdrive = {
    PARENT: "genericTank",
    LABEL: "Motor",
    STAT_NAMES: statnames.drone,
    BODY: {
        FOV: base.FOV * 1.1
    },
    GUNS: [
        {
            POSITION: [6, 11, 1.3, 7, 0, 0, 0],
            PROPERTIES: {
                SHOOT_SETTINGS: combineStats([g.drone]),
                TYPE: "turretedDrone",
                AUTOFIRE: true,
                SYNCS_SKILLS: true,
                STAT_CALCULATOR: gunCalcNames.drone,
                MAX_CHILDREN: 6
            }
        }
    ],
      TURRETS: [
        {
            POSITION: [9, 0, 0, 0, 360, 1],
            TYPE: "overdriveDeco",
        },
    ]
}
Class.contagion = {
    PARENT: "genericTank",
    LABEL: 'Contagion',
    DANGER: 6,
    BODY: {
        FOV: 1.1,
        ACCELERATION: base.ACCEL * 0.9
    },
    STAT_NAMES: statnames.mixed,
    GUNS: [{
        POSITION: [19, 5.5, 1, 0, 0, 0, 0.5],
        PROPERTIES: {
            SHOOT_SETTINGS: combineStats([g.basic, g.contagi]),
            TYPE: "bullet"
        }
    }, {
        POSITION: [13, 8, 1, 0, 0, 0, 0]
    }, {
        POSITION: [4, 8, 1.7, 13, 0, 0, 0],
        PROPERTIES: {
            SHOOT_SETTINGS: combineStats([g.trap, g.morerange, g.lessspread]),
            TYPE: "trap",
            STAT_CALCULATOR: gunCalcNames.trap
        }
    }]
};
Class.triContagion = makeMulti({
    PARENT: "genericTank",
    DANGER: 6,
    BODY: {
        FOV: 1.1,
        ACCELERATION: base.ACCEL * 0.9
    },
    STAT_NAMES: statnames.mixed,
    GUNS: [{
        POSITION: [19, 5.5, 1, 0, 0, 0, 0.5],
        PROPERTIES: {
            SHOOT_SETTINGS: combineStats([g.basic, g.contagi, g.flankGuard]),
            TYPE: "bullet"
        }
    }, {
        POSITION: [13, 8, 1, 0, 0, 0, 0]
    }, {
        POSITION: [4, 8, 1.7, 13, 0, 0, 0],
        PROPERTIES: {
            SHOOT_SETTINGS: combineStats([g.trap, g.morerange, g.lessspread, g.flankGuard]),
            TYPE: "trap",
            STAT_CALCULATOR: gunCalcNames.trap
        }
    }]
}, 3, "Tri-Contagion");
Class.autoContagion = makeAuto(Class.contagion);
Class.fort = {
    PARENT: "genericTank",
    LABEL: "Fort",
    DANGER: 7,
    BODY: {
        SPEED: base.SPEED * 0.8,
        ACCELERATION: base.ACCEL * 0.9,
        FOV: 1.15
    },
    STAT_NAMES: statnames.mixed,
    GUNS: [{
        POSITION: [22, 5.5, 1, 0, 0, 0, 0.5],
        PROPERTIES: {
            SHOOT_SETTINGS: combineStats([g.basic, g.contagi]),
            TYPE: "bullet"
        }
    }, {
        POSITION: [18, 12, 1, 0, 0, 0, 0]
    }, {
        POSITION: [2, 12, 1.1, 18, 0, 0, 0],
        PROPERTIES: {
            SHOOT_SETTINGS: combineStats([g.trap, g.setTrap]),
            TYPE: "setTrap"
        }
    }]
};
Class.droneTrapper = {
    PARENT: "genericTank",
    LABEL: "Magician",
    DANGER: 7,
    BODY: {
        FOV: 1.1,
        ACCELERATION: base.ACCEL * .9
    },
    STAT_NAMES: statnames.mixed,
    GUNS: [{
        POSITION: [6, 12, 1.2, 8, 0, 0, 0],
        PROPERTIES: {
            SHOOT_SETTINGS: combineStats([g.drone, g.overseer, g.lesspower]),
            TYPE: "drone",
            AUTOFIRE: true,
            SYNCS_SKILLS: true,
            STAT_CALCULATOR: gunCalcNames.drone,
            MAX_CHILDREN: 6
        }
    }, {
        POSITION: [13, 8, 1, 0, 0, 0, 0]
    }, {
        POSITION: [4, 8, 1.7, 13, 0, 0, 0],
        PROPERTIES: {
            SHOOT_SETTINGS: combineStats([g.trap]),
            TYPE: "trap",
            STAT_CALCULATOR: gunCalcNames.trap
        }
    }]
}
Class.trojan = {
    PARENT: "genericTank",
    LABEL: "Trojan",
    STAT_NAMES: statnames.mixed,
    DANGER: 7,
    BODY: {
        ACCELERATION: base.ACCEL * 0.675,
        SPEED: base.SPEED * 0.875,
        FOV: 1.1
    },
    GUNS: [{
        POSITION: [19, 5.5, 1, 0, 0, 0, .5],
        PROPERTIES: {
            SHOOT_SETTINGS: combineStats([g.basic, g.contagi, g.flankGuard]),
            TYPE: "bullet"
        }
    }, {
        POSITION: [6, 12, 1.2, 8, 0, 0, 0],
        PROPERTIES: {
            SHOOT_SETTINGS: combineStats([g.drone, g.overseer, g.bitlessreload]),
            TYPE: "drone",
            AUTOFIRE: true,
            SYNCS_SKILLS: true,
            STAT_CALCULATOR: gunCalcNames.drone,
            WAIT_TO_CYCLE: true,
            MAX_CHILDREN: 4
        }
    }, {
        POSITION: [19, 5.5, 1, 0, 0, 180, .5],
        PROPERTIES: {
            SHOOT_SETTINGS: combineStats([g.basic, g.contagi, g.flankGuard]),
            TYPE: "bullet"
        }
    }, {
        POSITION: [6, 12, 1.2, 8, 0, 180, 0],
        PROPERTIES: {
            SHOOT_SETTINGS: combineStats([g.drone, g.overseer, g.bitlessreload]),
            TYPE: "drone",
            AUTOFIRE: true,
            SYNCS_SKILLS: true,
            STAT_CALCULATOR: gunCalcNames.drone,
            WAIT_TO_CYCLE: true,
            MAX_CHILDREN: 4
        }
    }]
}
Class.gundirector = {
    PARENT: "genericTank",
    LABEL: "Pathogen",
    STAT_NAMES: statnames.mixed,
    DANGER: 6,
    BODY: {
        ACCELERATION: base.ACCEL * 0.75,
        SPEED: base.SPEED * 0.95,
        FOV: 1.1
    },
    GUNS: [{
        POSITION: [19, 5.5, 1, 0, 0, 0, .5],
        PROPERTIES: {
            SHOOT_SETTINGS: combineStats([g.basic, g.contagi]),
            TYPE: "bullet"
        }
    }, {
        POSITION: [6, 12, 1.2, 8, 0, 0, 0],
        PROPERTIES: {
            SHOOT_SETTINGS: combineStats([g.drone, g.bitlessreload]),
            TYPE: "drone",
            AUTOFIRE: true,
            SYNCS_SKILLS: true,
            STAT_CALCULATOR: gunCalcNames.drone,
            MAX_CHILDREN: 6
        }
    }]
}
Class.protist = {
    PARENT: "genericTank",
    LABEL: "Protist",
    DANGER: 7,
    BODY: {
        ACCELERATION: base.ACCEL * .9,
        SPEED: base.SPEED * .8,
        FOV: 1.1
    },
    STAT_NAMES: statnames.mixed,
    GUNS: [{
        POSITION: [18, 5.5, 1, 0, 0, 0, .5],
        PROPERTIES: {
            SHOOT_SETTINGS: combineStats([g.basic, g.contagi]),
            TYPE: "bullet"
        }
    }, {
        POSITION: [4.5, 10, 1, 10.5, 0, 0, 0]
    }, {
        POSITION: [1, 12, 1.01, 15, 0, 0, 0],
        PROPERTIES: {
            SHOOT_SETTINGS: combineStats([g.factory, g.babyfactory]),
            TYPE: "minion",
            STAT_CALCULATOR: gunCalcNames.drone,
            AUTOFIRE: true,
            SYNCS_SKILLS: true,
            MAX_CHILDREN: 4
        }
    }, {
        POSITION: [3.5, 12, 1, 8, 0, 0, 0]
    }]
};
Class.acid = {
    PARENT: "genericTank",
    LABEL: 'Acid',
    DANGER: 6,
    BODY: {
        ACCELERATION: base.ACCEL * 0.75,
        SPEED: base.SPEED * 0.85,
        FOV: base.FOV * 1.2,
    },
    GUNS: [{
        POSITION: [24, 8.5, 1, 0, 0, 0, 0],
        PROPERTIES: {
            SHOOT_SETTINGS: combineStats([g.basic, g.sniper]),
            TYPE: "poisonbullet",
        }
    }, {
        POSITION: [13.95, 5.15, 1, 0, 0, 0, 0],
        PROPERTIES: {
            COLOR: "green"
        }
    }]
};
Class.disintegrator = {
    PARENT: "genericTank",
    DANGER: 6,
    LABEL: "Disintegrator",
    BODY: {
        ACCELERATION: base.ACCEL * 0.75,
        SPEED: 0.7 * base.SPEED,
        FOV: 1.4 * base.FOV
    },
    GUNS: [
        {
            POSITION: [27, 8, 1, 0, 0, 0, 0],
            PROPERTIES: {
                SHOOT_SETTINGS: combineStats([g.basic, g.sniper, g.assassin]),
                TYPE: "poisonbullet"
            }
        }, {
        POSITION: [16, 8, 1, 0, 0, 0, 0],
        PROPERTIES: {
            COLOR: "green"
            }
        }, {
        POSITION: [5, 8, -1.4, 8, 0, 0, 0]
        }
    ]
}
Class.chiller = {
    PARENT: "genericTank",
    LABEL: 'Chiller',
    DANGER: 6,
    BODY: {
        ACCELERATION: base.ACCEL * 0.7,
        FOV: 1.2
    },
    GUNS: [{
        POSITION: [24, 8.5, 1, 0, 0, 0, 0],
        PROPERTIES: {
            SHOOT_SETTINGS: combineStats([g.basic, g.sniper]),
            TYPE: "icebullet"
        }
    }, {
        POSITION: [13.95, 5.15, 1, 0, 0, 0, 0],
        PROPERTIES: {
        COLOR: "#28B1DE"
        }
    }]
};
Class.freezer = {
    PARENT: "genericTank",
    DANGER: 6,
    LABEL: "Freezer",
    BODY: {
        ACCELERATION: base.ACCEL * 0.75,
        SPEED: 0.7 * base.SPEED,
        FOV: 1.4 * base.FOV
    },
    GUNS: [
        {
            POSITION: [27, 8, 1, 0, 0, 0, 0],
            PROPERTIES: {
                SHOOT_SETTINGS: combineStats([g.basic, g.sniper, g.assassin]),
                TYPE: "icebullet"
            }
        }, {
        POSITION: [16, 8, 1, 0, 0, 0, 0],
        PROPERTIES: {
            COLOR: "#28B1DE"
            }
        }, {
        POSITION: [5, 8, -1.4, 8, 0, 0, 0]
        }
    ]
}
Class.helecopter = {
  PARENT: "genericTank",
  LABEL: "Attack Helicopter",
  BODY: {
    SPEED: 6,
    PUSHABILITY: 0,
    ACCELERATION: 0.8,
  },
  DANGER: 6,
  GUNS: [{
            POSITION: [19, 2, 1, 0, -2.5, 0, 0],
            PROPERTIES: {
                SHOOT_SETTINGS: combineStats([g.basic, g.pelleter, g.power, g.twin, { speed: 0.7, maxSpeed: 0.7 }, g.flankGuard, { recoil: 1.8 }]),
                TYPE: "bullet",
                HAS_NO_RECOIL: true,
            },
        },
        {
            POSITION: [19, 2, 1, 0, 2.5, 0, 0.5],
            PROPERTIES: {
                SHOOT_SETTINGS: combineStats([g.basic, g.pelleter, g.power, g.twin, { speed: 0.7, maxSpeed: 0.7 }, g.flankGuard, { recoil: 1.8 }]),
                TYPE: "bullet",
                HAS_NO_RECOIL: true,
            }, 
    }, {
            POSITION: [2, 2, 1, 0, 0, 180, 0],
            PROPERTIES: {
                SHOOT_SETTINGS: combineStats([g.basic, g.triAngle, g.thruster, g.thruster, g.fakewithrecoil]),
                TYPE: "bullet",
                AUTOFIRE: true,
            },
    }, {
      POSITION: [12, 11, 1, 0, 0, 0, 0],
    },
    {
      POSITION: [26.5, 8, 0.7, 0, 0, 180, 0],
    },
    {
      POSITION: [5.5, 8, -1.8, 6.5, 0, 180, 0],
    },
  ],
  TURRETS: [
    {
      /*  SIZE     X       Y     ANGLE    ARC */
      POSITION: [20, -27.5, 0, 0, 360, 1],
      TYPE: "helecoptersblade",
    },
    {
      /*  SIZE     X       Y     ANGLE    ARC */
      POSITION: [25, 0, 0, 0, 360, 1],
      TYPE: "helecopterblade",
    },
  ],
};
Class.twinsniper = {
    PARENT: "genericTank",
    LABEL: "Twiper",
    DANGER: 7,
    BODY: {
        FOV: 1.1 * base.FOV
    },
    CONTROLLERS: ["zoom"],
    TOOLTIP: "Hold right click to zoom.",
    GUNS: [
        {            
            POSITION: [24, 8.5, 1, 0, 5.5, 0, 0],
            PROPERTIES: {
                SHOOT_SETTINGS: combineStats([g.basic, g.twin, g.sniper]),
                TYPE: "bullet"
            }
        },
        {
            POSITION: [24, 8.5, 1, 0, -5.5, 0, .5],
            PROPERTIES: {
                SHOOT_SETTINGS: combineStats([g.basic, g.twin, g.sniper]),
                TYPE: "bullet"
            }
        }
    ]
}
Class.backShield = {
    PARENT: "genericTank",
    LABEL: 'BackShield',
    DANGER: 7,
    GUNS: [{
        POSITION: [18, 8, 1, 0, 0, 0, 0],
        PROPERTIES: {
            SHOOT_SETTINGS: combineStats([g.basic]),
            TYPE: "bullet"
        }
    }],
    TURRETS: [{
        POSITION: [18, 18, 0, 180, 360, 1],
        TYPE: ["backshieldturret", { SHAPE: 12 }],
        VULNERABLE: true
    }]
};
Class.mirrorBackShield = {
    PARENT: "genericTank",
    LABEL: 'BackMirror',
    DANGER: 7,
    GUNS: [{
        POSITION: [18, 8, 1, 0, 0, 0, 0],
        PROPERTIES: {
            SHOOT_SETTINGS: combineStats([g.basic]),
            TYPE: "bullet"
        }
    }],
    TURRETS: [{
        POSITION: [16.7, -18.5, 0, 0, 360, 1],
        TYPE: ["mirrorbackshieldturret", { SHAPE: 14 }],
        VULNERABLE: true
    }]
};
Class.waterfall = {  
    PARENT: "genericTank",
    LABEL: "Waterfall",
    DANGER: 6,
    GUNS: [
        {
            POSITION: [21, 14, 1, 0, 0, 0, 0],
            PROPERTIES: {
                SHOOT_SETTINGS: combineStats([g.basic, g.pounder, g.destroyer]),
                TYPE: "bullet",
            },
        },
        {
            POSITION: [19, 2, 1, 0, -2.5, 180, 0],
            PROPERTIES: {
                SHOOT_SETTINGS: combineStats([g.basic, g.pelleter, g.power, g.twin, { speed: 0.7, maxSpeed: 0.7 }, g.flankGuard, { recoil: 1.8 }]),
                TYPE: "bullet",
            },
        },
        {
            POSITION: [19, 2, 1, 0, 2.5, 180, 0.5],
            PROPERTIES: {
                SHOOT_SETTINGS: combineStats([g.basic, g.pelleter, g.power, g.twin, { speed: 0.7, maxSpeed: 0.7 }, g.flankGuard, { recoil: 1.8 }]),
                TYPE: "bullet",
            },
        },
        {
            POSITION: [12, 11, 1, 0, 0, 180, 0],
        },
    ],
}
Class.auto2 = {
    PARENT: "genericTank",
    LABEL: "Auto-2",
    DANGER: 5,
    FACING_TYPE: ["spin", {speed: 0.02}],
    TURRETS: [{
        POSITION: [11, 8, 0, 0, 190, 0],
        TYPE: "autoTankGun"
    }, {
        POSITION: [11, 8, 0, 180, 190, 0],
        TYPE: "autoTankGun"
    }]
}
Class.swivel2 = {
    PARENT: "genericTank",
    LABEL: "Swivel-2",
    DANGER: 5,
    FACING_TYPE: ["spin", {speed: 0.02}],
    TURRETS: [{
        POSITION: [9, 7, 0, 0, 360, 1],
        TYPE: "autoTankGun"
    }, {
        POSITION: [9, 7, 0, 180, 360, 1],
        TYPE: "autoTankGun"
    }]
}
Class.swivel3 = {
    PARENT: "genericTank",
    LABEL: "Swivel-3",
    DANGER: 5,
    FACING_TYPE: ["spin", {speed: 0.02}],
    TURRETS: [{
        POSITION: [11, 8, 0, 0, 360, 1],
        TYPE: "autoTankGun"
    }, {
        POSITION: [11, 8, 0, 120, 360, 1],
        TYPE: "autoTankGun"
    }, {
        POSITION: [11, 8, 0, 240, 360, 1],
        TYPE: "autoTankGun"
    }]
}
const timer = (run, duration) => {
    let timer = setInterval(() => run(), 31.25);
    setTimeout(() => {
        clearInterval(timer);
    }, duration * 1000);
};
  const damageOnTick = (body, instance, multiplier, duration, stopAtSetHealth, hitsOwnTeam) => {
    if (!instance) return
    if (!instance.damageOnTicking && !instance.godmode && !instance.invuln && (instance.type == "tank" || instance.type == "food" || instance.type == "miniboss" || instance.type == "crasher") && instance.team != body.team) {
        instance.damageOnTicking = true;
        setTimeout(() => {
            instance.damageOnTicking = false;
        }, 2 * duration * 1000);
        timer(() => {
            if (instance.damageOnTicking && instance.health.amount > stopAtSetHealth && instance.health.amount - (multiplier * 0.5) > stopAtSetHealth) {
                instance.health.amount -= multiplier * 0.5;
            } //else {if (instance.health.amount - (multiplier * 0.5) < stopAtSetHealth) {instance.health.amount === stopAtSetHealth}}
        }, 2 * duration);
    }
};
const iceOnTick = (body, instance, multiplier, duration, hitsOwnTeam) => {
    if (!instance) return
    if (!instance.invuln && !instance.godmode && (instance.type == "tank" || instance.type == "food" || instance.type == "miniboss" || instance.type == "crasher") && instance.team != body.team) timer(() => {
        instance.velocity.x /= 1.05 * multiplier;
        instance.velocity.y /= 1.05 * multiplier;
    }, 1.5 * duration);
};
Class.acidsmasher = {
    PARENT: "genericSmasher",
    LABEL: "Injector",
    DANGER: 6,
    BODY: {
      DAMAGE: base.DAMAGE * 0.87,
    },
    TURRETS: [
        {
            POSITION: [21.8, 0, 0, 0, 360, 0],
            TYPE: "greenSmasherBody",
        }, {
            POSITION: [22.3, 0, 0, 0, 360, -1],
            TYPE: "smasherBody"
        }
    ],
    ON: [{
        event: "damage",
        handler: ({ body, damageTool }) => {
             damageOnTick(body, damageTool[0], 1, 1, 1, true);
         }
    }]
}
Class.autoinceptionistbody = {
    PARENT: "genericTank",
    LABEL: "Auto-Inceptionist base",
    DANGER: 4,
    GUNS: [
        {
            POSITION: [18, 8, 1, 0, 0, 0, 0],
            PROPERTIES: {
                SHOOT_SETTINGS: combineStats([g.basic]),
                TYPE: "ceptionistbullet",
            }
        }
    ]
}

// Auto tanks
Class.autoBasic = makeAuto(Class.basic, "Auto-Basic");
Class.autoTwin = makeAuto(Class.twin, "Auto-Twin");
Class.autoMach = makeAuto(Class.machineGun, "Auto-Mach");
Class.autoSniper = makeAuto(Class.sniper, "Auto-Sniper");
Class.autoFlank = makeAuto(Class.flankGuard, "Auto-Flank");
Class.autoDirector = makeAuto(Class.director, "Chairman");
Class.autoPound = makeAuto(Class.pounder, "Scratcher");
Class.autoTrap = makeAuto(Class.trapper, "Auto-Trapper");
Class.autoDesmos = makeAuto(Class.desmos, "Auto-Desmos");
Class.autolittleHunter = makeAuto(Class.littleHunter, "Auto-Subduer")
Class.autoinception = makeAuto(Class.inception, "Auto-inception");
Class.autoauto2 = makeAuto(Class.auto2, "Auto-Auto-2");
Class.autoCloner = makeAuto({
  PARENT: "genericTank",
  GUNS: [
    {
      /*** LENGTH  WIDTH   ASPECT    X       Y     ANGLE   DELAY */
      POSITION: [18, 8, 1, 0, 0, 0, 0],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.basic]),
        TYPE: "bullet"
      }
    },
    {
      POSITION: [0, 20, 1, 0, 0, 180, 3],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.basic, g.slow]),
        TYPE: "autoclonerprobe",
        MAX_CHILDREN: 1
      }
    }
  ],
  TURRETS: [
    {
      /*  SIZE     X       Y     ANGLE    ARC */
      POSITION: [24, 0, 0, 0, 360, 0],
      TYPE: "mindindicator"
    }
  ]
}, "Auto-Cloner");
Class.autoDouble = makeAuto(Class.doubleTwin, "Auto-Double")
Class.autoAssassin = makeAuto(Class.assassin)
Class.autoGunner = makeAuto(Class.gunner)
Class.autoTriAngle = makeAuto(Class.triAngle)
Class.autoOverseer = makeAuto(Class.overseer)
Class.autoRevolutionist = makeAuto(Class.revolutionist, "Audioboard");
Class.autoCruiser = makeAuto(Class.cruiser)
Class.autoSpawner = makeAuto(Class.spawner)
Class.autoBuilder = makeAuto(Class.builder)
Class.autoBinary = makeAuto(Class.binary, "Auto-Binary")
Class.autoinceptionist = makeAuto(Class.autoinceptionistbody, "Auto-Inceptionist", {type: 'ceptionistturret'});
Class.autoGundirector = makeAuto(Class.gundirector, "Auto-Pathogen")
Class.autoBigSubduer = makeAuto(Class.bigSubduer, "Auto-Mitochondrion")
Class.autoFlankdue = makeAuto(Class.flankdue, "Auto-Flankduer")
Class.autoTripleShot = makeAuto(Class.tripleShot, "Auto-Triple Shot");
Class.autoHunter = makeAuto(Class.hunter, "Auto-Hunter");
Class.autoRifle = makeAuto(Class.rifle, "Auto-Rifle");
Class.autoTwinsniper = makeAuto(Class.twinsniper, "Auto-Twiper");
Class.autoAcid = makeAuto(Class.acid, "Cyanide");
Class.autoChill = makeAuto(Class.chiller, "Auto-Chiller");
Class.autoMini = makeAuto(Class.minigun, "Auto-Minigun");
Class.autoSprayer = makeAuto(Class.sprayer, "Auto-Sprayer");
Class.autoHexaTank = makeAuto(Class.hexaTank, "Auto-HexaTank");
Class.autoAuto3 = makeAuto(Class.auto3, "Auto-Auto3");
Class.autoUnderseer = makeAuto(Class.underseer, "Auto-Underseer");
Class.autoDestroy = makeAuto(Class.destroyer, "Auto-Destroyer");
Class.autoArtillery = makeAuto(Class.artillery, "Auto-Artillery");
Class.autoLaunch = makeAuto(Class.launcher, "Auto-Launcher");
Class.autoTriTrapper = makeAuto(Class.triTrapper, "Auto-Tri Trapper");
Class.autoTrapGuard = makeAuto(Class.trapGuard, "Auto-TrapGuard");
Class.autoVolute = makeAuto(Class.volute, "Auto-Volute");
Class.autoHelix = makeAuto(Class.helix, "Auto-Helix");
Class.autoUndertow = makeAuto(Class.undertow, "Auto-Undertow");
Class.autoRepeater = makeAuto(Class.repeater, "Auto-Repeater");
Class.automachinception = makeAuto(Class.machinception, "Auto-Machceptioner");
Class.autotailgator = makeAuto(Class.tailgator, "Auto-Tailgator");
Class.autoflankinception = makeAuto(Class.flankinception, "Auto-Flankceptioner");
Class.autoBackShield = makeAuto(Class.backShield, "Auto-BackShield");
Class.autoSmasher = makeAuto({
    PARENT: "genericSmasher",
    DANGER: 6,
    TURRETS: [
        {
            POSITION: [21.5, 0, 0, 0, 360, 0],
            TYPE: "smasherBody"
        }
    ],
    SKILL_CAP: [smshskl, smshskl, smshskl, smshskl, smshskl, smshskl, smshskl, smshskl, smshskl, smshskl]
}, "Auto-Smasher", {
    type: "autoSmasherTurret",
    size: 11,
})

//Hybrid Tanks
Class.bascrid = makeHybrid('basic', "Basic-Hybrid")
Class.twinbrid = makeHybrid('twin', "Twin-Hybrid")
Class.machbrid = makeHybrid('machineGun', "Machine-Hybrid")
Class.snipebrid = makeHybrid('sniper', "Snipe-Hybrid")
Class.flankbrid = makeHybrid('flankGuard', "Flank-Hybrid")
Class.poundbrid = makeHybrid('pounder', "Pound-Hybrid")
Class.trapbrid = makeHybrid('trapper', "Trapper-Hybrid")
Class.desmosbrid = makeHybrid('desmos', "Desmos-Hybrid")
Class.littleHunterbrid = makeHybrid('littleHunter', "Subduer-Hybrid")
Class.inceptionbrid = makeHybrid('inception', "Inception-Hybrid")
Class.auto2brid = makeHybrid('auto2', "Auto-2-Hybrid")
Class.doubletwinbrid = makeHybrid('doubleTwin', "Double Twin-Hybrid")
Class.hexatankbrid = makeHybrid('hexaTank', "Hexatank-Hybrid")
Class.auto3brid = makeHybrid('auto3', "Auto3-Hybrid")
Class.binarybrid = makeHybrid('binary', "Binary-Hybrid")
Class.flankduebrid = makeHybrid('flankdue', "Flankduer-Hybrid")
Class.bigsubduerbrid = makeHybrid('bigSubduer', "Mitochondrion-Hybrid")
Class.clonebrid = makeHybrid({  
  PARENT: "genericTank",
  GUNS: [
    {
      POSITION: [18, 8, 1, 0, 0, 0, 0],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.basic]),
        TYPE: "bullet"
      }
    },
    {
      POSITION: [0, 20, 1, 0, 0, 180, 3],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.basic, g.slow]),
        TYPE: "hybridclonerprobe",
        MAX_CHILDREN: 1
      }
    }
  ],
  TURRETS: [
    {
      POSITION: [24, 0, 0, 0, 360, 0],
      TYPE: "mindindicator"
    }
  ]
}, "Cloner-Hybrid")
Class.bentHybrid = makeHybrid('tripleShot', "Bent Hybrid")
Class.revobrid = makeHybrid(Class.revolutionist, "Revobrid");
Class.contagionbrid = makeHybrid('contagion', "Contagion-Hybrid")
Class.poacher = makeHybrid('hunter', "Poacher")
Class.armsman = makeHybrid('rifle', "Armsman")
Class.cropDuster = makeHybrid('minigun', "Crop Duster")
Class.hybrid = makeHybrid('destroyer', "Hybrid")
Class.assbrid = makeHybrid('assassin', "Assassin-Hybrid")
Class.twipebrid = makeHybrid('twinsniper', "Twiper-Hybrid")
Class.acidbrid = makeHybrid('acid', "Acid-Hybrid")
Class.chillbrid = makeHybrid('chiller', "Chiller-Hybrid")
Class.artilbrid = makeHybrid('artillery', "Artillery-Hybrid")
Class.spraybrid = makeHybrid('sprayer', "Sprayer-Hybrid")
Class.trapguardbrid = makeHybrid('trapGuard', "TG-Hybrid")
Class.builderbrid = makeHybrid('builder', "Builder-Hybrid")
Class.launchbrid = makeHybrid('launcher', "Launcher-Hybrid")
Class.tritrapperbrid = makeHybrid('triTrapper', "Tri-Trapper-Hybrid")
Class.helixbrid = makeHybrid('helix', "Helix-Hybrid")
Class.volutebrid = makeHybrid('volute', "Volute-Hybrid")
Class.undertowbrid = makeHybrid('undertow', "Undertow-Hybrid")
Class.repeaterbrid = makeHybrid('repeater', "Repeater-Hybrid")
Class.inceptionistbrid = makeHybrid('inceptionist', "Inceptionist-Hybrid")
Class.machinceptionbrid = makeHybrid('machinception', "Flankceptioner-Hybrid")
Class.tailgatorbrid = makeHybrid('tailgator', "Tailgator-Hybrid")
Class.flankinceptionbrid = makeHybrid('flankinception', "Flankceptioner-Hybrid")

//auto hybrid tanks
Class.autotwinbrid = makeHybrid('autoTwin', "Auto-Twin-Hybrid")
Class.autosnipebrid = makeHybrid('autoSniper', "Auto-Sniper-Hybrid")
Class.automachbrid = makeHybrid('autoMach', "Auto-Machine-Hybrid")
Class.autoflankbrid = makeHybrid('autoFlank', "Auto-Flank-Hybrid")
Class.autopoundbrid = makeHybrid('autoPound', "Auto-Pound-Hybrid")
Class.autotrapbrid = makeHybrid('autoTrap', "Auto-Trapper-Hybrid")
Class.autodesmosbrid = makeHybrid('autoDesmos', "Auto-Desmos-Hybrid")
Class.autobascrid = makeHybrid('autoBasic', "Auto-Basic-Hybrid")
Class.autoinceptionbrid = makeHybrid('autoinception', "Auto-Inception-Hybrid")
Class.autolittleHunterbrid = makeHybrid('autolittleHunter', "Auto-Subduer-Hybrid")
Class.autoauto2brid = makeHybrid('auto2', "Auto-Auto-2-Hybrid")


//hybrid drive tanks
Class.car = makeHybridDrive('basic', "Car")
Class.mercedes = makeHybridDrive('twin', "Mercedes")
Class.tesla = makeHybridDrive('sniper', "Tesla")
Class.toyota = makeHybridDrive('machineGun', "Toyota")
Class.ford = makeHybridDrive('flankGuard', "Ford")
Class.honda = makeHybridDrive('pounder', "Honda")
Class.gmc = makeHybridDrive('trapper', "GMC")
Class.porsche = makeHybridDrive('autoBasic', "Porsche")
Class.mazda = makeHybridDrive('desmos', "Mazda")
Class.volkswagen = makeHybridDrive('littleHunter', "Volkswagen")
Class.audi = makeHybridDrive('inception', "Audi")
Class.ferrari = makeHybridDrive('auto2', "Ferrari")

//Ceptions
Class.basicCeption = makeCeptionNerf(Class.basic, "Basic-Ception");
Class.twinCeption = makeCeptionNerf(Class.twin, "Twin-Ception");
Class.snipeCeption = makeCeptionNerf(Class.sniper, "Snipe-Ception");
Class.machCeption = makeCeptionNerf(Class.machineGun, "Mach-Ception");
Class.flankCeption = makeCeptionNerf(Class.flankGuard, "Flank-Ception");
Class.directCeption = makeCeptionNerf(Class.director, "Drone-Ception");
Class.poundCeption = makeCeptionNerf(Class.pounder, "Pound-Ception");
Class.trapCeption = makeCeptionNerf(Class.trapper, "Trap-Ception");
Class.desmosCeption = makeCeptionNerf(Class.desmos, "Desmos-Ception");
Class.bascridCeption = makeCeptionNerf(Class.bascrid, "Basic-Hybrid-Ception");
Class.littleHunterCeption = makeCeptionNerf(Class.littleHunter, "Subduer-Ception");
Class.inceptCeption = makeCeptionNerf(Class.inception, "Incept-Ception");
Class.auto2Ception = makeCeptionNerf(Class.auto2, "Auto-2-Ception");
Class.revoception = makeCeption(Class.revolutionist, "revoception");

//Trackers
Class.trackerSmasher = makeTracker(Class.smasher, "Scanner");
Class.trackerSniper = makeTracker(Class.sniper, "Marksman");
Class.trackerAssassin = makeTracker(Class.assassin, "Hitman");
Class.trackerHunter = makeTracker(Class.hunter, "Pinner");
Class.trackerMini = makeTracker(Class.minigun, "Scout");
Class.trackerRifle = makeTracker(Class.rifle, "DMR");
Class.trackerTwinsniper = makeTracker(Class.twinsniper, "Bolt Action");
Class.trackerSniperHybrid = makeTracker(Class.snipebrid, "Camper");
Class.trackerAcid = makeTracker(Class.acid, "Acidilizer");
Class.trackerChill = makeTracker(Class.chiller, "Icilizer");

//Homing Auto Tanks
Class.homingautoBasic = makeAuto(Class.basic, "Homing Auto-Basic", {type: 'homingAutoTurret'});
Class.homingautoTwin = makeAuto(Class.twin, "Homing Auto-Twin", {type: 'homingAutoTurret'});
Class.homingautoMach = makeAuto(Class.machineGun, "Homing Auto-Mach", {type: 'homingAutoTurret'});
Class.homingautoSniper = makeAuto(Class.sniper, "Homing-Auto Sniper", {type: 'homingAutoTurret'});
Class.homingautoFlank = makeAuto(Class.flankGuard, "Homing Auto-Flank", {type: 'homingAutoTurret'});
Class.homingautoDirector = makeAuto(Class.director, "Homing Auto-Director", {type: 'homingAutoTurret'});
Class.homingautoPound = makeAuto(Class.pounder, "Homing Auto-Pounder", {type: 'homingAutoTurret'});
Class.homingautoTrap = makeAuto(Class.trapper, "Homing Auto-Trapper", {type: 'homingAutoTurret'});
Class.homingautoDesmos = makeAuto(Class.desmos, "Homing Auto-Desmos", {type: 'homingAutoTurret'});
Class.homingautobascrid = makeAuto(Class.bascrid, "Homing Auto-Bascrid", {type: 'homingAutoTurret'})
Class.homingautolittleHunter = makeAuto(Class.littleHunter, "Homing Auto-Subduer", {type: 'homingAutoTurret'})
Class.homingautoinception = makeAuto(Class.inception, "Auto Inception", {type: 'homingAutoTurret'});
Class.homingautoauto2 = makeAuto(Class.auto2, "Auto-2", {type: 'homingAutoTurret'});

//Reveries
Class.reverie = addBackTurret(Class.basic, "Reverie", {type: 'autoTankGun'});
Class.twinreverie = addBackTurret(Class.basic, "Tyverie", {type: 'fastbigauto4gun'});
Class.poundreverie = addBackTurret(Class.basic, "Pyverie", {type: 'megaAutoTankGun'});
Class.dualreverie = addBackTurret(Class.basic, "Douverie", {type: 'dualAutoTankGun'});
Class.autoReverie = makeAuto(Class.inception, "Auto-Reverie");
Class.reveriebrid = makeHybrid('reverie', "Reverie-Hybrid");

//Auras
Class.auraTwin = makeAura(Class.twin);
Class.auraSniper = makeAura(Class.sniper);
Class.auraMachineGun = makeAura(Class.machineGun);
Class.auraFlankGuard = makeAura(Class.flankGuard);
Class.auraDirector = makeAura(Class.director);
Class.auraPounder = makeAura(Class.pounder);
Class.auraTrapper = makeAura(Class.trapper);
Class.auraAutoBasic = makeAura(Class.autoBasic);
Class.auraBascrid = makeAura(Class.bascrid);
Class.auraLittleHunter = makeAura(Class.littleHunter);
Class.auraInception = makeAura(Class.inception);
Class.auraDesmos = makeAura(Class.desmos);
Class.auraAuto2 = makeAura(Class.auto2);
Class.auraSmasher = makeAura(Class.smasher);

Class.damageAuraBasic = makeAura(Class.basic, "Omen Basic", {type: 'auraDamageGen'});
Class.damageAuraTwin = makeAura(Class.twin, "Omen Twin", {type: 'auraDamageGen'});
Class.damageAuraSniper = makeAura(Class.sniper, "Omen Sniper", {type: 'auraDamageGen'});
Class.damageAuraMachineGun = makeAura(Class.machineGun, "Omen Machine Gun", {type: 'auraDamageGen'});
Class.damageAuraFlankGuard = makeAura(Class.flankGuard, "Omen Flank Guard", {type: 'auraDamageGen'});
Class.damageAuraDirector = makeAura(Class.director, "Omen Director", {type: 'auraDamageGen'});
Class.damageAuraPounder = makeAura(Class.pounder, "Omen Pounder", {type: 'auraDamageGen'});
Class.damageAuraTrapper = makeAura(Class.trapper, "Omen Trapper", {type: 'auraDamageGen'});
Class.damageAuraAutoBasic = makeAura(Class.autoBasic, "Omen Auto-Basic", {type: 'auraDamageGen'});
Class.damageAuraBascrid = makeAura(Class.bascrid, "Omen Bascrid", {type: 'auraDamageGen'});
Class.damageAuraLittleHunter = makeAura(Class.littleHunter, "Omen Subduer", {type: 'auraDamageGen'});
Class.damageAuraInception = makeAura(Class.inception, "Omen Inception", {type: 'auraDamageGen'});
Class.damageAuraDesmos = makeAura(Class.desmos, "Omen Desmos", {type: 'auraDamageGen'});
Class.damageAuraAuto2 = makeAura(Class.auto2, "Omen Auto-2", {type: 'auraDamageGen'});

Class.rangeAuraBasic = makeAura(Class.basic, "Mega-Aura Basic", {type: 'auraRangeGen'});
Class.rangeAuraTwin = makeAura(Class.twin, "Mega-Aura Twin", {type: 'auraRangeGen'});
Class.rangeAuraSniper = makeAura(Class.sniper, "Mega-Aura Sniper", {type: 'auraRangeGen'});
Class.rangeAuraMachineGun = makeAura(Class.machineGun, "Mega-Aura Machine Gun", {type: 'auraRangeGen'});
Class.rangeAuraFlankGuard = makeAura(Class.flankGuard, "Mega-Aura Flank Guard", {type: 'auraRangeGen'});
Class.rangeAuraDirector = makeAura(Class.director, "Mega-Aura Director", {type: 'auraRangeGen'});
Class.rangeAuraPounder = makeAura(Class.pounder, "Mega-Aura Pounder", {type: 'auraRangeGen'});
Class.rangeAuraTrapper = makeAura(Class.trapper, "Mega-Aura Trapper", {type: 'auraRangeGen'});
Class.rangeAuraAutoBasic = makeAura(Class.autoBasic, "Mega-Aura Auto-Basic", {type: 'auraRangeGen'});
Class.rangeAuraBascrid = makeAura(Class.bascrid, "Mega-Aura Bascrid", {type: 'auraRangeGen'});
Class.rangeAuraLittleHunter = makeAura(Class.littleHunter, "Mega-Aura Subduer", {type: 'auraRangeGen'});
Class.rangeAuraInception = makeAura(Class.inception, "Mega-Aura Inception", {type: 'auraRangeGen'});
Class.rangeAuraDesmos = makeAura(Class.desmos, "Mega-Aura Desmos", {type: 'auraRangeGen'});
Class.rangeAuraAuto2 = makeAura(Class.auto2, "Mega-Aura Auto-2", {type: 'auraRangeGen'});

Class.damagerangeAuraBasic = makeAura(Class.basic, "Mega-Omen Basic", {type: 'auraDamageRangeGen'});
Class.moredamageAuraBasic = makeAura(Class.basic, "X-Omen Basic", {type: 'auraMoreDamageGen'});
Class.morerangeAuraBasic = makeAura(Class.basic, "X-Mega-Aura Basic", {type: 'auraMoreRangeGen'});


Class.auraDoubleTwin = makeAura(Class.doubleTwin);
Class.auraTripleShot = makeAura(Class.tripleShot);

Class.auraAssassin = makeAura(Class.assassin);
Class.auraHunter = makeAura(Class.hunter);
Class.auraRifle = makeAura(Class.rifle);
Class.auraTrackerSniper = makeAura(Class.trackerSniper);
Class.auraTwinSniper = makeAura(Class.twinsniper);
Class.auraAcid = makeAura(Class.acid);
Class.auraChiller = makeAura(Class.chiller);

Class.auraMinigun = makeAura(Class.minigun);
Class.auraGunner = makeAura(Class.gunner);
Class.auraSprayer = makeAura(Class.sprayer);

Class.auraHexaTank = makeAura(Class.hexaTank);
Class.auraTriAngle = makeAura(Class.triAngle);
Class.auraAuto3 = makeAura(Class.auto3);
Class.auraReverie = makeAura(Class.reverie);
Class.auraBackShield = makeAura(Class.backShield);

Class.auraOverseer = makeAura(Class.overseer);
Class.auraCruiser = makeAura(Class.cruiser);
Class.auraUnderseer = makeAura(Class.underseer);
Class.auraSpawner = makeAura(Class.spawner);
Class.auraDirectdrive = makeAura(Class.directdrive);

Class.auraDestroyer = makeAura(Class.destroyer);
Class.auraArtillery = makeAura(Class.artillery);
Class.auraLauncher = makeAura(Class.launcher);

Class.auraBuilder = makeAura(Class.builder);
Class.auraTriTrapper = makeAura(Class.triTrapper);
Class.auraTrapGuard = makeAura(Class.trapGuard);

Class.auraAutoTwin = makeAura(Class.autoTwin);
Class.auraAutoSniper = makeAura(Class.autoSniper);
Class.auraAutoMach = makeAura(Class.autoMach);
Class.auraAutoFlank = makeAura(Class.autoFlank);
Class.auraAutoDirector = makeAura(Class.autoDirector);
Class.auraAutoPound = makeAura(Class.autoPound);
Class.auraAutoTrap = makeAura(Class.autoTrap);
Class.auraAutoDesmos = makeAura(Class.autoDesmos);
Class.auraRevolutionist = makeAura(Class.revolutionist);
Class.auraAutoLittleHunter = makeAura(Class.autolittleHunter);
Class.auraAutoInception = makeAura(Class.autoinception);
Class.auraAutoAuto2 = makeAura(Class.autoauto2);
Class.auraBasicCeption = makeAura(Class.basicCeption);
Class.auraHomingautoBasic = makeAura(Class.homingautoBasic);

Class.auratwinbrid = makeAura(Class.launcher);
Class.aurasnipebrid = makeAura(Class.launcher);
Class.auramachbrid = makeAura(Class.machbrid);
Class.auraflankbrid = makeAura(Class.flankbrid);
Class.aurapoundbrid = makeAura(Class.poundbrid);
Class.auratrapbrid = makeAura(Class.trapbrid);
Class.auraautobascrid = makeAura(Class.autobascrid);
Class.auradesmosbrid = makeAura(Class.desmosbrid);
Class.auralittlehunterbrid = makeAura(Class.littleHunterbrid);
Class.aurainceptionbrid = makeAura(Class.inceptionbrid);
Class.auraauto2brid = makeAura(Class.auto2brid);
Class.jeep = makeAura(Class.car, "jeep");

Class.auraBinary = makeAura(Class.binary);
Class.auraContagion = makeAura(Class.contagion);
Class.auraGundirector = makeAura(Class.gundirector);
Class.auraBigSubduer = makeAura(Class.bigSubduer);
Class.auraFlankdue = makeAura(Class.flankdue);

Class.auraMachinception = makeAura(Class.machinception);
Class.auraTailgator = makeAura(Class.tailgator);
Class.auraFlankinception = makeAura(Class.flankinception);

Class.auraVolute = makeAura(Class.volute);
Class.auraHelix = makeAura(Class.helix);
Class.auraUndertow = makeAura(Class.undertow);
Class.auraRepeater = makeAura(Class.repeater);

// TANK UPGRADE PATHS
Class.basic.UPGRADES_TIER_1 = ["twin", "sniper", "machineGun", "flankGuard", "director", "pounder", "trapper", "autoBasic", "desmos", "bascrid", "littleHunter", "inception", "auraBasic", "auto2"]
    Class.basic.UPGRADES_TIER_2 = ["smasher", "cloner"]
        Class.smasher.UPGRADES_TIER_3 = ["megaSmasher", "spike", "landmine", "pion", "trackerSmasher", "skater", "acidsmasher", "flail", "autoSmasher", "auraSmasher"]
        Class.healer.UPGRADES_TIER_3 = ["medic", "ambulance", "surgeon", "paramedic"]
        Class.cloner.UPGRADES_TIER_3 = ["hivemind", "autoCloner"]

    Class.twin.UPGRADES_TIER_2 = ["doubleTwin", "tripleShot", "gunner", "hexaTank", "autoTwin", "helix", "twinbrid", "binary", "twinsniper", "auraTwin"]
        Class.twin.UPGRADES_TIER_3 = ["bulwark"]
        Class.doubleTwin.UPGRADES_TIER_3 = ["tripleTwin", "hewnDouble", "autoDouble", "bentDouble", "doubletwinbrid", "auraDoubleTwin"]
        Class.tripleShot.UPGRADES_TIER_3 = ["pentaShot", "spreadshot", "bentDouble", "triplet", "autoTripleShot", "triplex", "bentHybrid", "trinary", "auraTripleShot"]

    Class.sniper.UPGRADES_TIER_2 = ["assassin", "hunter", "minigun", "rifle", "twinsniper", "autoSniper", "snipebrid", "trackerSniper", "acid", "chiller", "auraSniper"]
        Class.sniper.UPGRADES_TIER_3 = ["bushwhacker"]
        Class.assassin.UPGRADES_TIER_3 = ["ranger", "xHunter", "falcon", "stalker", "autoAssassin", "assbrid", "trackerAssassin", "disintegrator", "freezer", "auraAssassin", "single"]
        Class.hunter.UPGRADES_TIER_3 = ["predator", "xHunter", "poacher", "ordnance", "railgun", "dual","autoHunter", "trackerHunter", 'auraHunter']
        Class.rifle.UPGRADES_TIER_3 = ["musket", "crossbow", "armsman", "autoRifle", "trackerRifle", "auraRifle"]
        Class.trackerSniper.UPGRADES_TIER_3 = ["trackerAssassin", "trackerHunter", "trackerMini", "trackerRifle", "trackerTwinsniper", "trackerSniperHybrid", "trackerAcid", "trackerChill", "auraTrackerSniper"]
        Class.twinsniper.UPGRADES_TIER_3 = ["dual", "musket", "autoTwinsniper", "twipebrid", "trackerTwinsniper", "auraTwinSniper"]
        Class.acid.UPGRADES_TIER_3 = ["disintegrator", "acidsmasher", "autoAcid", "acidbrid", "trackerAcid", "auraAcid"]
        Class.chiller.UPGRADES_TIER_3 = ["freezer", "autoChill", "chillbrid", "trackerChill", "auraChiller"]

    Class.machineGun.UPGRADES_TIER_2 = ["artillery", "minigun", "gunner", "sprayer", "autoMach", "machbrid", "machinception", "auraMachineGun"]
        Class.minigun.UPGRADES_TIER_3 = ["streamliner", "nailgun", "cropDuster", "barricade", "vulture", "minilaser", "autoMini", "trackerMini", "accelminigun", "auraMinigun"]
        Class.gunner.UPGRADES_TIER_3 = ["autoGunner", "nailgun", "auto4", "machineGunner", "gunnerTrapper", "cyclone", "overgunner", "waterfall", "helecopter", "auraGunner"]
        Class.sprayer.UPGRADES_TIER_3 = ["redistributor", "phoenix", "atomizer", "focal", "autoSprayer", "spraybrid", "auraSprayer"]

    Class.flankGuard.UPGRADES_TIER_2 = ["hexaTank", "triAngle", "auto3", "trapGuard", "triTrapper", "autoFlank", "flankbrid", "flankdue", "flankinception", "backShield", "auraBackShield"]
        Class.flankGuard.UPGRADES_TIER_3 = ["tripleTwin"]
        Class.hexaTank.UPGRADES_TIER_3 = ["octoTank", "cyclone", "hexaTrapper", "quadruplex", "autoHexaTank", "hexatankbrid", "auraHexaTank", "auraTriAngle"]
        Class.triAngle.UPGRADES_TIER_3 = ["fighter", "booster", "falcon", "bomber", "autoTriAngle", "surfer", "eagle", "phoenix", "vulture", "subway", "helecopter"]
        Class.backShield.UPGRADES_TIER_3 = ["mirrorBackShield", "brella", "autoBackShield", "auraBackShield"]

    Class.director.UPGRADES_TIER_2 = ["overseer", "cruiser", "underseer", "gundirector", "spawner", "directdrive", "autoDirector", "auraDirector"]
        Class.director.UPGRADES_TIER_3 = ["manager", "bigCheese"]
        Class.overseer.UPGRADES_TIER_3 = ["overlord", "overtrapper", "overgunner", "banshee", "autoOverseer", "trojan", "overdrive", "commander", "auraOverseer"]
        Class.cruiser.UPGRADES_TIER_3 = ["carrier", "battleship", "fortress", "autoCruiser", "commander", "auraCruiser"]
        Class.underseer.UPGRADES_TIER_3 = ["necromancer", "maleficitor", "infestor", "autoUnderseer", "auraUnderseer"]
        Class.spawner.UPGRADES_TIER_3 = ["factory", "protist", "autoSpawner", "auraSpawner"]
        Class.directdrive.UPGRADES_TIER_3 = ["overdrive", "cruiserdrive", "revodirector", "honda", "dictator", "auraDirectdrive"]

    Class.pounder.UPGRADES_TIER_2 = ["destroyer", "builder", "artillery", "launcher", "autoPound", "volute", "poundbrid", "tailgator", "auraPounder"]
        Class.pounder.UPGRADES_TIER_3 = ["shotgun", "eagle"]
        Class.destroyer.UPGRADES_TIER_3 = ["conqueror", "annihilator", "hybrid", "construct", "autoDestroy", "waterfall", "interceptor", "auraDestroyer"]
        Class.artillery.UPGRADES_TIER_3 = ["mortar", "ordnance", "beekeeper", "fieldGun", "autoArtillery", "artilbrid", "auraArtillery"]
        Class.launcher.UPGRADES_TIER_3 = ["skimmer", "twister", "swarmer", "rocketeer", "fieldGun", "shrapnelgun", "firecracker", "autoLaunch", "launchbrid", "auraLauncher"]

    Class.trapper.UPGRADES_TIER_2 = ["builder", "triTrapper", "trapGuard", "contagion", "autoTrap", "trapbrid", "auraTrapper"]
        Class.trapper.UPGRADES_TIER_3 = ["barricade"]
        Class.builder.UPGRADES_TIER_3 = ["construct", "autoBuilder", "engineer", "boomer", "assembler", "architect", "conqueror", "fort", "builderbrid"]
        Class.triTrapper.UPGRADES_TIER_3 = ["fortress", "hexaTrapper", "septaTrapper", "architect", "triContagion", "autoTriTrapper", "tritrapperbrid"]
        Class.trapGuard.UPGRADES_TIER_3 = ["bushwhacker", "gunnerTrapper", "bomber", "conqueror", "bulwark", "autoTrapGuard", "trapguardbrid"]

    Class.autoBasic.UPGRADES_TIER_2 = ["autoTwin", "autoSniper", "autoMach", "autoFlank", "autoDirector", "autoPound", "autoTrap", "autoDesmos", "basicCeption", "autobascrid", "autolittleHunter", "autoinception", "autoauto2", "revolutionist", "reverie", "auraAutoBasic", "homingautoBasic"]
        Class.autoBasic.UPGRADES_TIER_3 = ["autoSmasher", "autoCloner"]
        Class.autoTwin.UPGRADES_TIER_3 = ["autoDouble", "autoTripleShot", "autoGunner", "autoHexaTank", "equilibrium", "autoBinary", "autoTwinsniper", "twinCeption", "autotwinbrid", "auraAutoTwin", "homingautoTwin"]
        Class.autoSniper.UPGRADES_TIER_3 = ["autoAssassin", "autoHunter", "autoMini", "autoRifle", "autoTwinsniper", "autoAcid", "autoChill", "snipeCeption", "autosnipebrid", "auraAutoSniper", "homingautoSniper"]
        Class.autoMach.UPGRADES_TIER_3 = ["autoArtillery", "autoMini", "autoGunner", "autoSprayer", "machCeption", "automachbrid", "automachinception", "auraAutoMach", "homingautoMach"]
        Class.autoFlank.UPGRADES_TIER_3 = ["autoHexaTank", "autoTriAngle", "autoAuto3", "autoTrapGuard", "autoTriTrapper", "flankCeption", "autoflankbrid", "autoFlankdue", "autoflankinception", "auraAutoFlank", "homingautoFlank"]
        Class.autoDirector.UPGRADES_TIER_3 = ["autoOverseer", "autoCruiser", "autoUnderseer", "autoGundirector", "autoSpawner", "directCeption", "auraAutoDirector", "homingautoDirector"]
        Class.autoPound.UPGRADES_TIER_3 = ["autoDestroy", "autoBuilder", "autoArtillery", "autoLaunch", "poundCeption", "autoVolute", "autopoundbrid", "autotailgator", "auraAutoPound", "homingautoPound"]
        Class.autoTrap.UPGRADES_TIER_3 = ["autoBuilder", "autoTriTrapper", "autoTrapGuard", "autoContagion", "trapCeption", "autotrapbrid", "auraAutoTrap", "homingautoTrap"]
        Class.autoDesmos.UPGRADES_TIER_3 = ["autoVolute", "autoHelix", "autoUndertow", "autoRepeater", "desmosCeption", "autodesmosbrid", "auraAutoDesmos", "homingautoDesmos"]
        Class.autolittleHunter.UPGRADES_TIER_3 = ["autoMini", "autoBinary", "autoHunter", "autoSprayer", "autoContagion", "autoGundirector", "autoBigSubduer", "autoFlankdue", "autolittleHunterbrid", "littleHunterCeption", "auraAutoLittleHunter", "homingautolittleHunter"]
        Class.autoinception.UPGRADES_TIER_3 = ["autoinceptionist", "automachinception", "autotailgator", "autoflankinception", "autoinceptionbrid", "inceptCeption", "auraAutoInception", "homingautoinception"]
        Class.autoauto2.UPGRADES_TIER_3 = ["autoAuto3", "autoRevolutionist", "autoReverie", "autoauto2brid", "auto2Ception", "auraAutoAuto2", "homingautoauto2"]
        Class.reverie.UPGRADES_TIER_3 = ["twinreverie", "poundreverie", "dualreverie", "autoReverie", "reveriebrid", "auraReverie"]
        Class.basicCeption.UPGRADES_TIER_3 = ["twinCeption", "snipeCeption", "machCeption", "flankCeption", "directCeption", "poundCeption", "trapCeption", "desmosCeption", "bascridCeption", "littleHunterCeption", "inceptCeption", "auraBasicCeption"]
        Class.homingautoBasic.UPGRADES_TIER_3 = ["homingautoTwin", "homingautoSniper", "homingautoMach", "homingautoFlank", "homingautoDirector", "homingautoPound", "homingautoTrap", "homingautoDesmos", "homingautobascrid", "homingautolittleHunter", "homingautoinception", "auraHomingautoBasic"]

    Class.bascrid.UPGRADES_TIER_2 = ["twinbrid", "snipebrid", "machbrid", "flankbrid", "overseer", "poundbrid", "trapbrid", "autobascrid", "desmosbrid", "littleHunterbrid", "inceptionbrid", "auto2brid", "car", "auraBascrid"]
        Class.bascrid.UPGRADES_TIER_3 = ["clonebrid"]
        Class.twinbrid.UPGRADES_TIER_3 = ["doubletwinbrid", "bentHybrid", "overgunner", "hexatankbrid", "autotwinbrid", "helixbrid", "binarybrid", "twipebrid", "mercedes", "auratwinbrid"]
        Class.snipebrid.UPGRADES_TIER_3 = ["assbrid", "poacher", "cropDuster", "armsman", "twipebrid", "autosnipebrid", "trackerSniperHybrid", "acidbrid", "chillbrid", "tesla", "aurasnipebrid"]
        Class.machbrid.UPGRADES_TIER_3 = ["artilbrid", "cropDuster", "overgunner", "spraybrid", "automachbrid", "machinceptionbrid", "toyota", "auramachbrid"]
        Class.flankbrid.UPGRADES_TIER_3 = ["hexatankbrid", "surfer", "auto3brid", "trapguardbrid", "tritrapperbrid", "autoflankbrid", "flankduebrid", "flankinceptionbrid", "ford", "auraflankbrid"]
        Class.poundbrid.UPGRADES_TIER_3 = ["hybrid", "builderbrid", "artilbrid", "launchbrid", "autopoundbrid", "volutebrid", "tailgatorbrid", "honda", "aurapoundbrid"]
        Class.trapbrid.UPGRADES_TIER_3 = ["builderbrid", "tritrapperbrid", "trapguardbrid", "contagionbrid", "autotrapbrid", "overtrapper", "gmc", "auratrapbrid"]
        Class.autobascrid.UPGRADES_TIER_3 = ["autotwinbrid", "autosnipebrid", "automachbrid", "autoflankbrid", "autopoundbrid", "autotrapbrid", "autodesmosbrid", "autolittleHunterbrid", "autoinceptionbrid", "revobrid", "reveriebrid", "bascridCeption", "porsche", "auraautobascrid"]
        Class.desmosbrid.UPGRADES_TIER_3 = ["volutebrid", "helixbrid", "undertowbrid", "repeaterbrid", "autodesmosbrid", "mazda", "auradesmosbrid"]
        Class.littleHunterbrid.UPGRADES_TIER_3 = ["cropDuster", "binarybrid", "poacher", "spraybrid", "contagionbrid", "bigsubduerbrid", "flankduebrid", "autolittleHunterbrid", "volkswagen", "auralittlehunterbrid"]
        Class.inceptionbrid.UPGRADES_TIER_3 = ["inceptionistbrid", "machinceptionbrid", "tailgatorbrid", "flankinceptionbrid", "overdrive", "autoinceptionbrid", "audi", "aurainceptionbrid"]
        Class.auto2brid.UPGRADES_TIER_3 = ["auto3brid", "revobrid", "reveriebrid", "autoauto2brid", "ferrari", "auraauto2brid"]
        Class.car.UPGRADES_TIER_3 = ["mercedes", "tesla", "toyota", "ford", "overdrive", "honda", "gmc", "porsche", "mazda", "volkswagen", "audi", "jeep"]

    Class.littleHunter.UPGRADES_TIER_2 = ["minigun", "binary", "hunter", "sprayer", "contagion", "gundirector", "bigSubduer", "flankdue", "autolittleHunter", "littleHunterbrid", "auraLittleHunter"]
        Class.binary.UPGRADES_TIER_3 = ["trinary", "dual", "autoBinary", "binarybrid", "auraBinary"]
        Class.contagion.UPGRADES_TIER_3 = ["fort", "triContagion", "autoContagion", "droneTrapper", "contagionbrid", "auraContagion"]
        Class.gundirector.UPGRADES_TIER_3 = ["trojan", "protist", "droneTrapper", "autoGundirector"]
        Class.bigSubduer.UPGRADES_TIER_3 = ["predator", "redistributor", "biggerSubduer", "clubbin", "autoBigSubduer", "bigsubduerbrid", "auraBigSubduer"]
        Class.flankdue.UPGRADES_TIER_3 = ["subway", "triContagion", "clubbin", "autoFlankdue", "flankduebrid", "auraFlankdue"]
  
    Class.inception.UPGRADES_TIER_2 = ["inceptionist", "machinception", "tailgator", "launcher", "flankinception", "directdrive", "autoinception", "inceptionbrid", "auraInception"]
        Class.inceptionist.UPGRADES_TIER_3 = ["twinceptionist", "machceptionist", "poundceptionist", "flankceptionist", "factory", "autoinceptionist", "inceptionistbrid"]
        Class.machinception.UPGRADES_TIER_3 = ["machceptionist", "automachinception", "machinceptionbrid", "auraMachinception", "auraTailgator"]
        Class.tailgator.UPGRADES_TIER_3 = ["poundceptionist", "interceptor", "engineer", "shrapnelgun", "autotailgator", "tailgatorbrid"]
        Class.flankinception.UPGRADES_TIER_3 = ["flankceptionist", "autoflankinception", "flankinceptionbrid", "auraFlankinception"]

    Class.desmos.UPGRADES_TIER_2 = ["volute", "helix", "undertow", "repeater", "autoDesmos", "desmosbrid", "auraDesmos"]
        Class.volute.UPGRADES_TIER_3 = ["sidewinder", "riptide", "autoVolute", "volutebrid", "auraVolute"]
        Class.helix.UPGRADES_TIER_3 = ["triplex", "quadruplex", "duplicator", "autoHelix", "helixbrid", "auraHelix"]
        Class.undertow.UPGRADES_TIER_3 = ["riptide", "autoUndertow", "undertowbrid", "auraUndertow"]
        Class.repeater.UPGRADES_TIER_3 = ["iterator", "duplicator", "autoRepeater", "repeaterbrid", "auraRepeater"]

    Class.auraBasic.UPGRADES_TIER_2 = ["auraTwin", "auraSniper", "auraMachineGun", "auraFlankGuard", "auraDirector", "auraPounder", "auraTrapper", "auraAutoBasic", "auraDesmos", "auraBascrid", "auraLittleHunter", "auraInception", "auraAuto2", "damageAuraBasic", "rangeAuraBasic"]
    Class.auraBasic.UPGRADES_TIER_3 = ["auraSmasher"]
        Class.auraTwin.UPGRADES_TIER_3 = ["auraDoubleTwin", "auraTripleShot", "auraGunner", "auraHexaTank", "auraAutoTwin", "auraHelix", "auratwinbrid", "auraBinary", "auraTwinSniper"]
        Class.auraSniper.UPGRADES_TIER_3 = ["auraAssassin", "auraHunter", "auraMinigun", "auraRifle", "auraTwinSniper", "auraAutoSniper", "aurasnipebrid", "auraTrackerSniper", "auraAcid", "auraChiller", "damageAuraSniper", "rangeAuraSniper"]
        Class.auraMachineGun.UPGRADES_TIER_3 = ["auraArtillery", "auraMinigun", "auraGunner", "auraSprayer", "auraAutoMach", "auramachbrid", "auraMachinception", "damageAuraMachineGun", "rangeAuraMachineGun"]
        Class.auraFlankGuard.UPGRADES_TIER_3 = ["auraHexaTank", "auraTriAngle", "auraAuto3", "auraTrapGuard", "auraTriTrapper", "auraAutoFlank", "auraflankbrid", "auraFlankdue", "auraFlankinception", "auraBackShield", "damageAuraFlankGuard", "rangeAuraFlankGuard"]
        Class.auraDirector.UPGRADES_TIER_3 = ["auraOverseer", "auraCruiser", "auraUnderseer", "auraSpawner", "auraDirectdrive", "auraAutoDirector", "damageAuraDirector", "rangeAuraDirector"]
        Class.auraPounder.UPGRADES_TIER_3 = ["auraBuilder", "auraArtillery", "auraLauncher", "auraAutoPound", "auraVolute", "aurapoundbrid", "auraTailgator", "damageAuraPounder", "rangeAuraPounder"]
        Class.auraTrapper.UPGRADES_TIER_3 = ["auraBuilder", "auraTriTrapper", "auraTrapGuard", "auraContagion", "auraAutoTrap", "auratrapbrid", "damageAuraTrapper", "rangeAuraTrapper"]
        Class.auraAutoBasic.UPGRADES_TIER_3 = ["auraAutoTwin", "auraAutoSniper", "auraAutoMach", "auraAutoFlank", "auraAutoDirector", "auraAutoPound", "auraAutoTrap", "auraAutoDesmos", "auraautobascrid", "auraAutoLittleHunter", "auraAutoInception", "auraRevolutionist", "auraReverie", "auraBasicCeption", "auraHomingautoBasic", "damageAuraAutoBasic", "rangeAuraAutoBasic"]
        Class.auraBascrid.UPGRADES_TIER_3 = ["auratwinbrid", "aurasnipebrid", "auramachbrid", "auraflankbrid", "aurapoundbrid", "auratrapbrid", "auradesmosbrid", "auraautobascrid", "auralittlehunterbrid", "aurainceptionbrid", "jeep", "damageAuraBascrid", "rangeAuraBascrid"]
        Class.auraDesmos.UPGRADES_TIER_3 = ["auraVolute", "auraHelix", "auraUndertow", "auraRepeater", "auraAutoDesmos", "auradesmosbrid", "damageAuraDesmos", "rangeAuraDesmos"]
        Class.auraLittleHunter.UPGRADES_TIER_3 = ["auraMinigun", "auraBinary", "auraHunter", "auraSprayer", "auraContagion", "auraGundirector", "auraBigSubduer", "auraFlankdue", "auraAutoLittleHunter", "auralittlehunterbrid", "damageAuraLittleHunter", "rangeAuraLittleHunter"]
        Class.auraInception.UPGRADES_TIER_3 = ["auraMachinception", "auraTailgator", "auraFlankinception", "auraAutoInception", "aurainceptionbrid", "damageAuraInception", "rangeAuraInception"]
        Class.auraAuto2.UPGRADES_TIER_3 = ["auraAuto3", "auraRevolutionist", "auraReverie", "auraAutoAuto2", "auraauto2brid", "damageAuraAuto2", "rangeAuraAuto2"]
        Class.damageAuraBasic.UPGRADES_TIER_3 = ["damageAuraTwin", "damageAuraSniper", "damageAuraMachineGun", "damageAuraFlankGuard", "damageAuraDirector", "damageAuraPounder", "damageAuraTrapper", "damageAuraAutoBasic", "damageAuraBascrid", "damageAuraDesmos", "damageAuraLittleHunter", "damageAuraInception", "damageAuraAuto2", "moredamageAuraBasic", "damagerangeAuraBasic"]
        Class.rangeAuraBasic.UPGRADES_TIER_3 = ["rangeAuraTwin", "rangeAuraSniper", "rangeAuraMachineGun", "rangeAuraFlankGuard", "rangeAuraDirector", "rangeAuraPounder", "rangeAuraTrapper", "rangeAuraAutoBasic", "rangeAuraBascrid", "rangeAuraDesmos", "rangeAuraLittleHunter", "rangeAuraInception", "rangeAuraAuto2", "morerangeAuraBasic", "damagerangeAuraBasic"]

  Class.auto2.UPGRADES_TIER_2 = ["auto3", "revolutionist", "swivel2", "reverie", "autoauto2", "auto2brid", "auraAuto2"]
        Class.auto3.UPGRADES_TIER_3 = ["auto5", "mega3", "auto4", "banshee", "autoAuto3", "auto3brid", "auraAuto3"]
        Class.revolutionist.UPGRADES_TIER_3 = ["subverter", "autoRevolutionist", "proton", "pion", "hadron", "equilibrium", "revobrid", "baseThrower", "revodirector", "auraRevolutionist"]
        Class.swivel2.UPGRADES_TIER_3 = ["swivel3"]