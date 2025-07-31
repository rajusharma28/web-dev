const obj =  fetch(`http://api.weatherapi.com/v1/current.json?key=7131a9b6f2b44fddadd24001252207&q=London&aqi=yes`);
setTimeout(()=>{
    console.log(obj);
    
},2000);
console.log(obj);



const obj =  fetch(`http://api.weatherapi.com/v1/current.json?key=7131a9b6f2b44fddadd24001252207&q=London&aqi=yes`);
obj.then((data)=>{

    console.log(data);
    
})


///
promises.then((response)=>{

    console.log(response);
     
}).catch((error)=>{
    console.log(error);
    

})



promises.then((response)=>{
    console.log(response.json());

})
//promise resturn hoga

// promises -> 


//first format 
promises.then((response)=>{
    // console.log(response.json()); // body part acess


    const pro2 = response.json();

    pro2.then((data)=>{
        console.log(data);
        
    })

})

// second format
 const pro2 = Promise.then((response)=>{
        return response.json();
   })
pro2.then((data)=>{
        console.log(data);
        
    })


//third format
 const pro2 = Promise.then((response)=>{
        return response.json();
   })
pro2.then((data)=>{
        console.log(data);
        
    })




// promises.then((response)=>{
    return response.json();

}).then((data)=>{
    console.log(data);
    
})

