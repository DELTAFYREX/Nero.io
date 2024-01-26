const { combineStats, makeAuto, makeHybrid, makeHybridDrive, makeOver, makeDeco, makeGuard, makeBird, makeMulti, makeCeption, makeCeptionNerf, makeTracker } = require('../facilitators.js');
const { base, statnames, gunCalcNames, dfltskl, smshskl } = require('../constants.js');
require('./generics.js');
const g = require('../gunvals.js');

// Missiles
Class.missile = {
    PARENT: "bullet",
    LABEL: "Missile",
    INDEPENDENT: true,
    BODY: { RANGE: 120 },
    GUNS: [
        {
            POSITION: [14, 6, 1, 0, -2, 130, 0],
            PROPERTIES: {
                AUTOFIRE: true,
                SHOOT_SETTINGS: combineStats([g.basic, g.skimmer, { reload: 0.5 }, g.lowPower, { recoil: 1.35 }, { speed: 1.3, maxSpeed: 1.3 }, { speed: 1.3, maxSpeed: 1.3 }]),
                TYPE: [ "bullet", { PERSISTS_AFTER_DEATH: true } ],
                STAT_CALCULATOR: gunCalcNames.thruster
            }
        },
        {
            POSITION: [14, 6, 1, 0, 2, 230, 0],
            PROPERTIES: {
                AUTOFIRE: true,
                SHOOT_SETTINGS: combineStats([g.basic, g.skimmer, { reload: 0.5 }, g.lowPower, { recoil: 1.35 }, { speed: 1.3, maxSpeed: 1.3 }, { speed: 1.3, maxSpeed: 1.3 }]),
                TYPE: [ "bullet", { PERSISTS_AFTER_DEATH: true } ],
                STAT_CALCULATOR: gunCalcNames.thruster
            }
        }
    ]
}
Class.hypermissile = {
    PARENT: "missile",
    GUNS: [
        {
            POSITION: [14, 6, 1, 0, -2, 150, 0],
            PROPERTIES: {
                AUTOFIRE: true,
                SHOOT_SETTINGS: combineStats([g.basic, {reload: 3}]),
                TYPE: [ "bullet", { PERSISTS_AFTER_DEATH: true } ],
                STAT_CALCULATOR: gunCalcNames.thruster,
            },
        },
        {
            POSITION: [14, 6, 1, 0, 2, 210, 0],
            PROPERTIES: {
                AUTOFIRE: true,
                SHOOT_SETTINGS: combineStats([g.basic, {reload: 3}]),
                TYPE: [ "bullet", { PERSISTS_AFTER_DEATH: true } ],
                STAT_CALCULATOR: gunCalcNames.thruster,
            },
        },
        {
            POSITION: [14, 6, 1, 0, -2, 90, 0.5],
            PROPERTIES: {
                AUTOFIRE: true,
                SHOOT_SETTINGS: combineStats([g.basic, {reload: 3}]),
                TYPE: [ "bullet", { PERSISTS_AFTER_DEATH: true } ],
            },
        },
        {
            POSITION: [14, 6, 1, 0, 2, 270, 0.5],
            PROPERTIES: {
                AUTOFIRE: true,
                AUTOFIRE: true,
                SHOOT_SETTINGS: combineStats([g.basic, {reload: 3}]),
                TYPE: [ "bullet", { PERSISTS_AFTER_DEATH: true } ],
            },
        },
    ],
}
Class.minimissile = {
    PARENT: "missile",
    GUNS: [
        {
            POSITION: [14, 6, 1, 0, 0, 180, 0],
            PROPERTIES: {
                AUTOFIRE: true,
                SHOOT_SETTINGS: combineStats([g.basic, g.skimmer, { reload: 0.5 }, g.lowPower, { recoil: 1.35 }, { speed: 1.3, maxSpeed: 1.3 }]),
                TYPE: ["bullet", { PERSISTS_AFTER_DEATH: true }],
                STAT_CALCULATOR: gunCalcNames.thruster,
            },
        },
    ],
}
Class.spinmissile = {
    PARENT: "missile",
    FACING_TYPE: ["spin", {speed: 0.1}],
    GUNS: [
        {
            POSITION: [14, 8, 1, 0, 0, 0, 0],
            PROPERTIES: {
                AUTOFIRE: !0,
                SHOOT_SETTINGS: combineStats([g.basic, g.skimmer, { reload: 0.5 }, g.lowPower, { reload: 0.75 }, { speed: 1.3, maxSpeed: 1.3 }]),
                TYPE: ["bullet", { PERSISTS_AFTER_DEATH: true }],
                STAT_CALCULATOR: gunCalcNames.thruster,
            },
        },
        {
            POSITION: [14, 8, 1, 0, 0, 180, 0],
            PROPERTIES: {
                AUTOFIRE: !0,
                SHOOT_SETTINGS: combineStats([g.basic, g.skimmer, { reload: 0.5 }, g.lowPower, { reload: 0.75 }, { speed: 1.3, maxSpeed: 1.3 }]),
                TYPE: ["bullet", { PERSISTS_AFTER_DEATH: true }],
                STAT_CALCULATOR: gunCalcNames.thruster,
            },
        },
    ],
}
Class.hyperspinmissile = {
    PARENT: "spinmissile",
    GUNS: [
        {
            POSITION: [14, 8, 1, 0, 0, 0, 0],
            PROPERTIES: {
                AUTOFIRE: !0,
                SHOOT_SETTINGS: combineStats([g.basic, g.skimmer, { reload: 0.5 }, g.lowPower, { reload: 0.75 }, { speed: 1.3, maxSpeed: 1.3 }]),
                TYPE: ["bullet", { PERSISTS_AFTER_DEATH: true }],
                STAT_CALCULATOR: gunCalcNames.thruster,
            },
        },
        {
            POSITION: [14, 8, 1, 0, 0, 180, 0],
            PROPERTIES: {
                AUTOFIRE: !0,
                SHOOT_SETTINGS: combineStats([g.basic, g.skimmer, { reload: 0.5 }, g.lowPower, { reload: 0.75 }, { speed: 1.3, maxSpeed: 1.3 }]),
                TYPE: ["bullet", { PERSISTS_AFTER_DEATH: true }],
                STAT_CALCULATOR: gunCalcNames.thruster,
            },
        },
        {
            POSITION: [14, 8, 1, 0, 0, 90, 0],
            PROPERTIES: {
                AUTOFIRE: !0,
                SHOOT_SETTINGS: combineStats([g.basic, g.skimmer, { reload: 0.5 }, g.lowPower, { reload: 0.75 }, { speed: 1.3, maxSpeed: 1.3 }]),
                TYPE: ["bullet", { PERSISTS_AFTER_DEATH: true }],
                STAT_CALCULATOR: gunCalcNames.thruster,
            },
        },
        {
            POSITION: [14, 8, 1, 0, 0, 270, 0],
            PROPERTIES: {
                AUTOFIRE: !0,
                SHOOT_SETTINGS: combineStats([g.basic, g.skimmer, { reload: 0.5 }, g.lowPower, { reload: 0.75 }, { speed: 1.3, maxSpeed: 1.3 }]),
                TYPE: ["bullet", { PERSISTS_AFTER_DEATH: true }],
                STAT_CALCULATOR: gunCalcNames.thruster,
            },
        },
    ],
}
Class.hive = {
    PARENT: "bullet",
    LABEL: "Hive",
    BODY: {
        RANGE: 90,
        FOV: 0.5,
    },
    FACING_TYPE: "turnWithSpeed",
    INDEPENDENT: true,
    CONTROLLERS: ["alwaysFire", "nearestDifferentMaster", "targetSelf"],
    AI: {
        NO_LEAD: true,
    },
    GUNS: [
        {
            POSITION: [7, 9.5, 0.6, 7, 0, 108, 0],
            PROPERTIES: {
                SHOOT_SETTINGS: combineStats([g.swarm, g.hive, g.bee]),
                TYPE: ["bee", { PERSISTS_AFTER_DEATH: true }],
                STAT_CALCULATOR: gunCalcNames.swarm,
            },
        },
        {
            POSITION: [7, 9.5, 0.6, 7, 0, 180, 0.2],
            PROPERTIES: {
                SHOOT_SETTINGS: combineStats([g.swarm, g.hive, g.bee]),
                TYPE: ["bee", { PERSISTS_AFTER_DEATH: true }],
                STAT_CALCULATOR: gunCalcNames.swarm,
            },
        },
        {
            POSITION: [7, 9.5, 0.6, 7, 0, 252, 0.4],
            PROPERTIES: {
                SHOOT_SETTINGS: combineStats([g.swarm, g.hive, g.bee]),
                TYPE: ["bee", { PERSISTS_AFTER_DEATH: true }],
                STAT_CALCULATOR: gunCalcNames.swarm,
            },
        },
        {
            POSITION: [7, 9.5, 0.6, 7, 0, 324, 0.6],
            PROPERTIES: {
                SHOOT_SETTINGS: combineStats([g.swarm, g.hive, g.bee]),
                TYPE: ["bee", { PERSISTS_AFTER_DEATH: true }],
                STAT_CALCULATOR: gunCalcNames.swarm,
            },
        },
        {
            POSITION: [7, 9.5, 0.6, 7, 0, 36, 0.8],
            PROPERTIES: {
                SHOOT_SETTINGS: combineStats([g.swarm, g.hive, g.bee]),
                TYPE: ["bee", { PERSISTS_AFTER_DEATH: true }],
                STAT_CALCULATOR: gunCalcNames.swarm,
            },
        },
    ],
}
Class.snake = {
    PARENT: "missile",
    LABEL: "Snake",
    GUNS: [
        {
            POSITION: [6, 12, 1.4, 8, 0, 180, 0],
            PROPERTIES: {
                AUTOFIRE: true,
                STAT_CALCULATOR: gunCalcNames.thruster,
                SHOOT_SETTINGS: combineStats([g.basic, g.sniper, g.hunter, g.hunterSecondary, g.snake, g.snakeskin]),
                TYPE: ["bullet", { PERSISTS_AFTER_DEATH: true }],
            },
        },
        {
            POSITION: [10, 12, 0.8, 8, 0, 180, 0.5],
            PROPERTIES: {
                AUTOFIRE: true,
                NEGATIVE_RECOIL: true,
                STAT_CALCULATOR: gunCalcNames.thruster,
                SHOOT_SETTINGS: combineStats([g.basic, g.sniper, g.hunter, g.hunterSecondary, g.snake]),
                TYPE: ["bullet", { PERSISTS_AFTER_DEATH: true }],
            },
        },
    ],
}
Class.rocketeerMissile = {
    PARENT: "missile",
    GUNS: [
        {
            POSITION: [16.5, 10, 1.5, 0, 0, 180, 3],
            PROPERTIES: {
                AUTOFIRE: true,
                SHOOT_SETTINGS: combineStats([g.basic, g.missileTrail, g.rocketeerMissileTrail]),
                TYPE: ["bullet", { PERSISTS_AFTER_DEATH: true }],
                STAT_CALCULATOR: gunCalcNames.thruster,
            },
        },
    ],
}

