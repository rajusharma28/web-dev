const validator = require("validator");

function valiudatorUser(data){
    const mandatoryfiled =["firstName","emailId","age","password"]
    const IsAllowed = mandatoryfiled.every((k)=>Object.keys(data).includes(k));

    if(IsAllowed)
        throw new Error("fileds Missing");
    
    if(validator.isEmail(data.emailID))
       throw new Error("Invalid Email");
    if(!validator.isStrongPassword(data.password))
        throw new Error("week Password");
    if(!(data.firstName.length>=3 && data.firstName.length<=20))
        throw new Error("Name should have atleast 3 char and atleast 3 char atmost 20 char");

}

module.exports=valiudatorUser;