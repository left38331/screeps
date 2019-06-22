var roleUpgrader = {

    /** @param {Creep} creep **/
    run: function(creep) {

        if (creep.memory.working === undefined) {
            creep.memory.working = true;
        }

        if (creep.memory.working === true && creep.carry.energy === 0) {
            creep.memory.working = false;
            creep.say('🔄 harvest');
        } else  if (creep.memory.working === false && creep.carry.energy === creep.carryCapacity) {
            creep.memory.working = true;
            creep.say('🚧 upgrade');
        }

        if (creep.memory.working === true) {
            if (creep.upgradeController(creep.room.controller) === ERR_NOT_IN_RANGE) {
            // if(creep.transfer(Game.spawns.s1, RESOURCE_ENERGY) === ERR_NOT_IN_RANGE) {
                creep.moveTo(creep.room.controller);
            }
        } else {
            var source = creep.pos.findClosestByPath(FIND_SOURCES);

            if (creep.harvest(source) === ERR_NOT_IN_RANGE) {
                creep.moveTo(source);
            }
        }
	}
};

module.exports = roleUpgrader;
