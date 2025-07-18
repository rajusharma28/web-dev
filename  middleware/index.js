const express = require("express");
const app=express();


const BookStore = [
     { id:1,name:'harray potter',author:"devflux"},
     {id:2,name:"Friend",author:"raju"},
     {id:3,name:"nexus",author:"Rohit"},
     {id:4,name:"Atomic habit",author:"James clear"},
      {id:5,name:"dsa",author:"rajushamr"}

]

app.use(express.json());    



app.get("/Book",(req,res)=>{
    console.log(req.query);

    const Book= BookStore.filter(info =>info.author === req.query.author );
    console.log(Book);
    
    res.send(Book);  //get all data
})

// mujhe kisi particular id chaiya
app.get("/Book/:id",(req,res)=>{

    const id=parseInt(req.params.id);
    const Book =BookStore.find(info=> info.id===id);  
    res.send(Book);

    // console.log(req.params);
    // res.send("ye lijiya");
    
})

app.post("/Book",(req,res)=>{
    console.log(req.body);
   BookStore.push(req.body);
   res.send("Data Saved Successfully");
})


app.patch("/Book", (req, res) => {
    console.log(req.body); 

    const book = BookStore.find(info => info.id === req.body.id);


    if(req.body.author)
        book.author=req.body.author;

    if(req.body.name)
        book.name=req.body.name;

    res.send("Patch update successful");
});

app.put("/Book",(req,res)=>{
      const book = BookStore.find(info => info.id === req.body.id);
      console.log(req.body);
      
      book.author=req.body.author;
      book.name=req.body.name;

      res.send("Change updated Successfully");
    
})

app.delete("/Book/:id",(req,res)=>{
    const id= parseInt(req.params.id);
    const index = BookStore.findIndex(info=>info.id === req.body.id);
    console.log(req.body);
    
   console.log(req.body);
   
    BookStore.splice(index,1);
    res.send("Successfully Deleted");

    
    
})


app.listen(4000,()=>{
    console.log("Listening at port 4000");
    
});







// app.use("/about",(req,res)=>{
//     console.log("I am user");
//     res.send("Hello Coder army");
    
// })

//parsing karan hota h
// app.use(express.json());



// app.get("/user",(req,res)=>{
//     res.send({name:"raju"})
// })

// app.post("/user",(req,res)=>{
//     // console.log("Data saved successfully");

//     console.log(req.body);
    
//     res.send("Data saved successfully");
    
// })




// Note
// route match honga :app.use
//app.get app.post app.patch app.piut app.delete