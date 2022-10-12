const { Gallery } = require("../Model/Gallery");
const express = require("express");
const Router = express.Router();


Router.get('/', async (req,res)=>{
    const GalleryPhotos = await  Gallery.find()
    if(!GalleryPhotos) return res.status(400).json({success:false})
                       return res.status(200).json({success:true,content:GalleryPhotos})
})
Router.get('/:id', async (req,res)=>{
    const GalleryPhoto = await Gallery.find({Category:req.params.id})
    if(!GalleryPhoto) return res.status(400).json({success:false})
                       return res.status(200).json({success:true,content:GalleryPhoto})
})
Router.delete('/:id', async (req,res)=>{
    const GalleryPhoto = await Gallery.findByIdAndRemove(req.params.id)
    if(!GalleryPhoto) return res.status(400).json({success:false})
                       return res.status(200).json({success:true,content:GalleryPhotos})
})
Router.post('/', async (req,res)=>{
    // console.log(req.body)
    const PhotoForPost = new Gallery ({
        image:req.body.Gimage,
        Category:req.body.Category,
        name:req.body.Gname,
    })
     const PhotoPosted = await PhotoForPost.save();
     if(!PhotoPosted) return res.status(400).json({success:false})
                      return res.status(200).json({success:true,content:PhotoPosted})

})
module.exports = Router;
