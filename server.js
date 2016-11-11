var express = require('express');
var path = require('path');
var fs = require("fs");
var mongoose = require('mongoose');
var app = express();


mongoose.connect('mongodb://localhost/Imgur');

// dynamically include routes (Controller)
fs.readdirSync('./Server/Controller/').forEach(function (file) {
  if(file.substr(-3) == '.js') {
      route = require('./Server/Controller/' + file);
      route.controller(app);
  }
});

app.listen(8080);
console.log("Server listening on port 8080");
