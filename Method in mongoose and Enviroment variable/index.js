const express =require("express");
const app=express();
const main = require("./database");
const User =require("./users");
const validatorUser= require("./utils/validatoruser")
const bcrypt = require("bcrypt");
const cookieParser = require('cookie-parser');

const  jwt = require('jsonwebtoken');

const userAuth=require("./middleware/userAuth");

const userRouter = require("./Routes/user");

require('dotenv').config()
const authRouter= require("./routes/auth");

app.use(express.json());

app.use(cookieParser());

app.use("/auth",authRouter);
app.use("/user",userRouter);


main()
.then(async()=>{
   console.log("Connected to DB");
   app.listen(process.env.PORT,()=>{
    console.log("Listening at port 3000");
    
   })
   
})