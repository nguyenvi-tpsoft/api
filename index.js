var express = require('express');
var app = express();

require('./app/routes/dmphanloai')(app);

app.listen(3000, function () {
    console.log("Server listening on http://localhost:3000")
})