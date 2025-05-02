const {  mongoose, Schema} = require("mongoose");

const userSchema=new Schema({
    name:String,
    age:Number,
    gender:String
})

const  Users = mongoose.model("user",userSchema);
module.exports =Users;