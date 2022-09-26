const mongoose = require("mongoose");
const userModel = mongoose.Schema({
  FullName: { type: String, required: true },
  MobileNumber: { type: Number, required: true },
  Address: { type: String, required: true },
  Email: { type: String, required: true },
  // PassWord:{type:String,required:true},
  BirthDate: { type: Date, required: true }
});
exports.User = mongoose.model("User", userModel);
