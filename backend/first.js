const { log } = require('console');
const http= require('http');
const server=http.createServer((req,res)=>{
   if(req.url==="/"){
    res.end("Hello Coder Army");
   }
   else if(req.url==="/contact"){
    res.end("This is our contact page")
   }
   else if(req.url==="/about"){
    res.end("This is our About page ")
   }
   else
   {
    res.end("Error:Page Not Found ")
   }
});

server.listen(4000,()=>{
    console.log("I am listening at port number 4000");
    
})