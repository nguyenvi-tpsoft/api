var express = require('express');
var app = express();

var dmphanloaiRouter = require('./routers/dmphanloai')

app.use('/', dmphanloaiRouter)

app.listen(3000, function () {
    console.log("Server listening on http://localhost:3000")
})