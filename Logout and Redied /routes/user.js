const userAuth = require("../Middleware/userAuth");

const express = require("express");
const authRouter = express.Router();

const userRouter=express.Router();

// particular kisi id find karan liya
userRouter.get("/", userAuth,async(req,res)=>{
    try{


         res.send(req.result);

       }

    catch(err){
        res.send("Error"+err.message);

    }

})

userRouter.delete("/id",userAuth,async(req,res)=>{
    try{

        //authencate the user :Token
        await User.findByIdAndDelete(req.params.id);
     res.send("Deleted Successfully");

    }catch{
        res.send("Error"+err.message);
    }

})


userRouter.patch("/",userAuth,async(req,res)=>{
    try{
        const{_id,...update}=req.body;
        User.findByIdAndUpdate(_id,update,{"runValidators":true});
        res.send("update Successfully");
    }catch(err){
        res.send("Error "+err.message);

    }
})


module.exports=userAuth;