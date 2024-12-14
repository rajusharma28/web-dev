// Shallow Copy

// let obj1 ={a:1,b:2};
// let obj2=obj1;
// obj2.a=10;
// console.log(obj2,obj1)

//  o/p : { a: 10, b: 2 } { a: 10, b: 2 }

// Deep Copy:

// let obj3 = structuredClone(obj1);
// obj3.a=20;
// console.log(obj3,obj1);


// 2. Nested Objects and Object.assign()

// const user ={
//     name:"Rohit",
//     balance:420,
//     address:{
//         pincode:234236,
//         city:"mumbai"
//     }
// };

// using Object.assign( ) to copy

// const user2 = Object.assign({},user);
// console.log(user2);
// user2.address.pincode = 321314;
// console.log(user.address.pincode);

// Limitation: Object.assign() performs a shallow copy, so changes in nested objects affect the original object.


// 3. Object Destructuring
// let obj ={
//     name:"Rohit",
//     money:430,
//     balance:30,
//     age:20,
//     aadhar:"yadsysdsdgdhf"
// };

// const{name,balance,age} = obj;
// console.log(name,balance,age);

// Aliasing:Rename variables during destructuring.

// const{name:full_name,balance:amount,age:umar} = obj;
// console.log(full_name,amount,umar);

// Rest Syntax:Collect remaining properties into a new object.


// let obj ={
//     name:"Rohit",
//     money:430,
//     balance:30,
//     age:20,
//     aadhar:"yadsysdsdgdhf"
// };
// const { name,age, ...obj1 } = obj;
// console.log(obj1);


// 4. Array Destructuring :Extract values from an array into variables.

// const arr =[3,2,1,5,10];
// const [first,second]=arr;
// console.log(first , second);


// Skipping Elements: Skip elements in an array.
// const [first,second,third]=arr;
// console.log(third);

// Rest Syntax:Collect remaining elements into a new array.
//   const[first,second,...third]=arr;
//   console.log(third);

  //5. Nested Destructuring Objects:Extract values from nested objects.

//   let obj= {
//     name:"Rohit",
//     arr:[90,40,60,80],
//     address:{
//         pincode:401209,
//         city:"vasai",
//         state:"MH"
//     }
//   };
//   const { address:{pincode,city}}=obj;
//   console.log(pincode,city);

//   Arrays:Extract values from nested arrays.

// const {arr:[first]} = obj;
// console.log(first);


// 6. Object Methods
// Adding Functions:Objects can have methods (functions).

// let user = {
//   name:"Rohit",
//   amount:420,
//   greet:function(){
//     console.log("Hello coder Army");

//   },
//   meet:function(){
//     return 20;
//   }
// };

// console.log(user.greet());
// console.log(user.meet());

// 7. .toString() and Arrays

// let obj ={
//   name:"Rohit",
//   amount:420,
//   greet:function(){
//     return 10;
//   }
// }
// console.log(obj.toString())  // Output: [object Object] (default string representation).


// Arrays are Objects:Arrays in JavaScript are objects with special properties like indices.

let arr =[2,3,1,8];
arr.push(10);
console.log(arr);
