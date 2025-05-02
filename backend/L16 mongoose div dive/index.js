const express = require("express");
const app = express();
const main=require("./database")
const user = require("./models/users")
app.use(express.json());

// CRUD:Create Read Update Delete

app.get("/info",async(req,res)=>{
    const ans=await user.find({});
    res.send(ans);
})

app.post("/info",async(req,res)=>{
    try{
        await user.create(req.body);
        res.send("succesfully Updated");
    }
    catch(err){
        res.status(500).send(err)
    }
})

app.delete("/info",async(req,res)=>{
    await user.deleteOne({name:"raju"});
    res.send("Deleted");
})

app.put("/info",async(req,res)=>{
    await user.deleteOne({name:"raju"})
})


app.put("/info",async(req,res)=>{
    const result = await user.updateOne({name:"Mohan"},{age:24,city:"Kandiwali"});
    res.send("Update SuccessFully")
})
main()
.then(async()=>{
    console.log("connected to DB");
    app.listen(3000,()=>{
        console.log("Listening at port ");
        
    })
    const result = await user.find({name:"raju"});
     console.log(result);
    
})
.catch((err)=>console.log(err)
)

