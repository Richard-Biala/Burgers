const connection = require("./connection");

function generateQuestionMarks(number) {
    const array = [];

    for (let i = 0; i < number; i++) {
        array.push('?');
    }

    return array.toString();
}


const orm = {
    findAll: function () { },
    createOne: function (tableName, columns, values, callbackFunction) {
        // const queryString = `INSERT INTO ${tableName} (burger_name, devoured) VALUES (?,?)`;

        const queryString = `INSERT INTO ${tableName} (${columns.toString()}) VALUES (${generateQuestionMarks(values.length)})`;

        connection.query(queryString, values, function (err, results) {

            if (err) {
                throw err;
            }
            callbackFunction(results);
        });
        // console.log(callbackFunction);
    },
    updateOne: function () { }
}

// o

// orm.createOne('burgers', ['burger_name', 'devoured'], ['random test', false]);

module.exports = orm;