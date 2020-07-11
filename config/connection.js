const mysql = require('mysql');
let connection;

if (process.env.JAWSDB_URL) {
    connection = mysql.createConnection(process.env.JAWSDB_URL);
} else {
    connection = mysql.createConnection({
        port: 3306,
        host: 'localhost',
        user: 'root',
        password: 'root',
        database: 'burgers_db'
    });
};





connection.connect(function (err) {
    if (err) {
        return consle.error('error: ' + err.message);
    }

    console.log('Connected!');
});

module.exports = connection;

