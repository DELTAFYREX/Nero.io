const { combineStats, addAura } = require('../facilitators.js');
const { base, gunCalcNames, basePolygonDamage, basePolygonHealth, dfltskl, statnames } = require('../constants.js');
const g = require('../gunvals.js');

// TESTBED TANKS
exports.menu = {
    PARENT: ["genericTank"],
    LABEL: "",
    SKILL_CAP: [
        dfltskl,
        dfltskl,
        dfltskl,
        dfltskl,
        dfltskl,
        dfltskl,
        dfltskl,
        dfltskl,
        dfltskl,
        dfltskl,
    ],
    IGNORED_BY_AI: true,
    TURRETS: [],
    GUNS: [
        {
            /*** LENGTH    WIDTH     ASPECT        X             Y         ANGLE     DELAY */
            POSITION: [18, 10, -1.4, 0, 0, 0, 0],
            PROPERTIES: {
                SHOOT_SETTINGS: combineStats([g.basic]),
                TYPE: "bullet",
            },
        },
    ],
};
exports.developer = {
    PARENT: ["menu"],
    LABEL: "Developer",
    BODY: {
        SHIELD: 1000,
        REGEN: 10,
        HEALTH: 100,
        DAMAGE: 10,
        DENSITY: 20,
        FOV: 2,
    },
    SHAPE: [
        [-1, -0.8],
        [-0.8, -1],
        [0.8, -1],
        [1, -0.8],
        [0.2, 0],
        [1, 0.8],
        [0.8, 1],
        [-0.8, 1],
        [-1, 0.8],
    ],
    GUNS: [
        {
            /*** LENGTH WIDTH     ASPECT        X             Y         ANGLE     DELAY */
            POSITION: [18, 10, -1.4, 0, 0, 0, 0],
            PROPERTIES: {
                SHOOT_SETTINGS: combineStats([g.basic, g.op]),
                TYPE: "developerBullet",
            },
        },
    ],
};
exports.tools = {
  PARENT: ["menu"],
  LABEL: "Tools",
  GUNS: [
        {
            /*** LENGTH WIDTH     ASPECT        X             Y         ANGLE     DELAY */
            POSITION: [18, 10, -1.4, 0, 0, 0, 0],
            PROPERTIES: {
                SHOOT_SETTINGS: combineStats([g.basic, g.op]),
                TYPE: "developerBullet",
            },
        },
    ],
},
exports.ait = {
  PARENT: ["menu"],
  LABEL: "AIT",
  GUNS: [
          {
            /*** LENGTH WIDTH     ASPECT        X             Y         ANGLE     DELAY */
            POSITION: [18, 10, -1.4, 0, 0, 0, 0],
            PROPERTIES: {
                SHOOT_SETTINGS: combineStats([g.basic, g.op]),
                TYPE: "developerBullet",
            },
        },
    ],
},
exports.spectator = {
    PARENT: ["menu"],
    LABEL: "Spectator",
    ALPHA: 0,
    CAN_BE_ON_LEADERBOARD: false,
    ACCEPTS_SCORE: false,
    DRAW_HEALTH: false,
    HITS_OWN_TYPE: "never",
    ARENA_CLOSER: true,
    SKILL_CAP: [0, 0, 0, 0, 0, 0, 0, 0, 0, 255],
    BODY: {
        SPEED: 5,
        FOV: 2.5,
        DAMAGE: 0,
        HEALTH: 1e100,
        SHIELD: 1e100,
        REGEN: 1e100,
    },
};
exports.bosses = {
    PARENT: ["menu"],
    LABEL: "Bosses",
};
exports.fun = {
    PARENT: ["menu"],
    LABEL: "Dev Funny",
};
exports.bosses = {
    PARENT: ["menu"],
    LABEL: "Bosses",
};
exports.terrestrials = {
    PARENT: ["menu"],
    LABEL: "Terrestrials",
};
exports.celestials = {
    PARENT: ["menu"],
    LABEL: "Celestials",
};
exports.eternals = {
    PARENT: ["menu"],
    LABEL: "Eternals",
};
exports.devBosses = {
    PARENT: ["menu"],
    LABEL: "Developers",
};
exports.elites = {
    PARENT: ["menu"],
    LABEL: "Elites",
};
exports.mysticals = {
    PARENT: ["menu"],
    LABEL: "Mysticals",
};
exports.nesters = {
    PARENT: ["menu"],
    LABEL: "Nesters",
};
exports.rogues = {
    PARENT: ["menu"],
    LABEL: "Rogues",
};
exports.otherTanks = {
    PARENT: ["menu"],
    LABEL: "Tanks",
};
exports.oldTanks = {
    PARENT: ["menu"],
    LABEL: "Old Tanks",
};
exports.scrappedTanks = {
    PARENT: ["menu"],
    LABEL: "Scrapped Tanks",
};
exports.matchEntities = {
    PARENT: ["menu"],
    LABEL: "Match Entities",
};
exports.dominators = {
    PARENT: ["menu"],
    LABEL: "Dominators",
};
exports.sentries = {
    PARENT: ["menu"],
    LABEL: "Sentries",
};
exports.beta = {
    PARENT: ["menu"],
    LABEL: "Beta Tanks",
};
exports.miscTanks = {
    PARENT: ["menu"],
    LABEL: "Exclusive Tanks",
};
exports.testingtanks = {
    PARENT: ["menu"],
    LABEL: "Tests",
};
exports.FTB = {
    PARENT: ["menu"],
    LABEL: "FTB Tanks",
};
exports.funny = {
    PARENT: ["menu"],
    LABEL: "Miscellaneous",
};
// GENERATORS
function compileMatrix(matrix, matrix2Entrance) {
    let matrixWidth = matrix[0].length,
        matrixHeight = matrix.length;
    for (let x = 0; x < matrixWidth; x++) for (let y = 0; y < matrixHeight; y++) {
        let str = matrix[y][x],
            LABEL = str[0].toUpperCase() + str.slice(1).replace(/[A-Z]/g, m => ' ' + m) + " Generator",
            code = str + 'Generator';
        exports[code] = matrix[y][x] = {
            PARENT: ["genericTank"],
            LABEL,
            SKILL_CAP: [31, 0, 0, 0, 0, 0, 0, 0, 0, 31],
            ALPHA: [0, 0],
            IGNORED_BY_AI: true,
            BODY: {
                SPEED: 5,
                FOV: 2.5,
                DAMAGE: 0,
                HEALTH: 1e100,
                SHIELD: 1e100,
                REGEN: 1e100,
            },
            TURRETS: [{
                POSITION: [5 + y * 2, 0, 0, 0, 0, 1],
                TYPE: str,
            }],
            GUNS: [{
                POSITION: [14, 12, 1, 4, 0, 0, 0],
                PROPERTIES: {
                    SHOOT_SETTINGS: combineStats([g.basic, g.fake]),
                    TYPE: "bullet"
                }
            }, {
                POSITION: [12, 12, 1.4, 4, 0, 0, 0],
                PROPERTIES: {
                    SHOOT_SETTINGS: combineStats([g.basic, { recoil: 0 }]),
                    INDEPENDENT_CHILDREN: true,
                    TYPE: str
                },
            }],
        };
    }
}

