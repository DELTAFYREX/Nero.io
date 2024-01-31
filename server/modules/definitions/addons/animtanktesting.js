const { combineStats, addAura, makeAuto } = require('../facilitators.js');
const { gunCalcNames, smshskl, base } = require('../constants.js');
const g = require('../gunvals.js');


// This addon is enabled by default.
// If you want to disable, uncomment the line below.
//return console.log('[animtanktesting.js] Addon disabled by default');

const animate = (me, tank, frames, duration, isFirstFrame, offset = 0, entities, resetToFirstFrame = false) => {
    let i = 1;
    if (entities) {
        entities.forEach(o => {
            if (o.settings.clearOnMasterUpgrade && o.master.id === me.id && o.id !== me.id && o !== me) o.kill();
        });
    }
    const animInterval = setInterval(() => {
        if (me.isAlive() && i <= frames) {
            me.upgrades = [];
            me.define(Class[`${tank}${(resetToFirstFrame && i == frames) ? 0 : isFirstFrame ? i + offset : frames - i}`]);
            i += 1;
        } else {
            if (me.isAlive && me.isShapeshifter) {
                me.onKill = defExports.shapeshifter.ON_KILL
                me.upgrades = [];
            }
            clearInterval(animInterval);
        }
    }, duration);
};
if (!global.structuredClone) global.structuredClone = obj => JSON.parse(JSON.stringify(obj));
const makeAnimTank = (exportName, name, frame1, frame31, options = {}) => {
    let duration = options.duration || 20;
    let prop = options.prop != null ? options.prop : true;
    let gunPositionA = options.gunPositionA || false;
    let gunPositionB = options.gunPositionB || false;
    let turretPositionA = options.turretPositionA || false;
    let turretPositionB = options.turretPositionB || false;
    options.gunProps = options.gunProps || [];
    defExports[`${exportName}0`] = structuredClone(frame1);
    defExports[`${exportName}0`].GUNS = structuredClone(frame1.GUNS || []);
    defExports[`${exportName}0`].TURRETS = frame1.TURRETS || [];
    defExports[`${exportName}0`].LABEL = name;
    defExports[`${exportName}31`] = structuredClone(frame31);
    defExports[`${exportName}31`].GUNS = structuredClone(frame31.GUNS || []);
    defExports[`${exportName}31`].TURRETS = frame31.TURRETS || [];
    defExports[`${exportName}31`].LABEL = name;
    if (frame1.GUNS) for (let i = 0; i < frame1.GUNS.length; i++) {
        if (frame1.GUNS[i].PROPERTIES != undefined) {
            if (frame1.GUNS[i].PROPERTIES.TYPE != undefined) {
                defExports[`${exportName}0`].GUNS[i].PROPERTIES.TYPE = frame1.GUNS[i].PROPERTIES.TYPE;
            }
        }
    }

    if (frame31.GUNS) for (let i = 0; i < frame31.GUNS.length; i++) {
        if (frame31.GUNS[i].PROPERTIES != undefined) {
            if (frame31.GUNS[i].PROPERTIES.TYPE != undefined) {
                defExports[`${exportName}31`].GUNS[i].PROPERTIES.TYPE = frame31.GUNS[i].PROPERTIES.TYPE;
            }
        }
    }

    let gunsA = defExports[`${exportName}0`].GUNS;
    let gunsB = defExports[`${exportName}31`].GUNS;
    let turretsA = defExports[`${exportName}0`].TURRETS;
    let turretsB = defExports[`${exportName}31`].TURRETS;
    for (let i = 1; i < 31; i++) {
        defExports[`${exportName}${i}`] = {
            PARENT: [defExports.genericTank],
            LABEL: name,
            GUNS: [],
            TURRETS: [],
            IS_USED: true
        }
        for (let j = 0; j < Math.max(gunsA.length, gunsB.length); j++) {
            if (j < Math.min(gunsA.length, gunsB.length)) {
                defExports[`${exportName}${i}`].GUNS.push({
                    POSITION: [
                        gunsA[j].POSITION[0] * (1 - i / 31) + gunsB[j].POSITION[0] * (i / 31),
                        gunsA[j].POSITION[1] * (1 - i / 31) + gunsB[j].POSITION[1] * (i / 31),
                        gunsA[j].POSITION[2] * (1 - i / 31) + gunsB[j].POSITION[2] * (i / 31),
                        gunsA[j].POSITION[3] * (1 - i / 31) + gunsB[j].POSITION[3] * (i / 31),
                        gunsA[j].POSITION[4] * (1 - i / 31) + gunsB[j].POSITION[4] * (i / 31),
                        gunsA[j].POSITION[5] * (1 - i / 31) + gunsB[j].POSITION[5] * (i / 31),
                        0
                    ],
                    PROPERTIES: {
                        SKIN: gunsA[j].PROPERTIES ? gunsA[j].PROPERTIES.SKIN || null : null,
                        COLOR: options.gunProps.includes(j) ? 245 + i : gunsA[j].PROPERTIES ? gunsA[j].PROPERTIES.COLOR || null : null,
                        COLOR_UNMIX: gunsA[j].PROPERTIES ? gunsA[j].PROPERTIES.COLOR_UNMIX || null : null
                    }
                });
            } else if (gunsA.length > gunsB.length) {
                defExports[`${exportName}${i}`].GUNS.push({
                    POSITION: [
                        gunsA[j].POSITION[0] * (1 - i / 31),
                        gunsA[j].POSITION[1] * (1 - i / 31),
                        gunsA[j].POSITION[2] * (1 - i / 31),
                        gunsA[j].POSITION[3] * (1 - i / 31),
                        gunsA[j].POSITION[4] * (1 - i / 31),
                        gunsA[j].POSITION[5],
                        0
                    ],
                    PROPERTIES: {
                        SKIN: gunsA[j].PROPERTIES ? gunsA[j].PROPERTIES.SKIN || null : null,
                        COLOR: options.gunProps.includes(j) ? 245 + i : gunsA[j].PROPERTIES ? gunsA[j].PROPERTIES.COLOR || null : null,
                        COLOR_UNMIX: gunsA[j].PROPERTIES ? gunsA[j].PROPERTIES.COLOR_UNMIX || null : null
                    }
                });
            } else {
                defExports[`${exportName}${i}`].GUNS.push({
                    POSITION: [
                        gunsB[j].POSITION[0] * (i / 31),
                        gunsB[j].POSITION[1] * (i / 31),
                        gunsB[j].POSITION[2] * (i / 31),
                        gunsB[j].POSITION[3] * (i / 31),
                        gunsB[j].POSITION[4] * (i / 31),
                        gunsB[j].POSITION[5],
                        0
                    ],
                    PROPERTIES: {
                        SKIN: gunsB[j].PROPERTIES ? gunsB[j].PROPERTIES.SKIN || null : null,
                        COLOR: options.gunProps.includes(j) ? 245 + i : gunsB[j].PROPERTIES ? gunsB[j].PROPERTIES.COLOR || null : null,
                        COLOR_UNMIX: gunsB[j].PROPERTIES ? gunsB[j].PROPERTIES.COLOR_UNMIX || null : null
                    }
                });
            }
        }
        if (prop) defExports[`${exportName}${i}`].GUNS.push({
            POSITION: [14, 3.5, 1, 0, 0, 0, 0],
            PROPERTIES: {
                COLOR: 245 + i
            }
        });
        let posA = turretPositionA ? turretPositionA : turretsA;
        let posB = turretPositionB ? turretPositionB : turretsB;
        for (let j = 0; j < Math.max(posA.length, posB.length); j++) {
            if (j < Math.min(posA.length, posB.length)) {
                defExports[`${exportName}${i}`].TURRETS.push({
                    POSITION: [
                        posA[j].POSITION[0] * (1 - i / 31) + posB[j].POSITION[0] * (i / 31),
                        posA[j].POSITION[1] * (1 - i / 31) + posB[j].POSITION[1] * (i / 31),
                        posA[j].POSITION[2] * (1 - i / 31) + posB[j].POSITION[2] * (i / 31),
                        posA[j].POSITION[3] * (1 - i / 31) + posB[j].POSITION[3] * (i / 31),
                        0,
                        posA[j].POSITION[5]
                    ],
                    TYPE: [posA[j].TYPE, {
                        INDEPENDENT: true,
                        CONTROLLERS: []
                    }]
                });
            } else if (posA.length > posB.length) {
                defExports[`${exportName}${i}`].TURRETS.push({
                    POSITION: [
                        posA[j].POSITION[0] * (1 - i / 31),
                        posA[j].POSITION[1] * (1 - i / 31),
                        posA[j].POSITION[2] * (1 - i / 31),
                        posA[j].POSITION[3] * (1 - i / 31),
                        0,
                        posA[j].POSITION[5]
                    ],
                    TYPE: [posA[j].TYPE, {
                        INDEPENDENT: true,
                        CONTROLLERS: []
                    }]
                });
            } else {
                defExports[`${exportName}${i}`].TURRETS.push({
                    POSITION: [
                        posB[j].POSITION[0] * (i / 31),
                        posB[j].POSITION[1] * (i / 31),
                        posB[j].POSITION[2] * (i / 31),
                        posB[j].POSITION[3] * (i / 31),
                        0,
                        posB[j].POSITION[5]
                    ],
                    TYPE: [posB[j].TYPE, {
                        INDEPENDENT: true,
                        CONTROLLERS: []
                    }]
                });
            }
        }
    }
    if (prop) {
        defExports[`${exportName}0`].GUNS.push({
            POSITION: [14, 3.5, 1, 0, 0, 0, 0],
            PROPERTIES: {
                COLOR: 245
            }
        });
        Class[`${exportName}31`].GUNS.push({
            POSITION: [14, 3.5, 1, 0, 0, 0, 0],
            PROPERTIES: {
                COLOR: 276
            }
        });
    }
    Class[`${ClassName}0`].ON_ALT = (me, entities) => {
        animate(me, ClassName, 31, duration, true, 0, entities);
    };
    Class[`${className}31`].ON_ALT = (me, entities) => {
        animate(me, ClassName, 31, duration, false, 0, entities);
    }
}

Class.animtank = {
    PARENT: "genericTank",
    LABEL: "animtanktest",
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
};

Class.addons.UPGRADES_TIER_0.push('animtank');