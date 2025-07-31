

cart =["pizza","coke","sandwich"];


function placeOrder(cart,callback){
    console.log("Talking with Domino's");
    
    setTimeout(()=>{
     console.log("Order Placed Succesfully");
     const order = {order:221,food:cart,restaurant:'Dominos',location:"mumbai"};
     callback();
    },2000)
}

function preparingOrder(callback){
    console.log("Pizza preparation started....");

    setTimeout(()=>{
        console.log("Pizza preparation Done");
        const foodDetails = {token:12,restaurant:order.restaurant,location}
        callback(foodDetails);
       },5000)
};

function pickupOrder(foodDetails,callback){
    console.log("Reaching restaurant for picking order")

    setTimeout(()=>{
        console.log("Order picked up by Delivery Boy");
        const droplocation = foodDetails.location; 
        callback(droplocation);
       },3000)
}

function deliverOrder(){
    console.log("Delivery boy on the way");

    setTimeout(()=>{
        console.log("Order Delivered succesfully");
    },5000)
}

// function ratingOrder(){

// }

// placeOrder(preparingOrder);
placeOrder(cart,(order)=>{
    preparingOrder(order,(foodDetails)=>{
        pickupOrder(foodDetails,(droplocation)=>{
            deliverOrder(droplocation);
        });
    })
});

// callback hell







