let { rock, roid, blackrock: blrk, blackroid: blrd } = require('../tiles/decoration.js'),
    { wall: WALL, blacktile: blat, dancefloor: dcf0, dancefloor1: dcf1, dancefloor2: dcf2, dancefloor3: dcf3, dancefloor4: dcf4, dancefloor5: dcf5, normal: ____, nest } = require('../tiles/misc.js'),
    { portal: port } = require('../tiles/portal.js'),

room = [
    [rock,rock,roid,____,____,____,____,____,____,____,____,____,____,____,____,____,____,____,roid,rock,rock],
    [rock,port,port,____,rock,____,____,roid,rock,rock,rock,rock,rock,roid,____,____,rock,____,port,port,rock],
    [roid,port,port,____,rock,____,____,____,____,____,____,____,____,____,____,____,rock,____,port,port,roid],
    [____,____,____,____,____,____,____,____,____,____,____,____,____,____,____,____,____,____,____,____,____],
    [____,rock,rock,____,nest,nest,nest,nest,nest,nest,nest,nest,nest,nest,nest,nest,nest,____,rock,rock,____],
    [____,____,____,____,nest,____,____,____,____,____,____,____,____,____,____,____,nest,____,____,____,____],
    [____,____,____,____,nest,____,WALL,WALL,WALL,WALL,____,WALL,WALL,WALL,WALL,____,nest,____,____,____,____],
    [____,____,____,____,nest,____,WALL,blrk,blrd,blat,blat,blat,blrd,blrk,WALL,____,nest,____,____,____,____],
    [____,____,____,____,nest,____,WALL,blrd,dcf4,dcf2,dcf0,dcf4,dcf0,blrd,WALL,____,nest,____,____,____,____],
    [____,____,____,____,nest,____,WALL,blat,dcf5,dcf0,dcf0,dcf1,dcf5,blat,WALL,____,nest,____,____,____,____],
    [____,roid,roid,____,nest,____,____,blat,dcf2,dcf3,dcf2,dcf5,dcf4,blat,____,____,nest,____,roid,roid,____],
    [____,____,____,____,nest,____,WALL,blat,dcf3,dcf1,dcf4,dcf2,dcf5,blat,WALL,____,nest,____,____,____,____],
    [____,____,____,____,nest,____,WALL,blrd,dcf1,dcf4,dcf1,dcf0,dcf2,blrd,WALL,____,nest,____,____,____,____],
    [____,____,____,____,nest,____,WALL,blrk,blrd,blat,blat,blat,blrd,blrk,WALL,____,nest,____,____,____,____],
    [____,____,____,____,nest,____,WALL,WALL,WALL,WALL,____,WALL,WALL,WALL,WALL,____,nest,____,____,____,____],
    [____,____,____,____,nest,____,____,____,____,____,____,____,____,____,____,____,nest,____,____,____,____],
    [____,rock,rock,____,nest,nest,nest,nest,nest,nest,nest,nest,nest,nest,nest,nest,nest,____,rock,rock,____],
    [____,____,____,____,____,____,____,____,____,____,____,____,____,____,____,____,____,____,____,____,____],
    [roid,port,port,____,rock,____,____,____,____,____,____,____,____,____,____,____,rock,____,port,port,roid],
    [rock,port,port,____,rock,____,____,roid,rock,rock,rock,rock,rock,roid,____,____,rock,____,port,port,rock],
    [rock,rock,roid,____,____,____,____,____,____,____,____,____,____,____,____,____,____,____,roid,rock,rock]
];

module.exports = room;