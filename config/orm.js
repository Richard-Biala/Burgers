const connection = require("./connection");

function generateQuestionMarks(number) {
    const array = [];

    for (let i = 0; i < number; i++) {
        array.push('?');
    }

    return array.toString();
}

function convertObjectToSQL(obj) {
    const array = [];
    for (let keys in obj) {
        console.log('keys: ', keys);
        console.log(obj[keys]);

        array.push(`${keys}=${obj[keys]}`);
    }

    var temp = array.toString();

    return array.toString();
}

var data = convertObjectToSQL({
    burger_name: "asdasdasd",
    devoured: true
});

console.log("string test bitch: ", data);

const orm = {
    findAll: function (tableName, callbackFunction) {
        const queryString = `SELECT * FROM ${tableName}`;

        connection.query(queryString, function (err, results) {
            if (err) {
                throw err;
            }

            callbackFunction(results);
        })
    },
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
    updateOne: function (tableName, values, condition) {
        const data = {
            burger_name: "asdasdasd",
            devoured: true
        }

        // const queryString = `UPDATE tableName SET columns WHERE id=aNumber`
        const queryString = `UPDATE ${tableName} SET ${convertObjectToSQL(values)} WHERE ${condition}`;

        connection.query(queryString, function (err, results, callbackFunction) {
            if (err) {
                throw err;
            }

            console.log('org results: ', results);
            callbackFunction(results);
        })
    }
}

// o

// orm.createOne('burgers', ['burger_name', 'devoured'], ['random test', false]);

module.exports = orm;