const mysql = require('mysql2');

// TODO: set up in config file
const pool = mysql.createPool({
    host: '127.0.0.1',
    user: 'nanfang',
    database: 'packingcheck',
    password: 'aa'
});

module.exports = pool.promise()