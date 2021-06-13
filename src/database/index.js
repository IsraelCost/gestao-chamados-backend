const mysql = require('mysql');

const connection = mysql.createConnection({
    host: 'ls-ec16026762e30bfb33859dd2586bfc38b3687696.cuzrwuxeilm6.us-east-1.rds.amazonaws.com',
    user: 'admin',
    password: '12345678',
    port: '3306',
    database: 'dbchamados'
});

module.exports = connection;