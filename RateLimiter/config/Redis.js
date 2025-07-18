const redis =require('redis');

const redisClient =redis.redisClient({
    username: 'default',
    password: '*******',
    socket: {
        host: 'redis-15357.c10.us-east-1-4.ec2.redns.redis-cloud.com',
        port: 15357
    }
});

module.exports=redisClient;