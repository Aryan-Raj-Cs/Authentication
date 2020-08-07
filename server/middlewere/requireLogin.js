const jwt=require('jsonwebtoken');
require("dotenv").config();
const mongoose=require('mongoose');
const User=mongoose.model('User');
const {JWT_SECRET}=process.env
module.exports=(req,res,next)=>{
const {authorize} = req.headers;
//console.log(req.headers,authorize);
if(!authorize){
   return res.status(400).json({"message":"you are not authorize"});
}
const token=authorize.replace("Bearer ","");
console.log(token);
jwt.verify(token,JWT_SECRET,(error,payload)=>{
  if(error){
      return res.status(400).json({"message":"you must be loggen in"})
  }

//console.log(payload)
const {_id}=payload;
//console.log(payload);
  User.findById(_id).then((userData)=>{
      req.user=userData;
      next();
  })
  


})
}