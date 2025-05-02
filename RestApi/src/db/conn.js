const express = require('express');
const mongoose = require('mongoose');

mongoose.connect("mongodb://localhost:27017/olympics", {
  useNewUrlParser: true,
  useUnifiedTopology: true
})
.then(() => {
  console.log("Connection successful");
})
.catch((e) => {
  console.error("Connection failed:", e);
});
