var express = require('express');
var app = express();
const server = require('http').Server(app)
require('./app/routes/home')(app);
require('./app/routes/dmphanloai')(app);

server.listen(process.env.PORT || 3000)

// app.listen(3000, function () {
//     console.log('https://localhost:3000')
// })