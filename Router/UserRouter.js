const { User } = require("../Model/User");
const express = require("express");
const Router = express.Router();

Router.get('/',async (req,res)=>{
    const Users = User.find()
    if(!Users) return res.status(400).json({success:false})
               return res.status(200).json({success:true,content:Users})
})
Router.get('/:id',async (req,res)=>{
    const Users = User.findById(req.params.id)
    if(!Users) return res.status(400).json({success:false})
               return res.status(200).json({success:true,content:Users})
})
Router.delete('/:id',async (req,res)=>{
    const Users = User.findByIdAndRemove(req.params.id)
    if(!Users) return res.status(400).json({success:false})
               return res.status(200).json({success:true,content:Users})
})
Router.post('/',async (req,res)=>{
    const UserForPost = new User({
        FullName:req.body.FullName,
        MobileNumber:req.body.MobileNumber,
        Address:req.body.Address,
        Email:req.body.Email,
        BirthDate:req.body.BirthDate,
    //   sold:req.body.sold,
    //   image:req.body.image,
    //   Description:req.body.Description,
    //   images:req.body.images
  })
  const UserPosted = await UserForPost.save()
  if(!UserPosted) return res.status(400).json({success:false})
  res.status(200).json({success:true,content:UserPosted})
    })
    
module.exports = Router;
