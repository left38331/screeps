var triggers = require('trigger');

var roleHarvester = {

    /** @param {Creep} creep **/
    run: function(creep) {

        if(creep.carry.energy < creep.carryCapacity) {
            var sources = creep.room.find(FIND_SOURCES);
            if(creep.harvest(sources[0]) === ERR_NOT_IN_RANGE) {
                creep.moveTo(sources[0], {visualizePathStyle: {stroke: '#ffaa00'}});
            }
        } else {

            // triggers.energyTrigger();

            var identifier = triggers.energyTrigger();



            console.log(identifier);


            var targets = creep.room.find(FIND_STRUCTURES, {
                filter: (structure) => {

                    var energyParam;

                    if (identifier === 1) {
                        energyParam = structure.energy < structure.energyCapacity;
                    } else {
                        energyParam = (_.sum(structure.store) < structure.storeCapacity);
                    }

                        return (structure.structureType === STRUCTURE_EXTENSION || structure.structureType === STRUCTURE_SPAWN || structure.structureType === STRUCTURE_CONTAINER) && energyParam;
                        // если нужно заполнить контейнер энергией и не только
                        // (_.sum(structure.store) < structure.storeCapacity);
                }
            });
            if(targets.length > 0) {
                if(creep.transfer(targets[0], RESOURCE_ENERGY) === ERR_NOT_IN_RANGE) {
                    creep.moveTo(targets[0], {visualizePathStyle: {stroke: '#ffffff'}});
                }
            } else {
                // если енергию некуда нести (все заполнено) то крипы отойдут к базе, чтобы не мешать добывать энергию другим
                creep.moveTo(Game.spawns['s1']);
            }
        }
    }
};



module.exports = roleHarvester;
