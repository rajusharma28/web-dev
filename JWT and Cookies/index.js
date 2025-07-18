const express =require("express");
const app=express();
const main = require("./database");
const User =require("./users");
const validatorUser= require("./utils/validatoruser")
const bcrypt = require("bcrypt");
const cookieParser = require('cookie-parser');

const  jwt = require('jsonwebtoken');


app.use(express.json());

app.use(cookieParser());

app.post("/register",async(req,res)=>{
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

// //login
// app.post("/login",async(req,res)=>{
//  try{


//      const people=await User.findById(req.body._id);
//     if(!(req,body.emailId===people.emailId))

//         throw new Error("Invalid Credentials");
//     const IsAllowed = await bcrypt.compare(req,body.password, people.password);

//     if(!IsAllowed)
//         throw new Error("Inavlid Credentials");


//     // JWT

//     res.cookie("token","hefrhieufuherghreg8u87yer87y4ru75");
//     res.send("Login Successfully");




//  }catch(err){
//     res.send("Error: "+err.message);


//  }
// })


app.post("/login", async (req, res) => {
  try {


    const people =await User.findOne({emailId:req.body.emailId});


    const isAllowed = await bcrypt.compare(req.body.password, people.password);
    if (!isAllowed)
      throw new Error("Invalid Credentials");


//    jwt token
   
    const token=jwt.sign({_id:people._id,emailId:people.emailId},"raju@1234")

    // Set a dummy token cookie (for now)
    res.cookie("token", token);


    res.send("Login Successfully");

  } catch (err) {
    res.status(400).send("Error: " + err.message);
  }
});


app.get("/info",async(req,res)=>{
    try{

        // validate user
       const payloads= jwt.verify(req.cookies.token,"raju@1234");
       console.log(payloads);
       

        result= await User.find(req.body);
       res.send(result)

    }catch(err){
        res.send("Error"+err.message);


    }
})


// particular kisi id find karan liya
app.get("/user", async(req,res)=>{
    try{

        const payloads= jwt.verify(req.cookies.token,"raju@1234");
       console.log(payloads);
       const result = await User.findById(payloads);
       res.send(result);

    }catch{
        res.send("Error"+err.message);

    }

})

app.delete("/user/id",async(req,res)=>{
    try{
        await User.findByIdAndDelete(req.params.id);
     res.send("Deleted Successfully");

    }catch{
        res.send("Error"+err.message);
    }

})


app.patch("/user",async(req,res)=>{
    try{
        const{_id,...update}=req.body;
        User.findByIdAndUpdate(_id,update,{"runValidators":true});
        res.send("update Successfully");
    }catch(err){
        res.send("Error "+err.message);

    }
})

main()
.then(async()=>{
   console.log("Connected to DB");
   app.listen(3000,()=>{
    console.log("Listening at port 3000");
    
   })
   
})