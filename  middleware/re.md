
L:6

app.use("/about/:id/:user",(req,res)=>{
    console.log(req.params)
    
    // res.send("Hello Coder Armt")
    res.send({"name":"raju","age":23,"money":60,"dog":239});

});

app.use("/contact",(req,res)=>{
    res.send("I am your contact page");
});

// app.use("/about",(req,res)=>{
//     res.send("I am your about page");
// });

app.use("/detail",(req,res)=>{
    res.send("I am your details page");
});

app.use("/",(req,res)=>{
    res.send("I am your home page");
});


