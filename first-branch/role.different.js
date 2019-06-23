var roleUpgrade = require('role.upgrader');
var roleRepair = require('role.repair');
var roleHarvester = require('role.harvester');
var roleBuilder = require('role.builder');

var differentRole = {
    runHurOrRep: function (creep) {
        var targets = creep.room.find(FIND_STRUCTURES, {
            filter: (structure) => {
                return (structure.structureType === STRUCTURE_EXTENSION || structure.structureType === STRUCTURE_SPAWN || structure.structureType === STRUCTURE_CONTAINER) && structure.energy < structure.energyCapacity;
            }
        });

        if (targets.length) {
            roleHarvester.run(creep);
        } else {
            roleUpgrade.run(creep);
        }
    },

    runBuildOrRepair: function (creep) {
        var targets = creep.room.find(FIND_CONSTRUCTION_SITES);
        if (targets.length) {
            roleBuilder.run(creep);
        } else {
            roleRepair.run(creep);
        }
    }

};

module.exports = differentRole;

