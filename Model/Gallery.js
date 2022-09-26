const mongoose = require("mongoose");
const GalleryModel = mongoose.Schema({
  image: { type: String, required: true },
  name: { type: String, required: true },
  Category:{type:mongoose.Schema.Types.ObjectId,
    ref:'Category',
    required:true
  }
});
exports.Gallery = mongoose.model("Gallery", GalleryModel);
