var mongoose = require("mongoose");
var Image = require("../Domain/Image");
var https = require("https");

var options = {
  protocol:"https:",
  host:"api.imgur.com",
  path:"/3/gallery/top/viral/.json",
  headers:{"Authorization" : "Client-ID 4f600b608837252"}
};

//Coverts a json chunk into an Image, then saves it into MongoDB
var save = function (image){
  var img = new Image ({
    title: image.title,
    description: image.description,
    link: image.link
  });
  img.save(function (err){
    if(err)
      return handleError(err);
  });
};

//this function clears the database collection of all documents
var clear = function () {
  Image.remove({}, function (err){
    if(err){
      return handleError(err);
    }
  });
};

//setup for database purge and fill.
module.exports.setup = function (){
  //Requesting top viral images and storing them in local instance of MongoDB.
  var req = https.request(options, function(res) {
    //clear current Database collection.
    clear();
    var str = '';
    res.on('data', function (chunk) {
      str += chunk;
    });
    //full file now read. Image metadata saved in MongoDB.
    res.on('end', function () {
      var imageData = (JSON.parse(str));

      //cycling through data, picking out individual image metadata
      for(var i=0; i < imageData.data.length; i++){
        var img = imageData.data[i];
        save(img);
      }
    });
  });

  req.end();
};
