const redisClient= require("../config/RateLimiter");


const RateLimiter=async (req ,res, next)=>{
    try{
        const ip=req.ip;
        // nahi karathi
        // set method redisclient .set(ip,`1:${Date.now()/1000}`)
        //await redisclient.expire(3600);

        //exist karat h
        
         

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
        console.log("Error "+err.message);
        
    }
}

module.exports=RateLimiter;