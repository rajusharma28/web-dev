const express = require("express");

const mongoose = require("mongoose");
const menSchema = new mongoose.Schema({
    ranking:{
        type:Number,
        require:true,
        unique:true

    },
    name:{
        type:String,
        required:true,
        trim:true
    },
    dob:{
        type:Date,
        required:true,
        trim:true
    },
     Country:{
        type:String,
        required:true,
        trim:true
    },
    score:{
        type:Number,
        require:true,
        trim:true
    },
    event:{
        type:String,
        default:"100"
    }
})

//we are creating a new collection
const MensRaking = new mongoose.model("MenRakoing ",menSchema)
module.exports = MensRaking;