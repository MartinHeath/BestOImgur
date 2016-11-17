var express = require('express');
var path = require('path');
var fs = require("fs");
var mongoose = require('mongoose');
var bodyParser = require('body-parser');

var app = express();


//database connection
mongoose.connect('mongodb://localhost/Imgur');
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

app.listen(8080);
console.log("Server listening on port 8080");
