const { combineStats, makeAuto, makeHybrid, makeHybridDrive, makeOver, makeDeco, makeGuard, makeBird, makeMulti, makeCeption, makeCeptionNerf, makeTracker } = require('../facilitators.js');
const { base, statnames, gunCalcNames, dfltskl, smshskl } = require('../constants.js');
require('../groups/generics.js');
const g = require('../gunvals.js');

Class.tcharm = makeDeco("https://cdn.glitch.global/5fc7dcb6-aada-495b-828e-66901a470a29/2024_01_29_0ry_Kleki.png?v=1708536680813")

Class.deltaDecoskin = {
TURRETS: [{
        POSITION: [34, 0, 0, 0, 360, 3],
        TYPE: "deltaDeco"
    }]
};

Class.cswmskin = {
TURRETS: [{
        POSITION: [18, 0, 0, 0, 360, 0.5],
        TYPE: "sandwichdeco"
    }]
};

Class.tankcharmskin = {
TURRETS: [{
        POSITION: [18, 0, 0, 0, 360, 0.5],
        TYPE: "tcharm"
    }]
}