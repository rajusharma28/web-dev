
// ->>>>>>>>>>>>>>>>old E6
// placeOrder(cart)
// .then(order=>preparingOrder(order))
// .then(foodDetails=>pickupOrder(foodDetails))
// .then(droplocation=>deliverOrder(droplocation))
// .catch(error=>console.log(error));


->>>>>>>>>>>>>>>>>>> new.>>>>>>>>>>>>.
async function greet(){


const order= await placeOrder(cart);
const foodDetails = await pickupOrder(order);
const droplocation= await pickupOrder(order);
deliverOrder(droplocation);

}
greet();


==============================================
The Promise object represents the eventual completion (or failure) of an asynchronous operation and its resulting value.


Cart
order
foodDetails
droplocation

Promises: 
1: pending

2: resolve
3: reject


aynsc function meet(){
    retunr "Hello coder";
}
o/p-> promise 




note
<!-- fetch also show in promise -->