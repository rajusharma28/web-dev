const oneDArray=[10,20,30,40,50];
console.log(oneDArray[0]);
console.log(oneDArray[3]);

const twoDArray=[
[1,2,3],
[4,5,6],
[7,8,9]

];
console.log(twoDArray[0][1] ); //2 (row 0,column 1)
console.log(twoDArray[2][2]);

//modify specify element
twoDArray[1][2]=88;
console.log(twoDArray);



// Basic Array Operations
const arr = [2, 35, 1, 8, 9, "rohit", true, 8];

// Accessing elements
console.log(arr[1]); // Access element at index 1
console.log(arr.at(-2)); // Access second-to-last element using .at()

// Array properties
console.log(arr.length); // Length of the array

// Structured clone
const newarr = structuredClone(arr);
console.log(newarr == arr); // false, as the arrays are different objects

// Push - Add elements at the end
arr.push(30);
arr.push(50);
console.log(arr);

// Pop - Remove elements from the end
arr.pop();
arr.pop();
arr.pop();
console.log(arr);

// Unshift - Add elements at the beginning
arr.unshift(10);
arr.unshift(30);
console.log(arr);

// Shift - Remove elements from the beginning
arr.shift();
console.log(arr);

// Delete an element
delete arr[0]; // Creates a "hole" in the array
console.log(arr);

// Searching in arrays
console.log(arr.indexOf(8)); // First occurrence of 8
console.log(arr.lastIndexOf(8)); // Last occurrence of 8
console.log(arr.includes(10)); // Check if 10 exists

// Slice - Create a subarray
console.log(arr);
let slicedArray = arr.slice(2, 5);
console.log(slicedArray); // Elements from index 2 to 4
console.log(arr); // Original array remains unchanged

// Splice - Modify the array
console.log(arr);
let splicedArray = arr.splice(2, 5); // Removes 5 elements starting from index 2
console.log(splicedArray);
console.log(arr);

// Adding elements using splice
arr.splice(2, 0, "money", 90); // Inserts "money" and 90 at index 2
console.log(arr);

// Convert array to string
console.log(arr.toString());
console.log(arr.join("*")); // Join elements with '*'

// Concatenating arrays
let arr1 = [2, 35];
let arr2 = [5, 12];
let arr4 = [23, 432, 1123, 31];
let arr3 = arr1.concat(arr2, arr4); // Concatenates arr1, arr2, and arr4
console.log(arr3[6]); // Accessing the 6th index element

arr1.push(arr4); // Adds arr4 as a single element
console.log(arr1[2][0]); // Accessing nested array element

// 2D Arrays and Flattening
let arr2d = [
  [1, 2, 3, [23, 432, 123, [331, 123, 123]]],
  [4, 5, 6],
  [7, 8, 9],
];
// Flatten 2D array into 1D array
let newarr = arr2d.flat(3); // Specify depth for nested arrays
console.log(newarr);

// Array checks and creation
let abc = [2, 1, 4, 1];
console.log(Array.isArray(abc)); // Check if variable is an array

// Creating an array with a fixed size
let ac = new Array(10); // Array with 10 empty slots
console.log(ac.length); // Prints 10


