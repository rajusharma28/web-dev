const mongoose = require('mongoose');
const { Schema } = mongoose;
const bcrypt = require("bcrypt");
const  jwt = require('jsonwebtoken');

const bcrypt = require("bcrypt");
const  jwt = require('jsonwebtoken');
const User =require("./users");
const userSchema = new Schema({
  firstName: {
    type: String,
    required: true,
    minLength: 3,
    maxLength: 20,
  },
  lastName: {
    type: String,
  },
  age: {
    type: Number,
    min: 18,
    max: 70,
  },
  gender: {
    type: String,
    validate(value) {
      if (!["male", "female", "others"].includes(value)) {
        throw new Error("Invalid Gender");
      }
    },
  },
  emailId: {
    type: String,
    required: true,
    unique: true,
    trim: true,
    lowercase: true,
    immutable: true,
  },
  password: {
    type: String,
    required: true,
  },
  photo: {
    type: String,
    default: "This is a default photo",
  },
}, { timestamps: true });


userSchema.methods.getJWT= function(){
 const ans= jwt.sign({_id:this._id,emailId:this.emailId},process.env.SECRET_KEY)
}


const User = mongoose.model("user", userSchema);
module.exports = User;


userSchema.methods.verifyPassword = async function (){
  await bcrypt.compare(req.body.password,this.password);
}