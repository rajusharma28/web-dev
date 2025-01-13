// const cart = ["Pizza", "Coke", "Sandwich"];

// function placeOrder(cart) {
//     console.log("Talking with Domino's...");
//     return new Promise((resolve, reject) => {
//         setTimeout(() => {
//             const foodAvailable = true;
//             if (foodAvailable) {
//                 console.log("Order placed successfully!");
//                 resolve({ orderId: 221, food: cart, restaurant: "Domino's", location: "Dwarka" });
//             } else {
//                 reject("Items are out of stock.");
//             }
//         }, 2000);
//     });
// }

// function prepareOrder(order) {
//     console.log("Pizza preparation started...");
//     return new Promise((resolve) => {
//         setTimeout(() => {
//             console.log("Pizza preparation completed!");
//             resolve({ token: 12, restaurant: order.restaurant, location: order.location });
//         }, 3000);
//     });
// }

// function pickupOrder(foodDetails) {
//     console.log("Reaching the restaurant to pick up the order...");
//     return new Promise((resolve) => {
//         setTimeout(() => {
//             console.log("Order picked up by delivery boy!");
//             resolve(foodDetails.location);
//         }, 2000);
//     });
// }

// function deliverOrder(location) {
//     console.log("Delivery boy is on the way...");
//     return new Promise((resolve) => {
//         setTimeout(() => {
//             console.log(`Order delivered successfully to ${location}!`);
//             resolve();
//         }, 2000);
//     });
// }

// async function orderProcess() {
//     try {
//         const order = await placeOrder(cart);
//         const foodDetails = await prepareOrder(order);
//         const location = await pickupOrder(foodDetails);
//         await deliverOrder(location);
//     } catch (error) {
//         console.error("Error:", error);
//     }
// }

// orderProcess();

// ***************** second method *********************

// Using .then() for Chaining
// placeOrder(cart)
//       .then(order => prepareOrder(order))
//       .then(foodDetails => pickupOrder(foodDetails))
//       .then(droplocation => deliverOrder(droplocation))
//       .catch(error => console.log(error));




    //   ******************************** program1 ***************************


function test1(){
    return new Promise((resolve,reject)=>{
        setTimeout(()=>resolve ("first promise resolved"),5000)
    });
}
function test2(){
    return new Promise((resolve,reject)=>{
        setTimeout(()=>resolve("second promises resolve "),5000)
    })
}

async function greet(){
    const data1 = await test1();
    console.log(data1);
    const data2 = await test2();
    console.log(data2);
    
    
}

greet()