const express =require("express");
const app=express();
const main = require("./database");
const User =require("./users");

app.use(express.json());

app.post("/register",async(req,res)=>{
    try{

        //validate kya uske andar firstname
        //req.body ke andar dataa aaya hai usme first_name persent hone chaiye

        const mandatoryfiled=["firstName","lastName","age"]
        const IsAllowed =mandatoryfiled.every((k)=>Object.keys((req,body).includes(K)));

        if(!IsAllowed)
            throw new Error ("Filed Missing");
        await User.create(req.body);
        res.send("User Registered Successfully");
    }catch(err){
        res.send("Error"+err.message);

    }
})
app.get("/info",async(req,res)=>{
    try{
        result= await User.find(req.body);
       res.send(result)

    }catch(err){
        res.send("Error"+err.message);


    }
})


// particular kisi id find karan liya
app.get("/user/:id", async(req,res)=>{
    try{
       const result = await User.findById(req.params.id);
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
    console.log("Listening at port 30000");
    
   })
   
})