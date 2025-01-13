



 //const Promise = fetch(`http://api.weatherapi.com/v1/current.json?key=f63a6d1cfeb34af0811113723250301&q=London&aqi=yes`)


//  console.log(Promise);
 

 // directed method 
//  setTimeout(()=>{
//     console.log(obj);
    
//  },2000)

// Promise.then((response)=>{
//     console.log(response);
    
// }).catch((error) =>{
//     console.log(error);
    
// })

//pending resolve reject 

// const Promises = fetch(`http://api.weatherapi.com/v1/current.json?key=f63a6d1cfeb34af0811113723250301&q=London&aqi=yes`)
// Promises.then((response)=>{
//     //    console.log(response.json())  // Promise { <pending> }

//         const pro2 =response.json();

//         pro2.then((data)=>{
//             console.log(data);
            
//         })
// })

// second method
// const pro2 =   Promises.then((response)=>{

//    return response.json();  

// })

// pro2.then((data)=>{

//     console.log(data);
    
// })

// third
// const Promises = fetch(`http://api.weatherapi.com/v1/current.json?key=f63a6d1cfeb34af0811113723250301&q=London&aqi=yes`)
// Promises
// .then(response=>response.json())
// .then(data=>console.log(data))

// fourth
const Promises = fetch(`http://api.weatherapi.com/v1/current.json?key=f63a6d1cfeb34af0811113723250301&q=London&aqi=yes`)
.then(response =>response.json())
.then(data=>console.log(data.current.temp_f))
.catch((error)=>console.log(error));
 