//delta projectiles/turrets
// ??? it still dont spin i think lol
Class.turretBase = {
    LABEL: "Base",
    SHAPE: 'M 0 -1.1 A 1 1 0 0 0 0 1.1 A 1 1 0 0 0 0 -1.1 Z M 0 -1 A 0.001 0.001 0 0 1 0 1 A 0.001 0.001 0 0 1 0 -1',
    COLOR: 9,
    CONTROLLERS: [["spin", { independent: true }]],
    INDEPENDENT: true,
    TURRETS: [{
        POSITION: [4.65, 10.5, 0, 90, 220, 1],
        TYPE: "revogun",
    }, {
        POSITION: [4.65, 10.5, 0, 270, 220, 1],
        TYPE: "revogun",
    }]
};
Class.autobullet = makeAuto('bullet', "AutoBullet", {type: 'droneAutoTurret'})
Class.shrapnel = {
    PARENT: "bullet",
    SHAPE: 5,
    LABEL: "expold heheahah",
    BODY: {
        RANGE: 1,
        FOV: 0.5,
    },
    INDEPENDENT: true,
    CONTROLLERS: ["alwaysFire"],
    AI: {
        NO_LEAD: true,
    },
    GUNS: [
        {
            POSITION: [7, 9.5, 1, 7, 0, 72, 0],
            PROPERTIES: {
                SHOOT_SETTINGS: combineStats([g.swarm, g.hive, g.bee, g.halfspeed, g.halfspeed, g.halfspeed, g.halfrange, g.halfrange]),
                TYPE: ["trap", { PERSISTS_AFTER_DEATH: true }],
                STAT_CALCULATOR: gunCalcNames.swarm,
            },
        },
        {
            POSITION: [7, 9.5, 1, 7, 0, 72*2, 0],
            PROPERTIES: {
                SHOOT_SETTINGS: combineStats([g.swarm, g.hive, g.bee, g.halfspeed, g.halfspeed, g.halfrange, g.halfspeed, g.halfrange]),
                TYPE: ["trap", { PERSISTS_AFTER_DEATH: true }],
                STAT_CALCULATOR: gunCalcNames.swarm,
            },
        },
        {
            POSITION: [7, 9.5, 1, 7, 0, 72*3, 0],
            PROPERTIES: {
                SHOOT_SETTINGS: combineStats([g.swarm, g.hive, g.bee, g.halfspeed, g.halfspeed, g.halfrange, g.halfspeed, g.halfrange]),
                TYPE: ["trap", { PERSISTS_AFTER_DEATH: true }],
                STAT_CALCULATOR: gunCalcNames.swarm,
            },
        },
        {
            POSITION: [7, 9.5, 1, 7, 0, 72*4, 0],
            PROPERTIES: {
                SHOOT_SETTINGS: combineStats([g.swarm, g.hive, g.bee, g.halfspeed, g.halfspeed, g.halfrange, g.halfspeed, g.halfrange]),
                TYPE: ["trap", { PERSISTS_AFTER_DEATH: true }],
                STAT_CALCULATOR: gunCalcNames.swarm,
            },
        },
        {
            POSITION: [7, 9.5, 1, 7, 0, 0, 0],
            PROPERTIES: {
                SHOOT_SETTINGS: combineStats([g.swarm, g.hive, g.bee, g.halfspeed, g.halfspeed, g.halfrange, g.halfspeed, g.halfrange]),
                TYPE: ["trap", { PERSISTS_AFTER_DEATH: true }],
                STAT_CALCULATOR: gunCalcNames.swarm,
            },
        },
    ],
}
Class.turretBasenoguns = {
    LABEL: "Base",
    SHAPE: 'M 0 -1.1 A 1 1 0 0 0 0 1.1 A 1 1 0 0 0 0 -1.1 Z M 0 -1 A 0.001 0.001 0 0 1 0 1 A 0.001 0.001 0 0 1 0 -1',
    COLOR: 9,
    CONTROLLERS: [["spin", { independent: true }]],
    INDEPENDENT: true,
};
Class.grenade = {
    PARENT: "bullet",
    INDEPENDENT: true,
    BODY: { RANGE: 120 },
    GUNS: [{
            POSITION: [1, 8, 1, 0, 0, 0, 0],
            PROPERTIES: {
                SHOOT_SETTINGS: combineStats([g.basic, g.grenade_explosion]),
                TYPE: "shrapnel",
                SHOOT_ON_DEATH: true,
                PERSISTS_AFTER_DEATH: true
        }
            }, {
            POSITION: [14, 6, 1, 0, 0, 180, 0],
            PROPERTIES: {
                AUTOFIRE: true,
                SHOOT_SETTINGS: combineStats([g.basic, g.skimmer, { reload: 0.5 }, g.lowPower, { recoil: 1.35 }, { speed: 1.3, maxSpeed: 1.3 }]),
                TYPE: ["bullet", { PERSISTS_AFTER_DEATH: true }],
                STAT_CALCULATOR: gunCalcNames.thruster,
            }
        }
    ],
      TURRETS: [{
        POSITION: [9, -8, 0, 0, 0, 1],
        TYPE: ["grenadeDeco"]
    }
  ]
}
Class.grenadeDeco = {
  SHAPE: 0
}
Class.baseBullet = {
    PARENT: "boomerang",
    LABEL: "Base",
    SHAPE: 'M 0 -1.1 A 1 1 0 0 0 0 1.1 A 1 1 0 0 0 0 -1.1 Z M 0 -1 A 0.001 0.001 0 0 1 0 1 A 0.001 0.001 0 0 1 0 -1',
    CONTROLLERS: [["spin", { independent: true, speed: 0.1 }]],
    INDEPENDENT: true,
    COLOR: {
      BASE: "orange",
      HUE_SHIFT: 180, // Additive, degrees
    },
    TURRETS: [{
        POSITION: [4.65, 9.85, 0, 90, 220, 1],
        TYPE: ["revogun", { COLOR: "orange" }]
    }, {
        POSITION: [4.65, 9.85, 0, 270, 220, 1],
        TYPE: ["revogun", { COLOR: "orange" }]
    }],
ON: [{
          event: "death",
          handler: ({ body }) => {
            if (!body.master.isDead) return 
            body.master.define(Class.baseThrower)
        }
    }
  ]
};
Class.turretBaseKiva = {
    LABEL: "Basethingygygyyasgsdgajskhg",
    SHAPE: 'M 0 -1.1 A 1 1 0 0 0 0 1.1 A 1 1 0 0 0 0 -1.1 Z M 0 -1 A 0.001 0.001 0 0 1 0 1 A 0.001 0.001 0 0 1 0 -1',
    COLOR: "orange",//iT WonT FUckING SpIN
    SYNC_TURRET_SKILLS: true,
    CONTROLLERS: [["spin", { independent: true }]],
    INDEPENDENT: true,
    TURRETS: [{
        POSITION: [4.65, 9.85, 0, 90, 220, 1],
        TYPE: ["revogun", { COLOR: "orange" }]
        }, {
        POSITION: [4.65, 9.85, 0, 270, 220, 1],
        TYPE: ["revogun", { COLOR: "orange" }]
        }]
};
Class.hadronturretBase = {
    LABEL: "Base",
    SHAPE: 'M 0 -1.1 A 1 1 0 0 0 0 1.1 A 1 1 0 0 0 0 -1.1 Z M 0 -1 A 0.001 0.001 0 0 1 0 1 A 0.001 0.001 0 0 1 0 -1',
    COLOR: 'red',
    CONTROLLERS: ["hadron"],
    TURRETS: [{
        POSITION: [4.65, 10.5, 0, 90, 220, 1],
        TYPE: "revogun",
    }, {
        POSITION: [4.65, 10.5, 0, 270, 220, 1],
        TYPE: "revogun",
    }]
};
Class.subverterturretBase = {
    LABEL: "Base",
    SHAPE: 'M 0 -1.1 A 1 1 0 0 0 0 1.1 A 1 1 0 0 0 0 -1.1 Z M 0 -1 A 0.001 0.001 0 0 1 0 1 A 0.001 0.001 0 0 1 0 -1',
    COLOR: 9,
    CONTROLLERS: [["spin", { independent: true }]],
    INDEPENDENT: true,
    TURRETS: [{
        POSITION: [4.65, 10.5, 0, 90, 220, 1],
        TYPE: "revogun",
    }, {
        POSITION: [4.65, 10.5, 0, 180, 220, 1],
        TYPE: "revogun",
    }, {
        POSITION: [4.65, 10.5, 0, 270, 220, 1],
        TYPE: "revogun",
    }, {
        POSITION: [4.65, 10.5, 0, 0, 220, 1],
        TYPE: "revogun",
    }]
};
Class.protonturretBase = {
    LABEL: "Base",
    SHAPE: 'M 0 -1.1 A 1 1 0 0 0 0 1.1 A 1 1 0 0 0 0 -1.1 Z M 0 -1 A 0.001 0.001 0 0 1 0 1 A 0.001 0.001 0 0 1 0 -1',
    COLOR: 9,
    CONTROLLERS: [["spin", { independent: true }]],
    INDEPENDENT: true,
    TURRETS: [{
        POSITION: [5, 10.5, 0, 0, 220, 1],
        TYPE: "revosheild",

    }, {
        POSITION: [5, 10.5, 0, 360/3, 220, 1],
        TYPE: "revosheild",

    }, {
        POSITION: [5, 10.5, 0, 360/3*2, 220, 1],
        TYPE: "revosheild",
    }]
};
Class.pionturretBase = {
    LABEL: "Base",
    SHAPE: 'M 0 -1.1 A 1 1 0 0 0 0 1.1 A 1 1 0 0 0 0 -1.1 Z M 0 -1 A 0.001 0.001 0 0 1 0 1 A 0.001 0.001 0 0 1 0 -1',
    COLOR: 9,
    CONTROLLERS: [["spin", { independent: true }]],
    INDEPENDENT: true,
    TURRETS: [{
        POSITION: [5, 10.5, 0, 90, 220, 1],
        TYPE: "revosheild",
    }, {
        POSITION: [5, 10.5, 0, 270, 220, 1],
        TYPE: "revosheild",
    }]
};
Class.revogun = {
    LABEL: 'Auto Turret',
    SYNCS_SKILLS: true,
    BODY: {
        FOV: 1
    },
    COLOR: 16,
    CONTROLLERS: ['onlyAcceptInArc', 'nearestDifferentMaster'],
    GUNS: [{
        POSITION: [13.5, 10, 1, 8, 0, 0, 0],
        PROPERTIES: {
            SHOOT_SETTINGS: combineStats([g.basic, g.autoTurret, g.halfreload]),
            TYPE: "bullet"
          }
        }
    ]
}
Class.sheildhitbox = {
        TYPE: "bullet",
        LABEL: "",
        ACCEPTS_SCORE: false,
        INDEPENDENT: true,
        FACING_TYPE: "smoothWithMotion",
        MOTION_TYPE: "withMaster",
        CAN_GO_OUTSIDE_ROOM: true,
        HITS_OWN_TYPE: 'hard',
        DAMAGE_EFFECTS: false,
        DIE_AT_RANGE: false,
        ALPHA: 1,
        CLEAR_ON_MASTER_UPGRADE: true,
        CAN_GO_OUTSIDE_ROOM: true,
        BODY: {
            SHIELD: 1e9,
            REGEN: 1e6,
            HEALTH: 1e9,
            DENSITY: 1e6,
            SPEED: 0,
            PUSHABILITY: 1e2,
            DAMAGE: 0,
        }
    }
    Class.revosheild = {
        PARENT: ["bullet"],
        VULNERABLE: true,
        HITS_OWN_TYPE: 'hard',
        BODY: {
            DENSITY: 0,
        },
        COLOR: "darkGray",
        GUNS: [
            {
                POSITION: [0, 20, 0, 0, 0, 0, 0],
                PROPERTIES: {
                    SHOOT_SETTINGS: combineStats([g.drone, {size: 1.8}]),
                    TYPE: ["sheildhitbox", {ALPHA: 0}],
                    AUTOFIRE: true,
                    MAX_CHILDREN: 1,
                    ALPHA: 0,
                    VULNERABLE: true
                },
            }
        ]
    }
