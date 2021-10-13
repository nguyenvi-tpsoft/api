var express = require('express');
var app = express();

var server = http.createServer(function (req, res) {
    res.setHeader("Content-Type", "application/json");
    res.end("<h1>Hello world</h1>");
});

server.listen(3000, function () {
    console.log("Server listening on http://localhost:3000")
})