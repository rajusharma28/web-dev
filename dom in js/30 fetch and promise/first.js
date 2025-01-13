// cart = ["pizza","coke","sandwich"];



// function placeOrder(cart , callback){
//     console.log("Talking with Domino's");
    
//     setTimeout(()=>{
//      console.log("Order Placed Succesfully");
//      const order = {orderId: 221 , food: cart , restaurant: "Dominos", location:"Dwarka"}
//      callback(order);
//     },2000)
// }

// function preparingOrder(order , callback){
//     console.log("Pizza preparation started....");

//     setTimeout(()=>{
//         console.log("Pizza preparation Done");
//         const foodDetails = {token: 12 , restaurant: order.restaurant, location: order.location};
//         callback(foodDetails);
//        },5000)
// };

// function pickupOrder(foodDetails,callback){
//     console.log("Reaching restaurant for picking order")

//     setTimeout(()=>{
//         console.log("Order picked up by Delivery Boy");
//         const droplocation = foodDetails.location;
//         callback(droplocation);
//        },3000)
// }

// function deliverOrder(droplocation){
//     console.log("Delivery boy on the way");

//     setTimeout(()=>{
//         console.log("Order Delivered succesfully");
//     },5000)
// }


// placeOrder(cart, callback);
// preparingOrder(order , callback)
// pickupOrder(foodDetails,callback)
// deliverOrder(droplocation)


// placeOrder(cart , (order)=>{
//     preparingOrder(order , (foodDetails)=>{
//         pickupOrder(foodDetails, (droplocation)=>{
//             deliverOrder(droplocation);
//         });
//     })
// });



// function placeOrder(cart){
//     console.log("Talking with Domino's");
     
//     const pr = new Promise(function(resolve,reject){

//         setTimeout(()=>{
            
//            const food_available = true;
//             if(food_available){
//             console.log("Order Placed Succesfully");
//             const order = {orderId: 221 , food: cart , restaurant: "Dominos", location:"Dwarka"}
//             resolve(order);
//             }
//             else{
//                 reject("Items Out of Stocks");
//             }
//            },2000)

//     })


//     return pr;
// }

// function preparingOrder(order){
//     console.log("Pizza preparation started....");

//     const pr = new Promise(function(resolve,reject){

//         setTimeout(()=>{
//             console.log("Pizza preparation Done");
//             const foodDetails = {token: 12 , restaurant: order.restaurant, location: order.location};
//             resolve(foodDetails);
//            },5000)
//     })

//     return pr;
// };

// function pickupOrder(foodDetails){
//     console.log("Reaching restaurant for picking order")
    
//     const pr = new Promise(function(resolve,reject){
//         setTimeout(()=>{
//             console.log("Order picked up by Delivery Boy");
//             const droplocation = foodDetails.location;
//             resolve(droplocation);
//            },3000)

//     })

    
// }
// ******************************************* practices **********************************

cart =["pizza","cake","sandwich"];

// function placeOrder(cart,callback){
//     console.log("Talking with Domino's");

//     setTimeout(()=>{
//         console.log("Order placed Succesfully");
//         const order  ={orderid:221,food:cart,restaurent:"Dominos",location:"Dwarka"}
//         callback(order);

//     },2000)

    
// }



// function preparingOrder(order,callback){
//     console.log("pizza preparation start...");

//     setTimeout(()=>{
//         console.log("pizza preparation Done");
//         const foodDetails ={taken:12,restaurant: order.restaurant,location:order,location:order.location};
//         callback(foodDetails);
        
//     },50000)
    
// };

// function pickupOrder(foodDetails,callback){
//     console.log("Reaching restaurant for picking order ");

//     setTimeout(()=>{
//         console.log("order picked up by Delivery Boy");
//         const droplocation =foodDetails.location;
//         callback(droplocation);
        

//     },3000)
    
// }

// function deliverOrder(droplocation){
//     console.log("Delivery boy on the way");

//     setTimeout(()=>{
//         console.log(" Order Delivery succesfully")
//     },5000)
    
// }


// placeOrder(cart,(order)=>{
//     preparingOrder(order,(foodDetails)=>{
//         pickupOrder(foodDetails,(droplocation)=>{
//             deliverOrder(droplocation);
//         });
//     });
// });


// placeOrder(cart,callback);
// preparingOrder(order,callback);
// pickupOrder(foodDetails,callback);
// deliverOrder(droplocation)




//second method 
function placeOrder(cart){
    console.log("Taking with Domino's");
     
    const pr = new Promise(function(resolve,reject){
        setTimeout(()=>{
            const food_available = true;
            if(food_available){
                console.log("Order placed Succesfully");
                const order ={orderid:221,food:cart,restaurant:"Dominos",location:"Dwarka"}
                resolve(order);
                
            }
            else{
                reject("Item Out of Stocks");
            }
        },2000)
    })
    return pr;
    
}

function preparingOrder(order){
    console.log("Pizza preparation started...");
    const pr = new Promise(function(resolve,reject){
        setTimeout(()=>{
            console.log("Pizza preparation Done");
            const foodDetails = {token:12,restaurant:order.restaurant,location:order.location}
            resolve(foodDetails);
            
        },5000)
    })
    return pr;
    
}

function pickupOrder(foodDetails){
    console.log("Reaching restaurant for picking order");

    const pr = new Promise(function(resolve,reject){
        setTimeout(()=>{
            console.log("Order picked up by Deliver Boy");
            const droplocation = foodDetails.location;
            resolve(droplocation);
            
        },3000)
    })
    return pr;
    
}

// placeOrder(cart,callback);
// preparingOrder(order,callback);
// pickupOrder(foodDetails,callback);
// deliverOrder(droplocation)



placeOrder(cart,(order)=>{
    preparingOrder(order,(foodDetails)=>{
        pickupOrder(foodDetails,(droplocation)=>{
            deliverOrder(droplocation);
        });
    });
});
