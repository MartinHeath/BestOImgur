var express = require('express');
var mongoose = require('mongoose');
var path = require('path');
var imageRepo = require('../Repository/ImageRepository');
var Image = require("../Domain/Image");

module.exports.controller = function(app){

  app.get('/', function (req, res){
    Image.find(function (err, imgs){
        if(err)
          return (err);
        res.json(imgs);
      });
    //res.sendFile(path.resolve( __dirname + '/../../Client/index.html'));
  });

  app.post('/', function (req, res){

  });
};