function connectMatrix(matrix, matrix2Entrance) {
    let matrixWidth = matrix[0].length,
        matrixHeight = matrix.length;
    for (let x = 0; x < matrixWidth; x++) for (let y = 0; y < matrixHeight; y++) {
        let top = (y + matrixHeight - 1) % matrixHeight,
            bottom = (y + matrixHeight + 1) % matrixHeight,
            left = (x + matrixWidth - 1) % matrixWidth,
            right = (x + matrixWidth + 1) % matrixWidth,

        center = matrix[y     ][x    ];
        top    = matrix[top   ][x    ];
        bottom = matrix[bottom][x    ];
        left   = matrix[y     ][left ];
        right  = matrix[y     ][right];

        matrix[y][x].UPGRADES_TIER_0 = [
            "basic"     ,  top    , "developer",
             left       ,  center ,  right      ,
            "spectator" ,  bottom ,  matrix2Entrance
        ];
    }
}
let generatorMatrix = [
    [ "egg"           , "gem"                , "jewel"                  , "crasher"             , "sentry"               , "shinySentry"        , "EggRelic"           ],
    [ "square"        , "shinySquare"        , "legendarySquare"        , "shadowSquare"        , "rainbowSquare"        , "transSquare"        , "SquareRelic"        ],
    [ "triangle"      , "shinyTriangle"      , "legendaryTriangle"      , "shadowTriangle"      , "rainbowTriangle"      , "transTriangle"      , "TriangleRelic"      ],
    [ "pentagon"      , "shinyPentagon"      , "legendaryPentagon"      , "shadowPentagon"      , "rainbowPentagon"      , "transPentagon"      , "PentagonRelic"      ],
    [ "betaPentagon"  , "shinyBetaPentagon"  , "legendaryBetaPentagon"  , "shadowBetaPentagon"  , "rainbowBetaPentagon"  , "transBetaPentagon"  , "BetaPentagonRelic"  ],
    [ "alphaPentagon" , "shinyAlphaPentagon" , "legendaryAlphaPentagon" , "shadowAlphaPentagon" , "rainbowAlphaPentagon" , "transAlphaPentagon" , "AlphaPentagonRelic" ],
    [ "sphere"        , "cube"               , "tetrahedron"            , "octahedron"          , "dodecahedron"         , "icosahedron"        , "tesseract"          ],
],

gemRelicMatrix = [];
for (let tier of [ "", "Egg", "Square", "Triangle", "Pentagon", "BetaPentagon", "AlphaPentagon" ]) {
    let row = [];
    for (let gem of [ "Power", "Space", "Reality", "Soul", "Time", "Mind" ]) {
        row.push(gem + (tier ? tier + 'Relic' : 'Gem'));
    }
    gemRelicMatrix.push(row);
}

compileMatrix(generatorMatrix);
compileMatrix(gemRelicMatrix);
// Tensor = N-Dimensional Array, BASICALLY
let labyTensor = [];
for (let tier = 0; tier < 6; tier++) {
    let row = [];
    for (let poly of [ "Egg", "Square", "Triangle", "Pentagon", "Hexagon" ]) {
        let column = [];
        for (let shiny of [ "", "Shiny", "Legendary", "Shadow", "Rainbow", "Trans" ]) {
            let str = `laby${tier}${shiny}${poly}`,
                LABEL = str[0].toUpperCase() + str.slice(1).replace(/\d/, d => ["", "Beta", "Alpha", "Omega", "Gamma", "Delta"][d]).replace(/[A-Z]/g, m => ' ' + m) + " Generator",
                code = str + 'Generator';
            column.push(exports[code] = {
                PARENT: ["genericTank"],
                LABEL,
                SKILL_CAP: [31, 0, 0, 0, 0, 0, 0, 0, 0, 31],
                ALPHA: [0, 0],
                IGNORED_BY_AI: true,
                BODY: {
                    SPEED: 5,
                    FOV: 2.5,
                    DAMAGE: 0,
                    HEALTH: 1e100,
                    SHIELD: 1e100,
                    REGEN: 1e100,
                },
                TURRETS: [{
                    POSITION: [5 + tier * 2, 0, 0, 0, 0, 1],
                    TYPE: str,
                }],
                GUNS: [{
                    POSITION: [14, 12, 1, 4, 0, 0, 0],
                    PROPERTIES: {
                        SHOOT_SETTINGS: combineStats([g.basic, g.fake]),
                        TYPE: "bullet"
                    }
                }, {
                    POSITION: [12, 12, 1.4, 4, 0, 0, 0],
                    PROPERTIES: {
                        SHOOT_SETTINGS: combineStats([g.basic, { recoil: 0 }]),
                        INDEPENDENT_CHILDREN: true,
                        TYPE: str
                    },
                }],
            });
        }
        row.push(column);
    }
    labyTensor.push(row);
}

