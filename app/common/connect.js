var mysql = require('mysql');

var connection = mysql.createConnection({
    host: 'eu-cdbr-west-02.cleardb.net',
    user: 'b6a76523a4f85f',
    password: 'b87e8d92',
    database: 'heroku_835a839af7f08b7'
    // host: 'localhost',
    // user: 'root',
    // password: '',
    // database: 'tplis'
})
module.exports = connection;