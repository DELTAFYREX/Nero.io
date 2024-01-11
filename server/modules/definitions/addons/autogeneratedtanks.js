const { combineStats, makeDeco, makeAuto, makeCeption } = require('../facilitators');
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


