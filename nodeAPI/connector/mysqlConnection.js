const mysql = require('mysql2')

const dbConnection = mysql.createPool({
    host : 'localhost',
    user : 'first',
    password:'password',
    database : 'testdb'
});

module.exports = dbConnection.promise();