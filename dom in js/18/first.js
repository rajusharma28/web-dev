
// inside a function

// function greet(){
//     console.log(this);
    
// }
// greet();

// "use strict";
// function greet(){
//     console.log(this);
    
// }
// greet();


// inside a method(object context)

// const obj = {
//     name:"raju",
//     age:23,
//     meet:function(){
//         console.log(this.name);
        

//     }
// }
// obj.meet();


// . Inside an Arrow Function
// Arrow functions do not have their own this. They inherit this from their surrounding (lexical) scope.


// let obj = {
//     name:"raju",
//     age:22,
//     greet:() => {
//         console.log(this);
        
//     }
// };
// obj.greet();


// Example 2 (Nested Arrow Function):
let obj = {
    name:"rako",
    age:26,
    greet:function(){
        let ab = () =>{
            console.log(this);
            
        };
        ab();
    }

}; 

obj.greet();


//  Inside a Constructor or Class

class person{
    constructor(name,age){
        this.name = name;
        this.age = age;
    }
}

let a = new person("raju",39);
console.log(a);


// Standalone Arrow Function
// If an arrow function is called in the global context, this still refers to the surrounding context.

// let greet = () =>{
//     console.log(this);
    
// }
// greet();


"use strict";

let meet = function() {
    console.log(this);
};

meet(); // Logs `undefined`.
