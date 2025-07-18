const express = require("express");
const app=express();

const Auth = require("./middleware/auth");


// app.use(express.json());
//Curd operation 


// authencate admin in here
// app.use("/admin",Auth)

// database :array
const FoodMenu=[
    {id:1,food:"chowmain",category:"veg",price:599},
    {id:2,food:"paneer",category:"veg",price:599},
    {id:3,food:"chai",category:"veg",price:199},
    {id:4,food:"Roti",category:"veg",price:599}, 
    {id:5,food:"chiu",category:"veg",price:399},
    {id:6,food:"chedd",category:"veg",price:499},
    
    {id:7,food:"buttercheckan",category:"veg",price:2099},
    {id:8,food:"momo",category:"veg",price:599},
    
    {id:9,food:"Rajma",category:"veg",price:1599},
    {id:10,food:"kadi paneer",category:"veg",price:5299}
    

]


const AddToCart=[];
//user ko jo bhi food add hga wo idr jaayega

app.use(express.json());




app.get("/food",(req,res)=>{
    res.status(200).send(FoodMenu);

})

app.post("/admin",Auth,(req,res)=>{
    
    // dummy code

    // const token="ABCDEF";
    // const Access = token==="ABCDEF" ?1:0;

        FoodMenu.push(req.body);
        console.log(req.body);
        
        res.status(201).send("Item added Successfully");



})

//delete
app.delete("/admin/:id",Auth, (req, res) => {
    // const token = "ABCDEF";
    // const access = token === "ABCDEF" ? 1 : 0;

        const id = parseInt(req.params.id); 
        const index = FoodMenu.findIndex(item => item.id === id);

        if (index === -1) {
            res.status(404).send("Item doesn't exist");
        } else {
            FoodMenu.splice(index, 1);
            res.send("Successfully deleted");
        }

});



app.patch("/admin",Auth,(req,res)=>{
    // const token="ABCDEF"
    // const Access=token==="ABCDEF" ?1:0;


        const id=req.body.id;
        const fooddata=FoodMenu.find(item=>item.id===id);
        if(fooddata){
            if(req.body.food)
                fooddata.food=req.body.food;
            if(req.body.category)
                fooddata.category=req.body.category;
            if(req.body.price)
                fooddata.price=req.body.price;

            res.send("update Successfully");
        }else{
            res.send("item is not exist")
        }
    

    
});


app.listen(5000,()=>{
    console.log("Listening at port 5000");
    
});