connectMatrix(generatorMatrix, 'PowerGemGenerator');
connectMatrix(gemRelicMatrix, 'laby0EggGenerator');

let tensorLength = labyTensor[0][0].length,
    tensorWidth = labyTensor[0].length,
    tensorHeight = labyTensor.length;
for (let x = 0; x < tensorWidth; x++) for (let y = 0; y < tensorHeight; y++) for (let z = 0; z < tensorLength; z++) {
    let top = (y + tensorHeight - 1) % tensorHeight,
        bottom = (y + tensorHeight + 1) % tensorHeight,
        left = (x + tensorWidth - 1) % tensorWidth,
        right = (x + tensorWidth + 1) % tensorWidth,
        front = (z + tensorLength - 1) % tensorLength,
        back = (z + tensorLength + 1) % tensorLength,

    center = labyTensor[y     ][x    ][z    ];
    top    = labyTensor[top   ][x    ][z    ];
    bottom = labyTensor[bottom][x    ][z    ];
    left   = labyTensor[y     ][left ][z    ];
    right  = labyTensor[y     ][right][z    ];
    front  = labyTensor[y     ][x    ][front];
    back   = labyTensor[y     ][x    ][back ];

    labyTensor[y][x][z].UPGRADES_TIER_0 = [
        "basic"     ,  top                , "developer",
         left       ,  center             ,  right     ,
        "spectator" ,  bottom             , "eggGenerator",
         front      , "PowerGemGenerator" ,  back
    ];
}

exports.diamondShape = {
    PARENT: ["basic"],
    LABEL: "Diamond Test Shape",
    SHAPE: 4.5
};

exports.rotatedTrap = {
    PARENT: ["basic"],
    LABEL: "Rotated Trap Test Shape",
    SHAPE: -3.5
};

exports.mummyHat = {
    SHAPE: 4.5,
    COLOR: 10
};
exports.mummy = {
    PARENT: ["drone"],
    SHAPE: 4,
    TURRETS: [{
        POSITION: [20 * Math.SQRT1_2, 0, 0, 180, 360, 1],
        TYPE: ["mummyHat"]
    }]
};
exports.mummifier = {
    PARENT: ["genericTank"],
    LABEL: "Mummifier",
    DANGER: 6,
    STAT_NAMES: statnames.drone,
    BODY: {
        SPEED: 0.8 * base.SPEED,
    },
    SHAPE: 4,
    MAX_CHILDREN: 10,
    GUNS: [{
        POSITION: [5.5, 13, 1.1, 8, 0, 90, 0],
        PROPERTIES: {
            SHOOT_SETTINGS: combineStats([g.drone, g.sunchip]),
            TYPE: "mummy",
            AUTOFIRE: true,
            SYNCS_SKILLS: true,
            STAT_CALCULATOR: gunCalcNames.necro
        }
    },{
        POSITION: [5.5, 13, 1.1, 8, 0, 270, 0],
        PROPERTIES: {
            SHOOT_SETTINGS: combineStats([g.drone, g.sunchip]),
            TYPE: "mummy",
            AUTOFIRE: true,
            SYNCS_SKILLS: true,
            STAT_CALCULATOR: gunCalcNames.necro
        }
    }],
    TURRETS: [{
        POSITION: [20 * Math.SQRT1_2, 0, 0, 180, 360, 1],
        TYPE: ["mummyHat"]
    }]
};

exports.colorMan = {
    PARENT: ["genericTank"],
    LABEL: "Testing Animated Colors",
    SHAPE: 4,
    COLOR: 36,
    TURRETS: [{
        POSITION: [20, -20, -20, 0, 0, 1],
        TYPE: { SHAPE: 4, COLOR: 20 }
    },{
        POSITION: [20,  0 , -20, 0, 0, 1],
        TYPE: { SHAPE: 4, COLOR: 21 }
    },{
        POSITION: [20,  20, -20, 0, 0, 1],
        TYPE: { SHAPE: 4, COLOR: 22 }
    },{
        POSITION: [20, -20,  0 , 0, 0, 1],
        TYPE: { SHAPE: 4, COLOR: 23 }
    },{
        POSITION: [20,  20,  0 , 0, 0, 1],
        TYPE: { SHAPE: 4, COLOR: 29 }
    },{
        POSITION: [20,  20,  20, 0, 0, 1],
        TYPE: { SHAPE: 4, COLOR: 24 }
    },{
        POSITION: [20,  0 ,  20, 0, 0, 1],
        TYPE: { SHAPE: 4, COLOR: 37 }
    },{
        POSITION: [20,  20,  20, 0, 0, 1],
        TYPE: { SHAPE: 4, COLOR: 38 }
    }]
};

