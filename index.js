var express = require('express');
var app = express();

app.get("/", function (req, res) {
    res.send("Welcome");
});

app.listen(3000, function () {
    console.log("Server listening on http://localhost:3000")
})