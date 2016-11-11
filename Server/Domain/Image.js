var mongoose = require ("mongoose");
var imageSchema = mongoose.Schema({
  title: String,
  description: String,
  by: String,
  tags: [{body: String}],
  likes: Number
});

Image = mongoose.model("image", imageSchema);

module.exports = Image;