exports.miscTestHelper2 = {
    PARENT: ["genericTank"],
    LABEL: "Turret Reload Test 3",
    TURRET_FACES_CLIENT: true,
    COLOR: -1,
    GUNS: [
        {
            POSITION: [18, 8, 1, 0, 0, 0, 0],
            PROPERTIES: {
                SHOOT_SETTINGS: combineStats([g.basic, g.noRandom]),
                TYPE: "bullet",
                COLOR: -1,
            },
        },
    ],
};
exports.miscTestHelper = {
    PARENT: ["genericTank"],
    LABEL: "Turret Reload Test 2",
    TURRET_FACES_CLIENT: true,
    COLOR: {
        BASE: -1,
        BRIGHTNESS_SHIFT: 15,
    },
    GUNS: [
        {
            POSITION: [18, 8, 1, 0, 0, 0, 0],
            PROPERTIES: {
                SHOOT_SETTINGS: combineStats([g.basic, g.noRandom]),
                TYPE: "bullet",
                COLOR: -1,
            },
        },
    ],
    TURRETS: [
        {
          POSITION: [20, 0, 20, 0, 0, 1],
          TYPE: "miscTestHelper2",
        }
    ]
};
exports.miscTest = {
    PARENT: ["genericTank"],
    LABEL: "Turret Reload Test",
    COLOR: 1,
    GUNS: [
        {
            POSITION: [18, 8, 1, 0, 0, 0, 0],
            PROPERTIES: {
                SHOOT_SETTINGS: combineStats([g.basic, g.noRandom]),
                TYPE: "bullet",
            },
        },
    ],
    TURRETS: [
        {
            POSITION: [20, 0, 20, 0, 0, 1],
            TYPE: "miscTestHelper",
        }
    ]
};
exports.auraBasicGen = addAura();
exports.auraBasic = {
    PARENT: ["genericTank"],
    LABEL: "Aura Basic",
    GUNS: [
        {
            POSITION: [18, 8, 1, 0, 0, 0, 0],
            PROPERTIES: {
                SHOOT_SETTINGS: combineStats([g.basic]),
                TYPE: "bullet",
            },
        },
    ],
    TURRETS: [
        {
            POSITION: [14, 0, 0, 0, 0, 1],
            TYPE: "auraBasicGen",
        }
    ],
};
exports.auraHealerGen = addAura(-1);
exports.auraHealer = {
    PARENT: ["genericTank"],
    LABEL: "Aura Healer",
    TURRETS: [
        {
            POSITION: [14, 0, 0, 0, 0, 1],
            TYPE: "auraHealerGen",
        }
    ],
    GUNS: [
        {
            /*** LENGTH    WIDTH     ASPECT        X             Y         ANGLE     DELAY */
            POSITION: [8, 9, -0.5, 12.5, 0, 0, 0],
        },
        {
            POSITION: [18, 10, 1, 0, 0, 0, 0],
            PROPERTIES: {
                SHOOT_SETTINGS: combineStats([g.basic, g.healer]),
                TYPE: "healerBullet",
            },
        },
    ],
};

exports.trplnrsTestTank = {
    PARENT: ['genericTank'],
    LABEL: "Trplnr's Test Tank",
    COLOR: 'teal',
    GUNS: [
    {
        POSITION: [18, 10, 0.75, -5, 0, 0, 0],
        PROPERTIES: {
            COLOR: 'lavender',
            SHOOT_SETTINGS: combineStats([g.basic, g.anni, {reload: 20}]),
            TYPE: 'bullet',
        }
    },
    {
        POSITION: [10, 6, 1, 0, 14, 0, 0],
        PROPERTIES: {
            SHOOT_SETTINGS: combineStats([g.basic, {size: 0.8, reload: 5}]),
            TYPE: 'swarm'
        }
    }, {
        POSITION: [10, 6, 1, 0, -14, 0, 0],
        PROPERTIES: {
            SHOOT_SETTINGS: combineStats([g.basic, {size: 0.8, reload: 5}]),
            TYPE: 'swarm'
        }
    }, {
        POSITION: [10, 6, 1, 0, 14, 180, 0],
        PROPERTIES: {
            SHOOT_SETTINGS: combineStats([g.basic, {size: 1.2, recoil: 1.5, reload: 0.8}]),
            TYPE: 'bullet'
        }
    }, {
        POSITION: [10, 6, 1, 0, -14, 180, 0],
        PROPERTIES: {
            SHOOT_SETTINGS: combineStats([g.basic, {size: 1.2, recoil: 1.5, reload: 0.8}]),
            TYPE: 'bullet'
        }
    }, {
        POSITION: [18, 8, 1, 0, 0, 90, 0],
        PROPERTIES: {
            COLOR: 'black'
        }
    }, {
        POSITION: [18, 8, 1, 0, 0, 270, 0],
        PROPERTIES: {
            COLOR: 'black'
        }
    }],
    TURRETS: [{
        POSITION: [15, 12.5, 12.5, 0, 0, 0],
        TYPE: { SHAPE: 4, COLOR: 'black', TURRET_FACES_CLIENT: true }
    }, {
        POSITION: [15, 12.5, -12.5, 0, 0, 0],
        TYPE: { SHAPE: 4, COLOR: 'black', TURRET_FACES_CLIENT: true }
    }, {
        POSITION: [15, -12.5, -12.5, 0, 0, 0],
        TYPE: { SHAPE: 4, COLOR: 'black', TURRET_FACES_CLIENT: true }
    }, {
        POSITION: [15, -12.5, 12.5, 0, 0, 0],
        TYPE: { SHAPE: 4, COLOR: 'black', TURRET_FACES_CLIENT: true }
    }]
}

