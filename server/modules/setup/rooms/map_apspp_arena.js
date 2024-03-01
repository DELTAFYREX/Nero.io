let { rock, roid } = require('../tiles/decoration.js'),
    { wall: WALL, dancefloor: dcf0, dancefloor1: dcf1, dancefloor2: dcf2, dancefloor3: dcf3, dancefloor4: dcf4, dancefloor5: dcf5, normal: ____, nest } = require('../tiles/misc.js'),
    { portal: port } = require('../tiles/portal.js'),

room = [
    [rock,rock,rock,roid,____,____,____,____,____,____,____,____,____,____,____,roid,rock,rock,rock,WALL,____,____,____,____,____,____,____,____,____,____,____,____,____,____,____,____,____,____,____],
    [rock,rock,roid,____,____,____,____,____,____,____,____,____,____,____,____,____,roid,rock,rock,WALL,____,____,____,____,____,____,____,____,____,____,____,____,____,____,____,____,____,____,____],
    [rock,roid,____,____,____,____,WALL,WALL,WALL,WALL,WALL,WALL,WALL,____,____,____,____,roid,rock,WALL,____,____,____,____,____,____,____,____,____,____,____,____,____,____,____,____,____,____,____],
    [roid,____,____,____,____,____,____,____,____,____,____,____,____,____,____,____,____,____,roid,WALL,____,____,____,____,____,____,____,____,____,____,____,____,____,____,____,____,____,____,____],
    [____,____,____,____,nest,nest,nest,nest,nest,nest,nest,nest,nest,nest,nest,____,____,____,____,WALL,____,____,____,____,____,____,____,____,____,____,____,____,____,____,____,____,____,____,____],
    [____,____,____,____,nest,____,____,____,____,____,____,____,____,____,nest,____,____,____,____,WALL,____,____,____,____,____,____,____,____,____,____,____,____,____,____,____,____,____,____,____],
    [____,____,WALL,____,nest,____,WALL,WALL,WALL,____,WALL,WALL,WALL,____,nest,____,WALL,____,____,WALL,____,____,____,____,____,____,____,____,____,____,____,____,____,____,____,____,____,____,____],
    [____,____,WALL,____,nest,____,WALL,dcf1,dcf0,dcf3,dcf2,dcf0,WALL,____,nest,____,WALL,____,____,WALL,____,____,____,____,____,____,____,____,____,____,____,____,____,____,____,____,____,____,____],
    [____,____,WALL,____,nest,____,WALL,dcf2,dcf4,dcf1,dcf5,dcf1,WALL,____,nest,____,WALL,____,____,WALL,____,____,____,____,____,____,____,____,____,____,____,____,____,____,____,____,____,____,____],
    [____,____,WALL,____,nest,____,____,dcf0,dcf5,port,dcf2,dcf3,____,____,nest,____,WALL,____,port,WALL,port,____,____,____,____,____,____,____,____,port,____,____,____,____,____,____,____,____,____],
    [____,____,WALL,____,nest,____,WALL,dcf4,dcf3,dcf1,dcf5,dcf0,WALL,____,nest,____,WALL,____,____,WALL,____,____,____,____,____,____,____,____,____,____,____,____,____,____,____,____,____,____,____],
    [____,____,WALL,____,nest,____,WALL,dcf5,dcf2,dcf4,dcf3,dcf4,WALL,____,nest,____,WALL,____,____,WALL,____,____,____,____,____,____,____,____,____,____,____,____,____,____,____,____,____,____,____],
    [____,____,WALL,____,nest,____,WALL,WALL,WALL,____,WALL,WALL,WALL,____,nest,____,WALL,____,____,WALL,____,____,____,____,____,____,____,____,____,____,____,____,____,____,____,____,____,____,____],
    [____,____,____,____,nest,____,____,____,____,____,____,____,____,____,nest,____,____,____,____,WALL,____,____,____,____,____,____,____,____,____,____,____,____,____,____,____,____,____,____,____],
    [____,____,____,____,nest,nest,nest,nest,nest,nest,nest,nest,nest,nest,nest,____,____,____,____,WALL,____,____,____,____,____,____,____,____,____,____,____,____,____,____,____,____,____,____,____],
    [roid,____,____,____,____,____,____,____,____,____,____,____,____,____,____,____,____,____,roid,WALL,____,____,____,____,____,____,____,____,____,____,____,____,____,____,____,____,____,____,____],
    [rock,roid,____,____,____,____,WALL,WALL,WALL,WALL,WALL,WALL,WALL,____,____,____,____,roid,rock,WALL,____,____,____,____,____,____,____,____,____,____,____,____,____,____,____,____,____,____,____],
    [rock,rock,roid,____,____,____,____,____,____,____,____,____,____,____,____,____,roid,rock,rock,WALL,____,____,____,____,____,____,____,____,____,____,____,____,____,____,____,____,____,____,____],
    [rock,rock,rock,roid,____,____,____,____,____,____,____,____,____,____,____,roid,rock,rock,rock,WALL,____,____,____,____,____,____,____,____,____,____,____,____,____,____,____,____,____,____,____]
];

module.exports = room;