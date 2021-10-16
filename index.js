var express = require('express');
var app = express();

app.use(express.urlencoded({ extended: true }));
app.use(express.json())
app.use(express.json());

const server = require('http').Server(app)
require('./app/routes/home')(app);
require('./app/routes/dmphanloai')(app);

server.listen(process.env.PORT || 3000)

