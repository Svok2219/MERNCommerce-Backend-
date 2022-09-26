const { Gallery } = require("../Model/Gallery");
const express = require("express");
const Router = express.Router();


Router.get('/', async (req,res)=>{
    const GalleryPhotos = Gallery.find()
    if(!GalleryPhotos) return res.status(400).json({success:false})
                       return res.status(200).json({success:true,content:GalleryPhotos})
})
Router.get('/:id', async (req,res)=>{
    const GalleryPhoto = Gallery.find({Category:req.params.id})
    if(!GalleryPhoto) return res.status(400).json({success:false})
                       return res.status(200).json({success:true,content:GalleryPhotos})
})
Router.delete('/:id', async (req,res)=>{
    const GalleryPhoto = Gallery.findByIdAndRemove(req.params.id)
    if(!GalleryPhoto) return res.status(400).json({success:false})
                       return res.status(200).json({success:true,content:GalleryPhotos})
})
Router.post('/', async (req,res)=>{
    const PhotoForPost = new Gallery ({
        image:res.body.image,
        Category:res.body.Category,
        name:res.body.name,
    })
     const PhotoPosted = await PhotoForPost.save();
     if(!PhotoPosted) return res.status(400).json({success:false})
                      return res.status(200).json({success:false})

})
module.exports = Router;
