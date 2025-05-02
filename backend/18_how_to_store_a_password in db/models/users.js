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
    type:String,

       // enum: ["male","female","others"]

       validate(value){
        if(!["male","female","other"].includes(value))
            throw new Error("Invalid Gender")
       }

   },
   email:{
    type:String,
    required:true ,
    unique:true,
    trim:true,
    lowercase:true,
    immutable:true
   },
   PHNumber:{
    type:Number
   },
   password:{
    type:String
   },
   photo:{
    type:String,
    default:"this is the default photo "
   }
},{timestamps:true})

const  Users = mongoose.model("user",userSchema);
module.exports =Users;