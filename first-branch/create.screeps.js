var createScreeps = {
    options: {
        quantity: {
            harvesters: 2,
            upgraders: 3,
            builders: 2,
            repairs: 1
        }
    },

    /** @param {Creep} creep **/
    run: function(creep) {
        var self = this,
            harvesters = _.filter(Game.creeps, (creep) => creep.memory.role === 'harvester'),
            upgraders = _.filter(Game.creeps, (creep) => creep.memory.role === 'upgrader'),
            builders = _.filter(Game.creeps, (creep) => creep.memory.role === 'builder'),
            repairs = _.filter(Game.creeps, (creep) => creep.memory.role === 'repair'),
            quantity = self.options.quantity;


        if (harvesters.length < quantity.harvesters) {
            self.createBigCreep('HarvesterBig', 'harvester');
        }

        if (upgraders.length < quantity.upgraders) {
            self.createBigCreep('UpgraderBig', 'upgrader');
        }

        if (builders.length < quantity.builders) {
            self.createBigCreep('BuilderBig', 'builder');
        }

        if (repairs.length < quantity.repairs) {
            self.createSmallCreep('Repair', 'repair');
        }

        if (Game.spawns['s1'].spawning) {
            var spawningCreep = Game.creeps[Game.spawns['s1'].spawning.name];
            Game.spawns['s1'].room.visual.text(
                '🛠️' + spawningCreep.memory.role,
                Game.spawns['s1'].pos.x + 1,
                Game.spawns['s1'].pos.y,
                {align: 'left', opacity: 0.8});
        }
    },

    createBigCreep: function (name, role) {
        var newName = name + Game.time;
        console.log('create new creep ' + name);
        Game.spawns['s1'].spawnCreep([WORK,WORK,WORK,WORK,CARRY,MOVE,MOVE], newName,
            {memory: {role: role}});
    },

    createSmallCreep: function (name, role) {
        var newName = name + Game.time;
        console.log('create new creep ' + name);
        Game.spawns['s1'].spawnCreep([WORK,CARRY,MOVE], newName,
            {memory: {role: role}});
    }
};

module.exports = createScreeps;
