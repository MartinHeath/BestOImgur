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


//multi keyword search. Left unimplemented due to time constraints.
/*var fullSearch = function(items){
  var images ='';
  console.log("LENGTH: " + items.keyWords.length);
  for(var i = 0; i < items.keyWords.length; i++){
    console.log("KEYWORD: " + items.keyWords[i]);
    images += sers(items.keyWords[i]);
  }
  return(images);
};

var sers = function (item){
  console.log("ITEM: " + item);
  Image.find({$or: [{"title": {$regex: ".*"+ item +".*"}}, {"description": {$regex: ".*"+ item +".*"}}]},
    function (err, image){
    if(err){
      return(err);
    }
    else{
      console.log("IMAGE: " + image);
      return image;
    }
  });
};*/
