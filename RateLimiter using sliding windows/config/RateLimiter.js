const redisClient= require("../config/RateLimiter");
const windowSize=3600;
const MaxRequest=60;

const RateLimiter=async (req ,res, next)=>{
    try{
    //    const key=req.ip;

       const key = `IP${req.ip}`;
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

module.exports=RateLimiter;