exports.ghoster_ghostForm = {
    PARENT: ['genericTank'],
    TOOLTIP: 'You are now in ghost form, roam around and find your next target. Will turn back in 5 seconds',
    LABEL: 'Ghoster - Ghost Form',
    BODY: {
        SPEED: 20,
        ACCELERATION: 10,
        FOV: base.FOV + 1,
    },
    GUNS: [{
        POSITION: { WIDTH: 20, LENGTH: 20 },
    }],
    ALPHA: 0.6,
}

exports.ghoster = {
    PARENT: ['genericTank'],
    LABEL: 'Ghoster',
    TOOLTIP: 'Shooting will turn you into a ghost for 5 seconds',
    BODY: {
        SPEED: base.SPEED,
        ACCELERATION: base.ACCEL,
    },
    GUNS: [{
        POSITION: {WIDTH: 20, LENGTH: 20},
        PROPERTIES: {
            TYPE: 'bullet',
            SHOOT_SETTINGS: combineStats([g.basic, g.pound, g.destroy, g.anni]),
            ON_FIRE: ({body}) => {
                body.define(Class.ghoster_ghostForm)
                setTimeout(() => { 
                    body.SPEED = 1e-99
                    body.ACCEL = 1e-99
                    body.FOV *= 2
                    body.alpha = 1
                }, 2000)
                setTimeout(() => { 
                    body.SPEED = base.SPEED 
                    body.define(Class.ghoster) 
                }, 2500)
            }
        }
    }],
    ALPHA: 1,
}

exports.switcheroo = {
    PARENT: ['basic'],
    LABEL: 'Switcheroo',
    UPGRADES_TIER_0: [],
    RESET_UPGRADE_MENU: true,
    GUNS: [{
        POSITION: {},
        PROPERTIES: {
            SHOOT_SETTINGS: combineStats([g.basic]),
            TYPE: 'bullet',
            ON_FIRE: ({ body, globalMasterStore: store }) => {
                store.switcheroo_i ??= 0;
                store.switcheroo_i++;
                store.switcheroo_i %= 6;
                body.define(Class.basic.UPGRADES_TIER_1[store.switcheroo_i]);
                setTimeout(() => body.define("switcheroo"), 6000);
            }
        }
    }]
}
exports.bombtesting = {
    PARENT: ["genericTank"],
    LABEL: "bomb thing",
    SHAPE: 1,
    GUNS: [
        {
            POSITION: [19, 8, 1, 0, 0, 0, 0],
            PROPERTIES: {
                SHOOT_SETTINGS: combineStats([g.basic, g.single]),
                TYPE: "microbomb",
            },
        },
        {
            POSITION: [5.5, 8, -1.8, 6.5, 0, 0, 0],
        },
    ],
};
    exports.microbombDecor = {
        PARENT: 'genericTank',
        SHAPE: 'M 0.2758 -2.3635 C 0.172 -2.6062 -0.172 -2.6062 -0.2758 -2.3635 L -0.6786 -1.4216 C -1.2084 -1.1683 -1.575 -0.6272 -1.575 0 C -1.575 0.6272 -1.2084 1.1683 -0.6786 1.4217 L -0.2758 2.3635 C -0.172 2.6062 0.172 2.6062 0.2758 2.3635 L 0.6786 1.4217 C 1.2084 1.1683 1.575 0.6272 1.575 0 C 1.575 -0.6272 1.2084 -1.1683 0.6786 -1.4216 L 0.2758 -2.3635 L 0.046 -2.2652 L 0.2758 -2.3635 Z',
        COLOR: 'black',
        CONTROLLERS: [['spin', {independent: true}]]
    }
    exports.microbombFragment = {
        PARENT: 'bullet',
        SHAPE: 'M 1.3525 0.5905 C 1.4077 0.5905 1.4528 0.5457 1.4491 0.4906 C 1.425 0.1394 1.2748 -0.1927 1.0243 -0.4432 C 0.7501 -0.7174 0.3782 -0.8714 -0.0095 -0.8714 C -0.3972 -0.8714 -0.7691 -0.7174 -1.0432 -0.4432 C -1.2938 -0.1927 -1.444 0.1394 -1.468 0.4906 C -1.4718 0.5457 -1.4267 0.5905 -1.3714 0.5905 L -0.0095 0.5905 H 1.3525 Z',
        LABEL: 'Microbomb Fragment',
        FACING_TYPE: 'smoothWithMotion',
        SIZE: 5,
        COLOR: "veryLightGrey",
        BODY: {
            DAMAGE: 70,
            DENSITY: 5,
            HEALTH: 0.01,
            PUSHABILITY: 0,
            ACCELERATION: 0.015
        },
    }
    exports.microbomb = {
        PARENT: 'bullet',
        LABEL: 'Microbomb',
        SIZE: 5,
        COLOR: "veryLightGrey",
        TURRETS: [{
            POSITION: { SIZE: 22.5 },
            TYPE: 'microbombDecor'
        }],
        ON: [{
            event: 'damage',
            handler: ({body}) => {
                for (let i = 0; i < 30; i++) {
                    if (body == null) break;
                    setTimeout(() => {
                        body.alpha = 0.5
                    }, i * 100)
                    setTimeout(() => {
                        body.alpha = 1
                    }, i * 200)
                }
                setTimeout(() => {
                    if (body == null) return
                    body.kill()
                })
            }
        },
        {
            event: 'death',
            handler: ({body}) => {
                for (let i = 0; i < 2; i++) {
                    let frag = new Entity(body)
                    frag.team = body.team
                    frag.define('microbombFragment')
                    frag.velocity.x = ran.randomAngle() * (Math.random() > 0.5 ? -2 : 2)
                    frag.velocity.y = ran.randomAngle() * (Math.random() > 0.5 ? -2 : 2)
                    frag.life()
                }
            }
        }]
    }

