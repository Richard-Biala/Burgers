const connection = require("./connection");

function objToSql(ob) {
    var arr = [];

    // loop through the keys and push the key/value as a string int arr
    for (var key in ob) {
        var value = ob[key];
        // check to skip hidden properties
        if (Object.hasOwnProperty.call(ob, key)) {
            // if string with spaces, add quotations (Lana Del Grey => 'Lana Del Grey')
            if (typeof value === "string" && value.indexOf(" ") >= 0) {
                value = "'" + value + "'";
            }
            // e.g. {name: 'Lana Del Grey'} => ["name='Lana Del Grey'"]
            // e.g. {sleepy: true} => ["sleepy=true"]
            arr.push(key + "=" + value);
        }
    }

    // translate array of strings to a single comma-separated string
    return arr.toString();
}

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

        array.push(keys + '=' + obj[keys]);
    }

    var temp = array.toString();

    return temp;
}

var data = convertObjectToSQL({
    burger_name: "asdasdasd",
    devoured: true
});

console.log("string test: ", data);

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
    updateOne: function (updateData, condition, callbackFunction) {
        const data = {
            burger_name: "asdasdasd",
            devoured: true
        };

        console.log("\n\n\n\n", updateData, condition);
        // const queryString = `UPDATE tableName SET columns WHERE id=aNumber`
        const queryString = `UPDATE burgers SET ${convertObjectToSQL(updateData)} WHERE ${condition}`;

        connection.query(queryString, function (err, results) {
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