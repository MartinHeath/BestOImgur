var express = require('express');
var path = require('path');
var fs = require("fs");
var mongoose = require('mongoose');
var bodyParser = require('body-parser');

var app = express();


//database connection
mongoose.connect('mongodb://guest:GuestPass1212@ds155747.mlab.com:55747/heroku_5zscblvj/');
//mongoose.connect('mongodb://localhost/Imgur');

app.use(express.static(path.join(__dirname, 'Client/public')));
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

// dynamically include routes (Controller)
fs.readdirSync('./Server/Controller/').forEach(function (file) {
  if(file.substr(-3) == '.js') {
      route = require('./Server/Controller/' + file);
      route.controller(app);
  }
});

app.listen(process.env.PORT || 8080);
console.log("Server listening on port" + process.env.port);
