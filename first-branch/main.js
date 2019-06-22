var roleHarvester = require('role.harvester');
var roleUpgrader = require('role.upgrader');
var roleBuilder = require('role.builder');
var roleRepair = require('role.repair');
var createScreeps = require('create.screeps');


module.exports.loop = function () {

    // очищаем память от имен мертвых крипов
    for(var name in Memory.creeps) {
        if(!Game.creeps[name]) {
            delete Memory.creeps[name];
            console.log('Clearing non-existing creep memory:', name);
        }
    }


    // узнать количество доступной мне энергии в комнате
    // for(var name in Game.rooms) {
    //     console.log('Room "'+name+'" has '+Game.rooms[name].energyAvailable+' energy');
    // }


    createScreeps.run();

    for(var name in Game.creeps) {
        var creep = Game.creeps[name];
        if(creep.memory.role === 'harvester') {
            roleHarvester.run(creep);
        }
        if(creep.memory.role === 'upgrader') {
            roleUpgrader.run(creep);
        }
        if(creep.memory.role === 'builder') {
            roleBuilder.run(creep);
        }
        if(creep.memory.role === 'repair') {
            roleRepair.run(creep);
        }
    }
};
