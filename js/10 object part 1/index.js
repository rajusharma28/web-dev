// how to create Object

// First Method
const obj = {
    0:20,
    1:50,
    2:70,
    name:"raju",
    account_balance:420,
    gender:"Male",
    age:30,
    "account number":213133,
    undefined:30,
   null:"mohan"
}
// console.log(obj["account number"])
// console.log(obj["account_balance"])
// console.log(obj.name);
// console.log(obj[1])
// // console.log(obj[30]);
// console.log(obj)

 
// Second Method: Using new Object()

// const person = new Object(); //Initializes an empty object using new Object().
// person.name="raju";
// person.age="24";
// person.gender="Male";

// console.log(person)
// console.log(person.name,person.age);


// Third Method: Using Classes
// class people{
//     constructor (na,ag,gen){
//         this.name=na;
//         this.age=ag;
//         this.gender=gen;
//     }

// }
// let per1 = new people("raju",20,"male")   // Create instances using the new keyword (e.g., new People()).
// let per2 =new people("Mohit",30,"male")

// console.log(obj["account number"])
// console.log(per1,per2)


// Add, Update, or Delete Properties
// person.name="raju";
// delete person.gender;
// console.log(person)


// 3. Object Utility Methods
// Object.values(obj)

// const arr = Object.values(obj);
// // console.log(arr)

//  const arr2 = Object.entries(obj)
//  console.log(arr2)



//  Utility methods:

// Object.values() for values.
// Object.entries() for key-value pairs.
// Object.assign() or spread operator for combining objects.


// assign use case 
const obj1 ={a:1,b:2};
const obj2 ={c:3,d:4};
const obj4 ={e:5,f:6};

const obj3 = Object.assign({},obj1,obj2,obj4);
// console.log(obj3);

const obj5 = {...obj1,...obj2,...obj4};
console.log(obj5);