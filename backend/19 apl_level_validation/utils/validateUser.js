function validateUser(data){


    const mandatoryfield =["firstName","email","age","password"]

        const IsAllowed = mandatoryfield.every((k)=>Object.keys(req.body).includes(k));
         
       if(!IsAllowed)
        throw new Error("Fields Missing");
    


};
module.exports = validateUser;