const { combineStats, makeAuto } = require('../facilitators.js');
const { gunCalcNames, smshskl } = require('../constants.js');
const g = require('../gunvals.js');

// This addon is disabled by default.
// You can also disable addons by not making them end with '.js'
// If you want to enable, simply make the line below just not run.
return console.log('[lancer.js] Addon disabled by default');


exports.lancer = {
  PARENT: "genericTank",
  LABEL: "Lancer",
  BODY: {
    SPEED: base.SPEED * 1.2,
    DAMAGE: base.DAMAGE * 0.9
  },
  HAS_NO_RECOIL: true,
  STAT_NAMES: {
    BULLET_SPEED: 'Lance Range',
    BULLET_HEALTH: 'Lance Longevity',
    BULLET_PEN: 'Lance Sharpness',
    BULLET_DAMAGE: 'Lance Damage',
    RELOAD: 'Lance Density'
  },
  GUNS: [
    {
      POSITION: [20, 15, 0.001, 0, 0, 0, 0],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.basic, { reload: 0.4, speed: 0.1, maxSpeed: 0.1, range: 0.1 }]),
        TYPE: ["bullet", { ALPHA: 0 }],
        AUTOFIRE: true
      }
    },
    {
      POSITION: [25, 15, 0.001, 0, 0, 0, 0]
    }
  ]
}
exports.autolancer = makeAuto(exports.lancer, "Auto-Lancer");
exports.trilancer = {
  PARENT: "genericTank",
  LABEL: "Tri-Lancer",
  BODY: {
    SPEED: base.SPEED * 1.2,
    DAMAGE: base.DAMAGE * 0.9
  },
  HAS_NO_RECOIL: true,
  STAT_NAMES: {
    BULLET_SPEED: 'Lance Range',
    BULLET_HEALTH: 'Lance Longevity',
    BULLET_PEN: 'Lance Sharpness',
    BULLET_DAMAGE: 'Lance Damage',
    RELOAD: 'Lance Density'
  },
  GUNS: [
    {
      POSITION: [20, 15, 0.001, 0, 0, 0, 0],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.basic, { reload: 0.4, speed: 0.1, maxSpeed: 0.1, range: 0.1 }]),
        TYPE: ["bullet", { ALPHA: 0 }],
        AUTOFIRE: true
      }
    },
    {
      POSITION: [25, 15, 0.001, 0, 0, 0, 0]
    },
    {
      POSITION: [20, 15, 0.001, 0, 0, 120, 0],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.basic, { reload: 0.4, speed: 0.1, maxSpeed: 0.1, range: 0.1 }]),
        TYPE: ["bullet", { ALPHA: 0 }],
        AUTOFIRE: true
      }
    },
    {
      POSITION: [25, 15, 0.001, 0, 0, 120, 0]
    },
    {
      POSITION: [20, 15, 0.001, 0, 0, 240, 0],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.basic, { reload: 0.4, speed: 0.1, maxSpeed: 0.1, range: 0.1 }]),
        TYPE: ["bullet", { ALPHA: 0 }],
        AUTOFIRE: true
      }
    },
    {
      POSITION: [25, 15, 0.001, 0, 0, 240, 0]
    }
  ]
}
exports.hexalancer = {
  PARENT: "genericTank",
  LABEL: "Hexa Lancer",
  BODY: {
    SPEED: base.SPEED * 1.2,
    DAMAGE: base.DAMAGE * 0.9
  },
  HAS_NO_RECOIL: true,
  STAT_NAMES: {
    BULLET_SPEED: 'Lance Range',
    BULLET_HEALTH: 'Lance Longevity',
    BULLET_PEN: 'Lance Sharpness',
    BULLET_DAMAGE: 'Lance Damage',
    RELOAD: 'Lance Density'
  },
  GUNS: [
    {
      POSITION: [20, 15, 0.001, 0, 0, 0, 0],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.basic, { reload: 0.4, speed: 0.1, maxSpeed: 0.1, range: 0.1 }]),
        TYPE: ["bullet", { ALPHA: 0 }],
        AUTOFIRE: true
      }
    },
    {
      POSITION: [25, 15, 0.001, 0, 0, 0, 0]
    },
    {
      POSITION: [20, 15, 0.001, 0, 0, 60, 0],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.basic, { reload: 0.4, speed: 0.1, maxSpeed: 0.1, range: 0.1 }]),
        TYPE: ["bullet", { ALPHA: 0 }],
        AUTOFIRE: true
      }
    },
    {
      POSITION: [25, 15, 0.001, 0, 0, 60, 0]
    },
    {
      POSITION: [20, 15, 0.001, 0, 0, 120, 0],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.basic, { reload: 0.4, speed: 0.1, maxSpeed: 0.1, range: 0.1 }]),
        TYPE: ["bullet", { ALPHA: 0 }],
        AUTOFIRE: true
      }
    },
    {
      POSITION: [25, 15, 0.001, 0, 0, 120, 0]
    },
    {
      POSITION: [20, 15, 0.001, 0, 0, 180, 0],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.basic, { reload: 0.4, speed: 0.1, maxSpeed: 0.1, range: 0.1 }]),
        TYPE: ["bullet", { ALPHA: 0 }],
        AUTOFIRE: true
      }
    },
    {
      POSITION: [25, 15, 0.001, 0, 0, 180, 0]
    },
    {
      POSITION: [20, 15, 0.001, 0, 0, 240, 0],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.basic, { reload: 0.4, speed: 0.1, maxSpeed: 0.1, range: 0.1 }]),
        TYPE: ["bullet", { ALPHA: 0 }],
        AUTOFIRE: true
      }
    },
    {
      POSITION: [25, 15, 0.001, 0, 0, 240, 0]
    },
    {
      POSITION: [20, 15, 0.001, 0, 0, 300, 0],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.basic, { reload: 0.4, speed: 0.1, maxSpeed: 0.1, range: 0.1 }]),
        TYPE: ["bullet", { ALPHA: 0 }],
        AUTOFIRE: true
      }
    },
    {
      POSITION: [25, 15, 0.001, 0, 0, 300, 0]
    }
  ]
}
exports.hedgehog = {
  PARENT: "genericTank",
  LABEL: "Hedgehog",
  BODY: {
    SPEED: base.SPEED * 1.2,
    DAMAGE: base.DAMAGE * 0.9
  },
  HAS_NO_RECOIL: true,
  STAT_NAMES: {
    BULLET_SPEED: 'Lance Range',
    BULLET_HEALTH: 'Lance Longevity',
    BULLET_PEN: 'Lance Sharpness',
    BULLET_DAMAGE: 'Lance Damage',
    RELOAD: 'Lance Density'
  },
  GUNS: [
    {
      POSITION: [20, 15, 0.001, 0, 0, 0, 0],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.basic, { reload: 0.4, speed: 0.1, maxSpeed: 0.1, range: 0.1 }]),
        TYPE: ["bullet", { ALPHA: 0 }],
        AUTOFIRE: true
      }
    },
    {
      POSITION: [25, 15, 0.001, 0, 0, 0, 0]
    },
    {
      POSITION: [20, 15, 0.001, 0, 0, -50, 0],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.basic, { reload: 0.4, speed: 0.1, maxSpeed: 0.1, range: 0.1 }]),
        TYPE: ["bullet", { ALPHA: 0 }],
        AUTOFIRE: true
      }
    },
    {
      POSITION: [25, 15, 0.001, 0, 0, -50, 0]
    },
    {
      POSITION: [20, 15, 0.001, 0, 0, -100, 0],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.basic, { reload: 0.4, speed: 0.1, maxSpeed: 0.1, range: 0.1 }]),
        TYPE: ["bullet", { ALPHA: 0 }],
        AUTOFIRE: true
      }
    },
    {
      POSITION: [25, 15, 0.001, 0, 0, -100, 0]
    },
    {
      POSITION: [20, 15, 0.001, 0, 0, -150, 0],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.basic, { reload: 0.4, speed: 0.1, maxSpeed: 0.1, range: 0.1 }]),
        TYPE: ["bullet", { ALPHA: 0 }],
        AUTOFIRE: true
      }
    },
    {
      POSITION: [25, 15, 0.001, 0, 0, -150, 0]
    },
    {
      POSITION: [20, 15, 0.001, 0, 0, 160, 0],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.basic, { reload: 0.4, speed: 0.1, maxSpeed: 0.1, range: 0.1 }]),
        TYPE: ["bullet", { ALPHA: 0 }],
        AUTOFIRE: true
      }
    },
    {
      POSITION: [25, 15, 0.001, 0, 0, 160, 0]
    },
    {
      POSITION: [20, 15, 0.001, 0, 0, 105, 0],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.basic, { reload: 0.4, speed: 0.1, maxSpeed: 0.1, range: 0.1 }]),
        TYPE: ["bullet", { ALPHA: 0 }],
        AUTOFIRE: true
      }
    },
    {
      POSITION: [25, 15, 0.001, 0, 0, 105, 0]
    },
    {
      POSITION: [20, 15, 0.001, 0, 0, 50, 0],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.basic, { reload: 0.4, speed: 0.1, maxSpeed: 0.1, range: 0.1 }]),
        TYPE: ["bullet", { ALPHA: 0 }],
        AUTOFIRE: true
      }
    },
    {
      POSITION: [25, 15, 0.001, 0, 0, 50, 0]
    }
  ]
}
exports.autohedgehog = makeAuto(exports.hedgehog, "Auto-Hedgehog");
exports.lancebrid = makeHybrid(exports.lancer, "Lancebrid");
exports.chasseur = {
  PARENT: "genericTank",
  LABEL: "Chasseur",
  BODY: {
    SPEED: base.SPEED * 1.2,
    DAMAGE: base.DAMAGE * 1
  },
  HAS_NO_RECOIL: true,
  STAT_NAMES: {
    BULLET_SPEED: 'Lance Range',
    BULLET_HEALTH: 'Lance Longevity',
    BULLET_PEN: 'Lance Sharpness',
    BULLET_DAMAGE: 'Lance Damage',
    RELOAD: 'Lance Density'
  },
  GUNS: [
    {
      POSITION: [25, 15, 0.001, 0, 0, 0, 0],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.basic, { reload: 0.4, speed: 0.1, maxSpeed: 0.1, range: 0.1 }]),
        TYPE: ["bullet", { ALPHA: 0 }],
        AUTOFIRE: true
      }
    },
    {
      POSITION: [30, 15, 0.001, 0, 0, 0, 0]
    }
  ]
}
exports.autochasseur = makeAuto(exports.chasseur, "Auto-Chasseur");
exports.trichasseur = {
  PARENT: "genericTank",
  LABEL: "Tri-Chasseur",
  BODY: {
    SPEED: base.SPEED * 1.2,
    DAMAGE: base.DAMAGE * 1
  },
  HAS_NO_RECOIL: true,
  STAT_NAMES: {
    BULLET_SPEED: 'Lance Range',
    BULLET_HEALTH: 'Lance Longevity',
    BULLET_PEN: 'Lance Sharpness',
    BULLET_DAMAGE: 'Lance Damage',
    RELOAD: 'Lance Density'
  },
  GUNS: [
    {
      POSITION: [25, 15, 0.001, 0, 0, 0, 0],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.basic, { reload: 0.4, speed: 0.1, maxSpeed: 0.1, range: 0.1 }]),
        TYPE: ["bullet", { ALPHA: 0 }],
        AUTOFIRE: true
      }
    },
    {
      POSITION: [30, 15, 0.001, 0, 0, 0, 0]
    },
    {
      POSITION: [25, 15, 0.001, 0, 0, 120, 0],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.basic, { reload: 0.4, speed: 0.1, maxSpeed: 0.1, range: 0.1 }]),
        TYPE: ["bullet", { ALPHA: 0 }],
        AUTOFIRE: true
      }
    },
    {
      POSITION: [30, 15, 0.001, 0, 0, 120, 0]
    },
    {
      POSITION: [25, 15, 0.001, 0, 0, 240, 0],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.basic, { reload: 0.4, speed: 0.1, maxSpeed: 0.1, range: 0.1 }]),
        TYPE: ["bullet", { ALPHA: 0 }],
        AUTOFIRE: true
      }
    },
    {
      POSITION: [30, 15, 0.001, 0, 0, 240, 0]
    }
  ]
}
exports.autotrichasseur = makeAuto(exports.trichasseur, "Auto-Tri-Chasseur");
exports.spiny = {
  PARENT: "genericTank",
  LABEL: "Spiny",
  BODY: {
    SPEED: base.SPEED * 1.2,
    DAMAGE: base.DAMAGE * 0.9
  },
  HAS_NO_RECOIL: true,
  STAT_NAMES: {
    BULLET_SPEED: 'Lance Range',
    BULLET_HEALTH: 'Lance Longevity',
    BULLET_PEN: 'Lance Sharpness',
    BULLET_DAMAGE: 'Lance Damage',
    RELOAD: 'Lance Density'
  },
  GUNS: [
    {
      POSITION: [25, 15, 0.001, 0, 0, 0, 0],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.basic, { reload: 0.4, speed: 0.1, maxSpeed: 0.1, range: 0.1 }]),
        TYPE: ["bullet", { ALPHA: 0 }],
        AUTOFIRE: true
      }
    },
    {
      POSITION: [30, 15, 0.001, 0, 0, 0, 0]
    },
    {
      POSITION: [20, 15, 0.001, 0, 0, 60, 0],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.basic, { reload: 0.4, speed: 0.1, maxSpeed: 0.1, range: 0.1 }]),
        TYPE: ["bullet", { ALPHA: 0 }],
        AUTOFIRE: true
      }
    },
    {
      POSITION: [25, 15, 0.001, 0, 0, 60, 0]
    },
    {
      POSITION: [25, 15, 0.001, 0, 0, 120, 0],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.basic, { reload: 0.4, speed: 0.1, maxSpeed: 0.1, range: 0.1 }]),
        TYPE: ["bullet", { ALPHA: 0 }],
        AUTOFIRE: true
      }
    },
    {
      POSITION: [30, 15, 0.001, 0, 0, 120, 0]
    },
    {
      POSITION: [20, 15, 0.001, 0, 0, 180, 0],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.basic, { reload: 0.4, speed: 0.1, maxSpeed: 0.1, range: 0.1 }]),
        TYPE: ["bullet", { ALPHA: 0 }],
        AUTOFIRE: true
      }
    },
    {
      POSITION: [25, 15, 0.001, 0, 0, 180, 0]
    },
    {
      POSITION: [25, 15, 0.001, 0, 0, 240, 0],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.basic, { reload: 0.4, speed: 0.1, maxSpeed: 0.1, range: 0.1 }]),
        TYPE: ["bullet", { ALPHA: 0 }],
        AUTOFIRE: true
      }
    },
    {
      POSITION: [30, 15, 0.001, 0, 0, 240, 0]
    },
    {
      POSITION: [20, 15, 0.001, 0, 0, 300, 0],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.basic, { reload: 0.4, speed: 0.1, maxSpeed: 0.1, range: 0.1 }]),
        TYPE: ["bullet", { ALPHA: 0 }],
        AUTOFIRE: true
      }
    },
    {
      POSITION: [25, 15, 0.001, 0, 0, 300, 0]
    }
  ]
}
exports.tripleur = {
  PARENT: "genericTank",
  LABEL: "Tripleur",
  BODY: {
    SPEED: base.SPEED * 1.1,
    DAMAGE: base.DAMAGE * 1
  },
  HAS_NO_RECOIL: true,
  STAT_NAMES: {
    BULLET_SPEED: 'Lance Range',
    BULLET_HEALTH: 'Lance Longevity',
    BULLET_PEN: 'Lance Sharpness',
    BULLET_DAMAGE: 'Lance Damage',
    RELOAD: 'Lance Density'
  },
  GUNS: [
    {
      POSITION: [25, 15, 0.001, 0, 0, 0, 0],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.basic, { reload: 0.4, speed: 0.1, maxSpeed: 0.1, range: 0.1 }]),
        TYPE: ["bullet", { ALPHA: 0 }],
        AUTOFIRE: true
      }
    },
    {
      POSITION: [30, 15, 0.001, 0, 0, 0, 0]
    },
    {
      POSITION: [20, 15, 0.001, 0, 0, -30, 0],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.basic, { reload: 0.4, speed: 0.1, maxSpeed: 0.1, range: 0.1 }]),
        TYPE: ["bullet", { ALPHA: 0 }],
        AUTOFIRE: true
      }
    },
    {
      POSITION: [25, 15, 0.001, 0, 0, -30, 0]
    },
    {
      POSITION: [20, 15, 0.001, 0, 0, 30, 0],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.basic, { reload: 0.4, speed: 0.1, maxSpeed: 0.1, range: 0.1 }]),
        TYPE: ["bullet", { ALPHA: 0 }],
        AUTOFIRE: true
      }
    },
    {
      POSITION: [25, 15, 0.001, 0, 0, 30, 0]
    }
  ]
}
exports.trailblazer = {
  PARENT: "genericTank",
  LABEL: "Trailblazer",
  BODY: {
    HEALTH: 0.8 * base.HEALTH,
    SHIELD: 0.8 * base.SHIELD,
    DENSITY: 0.6 * base.DENSITY,
  },
  HAS_NO_RECOIL: false,
  GUNS: [
    {
      POSITION: [20, 15, 0.001, 0, 0, 0, 0],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.basic, { reload: 0.4, speed: 0.1, maxSpeed: 0.1, range: 0.1 }]),
        TYPE: ["bullet", { ALPHA: 0 }],
        AUTOFIRE: true
      }
    },
    {
      POSITION: [25, 15, 0.001, 0, 0, 0, 0]
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
    }
  ]
}
exports.flazer = {
  PARENT: "genericTank",
  LABEL: "Flazer",
  BODY: {
    HEALTH: 0.8 * base.HEALTH,
    SHIELD: 0.8 * base.SHIELD,
    DENSITY: 0.6 * base.DENSITY,
  },
  HAS_NO_RECOIL: false,
  GUNS: [
    {
      POSITION: [20, 15, 0.001, 0, 0, 0, 0],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.basic, { reload: 0.4, speed: 0.1, maxSpeed: 0.1, range: 0.1 }]),
        TYPE: ["bullet", { ALPHA: 0 }],
        AUTOFIRE: true
      }
    },
    {
      POSITION: [25, 15, 0.001, 0, 0, 0, 0]
    },
    {
      POSITION: [12, 10, 1.4, 8, 0, 180, 0],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.basic, g.machineGun, g.flankGuard]),
        TYPE: "bullet",
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
    }
  ]
}
exports.jouster = {
  PARENT: "genericTank",
  LABEL: "Jouster",
  BODY: {
    SPEED: base.SPEED * 1.4,
    DAMAGE: base.DAMAGE * 0.8
  },
  HAS_NO_RECOIL: true,
  STAT_NAMES: {
    BULLET_SPEED: 'Lance Range',
    BULLET_HEALTH: 'Lance Longevity',
    BULLET_PEN: 'Lance Sharpness',
    BULLET_DAMAGE: 'Lance Damage',
    RELOAD: 'Lance Density'
  },
  GUNS: [
    {
      POSITION: [15, 15, 0.001, 0, 0, 0, 0],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.basic, { reload: 0.4, speed: 0.1, maxSpeed: 0.1, range: 0.1 }]),
        TYPE: ["bullet", { ALPHA: 0 }],
        AUTOFIRE: true
      }
    },
    {
      POSITION: [20, 15, 0.001, 0, 0, 0, 0]
    }
  ]
}
exports.joustebrid = makeHybrid(exports.jouster, "Joustebrid");
exports.autojoustebrid = makeAuto(exports.joustebrid, "Auto-Joustebrid");

exports.jouster.UPGRADES_TIER_2 = [
  "lancer",
  "joustebrid",
  "smasher",
];
exports.lancer.UPGRADES_TIER_3 = [
  "chasseur",
  "lancebrid",
  "trilancer",
  "autolancer",
];
exports.chasseur.UPGRADES_TIER_3 = [
  "tripleur",
  "autochasseur",
  "trichasseur",
];
exports.joustebrid.UPGRADES_TIER_3 = [
  "lancebrid",
  "autojoustebrid",
];
exports.trilancer.UPGRADES_TIER_4 = [
  "hexalancer",
  "trailblazer",
  "trichasseur",
];
exports.autolancer.UPGRADES_TIER_3 = [
  "autochasseur",
];
exports.trichasseur.UPGRADES_TIER_5 = [
  "spiny",
  "autotrichasseur",
];
exports.hexalancer.UPGRADES_TIER_5 = [
  "hedgehog",
  "spiny",
];
exports.trailblazer.UPGRADES_TIER_5 = [
  "flazer",
];
exports.hedgehog.UPGRADES_TIER_6 = [
  "autohedgehog",
];