// The sheild uses the hitbox like an aura, but it can hit bullets
Class.laser = {
  PARENT: ["bullet"],
  SHAPE: -1,
  BODY: {
        PENETRATION: 1.15,
        SPEED: 5.8,
        RANGE: 100,
        DENSITY: 0.9,
        HEALTH: 0.155,
        DAMAGE: 5.6,
    },
  BUFF_VS_FOOD: true,
}
Class.fastdrone = {
  PARENT: "drone",  
  LABEL: 'Drone',
    BODY: {
        PENETRATION: 1.2,
        PUSHABILITY: 0.6,
        ACCELERATION: 0.05,
        HEALTH: 0.5,
        DAMAGE: 3.125,
        SPEED: 6,
        RANGE: 200,
        DENSITY: 0.03,
        RESIST: 1.5,
        FOV: 0.8,
    },
      GUNS: [ { /*** LENGTH  WIDTH   ASPECT    X       Y     ANGLE   DELAY */
        POSITION: [  15,     5,      1,      0,      0,      180,      0,   ], 
        PROPERTIES: {
            SHOOT_SETTINGS: combineStats([g.basic, g.muchmorerecoil, g.muchmorerecoil, g.weak]),
            TYPE: "bullet",
            AUTOFIRE: true
        }, }, 
    ],
    HITS_OWN_TYPE: 'hard',
    DRAW_HEALTH: false,
    CLEAR_ON_MASTER_UPGRADE: true,
    BUFF_VS_FOOD: true,
};

