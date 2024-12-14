// Functions:Functions allow you to encapsulate reusable blocks of code

// function greet(){
//     console.log("Hello Coder Army");
//     console.log("Mein badiy hu");
//     console.log("Aur kya chal raha hai");
    

// }
// let  a = greet();


// 2. Parameters and Arguments

// function sum(number1,number2){
//     console.log(number1+number2);
    
// }
// sum(3,4);
// sum(5,7);

// 3. Return Statement

// function multiply(number1,number2){
//     return number1*number2;
// }
// let result =  multiply(2,3);
// console.log(result)


// 4. Anonymous Functions:Anonymous functions are functions without names, often stored in variables.

// const fun = function(){
//     console.log("Hello Coder Army");
//     console.log("Mein toh badiy hu");
//     return "money";
    
// } 
// console.log(fun());


// 5.Arrow Functions:Arrow functions provide a shorter syntax for writing functions 

// const sum = (number1,number2) => number1 + number2;
// console.log(sum(3,4));

// 6. Spread Operator (...):The spread operator unpacks elements of an array or object into individual components.
// let arr = [2,3,4,5];
// let arr2 = [...arr];
// console.log(arr2);

// 7. Rest Operator (...) :The rest operator collects all arguments into a single array.

// const sum = function(...numbers){
//     console.log(numbers);
    
// }
// sum(2,3,4);


// 8. Object Destructuring:Destructuring extracts specific properties from an object into

let obj = {name:"Raju",age:23,amount:420};
const {name,amount} = obj;
console.log(name,amount);

// 9. Pass by Value vs. Pass by Reference 
// Primitive types are passed by value (independent copies), while objects and arrays are passed by reference (shared memory).

// function fun( {name,amount}){
//     console.log(name,amount);
// }
// fun(obj);


// 10. Prototypal Inheritance :JavaScript uses prototypal inheritance to allow one object to inherit properties from another.

let obj1 = {a:1,b:2};
let obj2 = {c:1,d:2}

obj2 = Object.create(obj1);
console.log(obj2.a)