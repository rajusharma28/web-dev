let obj = {
    name:"Rohan",
    age:23,
    gender:"male",
    city:"vasai"
};

// for(let key in obj)
//     console.log(key);

// accessing values with keys
for(let key in obj){
    console.log(key,obj[key]);
}

//getting keys with object.keys()
console.log(Object.keys(obj))

// create a new object with object.create()
let obj2 = Object.create(obj);
obj2.money=420;
obj2.id="raju";

console.log(Object.keys(obj2));