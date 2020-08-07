const express=require('express');
const route=express.Router();
const Post=require('../models/post');
//const requireLogin =require('../middlewere/requireLogin.js');

const requireLogin=require('../middlewere/requireLogin.js');

//get
exports.allpost=('/allPost',requireLogin,(req,res)=>{
    Post.find().populate("postedBy","_id name").
    then((result)=>{
        console.log(req.user)
        res.json({result:result})
    })
})

//post
exports.createpost=('/createpost',requireLogin,(req,res)=>{

 const {title,body,pic}=req.body;
 console.log(title,body,pic);
 if(!title || !body||!pic ){
     return res.status(400).json({"message":"please add all the fields"});
 }
 console.log(req.user);

const postUser=new Post({
    title,
    body,
    photo:pic,
    postedBy:req.user
})

postUser.save().then((user)=>{
console.log(user);
return res.json({result:user})
}).catch((error)=>{
    console.log(error);
})
 
return res.json({result:req.user});

})


//get
exports.mypost=('/mypost',requireLogin,(req,res)=>{
    //console.log(req.user)
 Post.find({postedBy:req.user._id}).populate("postedBy","_id name").then((user)=>{

   return res.json({user})
    //return res.json({user:"hello"})
 })

})


