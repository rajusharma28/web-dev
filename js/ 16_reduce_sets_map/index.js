// const arr=["orange","apple","banana","orange","apple","banana","grapes"];

// // arr.reduce(callback, initialValue)
// const result = arr.reduce((acc,curr) => {
//     acc.hasOwnProperty(curr) ? acc[curr]++ : acc[curr]=1;
//      return acc;
    
   
// },{}); // empty object {}

// console.log(result);

// arr.reduce(callback, initialValue):

// callback: A function that is executed on each element of the array.
// initialValue: The starting value for the accumulator (acc), which is an empty object {} in this case.
// acc (Accumulator):

// This object is used to store the counts of each unique string.
// curr (Current Value):

// This is the current element being processed from the array.
// Inside the Callback:

// acc.hasOwnProperty(curr):
// Checks if the current string (curr) already exists as a key in the accumulator object (acc).
// If the key exists:
// Increment its value by 1: acc[curr]++.
// If the key does not exist:
// Add the key to the accumulator and set its value to 1: acc[curr] = 1.
// Return the Accumulator:

// The updated acc object is returned after processing each element. This ensures the object is carried forward for the next iteration.
// Final Result:

// // After processing all elements, the reduce() method returns the accumulator object containing the counts of all unique strings.


const arr=["apple","banana","apple","pianapple","grapes","apple","banana"];
 const result = arr.reduce((acc,curr)=>{
    if(acc.hasOwnProperty(curr)){

        acc[curr]++;


    }
    else{
        acc[curr]=1;
    }
    return acc;

},{})
console.log(result)



