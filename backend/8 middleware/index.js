const express = require("express");
const app =express();
const BookStore = [
    {id:1,name:"Harray Potter",author:"Raju sharma"},
    {id:2,name:"atomic habvit" ,author:"jamesh "},
    {id:1,name:"DSA",author:"Rohit Negi"},
    {id:2,name:"kali linux" ,author:"Tapan jha "}
]

app.post("/Book",(req,res)=>{
    console.log(req.body);
    BookStore.push(req.body);
    res.send("Data Saved Successfully");
    
})
app.patch("/book",(req,res)=>{
    res.send("patch")
})

app.listen(3000,()=>{
    console.log("Listening at port 3000");
    
})