Class.revoorbitdrone = {
  PARENT: "drone",  
  LABEL: 'Drone',
  SYNC_TURRET_SKILLS: true,
    TURRETS: [{
        POSITION: [34, 0, 0, 0, 360, 0],
        TYPE: "droneturretBase",
    },
  ],
};
Class.autoTurretNerf = {
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
                SHOOT_SETTINGS: combineStats([g.weak, g.fake, g.basic, g.morerecoil, g.turret, g.autoTurret]),
                TYPE: "bullet",
            },
        },
    ],
}
Class.hiveprobe = {
  PARENT: "genericTank",
  LABEL: "Probe",
  TYPE: "drone",
  HITS_OWN_TYPE: "hardWithBuffer",
  DRAW_HEALTH: true,
  BODY: {
    FOV: 0.5,
    SPEED: 3,
    ACCELERATION: 0.4,
    HEALTH: 2.5,
    SHIELD: 0,
    DAMAGE: 1.2,
    RESIST: 1,
    PENETRATION: 1,
    DENSITY: 0.4
  },
  AI: {
    BLIND: true
  },
  CLEAR_ON_MASTER_UPGRADE: true,
  GIVE_KILL_MESSAGE: false,
  ACCEPTS_SCORE: false,
  CONTROLLERS: [
    "nearestDifferentMaster",
    "mapAltToFire",
    "minion",
    "canRepel",
    "hangOutNearMaster"
  ],
  GUNS: [
    {
      /*** LENGTH  WIDTH   ASPECT    X       Y     ANGLE   DELAY */
      POSITION: [18, 8, 1, 0, 0, 0, 0],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.basic, g.lowPower]),
        TYPE: "bullet"
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
Class.clonerprobe = {
  PARENT: "hiveprobe",
  GUNS: [
    {
      /*** LENGTH  WIDTH   ASPECT    X       Y     ANGLE   DELAY */
      POSITION: [18, 8, 1, 0, 0, 0, 0],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.basic, g.lowPower]),
        TYPE: "bullet"
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
}
Class.autoclonerprobe = makeAuto(Class.clonerprobe)
Class.mindindicator = {
    SHAPE: 'M 0 -1.0 A 1 1 0 0 0 0 1.0 A 1 1 0 0 0 0 -1.0 Z M 0 -1 A 0.001 0.001 0 0 1 0 1 A 0.001 0.001 0 0 1 0 -1',
    COLOR: 9,
};
Class.crosshair1 = {
    SHAPE: 'M 0 0 l 1 0 L 0 0 L -1 0 L 0 0 L 0 1 L 0 -1',
    COLOR: 9,
};
Class.spaghetti = {
  PARENT: "bullet",
  SHOOT_ON_DEATH: true,
  SHAPE: "https://cdn.glitch.global/5fc7dcb6-aada-495b-828e-66901a470a29/afg-spaghetti-alla-assassina-1-19ef-superJumbo.jpg?v=1701450288242",
      GUNS: [
        {
            POSITION: [2, 8, 1, 0, 0, 0, 0],
            PROPERTIES: {
                SHOOT_SETTINGS: combineStats([g.basic, g.single]),
                TYPE: "bullet"
            }
        }
    ]
}

// Healer Projectiles
Class.surgeonPillboxTurret = {
    PARENT: "genericTank",
    LABEL: "",
    COLOR: "grey",
    BODY: {
        FOV: 3,
    },
    HAS_NO_RECOIL: true,
    CONTROLLERS: [["spin", { independent: true, speed: 0.08 }]],
    TURRETS: [
        {
            POSITION: [13, 0, 0, 0, 360, 1],
            TYPE: "healerSymbol",
        },
    ],
    GUNS: [
        {
            POSITION: [17, 11, 1, 0, 0, 90, 0],
            PROPERTIES: {
                SHOOT_SETTINGS: combineStats([g.basic, g.healer, g.turret]),
                TYPE: "healerBullet",
                AUTOFIRE: true,
            },
        },
        {
            POSITION: [14, 11, 1, 0, 0, 90, 0.5],
            PROPERTIES: {
                SHOOT_SETTINGS: combineStats([g.basic, g.healer, g.turret]),
                TYPE: "healerBullet",
                AUTOFIRE: true,
            },
        },
        {
            POSITION: [17, 11, 1, 0, 0, 270, 0],
            PROPERTIES: {
                SHOOT_SETTINGS: combineStats([g.basic, g.healer, g.turret]),
                TYPE: "healerBullet",
                AUTOFIRE: true,
            },
        },
        {
            POSITION: [14, 11, 1, 0, 0, 270, 0.5],
            PROPERTIES: {
                SHOOT_SETTINGS: combineStats([g.basic, g.healer, g.turret]),
                TYPE: "healerBullet",
                AUTOFIRE: true,
            },
        },
    ],
}
Class.surgeonPillbox = {
    PARENT: "trap",
    LABEL: "Pillbox",
    SHAPE: -6,
    MOTION_TYPE: "motor",
    CONTROLLERS: ["goToMasterTarget", "nearestDifferentMaster"],
    INDEPENDENT: true,
    BODY: {
        SPEED: 1,
        DENSITY: 5,
        DAMAGE: 0
    },
    DIE_AT_RANGE: true,
    TURRETS: [
        {
            POSITION: [11, 0, 0, 0, 360, 1],
            TYPE: "surgeonPillboxTurret",
        },
    ],
}

// Drones
Class.turretedDrone = makeAuto('drone', "Auto-Drone", {type: 'droneAutoTurret'})

// Sunchips
Class.sunchip = {
    PARENT: "drone",
    SHAPE: 4,
    NECRO: true,
    HITS_OWN_TYPE: "hard",
    BODY: {
        FOV: 0.5,
    },
    AI: {
        BLIND: true,
        FARMER: true,
    },
    DRAW_HEALTH: false,
}
Class.eggchip = {
    PARENT: "sunchip",
    NECRO: [0],
    SHAPE: 0
}
Class.autosunchip = {
    PARENT: "sunchip",
    AI: {
        BLIND: true,
        FARMER: true,
    },
    INDEPENDENT: true,
}
Class.autoeggchip = {
    PARENT: "autosunchip",
    NECRO: [0],
    SHAPE: 0,
}
Class.pentachip = {
    PARENT: "sunchip",
    SHAPE: 5
}
Class.summonerDrone = {
    PARENT: "sunchip",
    NECRO: false
}
Class.gunchip = {
    PARENT: "sunchip",
    NECRO: [-2],
    SHAPE: -2
}

// Minions
Class.minion = {
    PARENT: "genericTank",
    LABEL: "Minion",
    TYPE: "minion",
    DAMAGE_CLASS: 0,
    HITS_OWN_TYPE: "hardWithBuffer",
    FACING_TYPE: "smoothToTarget",
    BODY: {
        FOV: 0.5,
        SPEED: 3,
        ACCELERATION: 0.4,
        HEALTH: 5,
        SHIELD: 0,
        DAMAGE: 1.2,
        RESIST: 1,
        PENETRATION: 1,
        DENSITY: 0.4,
    },
    AI: {
        BLIND: true,
    },
    DRAW_HEALTH: false,
    CLEAR_ON_MASTER_UPGRADE: true,
    GIVE_KILL_MESSAGE: false,
    CONTROLLERS: [
        "nearestDifferentMaster",
        "mapAltToFire",
        "minion",
        "canRepel",
        "hangOutNearMaster",
    ],
    GUNS: [
        {
            POSITION: [17, 9, 1, 0, 0, 0, 0],
            PROPERTIES: {
                SHOOT_SETTINGS: combineStats([g.basic, g.minionGun]),
                WAIT_TO_CYCLE: true,
                TYPE: "bullet",
            },
        },
    ],
}

// Traps
Class.setTrap = {
    PARENT: "trap",
    LABEL: "Set Trap",
    SHAPE: -4,
    MOTION_TYPE: "motor",
    CONTROLLERS: ["goToMasterTarget"],
    BODY: {
        SPEED: 1,
        DENSITY: 5,
    },
}
Class.unsetTrap = {
    PARENT: "trap",
    LABEL: "Set Trap",
    SHAPE: -4,
    MOTION_TYPE: "motor",
    BODY: {
        SPEED: 1,
        DENSITY: 5,
    },
}
Class.boomerang = {
    PARENT: "trap",
    LABEL: "Boomerang",
    CONTROLLERS: ["boomerang"],
    MOTION_TYPE: "motor",
    HITS_OWN_TYPE: "never",
    SHAPE: -5,
    BODY: {
        SPEED: 1.25,
        RANGE: 120,
    },
}
Class.assemblerTrap = {
    PARENT: "setTrap",
    LABEL: "Assembler Trap",
    BODY: {
        SPEED: 0.7,
        ACCEL: 0.75
    },
    TURRETS: [
        {
            /**     SIZE X  Y  ANGLE ARC */
            POSITION: [4, 0, 0, 0, 360, 1],
            TYPE: 'assemblerDot'
        }
    ],
    HITS_OWN_TYPE: 'assembler'
}

// Auto Guns
Class.autoTankGun = {
    PARENT: "genericTank",
    LABEL: "",
    BODY: {
        FOV: 3,
    },
    CONTROLLERS: ["canRepel", "onlyAcceptInArc", "mapAltToFire", "nearestDifferentMaster"],
    COLOR: "grey",
    GUNS: [
        {
            POSITION: [22, 10, 1, 0, 0, 0, 0],
            PROPERTIES: {
                SHOOT_SETTINGS: combineStats([g.basic, g.flankGuard, g.autoTurret]),
                TYPE: "bullet",
            },
        },
    ],
}
Class.bansheegun = {
    PARENT: "autoTankGun",
    BODY: {
        FOV: 2,
    },
    INDEPENDENT: true,
    GUNS: [
        {
            POSITION: [26, 10, 1, 0, 0, 0, 0],
            PROPERTIES: {
                SHOOT_SETTINGS: combineStats([g.basic, g.flankGuard, g.autoTurret, { reload: 1.5 }]),
                TYPE: "bullet",
            },
        },
    ],
}
Class.auto4gun = {
    PARENT: "autoTankGun",
    BODY: {
        FOV: 2,
    },
    GUNS: [
        {
            POSITION: [16, 4, 1, 0, -3.5, 0, 0],
            PROPERTIES: {
                SHOOT_SETTINGS: combineStats([g.basic, g.autoTurret, g.pelleter, g.twin, g.power, { speed: 0.7, maxSpeed: 0.7 }]),
                TYPE: "bullet",
            },
        },
        {
            POSITION: [16, 4, 1, 0, 3.5, 0, 0.5],
            PROPERTIES: {
                SHOOT_SETTINGS: combineStats([g.basic, g.autoTurret, g.pelleter, g.twin, g.power, { speed: 0.7, maxSpeed: 0.7 }]),
                TYPE: "bullet",
            },
        },
    ],
}
Class.bigauto4gun = {
    PARENT: "auto4gun",
    GUNS: [
        {
            POSITION: [14, 5, 1, 0, -4.5, 0, 0],
            PROPERTIES: {
                SHOOT_SETTINGS: combineStats([g.basic, g.autoTurret, g.pelleter, g.twin, g.twin, g.power, { reload: 2 }]),
                TYPE: "bullet",
            },
        },
        {
            POSITION: [14, 5, 1, 0, 4.5, 0, 0.33],
            PROPERTIES: {
                SHOOT_SETTINGS: combineStats([g.basic, g.autoTurret, g.pelleter, g.twin, g.twin, g.power, { reload: 2 }]),
                TYPE: "bullet",
            },
        },
        {
            POSITION: [16, 5, 1, 0, 0, 0, 0.67],
            PROPERTIES: {
                SHOOT_SETTINGS: combineStats([g.basic, g.autoTurret, g.pelleter, g.twin, g.twin, g.power, { reload: 2 }]),
                TYPE: "bullet",
            },
        },
    ],
}
Class.megaAutoTankgun = {
    PARENT: "autoTankGun",
    BODY: {
        FOV: 2,
    },
    GUNS: [
        {
            POSITION: [22, 14, 1, 0, 0, 0, 0],
            PROPERTIES: {
                SHOOT_SETTINGS: combineStats([g.basic, g.pounder, g.autoTurret]),
                TYPE: "bullet",
            },
        },
    ],
}

// Mounted Turrets
Class.autoTurret = {
    PARENT: "genericTank",
    LABEL: "Turret",
    COLOR: "grey",
    BODY: {
        FOV: 0.8,
    },
    GUNS: [
        {
            POSITION: [22, 10, 1, 0, 0, 0, 0],
            PROPERTIES: {
                SHOOT_SETTINGS: combineStats([g.basic, g.pelleter, g.power, { recoil: 1.15 }, g.turret]),
                TYPE: "bullet",
            },
        },
    ],
}
Class.ceptionistturret = {
    PARENT: "genericTank",
    LABEL: "Turret",
    COLOR: "black",
    BODY: {
        FOV: 0.8,
    },
    GUNS: [
        {
            POSITION: [22, 10, 1, 0, 0, 0, 0],
            PROPERTIES: {
                SHOOT_SETTINGS: combineStats([g.basic, g.pelleter, g.power, { recoil: 1.15 }, g.turret]),
                TYPE: "bullet",
            },
        },
    ],
}
Class.droneAutoTurret = {
    PARENT: "genericTank",
    LABEL: "Turret",
    COLOR: "grey",
    INDEPENDENT: true,
    CONTROLLERS: ['nearestDifferentMaster'],
    BODY: {
        FOV: 0.8,
    },
    GUNS: [
        {
            POSITION: [22, 10, 1, 0, 0, 0, 0],
            PROPERTIES: {
                SHOOT_SETTINGS: combineStats([g.basic, g.pelleter, g.power, { recoil: 1.15 }, g.turret, g.overdrive]),
                TYPE: "bullet",
            },
        },
    ],
}
Class.autoSmasherTurret = {
    PARENT: "autoTurret",
    GUNS: [
        {
            POSITION: [20, 6, 1, 0, 5, 0, 0],
            PROPERTIES: {
                SHOOT_SETTINGS: combineStats([g.basic, g.pelleter, g.power, { recoil: 1.15 }, g.turret, { speed: 1.2 }, g.machineGun, g.pounder, { reload: 0.75 }, { reload: 0.75 }]),
                TYPE: "bullet",
                STAT_CALCULATOR: gunCalcNames.fixedReload,
            },
        },
        {
            POSITION: [20, 6, 1, 0, -5, 0, 0.5],
            PROPERTIES: {
                SHOOT_SETTINGS: combineStats([g.basic, g.pelleter, g.power, { recoil: 1.15 }, g.turret, { speed: 1.2 }, g.machineGun, g.pounder, { reload: 0.75 }, { reload: 0.75 }]),
                TYPE: "bullet",
                STAT_CALCULATOR: gunCalcNames.fixedReload,
            },
        },
    ],
}
Class.architectGun = {
    PARENT: "autoTurret",
    LABEL: "",
    GUNS: [
        {
            POSITION: [20, 16, 1, 0, 0, 0, 0],
        },
        {
            POSITION: [2, 16, 1.1, 20, 0, 0, 0],
            PROPERTIES: {
                SHOOT_SETTINGS: combineStats([g.trap, g.setTrap, g.autoTurret]),
                TYPE: "setTrap",
                STAT_CALCULATOR: gunCalcNames.block
            },
        },
    ],
}
Class.pillboxTurret = {
    PARENT: "autoTurret",
    LABEL: "",
    BODY: {
        FOV: 2,
    },
    HAS_NO_RECOIL: true,
    GUNS: [
        {
            POSITION: [22, 11, 1, 0, 0, 0, 0],
            PROPERTIES: {
                SHOOT_SETTINGS: combineStats([g.basic, g.minionGun, g.turret, g.power, g.autoTurret, { density: 0.1 }]),
                TYPE: "bullet",
            },
        },
    ],
}

// Pillbox
Class.pillbox = {
    PARENT: "setTrap",
    LABEL: "Pillbox",
    CONTROLLERS: ["nearestDifferentMaster"],
    INDEPENDENT: true,
    DIE_AT_RANGE: true,
    TURRETS: [
        {
            POSITION: [11, 0, 0, 0, 360, 1],
            TYPE: "pillboxTurret",
        },
    ],
}
Class.unsetPillbox = {
    PARENT: "unsetTrap",
    LABEL: "Pillbox",
    CONTROLLERS: ["nearestDifferentMaster"],
    INDEPENDENT: true,
    DIE_AT_RANGE: true,
    TURRETS: [
        {
            POSITION: [11, 0, 0, 0, 360, 1],
            TYPE: "pillboxTurret",
        },
    ],
}

// Swarms
Class.swarm = {
    LABEL: "Swarm Drone",
    TYPE: "swarm",
    ACCEPTS_SCORE: false,
    SHAPE: 3,
    MOTION_TYPE: "swarm",
    FACING_TYPE: "smoothWithMotion",
    CONTROLLERS: ["nearestDifferentMaster", "mapTargetToGoal"],
    CRAVES_ATTENTION: true,
    BODY: {
        ACCELERATION: 3,
        PENETRATION: 1.5,
        HEALTH: 0.175,
        DAMAGE: 2.25,
        SPEED: 4.5,
        RESIST: 1.6,
        RANGE: 225,
        DENSITY: 12,
        PUSHABILITY: 0.6,
        FOV: 1.5,
    },
    DIE_AT_RANGE: true,
    BUFF_VS_FOOD: true,
}
Class.autoswarm = {
    PARENT: "swarm",
    AI: {
        FARMER: true
    },
    INDEPENDENT: true
}
Class.bee = {
    PARENT: "swarm",
    PERSISTS_AFTER_DEATH: true,
    SHAPE: 4,
    LABEL: "Drone",
    HITS_OWN_TYPE: "hardWithBuffer"
}
Class.homingBullet = {
    PARENT: "autoswarm",
    SHAPE: 0,
    BODY: {
        PENETRATION: 1,
        SPEED: 3.75,
        RANGE: 90,
        DENSITY: 1.25,
        HEALTH: 0.165,
        DAMAGE: 6,
        PUSHABILITY: 0.3,
    },
    CAN_GO_OUTSIDE_ROOM: true
}

// Decorations
Class.overdriveDeco = makeDeco(4)
Class.assemblerEffect = {
    PARENT: "bullet",
    MOTION_TYPE: 'assembler',
    LABEL: '',
    BODY: {
        DAMAGE: 0,
        RANGE: 10
    },
    ALPHA: 0.8
}
Class.assemblerDot = {
    LABEL: '',
    SHAPE: -4,
    COLOR: "darkGrey",
    INDEPENDENT: true
}

// Bodies
Class.smasherBody = {
    LABEL: "",
    CONTROLLERS: [["spin", { independent: true }]],
    COLOR: "black",
    SHAPE: 6,
    INDEPENDENT: true
}
Class.landmineBody = {
    LABEL: "",
    CONTROLLERS: [["spin", { independent: true, speed: 0.08 }]],
    COLOR: 9,
    SHAPE: 6,
    INDEPENDENT: true
}
Class.spikeBody = {
    PARENT: "smasherBody",
    SHAPE: 3
}

// Basic & starting upgrades
Class.basic = {
    UPGRADE_COLOR: "animatednero",
    PARENT: "genericTank",
    LABEL: "Basic",
    DANGER: 4,
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
                MAX_CHILDREN: 6
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
    DANGER: 6,
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
            TYPE: "megaAutoTankgun",
        },
        {
            POSITION: [14, 8, 0, 120, 190, 0],
            TYPE: "megaAutoTankgun",
        },
        {
            POSITION: [14, 8, 0, 240, 190, 0],
            TYPE: "megaAutoTankgun",
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
                SHOOT_SETTINGS: combineStats([g.drone, g.commander]),
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
                SHOOT_SETTINGS: combineStats([g.swarm]),
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
                SHOOT_SETTINGS: combineStats([g.basic, g.pounder, g.artillery, g.artillery]),
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
                SHOOT_SETTINGS: combineStats([g.basic, g.pounder, g.artillery, g.artillery, g.skimmer, { speed: 1.3, maxSpeed: 1.3 }, { reload: 4/3 }]),
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
Class.construct = {
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
                SHOOT_SETTINGS: combineStats([g.trap, g.setTrap, g.constructor]),
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
                SHOOT_SETTINGS: combineStats([g.basic, g.desmos]),
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
                SHOOT_SETTINGS: combineStats([g.basic, g.desmos]),
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
                SHOOT_SETTINGS: combineStats([g.basic, g.desmos]),
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
                SHOOT_SETTINGS: combineStats([g.basic, g.desmos]),
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
                SHOOT_SETTINGS: combineStats([g.basic, g.healer, { reload: 1.2 }]),
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
Class.falcon = makeBird({
    PARENT: "genericTank",
    DANGER: 7,
    BODY: {
        SPEED: 0.85 * base.SPEED,
        FOV: 1.2 * base.FOV
    },
    GUNS: [
        {
            POSITION: [27, 8, 1, 0, 0, 0, 0],
            PROPERTIES: {
                SHOOT_SETTINGS: combineStats([g.basic, g.flankGuard, g.triAngle, g.triAngleFront, g.sniper, g.assassin]),
                TYPE: "bullet"
            }
        },
        {
            POSITION: [5, 8, -1.4, 8, 0, 0, 0]
        }
    ]
}, "Falcon")
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
                SHOOT_SETTINGS: combineStats([g.basic, g.flankGuard, g.triAngle, g.triAngleFront, g.minigun]),
                TYPE: "bullet"
            }
        },
        {
            POSITION: [20, 7.5, -1.5, 0, 0, 0, 0.333],
            PROPERTIES: {
                SHOOT_SETTINGS: combineStats([g.basic, g.flankGuard, g.triAngle, g.triAngleFront, g.minigun, {size: 7/7.5}]),
                TYPE: "bullet"
            }
        },
        {
            POSITION: [18, 8, -1.5, 0, 0, 0, 0.667],
            PROPERTIES: {
                SHOOT_SETTINGS: combineStats([g.basic, g.flankGuard, g.triAngle, g.triAngleFront, g.minigun, {size: 7/8}]),
                TYPE: "bullet"
            }
        }
    ]
}, "Vulture")
Class.phoenix = makeBird({
    PARENT: "genericTank",
    DANGER: 7,
    GUNS: [
        {
            POSITION: [23, 7, 1, 0, 0, 0, 0],
            PROPERTIES: {
                SHOOT_SETTINGS: combineStats([g.basic, g.flankGuard, g.triAngle, g.triAngleFront, g.pelleter, g.lowPower, g.machineGun, { recoil: 1.15 }]),
                TYPE: "bullet"
            }
        },
        {
            POSITION: [12, 10, 1.4, 8, 0, 0, 0],
            PROPERTIES: {
                SHOOT_SETTINGS: combineStats([g.basic, g.flankGuard, g.triAngle, g.triAngleFront, g.machineGun]),
                TYPE: "bullet"
            }
        }
    ]
}, "Phoenix")
Class.eagle = makeBird({
    PARENT: "genericTank",
    DANGER: 7,
    GUNS: [
        {
            POSITION: [20.5, 12, 1, 0, 0, 0, 0],
            PROPERTIES: {
                SHOOT_SETTINGS: combineStats([g.basic, g.flankGuard, g.triAngle, g.triAngleFront, g.pounder]),
                TYPE: "bullet"
            }
        }
    ]
}, "Eagle")

