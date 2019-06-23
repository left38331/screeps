var triggers = {
    energyTrigger: function () {

        if (Game.rooms['W8N6'].energyAvailable < Game.rooms['W8N6'].energyCapacityAvailable) {
            console.log(1);
            return 1;

        } else {
            console.log(2);
            return 2;
        }


    },
};

module.exports = triggers;
