const express =require("express");
const jwt = require("jsonwebtoken");


const  userAuth = async(req,res,next)=>{


    try{

       const {token}= req.cookies;
       if(!token){
        throw new Error("Token Doesn't exist");
       }

       const payloads=jwt.verify(token,"raju@12334");
       //id nikal rahe h 
       const{_id}=payloads;
       if(_id){
        throw new Error("Id is missing");
       }

        const result=await User.findById(_id);
        if(!result)
            throw new Error("user doesn't exist");



        req.result=result;
         next();
        
       }



    catch(err){
        res.send("Error"+err.message);

    }

}

module.exports=userAuth;