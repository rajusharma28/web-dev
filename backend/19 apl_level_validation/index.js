const express = require("express");
const app = express();
const main=require("./database")
const user = require("./models/users");
const Users = require("./models/users");
const validateUser = require("./utils/validateUser");


app.use(express.json());


app.post("/register",async(req ,res)=>{
    try{


        validateUser(req.body);

        await Users.create(req.body);
        res.send("User Register Successfully")
    }
    catch(err){
        res.send("Error"+err.message)
    }
})

app.get("/info",async(req,res)=>{
    try{
        const result = await Users.find();
        res.send(result);
    }
    catch(err){

    
        res.send("Error"+err.message);
    }
})

app.get("/user/:id",async(req,res)=>{
    try{
        const result = await user.findById(req.params.id);
        res.send(result)
    }
    catch(err){
        res.send("Error" +err.message);
    }
})


app.delete("/user/:id",async (req,res)=>{
    try{
        await user.findByIdAndDelete(req.params.id)
        res.send("Delete Successfully")
    }
    catch(err){
        res.send("Error"+err.message)
    }
})

app.patch("/user",async(req,res)=>{
    try{
        const {_id,...update}=req.body;
        await user.findByIdAndUpdate(_id,update,{"runValidators":true});
        res.send("update succesfully");
    }
    catch(err){
        res.send("Error"+err.message);
    }
})

main()
.then(async()=>{
    console.log("connected to DB");
    app.listen(3000,()=>{
        console.log("Listening at port 3000");
        
    })

})
.catch((err)=>console.log(err)
)

