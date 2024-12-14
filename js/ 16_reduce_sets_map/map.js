const map1 = new Map ([[4,"raju"],["mohan","rohan"],[30,6],[62,67] ]);

// for(let [key,value] of map1){
//     console.log(key,value);
    
// }


// Checking for a Key

console.log(map1.has(30));


// Size of the Map
console.log(map1.size);


// Clearing the Map

map1.clear();
console.log(map1);


// Accessing Map Elements
// This does not work with a Map. You must use the get method
// console.log(map1["mohan"]);

console.log(map1.get("30"));

