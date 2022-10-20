const mongoose = require("mongoose");
const OrderModel = mongoose.Schema({
    CustomerName: { type: String, required: true },
    CustomerEmail: {type:String,required:true},
    CustomerID: { type: mongoose.Schema.Types.ObjectId, required: true, ref:'Orders',},
       Description : [{
    type: Object, required: true
    }],
    OrderStatus: { type: String, default:'Pending'},
    Payment:{type:String,required:true}
  });
  exports.Orders=mongoose.model('Orders',OrderModel)