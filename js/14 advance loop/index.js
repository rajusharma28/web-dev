//initial object

let obj = {
    name:"rohan",
    age:23,
    gender: "male",
    city: "mumbai"
};
// for(let key in obj)
//     console.log(key);

// Accessing Keys and Values
// for(let key in obj){
//     console.log(key,obj[key]);
// }


// The Object.keys() method returns an array of the own enumerable property names (keys) of the object.

// Object.keys(obj)
// console.log(Object.keys(obj))


// Creating a New Object With Object.create()

let obj2 = Object.create(obj);
obj2.money=430;
obj2.id="raju";

// Object.keys(obj2)
console.log(Object.keys(obj2))

//iterating over obj2 with for...in 

for (let key in obj2){
    console.log(key)
}

// The for...in loop iterates over both own properties and inherited properties.