const express = require("express");
const app =express();
const BookStore = [
    {id:1,name:"Harray Potter",author:"Raju sharma"},
    {id:2,name:"atomic habvit" ,author:"jamesh "}
]


app.arguments(express.json());
app.get("/book",(req ,res)=>{
    res.send(BookStore);
})
app.get("/book/:id",(req,res)=>{
    // console.log(req.params);
    const id=parseInt(req.params.id);
    const Book = BookStore.find(info=> info.id===id);

    res.send(Book)
    
})
app.get("book",(req,res)=>{
    BookStore.push(req.body)
    res.send("Data sava successfully")
})

app.listen(4000,()=>{
    console.log("Listening at port 4000");
    
})



// app.get("/user",(req,res)=>{
//     res.send({name:'raju',age:30});
// })

// app.post("/user",(req,res)=>{
//     // console.log("Data saved Successfully");
//     console.log( typeof req.body.age);
    
    
//     res.send("Data saved Successfully");
// })