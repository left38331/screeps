var roleRepair = {

    /** @param {Creep} creep **/
    run: function(creep) {

        if (creep.memory.repair === undefined) {
            creep.memory.repair = true;
        }

        if(creep.memory.repair && creep.carry.energy === 0) {
            creep.memory.repair = false;
            creep.say('🔄 harvest');
        }
        if(!creep.memory.repair && creep.carry.energy === creep.carryCapacity) {
            creep.memory.repair = true;
            creep.say('🚧 repair');
        }

        if (creep.memory.repair) {
            const targets = creep.room.find(FIND_STRUCTURES, {
                filter: object => object.hits < object.hitsMax
            });

            targets.sort((a,b) => a.hits - b.hits);

            if(targets.length > 0) {
                if(creep.repair(targets[0]) == ERR_NOT_IN_RANGE) {
                    creep.moveTo(targets[0]);
                }
            }
        } else {
            var sources = creep.room.find(FIND_SOURCES);
            if(creep.harvest(sources[0]) === ERR_NOT_IN_RANGE) {
                creep.moveTo(sources[0], {visualizePathStyle: {stroke: '#ffaa00'}});
            }
        }


    }
};

module.exports = roleRepair;


