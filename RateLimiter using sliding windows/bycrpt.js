const bcrypt= require("bcrypt")

//  const password = "Rajushar@123";

//hascode+salt
async function Hashing(){
    // console.time("hash");
    
    // const hashpass = await bcrypt.hash(password,10);  //round kitne bar run karan 2 ki power
    // console.timeEnd("hash")
    // console.log(hashpass);

    //16 2s lageg

    // const salt = await bcrypt.genSalt(10);
    // const hashpass =await bcrypt.hash(password,salt);

    // console.log(salt);
    // console.log(hashpass);
    req.body.password = await bcrypt.hash(req.body.password, 10);

//    const ans = await bcrypt.compare("raju",hashpass);
//    console.log(ans);
   




}
Hashing();