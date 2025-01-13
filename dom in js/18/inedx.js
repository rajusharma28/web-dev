// non strict function
// function greet(){
//     console.log(this);
    
// }
//  greet();


 // strict mode

//  "use strict"
//  function greetStrict(){
//     console.log(this);
    
//  }
//  greetStrict();


//  inside a method (object context)
// const obj = {
//     name:"raju",
//     age:20,
//     meet: function(){
//         console.log(this.name);
        
//     }
// }
obj.meet();

// arrow function and this
// let obj1={
//     name:"raj",
//     age:22,
//     greet:() => {
//         console.log(this);
        

//     }
// }
// obj.greet();

let obj = {
    name:"raju",
    age:11,
    greet: function(){
        let ab = () =>{
            console.log(this);
            
        };
        ab();
    }
};
obj.greet();