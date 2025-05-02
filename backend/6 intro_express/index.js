const { log } = require("console");
const express=require("express");
const app = express();

app.use("/about/:id",(req,res)=>{
    console.log(req.params);
    res.send({"name":"Raju","age":20,"money":23,"Mon":44,"sunday":34})
    
})

app.listen(4000,()=>{
    console.log("Listening at port 4000");
    
})