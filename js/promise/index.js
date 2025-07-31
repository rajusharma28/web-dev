const { response } = require("express");

 fetch(`http://api.weatherapi.com/v1/current.json?key=7131a9b6f2b44fddadd24001252207&q=London&aqi=yes`)
.then(response=>response.json())
.then(data=>console.log(data))
.catch((error)=>console.log(error));



// promises
// .then(response=>response.json())
// .then(data=>console.log(data));

// promises.then(response=>response.json())
// .then(data=>console.log(data));

// chaining
// promises.then((response)=>{
//     return response.json();

// }).then((data)=>{
//     console.log(data);
    
// })









// promises.then((response)=>{

//     console.log(response);
     
// }).catch((error)=>{
//     console.log(error);
    

// })

// pending resolve reject