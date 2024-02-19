const { combineStats, makeAuto, makeHybrid, makeHybridDrive, makeOver, makeDeco, makeGuard, makeBird, makeMulti, makeCeption, makeCeptionNerf, makeTracker } = require('../facilitators.js');
const { base, statnames, gunCalcNames, dfltskl, smshskl } = require('../constants.js');
require('../generics.js');
const g = require('../gunvals.js');

Class.A = {
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