// Hybrid tanks
Class.bentHybrid = makeHybrid('tripleShot', "Bent Hybrid")
Class.poacher = makeHybrid('hunter', "Poacher")
Class.armsman = makeHybrid('rifle', "Armsman")
Class.cropDuster = makeHybrid('minigun', "Crop Duster")
Class.hybrid = makeHybrid('destroyer', "Hybrid")
Class.bascrid = makeHybrid('basic', "Basic-Hybrid")
Class.twinbrid = makeHybrid('twin', "Twin-Hybrid")
Class.machbrid = makeHybrid('machineGun', "Machine-Hybrid")
Class.snipebrid = makeHybrid('sniper', "Snipe-Hybrid")
Class.flankbrid = makeHybrid('flankGuard', "Flank-Hybrid")
Class.poundbrid = makeHybrid('pounder', "Pound-Hybrid")
Class.trapbrid = makeHybrid('trapper', "Trapper-Hybrid")
Class.desmosbrid = makeHybrid('desmos', "Desmos-Hybrid")

Class.assbrid = makeHybrid('assassin', "Assassin-Hybrid")
Class.artilbrid = makeHybrid('artillery', "Artillery-Hybrid")
Class.spraybrid = makeHybrid('sprayer', "Sprayer-Hybrid")
Class.trapguardbrid = makeHybrid('trapGuard', "TG-Hybrid")
Class.builderbrid = makeHybrid('builder', "Builder-Hybrid")
Class.launchbrid = makeHybrid('launcher', "Launcher-Hybrid")
Class.tritrapperbrid = makeHybrid('triTrapper', "Tri-Trapper-Hybrid")
Class.helixbrid = makeHybrid('helix', "Helix-Hybrid")
Class.volutebrid = makeHybrid('volute', "Volute-Hybrid")
Class.honda = makeHybridDrive('pounder', "Honda")

