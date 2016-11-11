var mongoose = require("mongoose");
var Image = require("../Domain/Image");

module.exports = {
  find:  function (){
    Image.find(function (err, imgs){
      if(err)
        return (err);
      return(imgs);
    });
  },
  hello: function(){
    return "hello";
  }
};
