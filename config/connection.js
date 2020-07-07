const mysql = require('mysql');

const connection = mysql.createConnection({
    port: 3306,
    host: 'localhost',
    user: 'root',
    password: 'root',
    database: 'burgers_db'
});

connection.connect(function (err) {
    if (err) {
        return consle.error('error: ' + err.message);
    }

    console.log('Connected!');
});

module.exports = connection;

