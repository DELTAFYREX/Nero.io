const { combineStats, makeDeco, makeAuto, makeCeption } = require('../facilitators');
const { base, statnames, gunCalcNames, dfltskl, smshskl } = require('../constants.js');

const g = require('../gunvals');

  
  	// This addon is enabled by default.
	// If you want to disable, uncomment the line below.
  //return console.log('[revolutionistPack.js] Addon disabled by default');

exports.randomTankTemp = {
PARENT: ["genericTank"],
LABEL: "Tnd Trnd",
GUNS : [
/* {
POSITION: [ 11.84, 10.5, 1.3, 0, 0, 0, 0],
},{
POSITION: [ 6.0200000000000005, 13.65, 1.58, 11.84, 0, 0, 0],
PROPERTIES: {
SHOOT_SETTINGS: combineStats([ g.trap, g.blank, g.blank, g.blank, g.blank, g.blank, g.blank, g.blank, g.blank, g.flank, g.mini]),
TYPE: "trap",
AUTOFIRE: false,
SYNCS_SKILLS: false,
STAT_CALCULATOR: gunCalcNames.trap,
MAX_CHILDREN: 0,
//
}, },0*/ {
POSITION: [ 11.84, 10.5, 1.3, 0, 0, 0, 0/3 ],
},{
POSITION: [ 6.0200000000000005, 13.65, 1.58, 11.84, 0, 0, 0/3],
PROPERTIES: {
SHOOT_SETTINGS: combineStats([ g.trap, g.blank, g.blank, g.blank, g.blank, g.blank, g.blank, g.blank, g.blank, g.mini, g.flank]),
TYPE: "trap",
AUTOFIRE: false,
SYNCS_SKILLS: false,
STAT_CALCULATOR: gunCalcNames.trap,
MAX_CHILDREN: 0,
// dam: 0.94921875, str: 0.5, pen: 1, rld: 1679616
}, },{
POSITION: [ 6.0200000000000005, 13.65, 1.58, 9.84, 0, 0, 1/3],
PROPERTIES: {
SHOOT_SETTINGS: combineStats([ g.trap, g.blank, g.blank, g.blank, g.blank, g.blank, g.blank, g.blank, g.blank, g.flank, g.mini]),
TYPE: "trap",
AUTOFIRE: false,
SYNCS_SKILLS: false,
STAT_CALCULATOR: gunCalcNames.trap,
MAX_CHILDREN: 0,
// dam: 0.25949267578125, str: 0.2805, pen: 1.125, rld: 75582720
}, },{
POSITION: [ 6.0200000000000005, 13.65, 1.58, 7.84, 0, 0, 2/3],
PROPERTIES: {
SHOOT_SETTINGS: combineStats([ g.trap, g.blank, g.blank, g.blank, g.blank, g.blank, g.blank, g.blank, g.blank, g.flank, g.mini]),
TYPE: "trap",
AUTOFIRE: false,
SYNCS_SKILLS: false,
STAT_CALCULATOR: gunCalcNames.trap,
MAX_CHILDREN: 0,
// dam: 0.94921875, str: 0.5, pen: 1, rld: 1679616
}, },{
POSITION: [ 5.244800000000001, 17.745, -1.58, 0, 0, 0, 0],
},
/* {
POSITION: [ 12.8, 6, 0.8, 0, 0, 180, 0],
PROPERTIES: {
SHOOT_SETTINGS: combineStats([ g.swarm, g.gunner, g.blank, g.blank, g.blank, g.blank, g.blank, g.blank, g.blank, g.battle, g.flank, g.mini, g.carrier]),
TYPE: "swarm",
AUTOFIRE: false,
SYNCS_SKILLS: false,
STAT_CALCULATOR: 0,
MAX_CHILDREN: 0,
//
}, },0*/ {
POSITION: [ 9.8, 6, 0.8, 0, 2, 195, 1/6 ],
PROPERTIES: {
SHOOT_SETTINGS: combineStats([ g.basic, g.gunner, g.blank, g.blank, g.blank, g.blank, g.blank, g.blank, g.blank, g.flank, g.mini, g.bent, g.twin]),
TYPE: "bullet",
AUTOFIRE: false,
SYNCS_SKILLS: false,
STAT_CALCULATOR: 0,
MAX_CHILDREN: 0,
// dam: 0.12715141113281248, str: 0.07497765, pen: 1.215, rld: 3247695.0000000005
}, },{
POSITION: [ 7.800000000000001, 6, 0.8, 0, 2, 195, 3/6 ],
PROPERTIES: {
SHOOT_SETTINGS: combineStats([ g.basic, g.gunner, g.blank, g.blank, g.blank, g.blank, g.blank, g.blank, g.blank, g.bent, g.twin, g.flank, g.mini]),
TYPE: "bullet",
AUTOFIRE: false,
SYNCS_SKILLS: false,
STAT_CALCULATOR: 0,
MAX_CHILDREN: 0,
// dam: 0.12715141113281248, str: 0.07497765, pen: 1.215, rld: 3247695.0000000005
}, },{
POSITION: [ 5.800000000000001, 6, 0.8, 0, 2, 195, 5/6 ],
PROPERTIES: {
SHOOT_SETTINGS: combineStats([ g.basic, g.gunner, g.blank, g.blank, g.blank, g.blank, g.blank, g.blank, g.blank, g.bent, g.twin, g.flank, g.mini]),
TYPE: "bullet",
AUTOFIRE: false,
SYNCS_SKILLS: false,
STAT_CALCULATOR: 0,
MAX_CHILDREN: 0,
// dam: 1.8984375, str: 0.165, pen: 1, rld: 104976
}, },{
POSITION: [ 9.8, 6, 0.8, 0, -2, -195, 0/6 ],
PROPERTIES: {
SHOOT_SETTINGS: combineStats([ g.basic, g.gunner, g.blank, g.blank, g.blank, g.blank, g.blank, g.blank, g.blank, g.twin, g.mini, g.flank, g.bent]),
TYPE: "bullet",
AUTOFIRE: false,
SYNCS_SKILLS: false,
STAT_CALCULATOR: 0,
MAX_CHILDREN: 0,
// dam: 0.12715141113281248, str: 0.07497765, pen: 1.215, rld: 3247695.0000000005
}, },{
POSITION: [ 7.800000000000001, 6, 0.8, 0, -2, -195, 2/6 ],
PROPERTIES: {
SHOOT_SETTINGS: combineStats([ g.basic, g.gunner, g.blank, g.blank, g.blank, g.blank, g.blank, g.blank, g.blank, g.mini, g.flank, g.twin, g.bent]),
TYPE: "bullet",
AUTOFIRE: false,
SYNCS_SKILLS: false,
STAT_CALCULATOR: 0,
MAX_CHILDREN: 0,
// dam: 0.12715141113281248, str: 0.07497765, pen: 1.215, rld: 3247695.0000000005
}, },{
POSITION: [ 5.800000000000001, 6, 0.8, 0, -2, -195, 4/6 ],
PROPERTIES: {
SHOOT_SETTINGS: combineStats([ g.basic, g.gunner, g.blank, g.blank, g.blank, g.blank, g.blank, g.blank, g.blank, g.mini, g.flank, g.twin, g.bent]),
TYPE: "bullet",
AUTOFIRE: false,
SYNCS_SKILLS: false,
STAT_CALCULATOR: 0,
MAX_CHILDREN: 0,
// dam: 1.8984375, str: 0.165, pen: 1, rld: 104976
}, },{
POSITION: [ 12.8, 6, 0.8, 0, 0, 180, 4/6 ],
PROPERTIES: {
SHOOT_SETTINGS: combineStats([ g.basic, g.gunner, g.blank, g.blank, g.blank, g.blank, g.blank, g.blank, g.blank, g.twin, g.mini, g.bent, g.flank]),
TYPE: "bullet",
AUTOFIRE: false,
SYNCS_SKILLS: false,
STAT_CALCULATOR: 0,
MAX_CHILDREN: 0,
// dam: 0.12715141113281248, str: 0.07497765000000002, pen: 1.215, rld: 3247695.0000000005
}, },{
POSITION: [ 10.8, 6, 0.8, 0, 0, 180, 6/6 ],
PROPERTIES: {
SHOOT_SETTINGS: combineStats([ g.basic, g.gunner, g.blank, g.blank, g.blank, g.blank, g.blank, g.blank, g.blank, g.twin, g.flank, g.bent, g.mini]),
TYPE: "bullet",
AUTOFIRE: false,
SYNCS_SKILLS: false,
STAT_CALCULATOR: 0,
MAX_CHILDREN: 0,
// dam: 0.12715141113281248, str: 0.07497765, pen: 1.215, rld: 3247695.0000000005
}, },{
POSITION: [ 8.8, 6, 0.8, 0, 0, 180, 8/6 ],
PROPERTIES: {
SHOOT_SETTINGS: combineStats([ g.basic, g.gunner, g.blank, g.blank, g.blank, g.blank, g.blank, g.blank, g.blank, g.twin, g.flank, g.bent, g.mini]),
TYPE: "bullet",
AUTOFIRE: false,
SYNCS_SKILLS: false,
STAT_CALCULATOR: 0,
MAX_CHILDREN: 0,
// dam: 1.8984375, str: 0.165, pen: 1, rld: 104976
}, }, ],
BODY: {
SPEED: 0.9 * base.SPEED,
FOV: 1.2 * base.FOV,
},
};
exports.gufner = {
PARENT: ["genericTank"],
LABEL: "Gufner Cruchiwitor",
GUNS : [
/* {
POSITION: [ 6, 16, 0.6, 13, 0, 0, 0],
PROPERTIES: {
SHOOT_SETTINGS: combineStats([ g.drone, g.gunner, g.blank, g.blank, g.blank, g.blank, g.blank, g.blank, g.blank, g.flank, g.mini]),
TYPE: "drone",
AUTOFIRE: true,
SYNCS_SKILLS: true,
STAT_CALCULATOR: gunCalcNames.drone,
MAX_CHILDREN: 4,
//
}, },6.5*/ {
POSITION: [ 6, 16, 0.6, 13, 0, 0, 0/3 ],
PROPERTIES: {
SHOOT_SETTINGS: combineStats([ g.drone, g.mehdrone, g.blank, g.blank, g.blank, g.bigdrone, g.blank, g.blank, g.blank, g.flank, g.mini]),
TYPE: "drone",
AUTOFIRE: true,
SYNCS_SKILLS: true,
STAT_CALCULATOR: gunCalcNames.drone,
MAX_CHILDREN: 4,
// dam: 1.2301875000000002, str: 0.7363125, pen: 1.3499999999999999, rld: 390625000
}, },{
POSITION: [ 4, 16, 0.6, 13, 0, 0, 1/3 ],
PROPERTIES: {
SHOOT_SETTINGS: combineStats([ g.drone, g.mehdrone, g.blank, g.blank, g.blank, g.bigdrone, g.blank, g.blank, g.blank, g.mini, g.flank]),
TYPE: "drone",
AUTOFIRE: true,
SYNCS_SKILLS: true,
STAT_CALCULATOR: gunCalcNames.drone,
MAX_CHILDREN: 4,
// dam: 1.2301875000000002, str: 0.7363125, pen: 1.3499999999999999, rld: 390625000
}, },{
POSITION: [ 2, 16, 0.6, 13, 0, 0, 2/3 ],
PROPERTIES: {
SHOOT_SETTINGS: combineStats([ g.drone, g.mehdrone, g.blank, g.blank, g.blank, g.bigdrone, g.blank, g.blank, g.blank, g.mini, g.flank]),
TYPE: "drone",
AUTOFIRE: true,
SYNCS_SKILLS: true,
STAT_CALCULATOR: gunCalcNames.drone,
MAX_CHILDREN: 4,
// dam: 3.375, str: 0.3, pen: 1.2, rld: 6250000
}, },
/* {
POSITION: [ 16.3, 10, 1, 0, 0, 180, 0],
PROPERTIES: {
SHOOT_SETTINGS: combineStats([ g.swarm, g.gunner, g.blank, g.blank, g.blank, g.blank, g.blank, g.blank, g.blank, g.mini, g.flank]),
TYPE: "swarm",
AUTOFIRE: false,
SYNCS_SKILLS: false,
STAT_CALCULATOR: 0,
MAX_CHILDREN: 0,
//
}, },6*/ {
POSITION: [ 16.3, 10, 1, 12, 0, 180, 0/3 ],
PROPERTIES: {
SHOOT_SETTINGS: combineStats([ g.basic, g.blank, g.blank, g.blank, g.blank, g.blank, g.blank, g.blank, g.blank, g.mini, g.flank]),
TYPE: "bullet",
AUTOFIRE: false,
SYNCS_SKILLS: false,
STAT_CALCULATOR: 0,
MAX_CHILDREN: 0,
// dam: 0.5189853515625, str: 0.09256500000000001, pen: 1.125, rld: 2361960
}, },{
POSITION: [ 14.3, 10, 1, 12, 0, 180, 1/3 ],
PROPERTIES: {
SHOOT_SETTINGS: combineStats([ g.basic, g.blank, g.blank, g.blank, g.blank, g.blank, g.blank, g.blank, g.blank, g.flank, g.mini]),
TYPE: "bullet",
AUTOFIRE: false,
SYNCS_SKILLS: false,
STAT_CALCULATOR: 0,
MAX_CHILDREN: 0,
// dam: 0.5189853515625, str: 0.09256500000000001, pen: 1.125, rld: 2361960
}, },{
POSITION: [ 12.3, 10, 1, 12, 0, 180, 2/3 ],
PROPERTIES: {
SHOOT_SETTINGS: combineStats([ g.basic, g.blank, g.blank, g.blank, g.blank, g.blank, g.blank, g.blank, g.blank, g.flank, g.mini]),
TYPE: "bullet",
AUTOFIRE: false,
SYNCS_SKILLS: false,
STAT_CALCULATOR: 0,
MAX_CHILDREN: 0,
// dam: 1.8984375, str: 0.165, pen: 1, rld: 104976
}, }, ],
BODY: {
SPEED: 1 * base.SPEED,
FOV: 1.2 * base.FOV,
},
};
exports.twiper = {
PARENT: ["genericTank"],
LABEL: "Shsiseer Twiper",
GUNS : [
/* {
POSITION: [ 21.76, 11.5, 1.4, 0, 0, 0, 0],
},{
POSITION: [ 3.2, 16.099999999999998, 1.24, 21.76, 0, 0, 0],
PROPERTIES: {
SHOOT_SETTINGS: combineStats([ g.trap, g.mach, g.sniper, g.pound, g.blank, g.blaster, g.chain, g.blank, g.blank, ]),
TYPE: "trap",
AUTOFIRE: false,
SYNCS_SKILLS: false,
STAT_CALCULATOR: gunCalcNames.trap,
MAX_CHILDREN: 0,
//
}, },0*/ {
POSITION: [ 21.76, 11.5, 1.4, 0, 0, 0, 0/1 ],
},{
POSITION: [ 3.2, 16.099999999999998, 1.24, 21.76, 0, 0, 0/1],
PROPERTIES: {
SHOOT_SETTINGS: combineStats([ g.trap, g.sniper, g.mach, g.pound, g.blank, g.chain, g.blaster, g.blank, g.blank, ]),
TYPE: "trap",
AUTOFIRE: false,
SYNCS_SKILLS: false,
STAT_CALCULATOR: gunCalcNames.trap,
MAX_CHILDREN: 0,
// dam: 0.94921875, str: 0.5, pen: 1, rld: 1679616
}, },{
POSITION: [ 8.96, 22.539999999999996, -1.2199999999999998, 0, 0, 0, 0],
},
],
BODY: {
SPEED: 1 * base.SPEED,
FOV: 1.3 * base.FOV,
},
};
exports.traptoap = {
PARENT: ["genericTank"],
LABEL: "Tan-traptoap",
GUNS : [
/* {
POSITION: [ 14, 15.125, 1, 0, 0, 0, 0],
PROPERTIES: {
SHOOT_SETTINGS: combineStats([ g.trap, g.gunner, g.blank, g.blank, g.blank, g.blank, g.blank, g.blank, g.blank, g.flank, g.carrier, g.mini, g.battle]),
TYPE: "trap",
AUTOFIRE: false,
SYNCS_SKILLS: false,
STAT_CALCULATOR: gunCalcNames.trap,
MAX_CHILDREN: 0,
//
}, },{
POSITION: [ 2.6100000000000003, 15.125, 1.195, 14, 0, 0, 0],
PROPERTIES: {
SHOOT_SETTINGS: combineStats([ g.trap, g.pound, g.blank, g.blank, g.blank, g.destroy, g.blank, g.blank, g.blank, g.bent, g.mini, g.flank, g.twin]),
TYPE: "trap",
AUTOFIRE: false,
SYNCS_SKILLS: false,
STAT_CALCULATOR: gunCalcNames.trap,
MAX_CHILDREN: 0,
//
}, },7.5*/ {
POSITION: [ 11, 15.125, 1, 7.5, 2, 15, 1/6 ],
},{
POSITION: [ 2.6100000000000003, 15.125, 1.195, 18.5, 2, 15, 1/6],
PROPERTIES: {
SHOOT_SETTINGS: combineStats([ g.trap, g.pound, g.blank, g.blank, g.blank, g.destroy, g.blank, g.blank, g.blank, g.mini, g.flank, g.twin, g.bent]),
TYPE: "trap",
AUTOFIRE: false,
SYNCS_SKILLS: false,
STAT_CALCULATOR: gunCalcNames.trap,
MAX_CHILDREN: 0,
// dam: 0.94921875, str: 0.5, pen: 1, rld: 1679616
}, },{
POSITION: [ 2.6100000000000003, 15.125, 1.195, 16.5, 2, 15, 3/6],
PROPERTIES: {
SHOOT_SETTINGS: combineStats([ g.trap, g.pound, g.blank, g.blank, g.blank, g.destroy, g.blank, g.blank, g.blank, g.flank, g.twin, g.mini, g.bent]),
TYPE: "trap",
AUTOFIRE: false,
SYNCS_SKILLS: false,
STAT_CALCULATOR: gunCalcNames.trap,
MAX_CHILDREN: 0,
// dam: 0.7265794921875001, str: 0.45441000000000004, pen: 1.08, rld: 365820364.79999995
}, },{
POSITION: [ 2.6100000000000003, 15.125, 1.195, 14.5, 2, 15, 5/6],
PROPERTIES: {
SHOOT_SETTINGS: combineStats([ g.trap, g.pound, g.blank, g.blank, g.blank, g.destroy, g.blank, g.blank, g.blank, g.flank, g.twin, g.mini, g.bent]),
TYPE: "trap",
AUTOFIRE: false,
SYNCS_SKILLS: false,
STAT_CALCULATOR: gunCalcNames.trap,
MAX_CHILDREN: 0,
// dam: 0.94921875, str: 0.5, pen: 1, rld: 1679616
}, },{
POSITION: [ 11, 15.125, 1, 7.5, -2, -15, 0/6 ],
},{
POSITION: [ 2.6100000000000003, 15.125, 1.195, 18.5, -2, -15, 0/6],
PROPERTIES: {
SHOOT_SETTINGS: combineStats([ g.trap, g.pound, g.blank, g.blank, g.blank, g.destroy, g.blank, g.blank, g.blank, g.flank, g.twin, g.mini, g.bent]),
TYPE: "trap",
AUTOFIRE: false,
SYNCS_SKILLS: false,
STAT_CALCULATOR: gunCalcNames.trap,
MAX_CHILDREN: 0,
// dam: 0.94921875, str: 0.5, pen: 1, rld: 1679616
}, },{
POSITION: [ 2.6100000000000003, 15.125, 1.195, 16.5, -2, -15, 2/6],
PROPERTIES: {
SHOOT_SETTINGS: combineStats([ g.trap, g.pounder, g.blank, g.blank, g.blank, g.destroyer, g.blank, g.blank, g.blank, g.twin, g.bent, g.minigun, g.flankGuard]),
TYPE: "trap",
AUTOFIRE: false,
SYNCS_SKILLS: false,
STAT_CALCULATOR: gunCalcNames.trap,
MAX_CHILDREN: 0,
// dam: 0.7265794921875, str: 0.4544100000000001, pen: 1.08, rld: 365820364.79999995
}, },{
POSITION: [ 2.6100000000000003, 15.125, 1.195, 14.5, -2, -15, 4/6],
PROPERTIES: {
SHOOT_SETTINGS: combineStats([ g.trap, g.pounder, g.blank, g.blank, g.blank, g.destroyer, g.blank, g.blank, g.blank, g.twin, g.bent, g.minigun, g.flankGuard]),
TYPE: "trap",
AUTOFIRE: false,
SYNCS_SKILLS: false,
STAT_CALCULATOR: gunCalcNames.trap,
MAX_CHILDREN: 0,
// dam: 0.94921875, str: 0.5, pen: 1, rld: 1679616
}, },{
POSITION: [ 14, 15.125, 1, 15, 0, 0, 4/6 ],
},{
POSITION: [ 2.6100000000000003, 15.125, 1.195, 29, 0, 0, 4/6],
PROPERTIES: {
SHOOT_SETTINGS: combineStats([ g.trap, g.pounder, g.blank, g.blank, g.blank, g.destroyer, g.blank, g.blank, g.blank, g.twin, g.bent, g.minigun, g.flankGuard]),
TYPE: "trap",
AUTOFIRE: false,
SYNCS_SKILLS: false,
STAT_CALCULATOR: gunCalcNames.trap,
MAX_CHILDREN: 0,
// dam: 0.94921875, str: 0.5, pen: 1, rld: 1679616
}, },{
POSITION: [ 2.6100000000000003, 15.125, 1.195, 27, 0, 0, 6/6],
PROPERTIES: {
SHOOT_SETTINGS: combineStats([ g.trap, g.pounder, g.blank, g.blank, g.blank, g.destroyer, g.blank, g.blank, g.blank, g.twin, g.flankGuard, g.bent, g.minigun]),
TYPE: "trap",
AUTOFIRE: false,
SYNCS_SKILLS: false,
STAT_CALCULATOR: gunCalcNames.trap,
MAX_CHILDREN: 0,
// dam: 0.7265794921875, str: 0.45441000000000004, pen: 1.08, rld: 365820364.79999995
}, },{
POSITION: [ 2.6100000000000003, 15.125, 1.195, 25, 0, 0, 8/6],
PROPERTIES: {
SHOOT_SETTINGS: combineStats([ g.trap, g.pounder, g.blank, g.blank, g.blank, g.destroyer, g.blank, g.blank, g.blank, g.twin, g.flankGuard, g.bent, g.minigun]),
TYPE: "trap",
AUTOFIRE: false,
SYNCS_SKILLS: false,
STAT_CALCULATOR: gunCalcNames.trap,
MAX_CHILDREN: 0,
// dam: 0.94921875, str: 0.5, pen: 1, rld: 1679616
}, },{
POSITION: [ 12.233600000000001, 15.125, -1.395, 15, 0, 0, 0],
},
/* {
POSITION: [ 20.16, 17, 0.7, 14, 0, 180, 0],
},{
POSITION: [ 8.415000000000001, 11.899999999999999, 1.12, 20.16, 0, 180, 0],
PROPERTIES: {
SHOOT_SETTINGS: combineStats([ g.trap, g.pound, g.blank, g.blank, g.blank, g.destroy, g.blank, g.blank, g.blank, g.flank, g.bent, g.twin]),
TYPE: "trap",
AUTOFIRE: false,
SYNCS_SKILLS: false,
STAT_CALCULATOR: gunCalcNames.trap,
MAX_CHILDREN: 0,
//
}, },7*/ {
POSITION: [ 17.16, 17, 0.7, 7, 2, 195, 1/2 ],
},{
POSITION: [ 8.415000000000001, 11.899999999999999, 1.12, 24.16, 2, 195, 1/2],
PROPERTIES: {
SHOOT_SETTINGS: combineStats([ g.trap, g.pounder, g.blank, g.blank, g.blank, g.destroyer, g.blank, g.blank, g.blank, g.twin, g.bent, g.flankGuard]),
TYPE: "trap",
AUTOFIRE: false,
SYNCS_SKILLS: false,
STAT_CALCULATOR: gunCalcNames.trap,
MAX_CHILDREN: 0,
// dam: 0.94921875, str: 0.5, pen: 1, rld: 1679616
}, },{
POSITION: [ 17.16, 17, 0.7, 7, -2, -195, 0/2 ],
},{
POSITION: [ 8.415000000000001, 11.899999999999999, 1.12, 24.16, -2, -195, 0/2],
PROPERTIES: {
SHOOT_SETTINGS: combineStats([ g.trap, g.pounder, g.blank, g.blank, g.blank, g.destroyer, g.blank, g.blank, g.blank, g.twin, g.bent, g.flankGuard]),
TYPE: "trap",
AUTOFIRE: false,
SYNCS_SKILLS: false,
STAT_CALCULATOR: gunCalcNames.trap,
MAX_CHILDREN: 0,
// dam: 0.94921875, str: 0.5, pen: 1, rld: 1679616
}, },{
POSITION: [ 20.16, 17, 0.7, 14, 0, 180, 0/2 ],
},{
POSITION: [ 8.415000000000001, 11.899999999999999, 1.12, 34.16, 0, 180, 0/2],
PROPERTIES: {
SHOOT_SETTINGS: combineStats([ g.trap, g.pounder, g.blank, g.blank, g.blank, g.destroyer, g.blank, g.blank, g.blank, g.twin, g.bent, g.flankGuard]),
TYPE: "trap",
AUTOFIRE: false,
SYNCS_SKILLS: false,
STAT_CALCULATOR: gunCalcNames.trap,
MAX_CHILDREN: 0,
// dam: 0.94921875, str: 0.5, pen: 1, rld: 1679616
}, },{
POSITION: [ 9.3216, 8.329999999999998, -1.3199999999999998, 14, 0, 180, 0],
}, ],
BODY: {
SPEED: 0.9 * base.SPEED,
FOV: 1.1 * base.FOV,
},
};

Class.aitanks = {
    PARENT: ["menu"],
    LABEL: "AI Generated Tanks Lol",
};

Class.addons.UPGRADES_TIER_0.push('aitanks');
Class.aitanks.UPGRADES_TIER_0 = ["randomTankTemp", "gufner", "twiper", "traptoap"]