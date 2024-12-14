// const arr=[2,35,1,8,"raju",true,8];
// console.log(arr[4]);
// console.log(arr.at(-1));
// //at is latest, negative index le leta hai

// console.log(arr.length);

//lenght
// helpful

// const newarr = structuredClone(arr);
// console.log(newarr==arr); 
 // The output of console.log(newarr == arr); will be false because newarr and arr are two separate objects in memory.


//push add element at end 

// let fruits=["Apple","Banana","cherry"];

// let fruits=new Array("Apple","Banana","Cherry")   //Array Constructor:

// console.log(fruits[0]);
// console.log(fruits[1]);

//update the elment
// fruits[1]="Blueberry";
// console.log(fruits)

//adding /removing element

//push:add element in the end 
// fruits.push("dragonfuit");
// console.log(fruits);

//pop:remove the last element
// fruits.pop();
// console.log(fruits);

//unshift: add element to the beginning 
// fruits.unshift("mango");
// console.log(fruits);

//shift :remove the first element
// fruits.shift();
// console.log(fruits);

// useful method 
// length:get the number of Element
// console.log(fruits.length);


//indexof :find the index of an element 
// console.log(fruits.indexOf("Apple"))

//splice :add/remove element

// fruits.splice(1,1);
// console.log(fruits);

//add 2 element at index 1

// fruits.splice(1,0,"Blueberry","orange");
// console.log(fruits)

//slice :shallow copy of part an array


// let fruits=["Apple","Banana","cherry"];
// let newfruits =fruits.slice(1,3);
// console.log(newfruits);

//concat:merge two arrays

// let vegetables =["Carrot ","potato"];
// let food =fruits.concat(vegetables);
// console.log(food);


//sorting and reversing

// sort :sort Element aplh 
// fruits.sort();
// console.log(fruits);

//reverse :order of element

// fruits.reverse();
// console.log(fruits);


//checking  condition
//include:check if an element exist

// console.log(fruits.includes("black"))  //true and false 

//filter :create a new array based on a condition
// let longNames=fruits.filter(fruit=> fruit.length)
// console.log(longNames)


// 2d Array
let arr =[1,2,3,4,5,6,7,8,9];
let arr2d=[[1,2,3,[23,432,123[331,123,123]]],[4,5,6],[7,8,9]];
//flat ka use to convert into 1d array
let newarr = arr2d.flat(3)
console.log(newarr)

let abc=[2,1,4,1];
console.log(Array.isArray(abc));

let ac =new Array(10);
console.log(ac.length)
