let pickFromChanceSet = set => {
    while (Array.isArray(set)) {
        set = set[ran.chooseChance(...set.map(e => e[0]))][1];
    }
    return set;
},

spawnNatural = (tile, layeredSet, kind) => {
    let o = new Entity(tile.randomInside());
    o.define(pickFromChanceSet(pickFromChanceSet(layeredSet)));
    o.facing = ran.randomAngle();
    o.team = TEAM_ENEMIES;
    o.on('dead', () => tile.data[kind + 'Count']--);
    tile.data[kind + 'Count']++;
    return o;
},

normal = new Tile({
    color: "white",
    data: {
        allowMazeWallSpawn: true,
        foodSpawnCooldown: 0, foodCount: 0
    },
    init: tile => room.spawnableDefault.push(tile),
    tick: tile => {
        if (++tile.data.foodSpawnCooldown > c.FOOD_SPAWN_COOLDOWN) {
            tile.data.foodSpawnCooldown = 0;
            if (tile.data.foodCount < c.FOOD_CAP && Math.random() < c.FOOD_SPAWN_CHANCE) {
                spawnNatural(tile, c.FOOD_TYPES, 'food');
            }
        }
    }
}),

dancefloor = new Tile({
    color: "rainbow",
    data: {
        allowMazeWallSpawn: true,
    },
    init: tile => room.spawnableDefault.push(tile),
}),
    
dancefloor1 = new Tile({
    color: "20",
    data: {
        allowMazeWallSpawn: true,
    },
    init: tile => room.spawnableDefault.push(tile),
}),
dancefloor2 = new Tile({
    color: "21",
    data: {
        allowMazeWallSpawn: true,
    },
    init: tile => room.spawnableDefault.push(tile),
}),
dancefloor3 = new Tile({
    color: "22",
    data: {
        allowMazeWallSpawn: true,
    },
    init: tile => room.spawnableDefault.push(tile),
}),
dancefloor4 = new Tile({
    color: "23",
    data: {
        allowMazeWallSpawn: true,
    },
    init: tile => room.spawnableDefault.push(tile),
}),
dancefloor5 = new Tile({
    color: "24",
    data: {
        allowMazeWallSpawn: true,
    },
    init: tile => room.spawnableDefault.push(tile),
}),

nestTick = tile => {
    if (++tile.data.enemySpawnCooldown > c.ENEMY_SPAWN_COOLDOWN_NEST) {
        tile.data.enemySpawnCooldown = 0;
        if (tile.data.enemyCount < c.ENEMY_CAP_NEST && Math.random() < c.ENEMY_SPAWN_CHANCE_NEST) {
            spawnNatural(tile, c.ENEMY_TYPES_NEST, 'enemy');
        }
    }

    if (++tile.data.foodSpawnCooldown > c.FOOD_SPAWN_COOLDOWN_NEST) {
        tile.data.foodSpawnCooldown = 0;
        if (tile.data.foodCount < c.FOOD_CAP_NEST && Math.random() < c.FOOD_SPAWN_CHANCE_NEST) {
            spawnNatural(tile, c.FOOD_TYPES_NEST, 'food');
        }
    }
},

nest = new Tile({
    color: "purple",
    data: {
        allowMazeWallSpawn: true,
        foodSpawnCooldown: 0, foodCount: 0,
        enemySpawnCooldown: 0, enemyCount: 0
    },
    init: tile => {
        if (!room.spawnable[TEAM_ENEMIES]) room.spawnable[TEAM_ENEMIES] = [];
        room.spawnable[TEAM_ENEMIES].push(tile);
    },
    tick: nestTick
}),

nestNoBoss = new Tile({
    color: "purple",
    data: {
        allowMazeWallSpawn: true,
        foodSpawnCooldown: 0, foodCount: 0,
        enemySpawnCooldown: 0, enemyCount: 0
    },
    tick: nestTick
}),

wall = new Tile({
    color: "white",
    init: tile => {
	    let o = new Entity(tile.loc);
	    o.define("wall");
	    o.team = TEAM_ROOM;
	    o.SIZE = room.tileWidth / 2;
	    o.protect();
	    o.life();
    }
});


module.exports = { normal, nest, wall, nestNoBoss, dancefloor, dancefloor1, dancefloor2, dancefloor3, dancefloor4, dancefloor5 };