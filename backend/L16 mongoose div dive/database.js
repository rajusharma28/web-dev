const { default: mongoose } = require("mongoose");



async function main() {
    await mongoose.connect("mongodb://localhost:27017/Bookstore");
    
    
//     const userSchema=new Schema({
//         name:String,
//         age:Number,
//         gender:String
//     })

//     //model ko create === collection create karan(table kop create karan)
//     const user =mongoose.model("user",userSchema);
// //docment create and object in database 
//     const user1=new user ({name:"raju",age:"34",city:"vasai",gender:"male"});
//     await user1.save();

//    await user.create({name:"raju",city:"nsp",age:23});


//    await user.insertMany({name:"Raj",age:13},{age:23,gender:"male"})
// //    const ans=await user.find({})
// //    console.log(ans);
   


// //find document by particular field 

// const result = await user.find({name:"raju"})
// console.log(result);

}

// main()
// .then(()=>console.log("connected to DB"))
// .catch((err)=>console.log(err)
// )

module.exports= main;