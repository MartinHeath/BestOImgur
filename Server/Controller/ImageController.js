var express = require('express');
var mongoose = require('mongoose');
var path = require('path');
var repo = require('../Repository/ImageRepository');
var Image = require("../Domain/Image");

module.exports.controller = function(app){
  //download metadata and store in MongoDB.
  repo.setup();
  app.get('/', function (req, res){
    res.sendFile(path.resolve( __dirname + '/../../Client/index.html'));
  });

  /*app.post('/', function (req, res){
    //The post data is handeled in the front-end side, as no actual posting is necessary
  });*/

  //get all data in mongoDB and post into seperate data site to be used by Ajax
  app.get('/data', function (req, res){
    Image.find(function (err, imgs){
        if(err)
          return (err);
        res.json(imgs);
      });
  });
};