// FUN
exports.florr_tank_eye = {
    PARENT: "genericTank",
    BORDERLESS: true,
    TURRET_FACES_CLIENT: true,
    SHAPE: 'M 0 -1.5 C -1 -1.5 -1 1.5 0 1.5 C 1 1.5 1 -1.5 0 -1.5'
}
exports.florr_tank_smile = {
    PARENT: "genericTank",
    COLOR: 'black',
    BORDERLESS: true,
    TURRET_FACES_CLIENT: true,
    SHAPE: 'M 5 1.5 C 3 -2.5 -3 -2.5 -5 1.5 L -4 2 C -2 -1.5 2 -1.5 4 2 L 5 1.5'
}
exports.florr_tank = {
    PARENT: "genericTank",
    COLOR: 'yellow',
    LABEL: 'Whirlwind',
    STAT_NAMES: {
        BODY_DAMAGE: 'Flower Thorns',
        BULLET_SPEED: 'Petal Speed',
        BULLET_HEALTH: 'Petal Health',
        BULLET_PEN: 'Petal Penetration',
        BULLET_DAMAGE: 'Petal Damage',
        RELOAD: 'Petal Cooldown',
        MOVE_SPEED: 'Flower Speed',
        SHIELD_REGEN: 'Photosynthesis',
        SHIELD_CAP: 'Vacuole Capacity',
    },
    GUNS: (() => {
        let output = []
        for (let i = 0; i < 32; i++) {
            output.push({
                POSITION: {
                    WIDTH: 10, 
                    LENGTH: 1, 
                    X: -2, 
                    ANGLE: (360/8)*i, 
                    DELAY: i <= 8 ? 1 : i <= 16 ? 2 : i <= 24 ? 3 : i <= 32 ? 4 : 5
                },
                PROPERTIES: {
                    TYPE: 'bullet',
                    SHOOT_SETTINGS: combineStats([g.basic, {spread: 0}])
                }
            })
        }
        return output
    })(),
    TURRETS: [
        {
            POSITION: { SIZE: 3.5, X: -3, Y: 2, LAYER: 1, ANGLE: -90 },
            TYPE: ["florr_tank_eye", {COLOR: 'black'}]
        },
        {
            POSITION: { SIZE: 3.5, X: 3, Y: 2, LAYER: 1, ANGLE: -90 },
            TYPE: ["florr_tank_eye", {COLOR: 'black'}]
        },
        {
            POSITION: { SIZE: 1.75, X: -3.5, Y: 2.5, LAYER: 1, ANGLE: -90 },
            TYPE: ["florr_tank_eye", { COLOR: 'white' }]
        },
        {
            POSITION: { SIZE: 1.75, X: 2.5, Y: 2.5, LAYER: 1, ANGLE: -90 },
            TYPE: ["florr_tank_eye", { COLOR: 'white' }]
        },
        {
            POSITION: { SIZE: 1.25, Y: -4, LAYER: 1, ANGLE: -90 },
            TYPE: ["florr_tank_smile"]
        }
    ]
}

