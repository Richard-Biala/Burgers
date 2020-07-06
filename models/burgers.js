const orm = require("../config/orm");

const burger = {
    findAll: function (callbackFunction) {
        orm.findAll("burgers", function (resultsData) {
            callbackFunction(resultsData);
        })
    },
    createOne: function (createData, callbackFunction) {
        const columns = ["burger_name", "devoured"];
        const values = [createData.burger_name, createData.devoured];

        orm.createOne("burgers", columns, values, function (resultsData) {
            callbackFunction(resultsData);

            console.log('HEY IM IN BURGER: ', resultsData);
        });
    },
    updateOne: function (updateData) {

        const condition = `id=${updateData.id}`;
        delete updateData.id;

        console.log('burgers updated data: ', updateData);

        orm.updateOne("burgers", updateData, condition, function (resultsData) {
            callbackFunction(resultsData);
        });
    }
}

module.exports = burger;