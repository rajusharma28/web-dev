
=============================================================================   Ratelimter+++++++++++++++++++

const redisClient= require("../config/RateLimiter");


const RateLimiter=async (req ,res, next)=>{
    try{
        const ip=req.ip;
        const number_of_request = await redisClient.incr(ip);

        if(number_of_request>60){
            throw new Error("User Limit Exceed");
        }
        if(number_of_request==1){
            await redisClient.expire(3600);
        }
        next();

    }
    catch(err){
        console.log("Time linited "+err.message);
        
    }
}

module.exports=RateLimiter;;


//solve this  best -> best hi ip se track 