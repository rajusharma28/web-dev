const bcrpt =require("bcrypt");
const { default: bcrypt } = require("bcryptjs");
const password ="Raju@1234";

async function Hashing(){
//hashcode+salt

// const salt =await bcrypt.genSalt(10);

const hashpass = await bcrypt.hash(password,10);

const ans = await bcrypt.compare("Raju",hashpass);
console.log(ans);


// console.log(salt);
// console.log(hashpass);

// console.log(hashpass);



}

Hashing();