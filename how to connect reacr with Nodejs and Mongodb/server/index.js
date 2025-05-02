const express=require('express')
const connectDB =require('./db.js')
const itemModel =require('./models/item.js')
const cors= require('cors')




const app=express()
app.use(express.json())


app.get('/',async(req,res)=>{
    const items= await itemModel.find()
    res.json(items)
})


connectDB()
app.listen(3000,()=>{
    console.log("app is running");
    
})