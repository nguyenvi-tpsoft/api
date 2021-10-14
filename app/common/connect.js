var mysql = require('mysql');

var connection = mysql.createConnection({
    host: 'eu-cdbr-west-01.cleardb.com',
    user: 'b5252dcc8d45ee',
    password: 'fa6f0400',
    database: 'heroku_d5cd58cd09ff80f'
})
module.exports = connection;