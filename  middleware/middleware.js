const express = require("express");
const app = express();

// Middleware chain for /user
app.use("/user",
  (req, res, next) => {
    console.log("first");
    next(); // move to second
  },
  (req, res, next) => {

    next(); // move to third
  },
  (req, res) => {
    console.log("third");
    res.send("I am the final response"); // Final response handler
  }
);


//Date store 
app.use("/user",(req,res)=>{
    console.log(`${Date.now()} ${req,method} ${req.url}`);
    //authorize kar sakta h
    
})
app.get("/user",(req,res)=>{
    res.send("Info about user")
})


app.post("/user",(req,res)=>{
    res.send("Info about user")
})
app.patch("/user",(req,res)=>{
    res.send("info update")
})
app.delete("/user",(req,res)=>{
    res.send("Delte")
})


//logd ko maintence rakhan hota kab kisne res kiya haa
//Timing



app.listen(5000, () => {
  console.log("port listen in 5000");
});

// middleware are not a resopnse 

