const { default: mongoose } = require("mongoose");



async function main() {
    await mongoose.connect("mongodb://localhost:27017/Insta");
    
    

}
module.exports= main;