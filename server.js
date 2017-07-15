const express = require('express');
const path = require('path');
const bodyParser = require('body-parser');


const app = express();
const PORT = 3000;


require('./app/routing/htmlRoutes.js')(app);
require('./app/routing/apiRoutes.js')(app);
require('./app/data/friends.js')(app);
// Sets up the Express app to handle data parsing
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
  extended: true
}));
app.use(bodyParser.text());
app.use(bodyParser.json({
  type: "application/vnd.api+json"
}));

app.listen(PORT,() =>{console.log(`App listening on PORT ${PORT}`)});


/*
var publicFolder = __dirname + '/public/';
config.public_folder = publicFolder;*/