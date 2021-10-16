var express = require('express');
var app = express();
var bodyParser = require('body-parser');
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json())
const server = require('http').Server(app)
require('./app/routes/home')(app);
require('./app/routes/dmphanloai')(app);

server.listen(process.env.PORT || 3000)

