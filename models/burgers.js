const orm = require("../config/orm");

const burger = {
    findAll: function () { },
    createOne: function (callbackFunction) {
        const columns = ["burger_name", "devoured"];
        const values = ['poop burger', false];

        orm.createOne("burgers", columns, values, function (resultsData) {
            callbackFunction(resultsData);

            console.log('HEY IM IN BURGER: ', resultsData);
        });
    },
    updateOne: function () { }
}

module.exports = burger;