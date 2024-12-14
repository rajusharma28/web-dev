// Set is a collection of unique values in JavaScript.
// Duplicate values are automatically removed when added to a Set.


let set1 = new Set([10,20,30,40,50]);
let set2 = new Set([10,20,70,40]);


// union of two sets

let set3 = new Set([...set1,...set2]);
console.log(set3);


//intersection of two sets

const result = new Set([...set1].filter((num)=> set2.has(num)));
console.log(result);


//iteraing over a set

//using for...of loop
for(let value of set1){
    console.log(value);
    
}

// using forEach()

set1.forEach ((value) =>console.log(value));
