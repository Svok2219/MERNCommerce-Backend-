const mongoose = require("mongoose");
const GalleryModel = mongoose.Schema({
  image: { type: String, required: true },
  name: { type: String, required: true },
  category: { type: String, require: true }
});
exports.Gallery = mongoose.model("Gallery", GalleryModel);
