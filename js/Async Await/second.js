// async function meet(){
//     return "Hello ";
// }
// meet().then(value=>console.log(value));

// // async alwayes return  a promise
// // await will always be used inside asynec


function test1(){
   const p1 = new Promise((resolve,reject)=>{
    setTimeout(()=>{
        resolve("first promise resolved");
    },5000)
   })
   return p1;
    
    
}
function test2(){
const p2 = new Promise((resolve,reject)=>{
    setTimeout(()=>{
        resolve("second promise resolved");
    },7000)
   })
   return p2;
    
}


async function greet(){
    console.log("HELLO I a greet You");

    const [data1,data2] = await Promise.all([test1(),test2()]);

    console.log(data1);
    console.log(data2);
    
    
    // const data1= await test1();
    // console.log(data1);

    // const data2 = await test2();
    // console.log(data2);
    
    
    
}
greet();
console.log("Hello coder");
console.log("kaswid");