Class.hybridbase = makeHybrid('genericTank', "Hybrid")

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
Class.ceptionistbullet = {
  PARENT: "bullet",
  GUNS: [{
      POSITION: [18, 8, 1, 0, 0, 0, 0],
      PROPERTIES: {
          SHOOT_SETTINGS: combineStats([g.basic, g.autoTurret, g.pelleter, g.power, { recoil: 1.15 }, g.turret, g.overdrive]),
          TYPE: "bullet",
          COLOR: "black",
          AUTOFIRE: true
      }
    }
  ]
}
Class.autoturretswarm = makeAuto('swarm', "AutoturretSwarm", {type: 'droneAutoTurret'})
Class.droneturretBase = {
    LABEL: "Base",
    SHAPE: 'M 0 -1.1 A 1 1 0 0 0 0 1.1 A 1 1 0 0 0 0 -1.1 Z M 0 -1 A 0.001 0.001 0 0 1 0 1 A 0.001 0.001 0 0 1 0 -1',
    COLOR: 9,
    CONTROLLERS: [["spin", { independent: true }]],
    INDEPENDENT: true,
    TURRETS: [{
        POSITION: [4.65, 10.5, 0, 90, 220, 1],
        TYPE: "droneAutoTurret",
    }, {
        POSITION: [4.65, 10.5, 0, 270, 220, 1],
        TYPE: "droneAutoTurret",
    }]
};
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
                SHOOT_SETTINGS: combineStats([g.basic, g.pounder, g.artillery, g.artillery, g.halfspeed]),
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
        POSITION: [16, 0, 0, 0, 0, 1],
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
        POSITION: [16, 0, 0, 0, 0, 0],
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
                TYPE: "bullet"
            }
        }
    ],
      TURRETS: [{
        POSITION: [5.5, 18, 0, 0, 0, 0],
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
        POSITION: [16, 0, 0, 0, 0, 0],
        TYPE: ["ceptionistturret", { INDEPENDENT: true, MIRROR_MASTER_ANGLE: true }]
    }
  ]
}, 3, "Flankceptionist")
Class.tailgator = {
    PARENT: "genericTank",
    LABEL: "Tailgator",
    DANGER: 4,
    GUNS: [
        {
            POSITION: [20.5, 12, 1, 0, 0, 0, 0],
            PROPERTIES: {
                SHOOT_SETTINGS: combineStats([g.basic, g.pounder]),
                TYPE: "autobullet"
            }
        }
    ],
      TURRETS: [{
        POSITION: [7.5, 20, 0, 0, 0, 0],
        TYPE: ["autoTurret", { INDEPENDENT: true, MIRROR_MASTER_ANGLE: true }]
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
                TYPE: "autobullet"
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
            TYPE: ["baseBullet", { COLOR: "orange" }],
            ALT_FIRE: true,
            ON_SHOOT: "revo",
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
Class.revoception = makeCeption(Class.revolutionist, "revoception");
Class.revobrid = makeHybrid(Class.revolutionist, "Revobrid");
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
Class.trackerSmasher = makeTracker(Class.smasher, "Scanner");
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
                MAX_CHILDREN: 6
            }
        }
    ],
      TURRETS: [{
        POSITION: [34, 0, 0, 0, 360, 0],
        TYPE: "turretBasenoguns",
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

// Auto tanks
Class.autoBasic = makeAuto(Class.basic, "Auto-Basic");
Class.autoRevolutionist = makeAuto(Class.revolutionist, "Audioboard");

Class.autoTwin = makeAuto(Class.twin, "Auto-Twin");
Class.autoMach = makeAuto(Class.machineGun, "Auto-Mach");
Class.autoSniper = makeAuto(Class.sniper, "Auto-Sniper");
Class.autoFlank = makeAuto(Class.flankGuard, "Auto-Flank");
Class.autoDirector = makeAuto(Class.director, "Auto-Director");
Class.autoPound = makeAuto(Class.pounder, "Auto-Pounder");
Class.autoTrap = makeAuto(Class.trapper, "Auto-Trapper");
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
Class.hybridclonerprobe = makeHybrid('clonerprobe', "hybrid-cloner-probe")
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
Class.autobascrid = makeHybrid('autoBasic', "Auto-Basic-Hybrid")


Class.autoDesmos = makeAuto(Class.desmos, "Auto-Desmos");


Class.autoTripleShot = makeAuto(Class.tripleShot, "Auto-Triple Shot");

Class.autoHunter = makeAuto(Class.hunter, "Auto-Hunter");
Class.autoRifle = makeAuto(Class.rifle, "Auto-Rifle");

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


//auto hybrid tanks
Class.autotwinbrid = makeHybrid('autoTwin', "Auto-Twin-Hybrid")
Class.autosnipebrid = makeHybrid('autoSniper', "Auto-Sniper-Hybrid")
Class.automachbrid = makeHybrid('autoMach', "Auto-Machine-Hybrid")
Class.autoflankbrid = makeHybrid('autoFlank', "Auto-Flank-Hybrid")
Class.autopoundbrid = makeHybrid('autoPound', "Auto-Pound-Hybrid")
Class.autotrapbrid = makeHybrid('autoTrap', "Auto-Trapper-Hybrid")
Class.autodesmosbrid = makeHybrid('autoDesmos', "Auto-Desmos-Hybrid")



// Auto tanks
Class.autoDouble = makeAuto(Class.doubleTwin, "Auto-Double")
Class.autoAssassin = makeAuto(Class.assassin)
Class.autoGunner = makeAuto(Class.gunner)
Class.autoTriAngle = makeAuto(Class.triAngle)
Class.autoOverseer = makeAuto(Class.overseer)
Class.autoCruiser = makeAuto(Class.cruiser)
Class.autoSpawner = makeAuto(Class.spawner)
Class.autoBuilder = makeAuto(Class.builder)
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

Class.basicCeption = makeCeptionNerf(Class.basic, "Basic-Ception");

Class.twinCeption = makeCeptionNerf(Class.twin, "Twin-Ception");
Class.snipeCeption = makeCeptionNerf(Class.sniper, "Snipe-Ception");
Class.machCeption = makeCeptionNerf(Class.machineGun, "Mach-Ception");
Class.flankCeption = makeCeptionNerf(Class.flankGuard, "Flank-Ception");
Class.directCeption = makeCeptionNerf(Class.director, "Drone-Ception");
Class.poundCeption = makeCeptionNerf(Class.pounder, "Pound-Ception");
Class.trapCeption = makeCeptionNerf(Class.trapper, "Trap-Ception");



// TANK UPGRADE PATHS
Class.basic.UPGRADES_TIER_1 = ["twin", "sniper", "machineGun", "flankGuard", "director", "pounder", "trapper", "autoBasic", "desmos", "bascrid", "inception"]
    Class.basic.UPGRADES_TIER_2 = ["smasher", "cloner"]
        Class.smasher.UPGRADES_TIER_3 = ["megaSmasher", "spike", "autoSmasher", "landmine", "pion", "trackerSmasher"]
        Class.healer.UPGRADES_TIER_3 = ["medic", "ambulance", "surgeon", "paramedic"]
        Class.cloner.UPGRADES_TIER_3 = ["hivemind", "autoCloner"]

    Class.twin.UPGRADES_TIER_2 = ["doubleTwin", "tripleShot", "gunner", "hexaTank", "autoTwin", "helix", "twinbrid"]
        Class.twin.UPGRADES_TIER_3 = ["dual", "bulwark", "musket"]
        Class.doubleTwin.UPGRADES_TIER_3 = ["tripleTwin", "hewnDouble", "autoDouble", "bentDouble"]
        Class.tripleShot.UPGRADES_TIER_3 = ["pentaShot", "spreadshot", "bentHybrid", "bentDouble", "triplet", "autoTripleShot", "triplex"]

    Class.sniper.UPGRADES_TIER_2 = ["assassin", "hunter", "minigun", "rifle", "autoSniper", "snipebrid"]
        Class.sniper.UPGRADES_TIER_3 = ["bushwhacker"]
        Class.assassin.UPGRADES_TIER_3 = ["ranger", "falcon", "stalker", "autoAssassin", "assbrid", "single"]
        Class.hunter.UPGRADES_TIER_3 = ["predator", "xHunter", "poacher", "ordnance", "railgun", "dual","autoHunter"]
        Class.rifle.UPGRADES_TIER_3 = ["musket", "crossbow", "armsman", "autoRifle"]

    Class.machineGun.UPGRADES_TIER_2 = ["artillery", "minigun", "gunner", "sprayer", "autoMach", "machbrid"]
        Class.minigun.UPGRADES_TIER_3 = ["streamliner", "nailgun", "cropDuster", "barricade", "vulture", "minilaser", "autoMini"]
        Class.gunner.UPGRADES_TIER_3 = ["autoGunner", "nailgun", "auto4", "machineGunner", "gunnerTrapper", "cyclone", "overgunner"]
        Class.sprayer.UPGRADES_TIER_3 = ["redistributor", "phoenix", "atomizer", "focal", "autoSprayer", "spraybrid"]

    Class.flankGuard.UPGRADES_TIER_2 = ["hexaTank", "triAngle", "auto3", "trapGuard", "triTrapper", "autoFlank", "flankbrid"]
        Class.flankGuard.UPGRADES_TIER_3 = ["tripleTwin", "quadruplex"]
        Class.hexaTank.UPGRADES_TIER_3 = ["octoTank", "cyclone", "hexaTrapper", "autoHexaTank"]
        Class.triAngle.UPGRADES_TIER_3 = ["fighter", "booster", "falcon", "bomber", "autoTriAngle", "surfer", "eagle", "phoenix", "vulture"]
        Class.auto3.UPGRADES_TIER_3 = ["auto5", "mega3", "auto4", "banshee", "autoAuto3"]

    Class.director.UPGRADES_TIER_2 = ["overseer", "cruiser", "underseer", "spawner", "directdrive", "autoDirector"]
        Class.director.UPGRADES_TIER_3 = ["manager", "bigCheese"]
        Class.overseer.UPGRADES_TIER_3 = ["overlord", "overtrapper", "overgunner", "banshee", "autoOverseer", "overdrive", "commander"]
        Class.cruiser.UPGRADES_TIER_3 = ["carrier", "battleship", "fortress", "autoCruiser", "commander"]
        Class.underseer.UPGRADES_TIER_3 = ["necromancer", "maleficitor", "infestor", "autoUnderseer"]
        Class.spawner.UPGRADES_TIER_3 = ["factory", "autoSpawner"]
        Class.directdrive.UPGRADES_TIER_3 = ["overdrive", "cruiserdrive", "revodirector", "honda", "dictator"]

    Class.pounder.UPGRADES_TIER_2 = ["destroyer", "builder", "artillery", "launcher", "autoPound", "volute", "poundbrid"]
        Class.pounder.UPGRADES_TIER_3 = ["shotgun", "eagle"]
        Class.destroyer.UPGRADES_TIER_3 = ["conqueror", "annihilator", "hybrid", "construct", "autoDestroy"]
        Class.artillery.UPGRADES_TIER_3 = ["mortar", "ordnance", "beekeeper", "fieldGun", "autoArtillery", "artilbrid"]
        Class.launcher.UPGRADES_TIER_3 = ["skimmer", "twister", "swarmer", "rocketeer", "fieldGun", "shrapnelgun", "autoLaunch", "launchbrid"]

    Class.trapper.UPGRADES_TIER_2 = ["builder", "triTrapper", "trapGuard", "autoTrap", "trapbrid"]
        Class.trapper.UPGRADES_TIER_3 = ["barricade", "overtrapper"]
        Class.builder.UPGRADES_TIER_3 = ["construct", "autoBuilder", "engineer", "boomer", "assembler", "architect", "conqueror", "builderbrid"]
        Class.triTrapper.UPGRADES_TIER_3 = ["fortress", "hexaTrapper", "septaTrapper", "architect", "autoTriTrapper", "tritrapperbrid"]
        Class.trapGuard.UPGRADES_TIER_3 = ["bushwhacker", "gunnerTrapper", "bomber", "conqueror", "bulwark", "autoTrapGuard", "trapguardbrid"]

    Class.autoBasic.UPGRADES_TIER_2 = ["autoTwin", "autoSniper", "autoMach", "autoFlank", "autoDirector", "autoPound", "autoTrap", "autoDesmos", "autobascrid", "revolutionist", "basicCeption"]
        Class.autoBasic.UPGRADES_TIER_3 = ["autoSmasher", "autoCloner"]
        Class.autoTwin.UPGRADES_TIER_3 = ["autoDouble", "autoTripleShot", "autoGunner", "autoHexaTank", "equilibrium", "twinCeption", "autotwinbrid"]
        Class.autoSniper.UPGRADES_TIER_3 = ["autoAssassin", "autoHunter", "autoMini", "autoRifle", "snipeCeption", "autosnipebrid"]
        Class.autoMach.UPGRADES_TIER_3 = ["autoArtillery", "autoMini", "autoGunner", "autoSprayer", "machCeption", "automachbrid"]
        Class.autoFlank.UPGRADES_TIER_3 = ["autoHexaTank", "autoTriAngle", "autoAuto3", "autoTrapGuard", "autoTriTrapper", "flankCeption", "autoflankbrid"]
        Class.autoDirector.UPGRADES_TIER_3 = ["autoOverseer", "autoCruiser", "autoUnderseer", "autoSpawner", "directCeption"]
        Class.autoPound.UPGRADES_TIER_3 = ["autoDestroy", "autoBuilder", "autoArtillery", "autoLaunch", "poundCeption", "autopoundbrid"]
        Class.autoTrap.UPGRADES_TIER_3 = ["autoBuilder", "autoTriTrapper", "autoTrapGuard", "trapCeption", "autotrapbrid"]
        Class.autoDesmos.UPGRADES_TIER_3 = ["autoVolute", "autoHelix", "autodesmosbrid"]
        Class.revolutionist.UPGRADES_TIER_3 = ["subverter", "autoRevolutionist", "proton", "pion", "hadron", "equilibrium", "revobrid", "baseThrower", "revodirector"]
        Class.basicCeption.UPGRADES_TIER_3 = ["twinCeption", "snipeCeption", "machCeption", "flankCeption", "directCeption", "poundCeption", "trapCeption"]

    Class.bascrid.UPGRADES_TIER_2 = ["twinbrid", "snipebrid", "machbrid", "flankbrid", "overseer", "poundbrid", "trapbrid", "autobascrid", "desmosbrid"]
        Class.bascrid.UPGRADES_TIER_3 = ["clonebrid"]
        Class.twinbrid.UPGRADES_TIER_3 = ["bentHybrid", "overgunner", "autotwinbrid", "helixbrid"]
        Class.snipebrid.UPGRADES_TIER_3 = ["assbrid", "poacher", "cropDuster", "armsman", "autosnipebrid"]
        Class.machbrid.UPGRADES_TIER_3 = ["artilbrid", "cropDuster", "overgunner", "spraybrid", "automachbrid"]
        Class.flankbrid.UPGRADES_TIER_3 = ["surfer", "trapguardbrid", "tritrapperbrid", "autoflankbrid"]
        Class.poundbrid.UPGRADES_TIER_3 = ["hybrid", "builderbrid", "artilbrid", "launchbrid", "autopoundbrid", "volutebrid", "honda"]
        Class.trapbrid.UPGRADES_TIER_3 = ["builderbrid", "tritrapperbrid", "trapguardbrid", "autotrapbrid", "overtrapper"]
        Class.autobascrid.UPGRADES_TIER_3 = ["autotwinbrid", "autosnipebrid", "automachbrid", "autoflankbrid", "autopoundbrid", "autotrapbrid", "autodesmosbrid", "revobrid"]
        Class.desmosbrid.UPGRADES_TIER_3 = ["volutebrid", "helixbrid", "autodesmosbrid"]
  
    Class.inception.UPGRADES_TIER_2 = ["inceptionist", "machinception", "tailgator", "flankinception", "directdrive"]
        Class.inceptionist.UPGRADES_TIER_3 = ["machceptionist", "flankceptionist"]
        //Class.machinception.UPGRADES_TIER_3 = []
        Class.tailgator.UPGRADES_TIER_3 = ["interceptor", "engineer", "shrapnelgun"]
        //Class.flankinception.UPGRADES_TIER_3 = []

    Class.desmos.UPGRADES_TIER_2 = ["volute", "helix", "autoDesmos", "desmosbrid"]
        Class.volute.UPGRADES_TIER_3 = ["sidewinder", "autoVolute", "volutebrid"]
        Class.helix.UPGRADES_TIER_3 = ["triplex", "quadruplex", "autoHelix", "helixbrid"]