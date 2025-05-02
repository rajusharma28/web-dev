const {  mongoose, Schema} = require("mongoose");

const userSchema=new Schema({
    FirstName:{
        type:String,
        required:true
    },
   LastName:{
    type:String
   },
   age:{
    type:Number,
    min:18,
    max:67,
    
   },
   gender:{
    type:String
   },
   email:{
    type:String,
    required:true 
   },
   PHNumber:{
    type:Number
   },
   password:{
    type:Number
   },
   photo:{
    type:String
   }
})

const  Users = mongoose.model("user",userSchema);
module.exports =Users;