exports.vanquisher = {
    PARENT: ["genericTank"],
    DANGER: 8,
    LABEL: "Vanquisher",
    STAT_NAMES: statnames.generic,
    BODY: {
        SPEED: 0.8 * base.SPEED,
    },
    //destroyer
    GUNS: [{
        POSITION: [21, 14, 1, 0, 0, 180, 0],
        PROPERTIES: {
            SHOOT_SETTINGS: combineStats([g.basic, g.pound, g.destroy]),
            TYPE: "bullet"
        }

    //builder
    },{
        POSITION: [18, 12, 1, 0, 0, 0, 0],
    },{
        POSITION: [2, 12, 1.1, 18, 0, 0, 0],
        PROPERTIES: {
            SHOOT_SETTINGS: combineStats([g.trap, g.block]),
            TYPE: "setTrap"
        }
    //launcher
    },{
        POSITION: [10, 9, 1, 9, 0, 90, 0],
    },{
        POSITION: [17, 13, 1, 0, 0, 90, 0],
        PROPERTIES: { SHOOT_SETTINGS: combineStats([g.basic, g.pound, g.arty, g.arty]), TYPE: "minimissile", STAT_CALCULATOR: gunCalcNames.sustained }

    //shotgun
    },{
        POSITION: [4, 3, 1, 11, -3, 270, 0],
        PROPERTIES: { SHOOT_SETTINGS: combineStats([g.basic, g.mach, g.shotgun]), TYPE: "bullet" }
    },{
        POSITION: [4, 3, 1, 11, 3, 270, 0],
        PROPERTIES: { SHOOT_SETTINGS: combineStats([g.basic, g.mach, g.shotgun]), TYPE: "bullet" }
    },{
        POSITION: [4, 4, 1, 13, 0, 270, 0],
        PROPERTIES: { SHOOT_SETTINGS: combineStats([g.basic, g.mach, g.shotgun]), TYPE: "casing" }
    },{
        POSITION: [1, 4, 1, 12, -1, 270, 0],
        PROPERTIES: { SHOOT_SETTINGS: combineStats([g.basic, g.mach, g.shotgun]), TYPE: "casing" }
    },{
        POSITION: [1, 4, 1, 11, 1, 270, 0],
        PROPERTIES: { SHOOT_SETTINGS: combineStats([g.basic, g.mach, g.shotgun]), TYPE: "casing" }
    },{
        POSITION: [1, 3, 1, 13, -1, 270, 0],
        PROPERTIES: { SHOOT_SETTINGS: combineStats([g.basic, g.mach, g.shotgun]), TYPE: "bullet" }
    },{
        POSITION: [1, 3, 1, 13, 1, 270, 0],
        PROPERTIES: { SHOOT_SETTINGS: combineStats([g.basic, g.mach, g.shotgun]), TYPE: "bullet" }
    },{
        POSITION: [1, 2, 1, 13, 2, 270, 0],
        PROPERTIES: { SHOOT_SETTINGS: combineStats([g.basic, g.mach, g.shotgun]), TYPE: "casing" }
    }, {
        POSITION: [1, 2, 1, 13, -2, 270, 0],
        PROPERTIES: { SHOOT_SETTINGS: combineStats([g.basic, g.mach, g.shotgun]), TYPE: "casing" }
    }, {
        POSITION: [15, 14, 1, 6, 0, 270, 0],
        PROPERTIES: { SHOOT_SETTINGS: combineStats([g.basic, g.mach, g.shotgun, g.fake]), TYPE: "casing" }
    }, {
        POSITION: [8, 14, -1.3, 4, 0, 270, 0],
    }]
};
exports.armyOfOneBullet = {
    PARENT: ["bullet"],
    LABEL: "Unstoppable",
    TURRETS: [
        {
            /** SIZE         X             Y         ANGLE        ARC */
            POSITION: [18.5, 0, 0, 0, 360, 0],
            TYPE: ["spikeBody", { COLOR: null }],
        },
        {
            POSITION: [18.5, 0, 0, 180, 360, 0],
            TYPE: ["spikeBody", { COLOR: null }],
        },
    ],
};
exports.armyOfOne = {
    PARENT: ["genericTank"],
    LABEL: "Army Of One",
    DANGER: 9,
    SKILL_CAP: [31, 31, 31, 31, 31, 31, 31, 31, 31, 31],
    BODY: {
        SPEED: 0.5 * base.SPEED,
        FOV: 1.8 * base.FOV,
    },
    GUNS: [
        {
            POSITION: [21, 19, 1, 0, 0, 0, 0],
            PROPERTIES: {
                SHOOT_SETTINGS: combineStats([g.basic, g.pound, g.destroy, g.destroy, g.destroy, g.destroy, g.sniper, g.sniper, g.sniper, g.sniper, g.sniper, g.sniper, g.sniper, g.doublereload, g.doublereload, g.doublereload, g.doublereload]),
                TYPE: "armyOfOneBullet",
            },
        },{
            POSITION: [21, 11, 1, 0, 0, 0, 0],
            PROPERTIES: {
                SHOOT_SETTINGS: combineStats([g.basic, g.pound, g.destroy, g.destroy, g.destroy, g.destroy, g.sniper, g.sniper, g.sniper, g.sniper, g.sniper, g.sniper, g.sniper, g.doublereload, g.doublereload, g.doublereload, g.doublereload, g.fake]),
                TYPE: "bullet",
            },
        }
    ],
};
exports.godbasic = {
    PARENT: ["genericTank"],
    LABEL: "God Basic",
    SKILL_CAP: [31, 31, 31, 31, 31, 31, 31, 31, 31, 31],
    SKILL: [ 31, 31, 31, 31, 31, 31, 31, 31, 31, 31 ],
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
            POSITION: [18, 8, 1, 0, 0, 0, 0],
            PROPERTIES: {
                SHOOT_SETTINGS: combineStats([g.basic]),
                TYPE: "bullet",
                COLOR: 16,
                LABEL: "",
                STAT_CALCULATOR: 0,
                WAIT_TO_CYCLE: false,
                AUTOFIRE: false,
                SYNCS_SKILLS: false,
                MAX_CHILDREN: 0,
                ALT_FIRE: false,
                NEGATIVE_RECOIL: false,
            },
        },
    ],
};
exports.maximumOverdrive = {
    PARENT: ["overdrive"],
    LABEL: "Maximum Overdrive",
    SKILL_CAP: Array(10).fill(255),
    SKILL: Array(10).fill(255),
};
exports.weirdAutoBasic = {
    PARENT: "genericTank",
    LABEL: "Weirdly defined Auto-Basic",
    GUNS: [{
        POSITION: {
            LENGTH: 20,
            WIDTH: 10
        },
        PROPERTIES: {
            SHOOT_SETTINGS: combineStats([g.basic, [0.8, 0.8, 1.5, 1, 0.8, 0.8, 0.9, 1, 1, 1, 1, 2, 1]]),
            TYPE: "bullet"
        },
    }],
    TURRETS: [{
        POSITION: {
            ANGLE: 180,
            LAYER: 1
        },
        TYPE: ["autoTurret", {
            CONTROLLERS: ["nearestDifferentMaster"],
            INDEPENDENT: true
        }]
    }]
};

exports.levels = {
    PARENT: ["menu"],
    LABEL: "Levels",
    UPGRADES_TIER_0: ["developer"]
};
for (let i = 0; i < 15; i++) {
    let LEVEL = i * c.TIER_MULTIPLIER;
    exports["level" + LEVEL] = {
        PARENT: ["levels"],
        LEVEL,
        LABEL: "Level " + LEVEL
    };
    exports.levels.UPGRADES_TIER_0.push("level" + LEVEL);
}

