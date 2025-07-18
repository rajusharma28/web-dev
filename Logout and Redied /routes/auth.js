
const express = require("express");
const app = express();
const authRouter = express.Router();
const validatorUser= require("/Users/admin/Desktop/backend/Logout and Redied /utils/validatoruser.js")
const bcrypt = require("bcrypt");
const  jwt = require('jsonwebtoken');





authRouter.post("/register",async(req,res)=>{
    try{
        //validate a user form db
        validatorUser(req.body);
        //convert into password hashing
         req.body.password= await bcrypt.hash(req.body.password,10);
        await User.create(req.body);
        res.send("User Registered Successfully");
    }catch(err){
        res.send("Error"+err.message);

    }
})




authRouter.post("/login",userAuth, async (req, res) => {
  try {


    const people =await User.findOne({emailId:req.body.emailId});

    //   bcrypt
    const isAllowed =people.verifyPassword(req.body.password);
    if (!isAllowed)
      throw new Error("Invalid Credentials");


//    jwt token
    const token=people.getJWT();
   
    // const token=jwt.sign({_id:people._id,emailId:people.emailId},"raju@1234")

    // Set a dummy token cookie (for now)
    res.cookie("token", token);


    res.send("Login Successfully");

  } catch (err) {
    res.status(400).send("Error: " + err.message);
  }
});


//logout feature 
authRouter.post("/logout",async(req,res)=>{


  try{
    res.cookie("token",null,{expires:now Date.now()});
    res.send("Logout Successfully");

  }catch(err){
    res.send("Error:"+err.message);
  }



})





authRouter.post("/logout",(req,res)=>{



})

module.exports= authRouter;