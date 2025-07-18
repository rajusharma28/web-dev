// const mongoose = require('mongoose');

// async function main(){
//     await mongoose.connect("//rajusharma90462:<db_password>@cluster0.oiqxthp.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0")
// }
// module.exports=main;


const mongoose = require('mongoose');

async function main() {
    try {
        await mongoose.connect("mongodb://localhost:27017/Instagram");
        console.log('MongoDB connected');
    } catch (error) {
        console.error(' MongoDB connection error:', error.message);
    }
}

module.exports = main;