exports.teams = {
    PARENT: ["menu"],
    LABEL: "Teams",
    UPGRADES_TIER_0: ["developer"]
};
for (let i = 1; i <= 8; i++) {
    let TEAM = i;
    exports["Team" + TEAM] = {
        PARENT: ["teams"],
        TEAM: -TEAM,
        COLOR: getTeamColor(-TEAM),
        LABEL: "Team " + TEAM
    };
    exports.teams.UPGRADES_TIER_0.push("Team" + TEAM);
}
exports['Team' + TEAM_ROOM] = {
    PARENT: ["teams"],
    TEAM: TEAM_ROOM,
    COLOR: 3,
    LABEL: "Room Team"
};
exports['Team' + TEAM_ENEMIES] = {
    PARENT: ["teams"],
    TEAM: TEAM_ENEMIES,
    COLOR: 3,
    LABEL: "Enemies Team"
};
exports.teams.UPGRADES_TIER_0.push('Team' + TEAM_ROOM, 'Team' + TEAM_ENEMIES);

//wait whats stuff
exports.placeableWall = {
    PARENT: ["rock"],
    LABEL: "Wall",
    SIZE: 30,
    SHAPE: 4,
    CLEAR_ON_MASTER_UPGRADE: true,
  TEAM: TEAM_ENEMIES,
      VARIES_IN_SIZE: false,
};
exports.placeableWallSmall = {
    PARENT: ["rock"],
    LABEL: "Wall",
    SIZE: 15,
    SHAPE: 4,
    CLEAR_ON_MASTER_UPGRADE: true,
  TEAM: TEAM_ENEMIES,
      VARIES_IN_SIZE: false,
};
exports.wallPlacerThing = {
    PARENT: ["genericTank"],
    SHAPE:0,
    MIRROR_MASTER_ANGLE: true,
    INTANGIBLE: true,
  DRAW_SELF:false,
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
    MOTION_TYPE: "withMouse",
   GUNS: [
       {
            POSITION: [0, 20, 1, 10, 0, 0, 0],
            PROPERTIES: {
                SHOOT_SETTINGS: combineStats([{reload:10, speed:0, maxSpeed:0, shudder:0.0001, spray:0.0001}]),
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
              DRAW_FILL:false,
              BORDERLESS:true,
            },
        },
    ],

};
exports.wallPlacer = {
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

// DEV "UPGRADE PATHS"
exports.developer.UPGRADES_TIER_0 = ["basic", "fun", "beta", "ait", "miscTanks", "tools"];
exports.miscTanks.UPGRADES_TIER_0 = ["developer", "oldTanks", "scrappedTanks", "healer"];
exports.tools.UPGRADES_TIER_0 = ["developer", "levels", "teams", "eggGenerator", "wallPlacer", "spectator"];
exports.beta.UPGRADES_TIER_0 = ["developer", "auraBasic", "auraHealer", "bombtesting", "minilaser"]
exports.ait.UPGRADES_TIER_0 = ["developer", "matchEntities", "bosses"];
    exports.matchEntities.UPGRADES_TIER_0 = ["ait", "baseProtector", "dominators", "mothership", "arenaCloser", "antiTankMachineGun"];
        exports.dominators.UPGRADES_TIER_0 = ["matchEntities", "dominator", "destroyerDominator", "gunnerDominator", "trapperDominator"];
        exports.bosses.UPGRADES_TIER_0 = ["ait", "sentries", "elites", "mysticals", "nesters", "rogues", "terrestrials", "celestials", "eternals", "devBosses"];
        exports.sentries.UPGRADES_TIER_0 = ["bosses", "sentrySwarm", "sentryGun", "sentryTrap", "shinySentrySwarm", "shinySentryGun", "shinySentryTrap"];
        exports.elites.UPGRADES_TIER_0 = ["bosses", "eliteDestroyer", "eliteGunner", "eliteSprayer", "eliteBattleship", "eliteSpawner", "eliteTrapGuard", "eliteSpinner", "eliteSkimmer", "legionaryCrasher", "sprayerLegion"];
        exports.mysticals.UPGRADES_TIER_0 = ["bosses", "sorcerer", "summoner", "enchantress", "exorcistor"];
        exports.nesters.UPGRADES_TIER_0 = ["bosses", "nestKeeper", "nestWarden", "nestGuardian"];
        exports.rogues.UPGRADES_TIER_0 = ["bosses", "roguePalisade", "rogueArmada", "alviss", "tyr", "fiolnir"];
        exports.terrestrials.UPGRADES_TIER_0 = ["bosses", "ares", "gersemi", "ezekiel", "eris", "selene"];
        exports.celestials.UPGRADES_TIER_0 = ["bosses", "paladin", "freyja", "zaphkiel", "nyx", "theia"];
        exports.eternals.UPGRADES_TIER_0 = ["bosses", "ragnarok", "kronos"];
        exports.devBosses.UPGRADES_TIER_0 = ["bosses", "taureonBoss", "tgsBoss"];
    exports.oldTanks.UPGRADES_TIER_0 = ["miscTanks", "oldSpreadshot", "oldBentBoomer", "quadBuilder", "weirdSpike", "master", "oldCommander", "blunderbuss", "oldRimfire"];
    exports.scrappedTanks.UPGRADES_TIER_0 = ["miscTanks", "autoTrapper", "oldDreadnought", "mender", "prodigy"];
    exports.fun.UPGRADES_TIER_0 = ["developer", "funny", "FTB", "testingtanks"];
    exports.funny.UPGRADES_TIER_0 = ["fun", "florr_tank", "vanquisher", "armyOfOne", "godbasic", "maximumOverdrive", "mummifier", "ghoster", "switcheroo", "revoception"];
    exports.testingtanks.UPGRADES_TIER_0 = ["fun", "diamondShape", "rotatedTrap", "colorMan", "miscTest", "trplnrsTestTank", "weirdAutoBasic"];
//so like i kinda want to organize everything
//ill do this later
//nvm,