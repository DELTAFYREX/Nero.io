const { combineStats, makeAuto, makeHybrid, makeHybridDrive, makeOver, makeDeco, makeGuard, makeBird, makeMulti, makeCeption, makeCeptionNerf, makeTracker } = require('../facilitators.js');
const { base, statnames, gunCalcNames, dfltskl, smshskl } = require('../constants.js');
require('../groups/generics.js');
const g = require('../gunvals.js');

Class.deltaDecoskin = {
TURRETS: [{
        POSITION: [34, 0, 0, 0, 360, 3],
        TYPE: "deltaDeco"
    }]
};

Class.cswmskin = {
TURRETS: [{
        POSITION: [34, 0, 0, 0, 360, 3],
        TYPE: "sandwichdeco"
    }]
};