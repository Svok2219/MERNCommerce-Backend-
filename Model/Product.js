const mongoose = require("mongoose");
const ProductModel = mongoose.Schema({
  name: { type: String, required: true },
  price: { type: Number, required: true },
  DelPrice: { type: Number, required: true },
  InitialStock: { type: Number, required: true },
  sold: { type: Number, required: true },
  Description: { type: String, required: true },
  image: { type: String, required: true },
  // images: [{ type: String, required: true }],
//   images:{
//     type:[String],
//     required: true
//  },
 images : [{
  type: String, required: true
}]
 ,
  Category:{type:mongoose.Schema.Types.ObjectId,
    ref:'Category',
    required:true
  },
});
exports.Product = mongoose.model("Product", ProductModel);
