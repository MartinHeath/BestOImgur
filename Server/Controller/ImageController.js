var express = require('express');
var mongoose = require('mongoose');
var path = require('path');

var repo = require('../Repository/ImageRepository');

module.exports.controller = function(app){
  //download metadata and store in MongoDB.
  repo.setup();
  app.get('/', function (req, res){
    res.sendFile(path.resolve( __dirname + '/../../Client/index.html'));
  });

  //get keywords and search database. Return hits as Json or error if unsuccesfull.
  app.post('/data', function (req, res){
    //as a response, all of matching images are sent back
    Image.find({$or: [{"title": {$regex: ".*"+ req.body.keySentence +".*"}}, {"description": {$regex: ".*"+ req.body.keySentence +".*"}}]},
    function (err, image){
      if(err){
        res.send(err);
      }
      else{
        res.json(image);
      }
    });
  });
};
