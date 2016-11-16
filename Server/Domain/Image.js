var mongoose = require ("mongoose");
var imageSchema = mongoose.Schema({
  title: String,
  description: String,
  link: String
});

Image = mongoose.model("image", imageSchema);

module.exports = Image;
