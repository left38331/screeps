// create creep и назначение роли
Game.spawns['s1'].spawnCreep( [WORK, CARRY, MOVE], 'Harvester1', { memory: { role: 'harvester' } } );

// делаем апгрейдера
Game.spawns['s1'].spawnCreep( [WORK, CARRY, MOVE], 'Upgrader1', { memory: { role: 'upgrader' } } );

// делаем строителя
Game.spawns['s1'].spawnCreep( [WORK, CARRY, MOVE], 'Builder1', { memory: { role: 'builder' } } );

// делаем крутого урожайника
Game.spawns['s1'].spawnCreep( [WORK,WORK,WORK,WORK,CARRY,MOVE,MOVE], 'HarvesterBig', { memory: { role: 'upgrader' } } );
