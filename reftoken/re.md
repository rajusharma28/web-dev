const isSets

("/user/:id") nahi used kare because cookies me parsent hota hai 


  // const people = await User.findById(req.body._id);
    // // if (!people) throw new Error("User not found");

    // if (!(req.body.emailId === people.emailId))
    //   throw new Error("Invalid Credentials");

        const people =await User.findOne({emailId:req.body.emailId});








=============================================================


       app.get("/info",async(req,res)=>{
    try{

        // validate user
       const payloads= jwt.verify(req.cookies.token,"raju@1234");
       console.log(payloads);
       

        result= await User.find(req.body);
       res.send(result)

    }catch(err){
        res.send("Error"+err.message);


    }
})
+++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++======================

// particular kisi id find karan liya
app.get("/user", async(req,res)=>{
    try{

        const payloads= jwt.verify(req.cookies.token,"raju@1234");
       console.log(payloads);
       const result = await User.findById(payloads);
       res.send(result);

    }catch{
        res.send("Error"+err.message);

    }

})