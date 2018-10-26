require('dotenv').config();

var express = require('express');
var app = express();
var test = require('./controllers/testcontrollers');
var user = require('./controllers/usercontroller');
var sequelize = require('./db');
var bodyParser = require('body-parser');

sequelize.sync();

app.use(bodyParser.json());

app.use('/models/test', test);

app.use('/api/user', user);

app.listen(3000, function () {
    console.log('App is listening on 3000.') //5
});
