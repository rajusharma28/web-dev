
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



// revision again 

const RateLimiter=async (req ,res, next)=>{
    try{
       const key=req.ip;
       const currenet_time=Date.now()/1000;
       const windowTime=currenet_time-windowSize;

       await redisClient.zRemRangeByScore(key,0,window_Time);

       const numberofRequest=redisClient.zCard(key);

       //total number of value kitne hai
       await redisClient.zAdd(key,[{score:currenet_time,value:`${currenet_time}:${Math.random()}`}]);
      //request is added
      

      //key TTL Hai usko increase karna. 
      await redisClient.expire(key,windowSize);


      next();


    }
    catch(err){
        console.log("Error "+err.message);
        
    }
}


//error some times
::1 (ip)