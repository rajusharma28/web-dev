// let user = {
//     name:"rohit",
//     age:30
// };

// Object.defineProperty(user,'name',{
//     writable:false // This makes the 'name' property read-only
// });
// user.name="raju";
// console.log(Object.getOwnPropertyDescriptor(user,"name")) 





// 2  .for...of is used to iterate over iterable objects like arrays or strings but not plain objects.

// const arr = [10,20,11,18,13];
// for(let value of arr){
//     console.log(value);
// }

// let str ="Rohit is a Good Boy";
// for(let value of str){
//     console.log(value)
// }

const obj = {name:"raju",age:22,gender:"female"};
for(let key of Object.keys(obj)){
    console.log(key,obj[key]);
}



// forEach is a method for arrays. It loops through each element and lets you apply a function to it.

// let arr=[10,20,30,40,50];

// arr.forEach(function(num){
//     console.log(num)

// });

// // Modify array elements inside `forEach`

// arr.forEach((num,index,array)=>{
//     array[index]=num*2;
// })
// console.log(arr);

// note :forEach doesn't return a new array. It just processes elements.

// filter is used to create a new array containing elements that meet a specific condition.

// let arr = [10,20,30,40,50];
// const result =arr.filter(num => num%2==0);
// console.log(result);


// Example: Filtering objects

// const students=[
//     {name:"raju",age:24,marks:40},
//     {name:"Mohan", age:23,marks:48},
//     {name:"Rohan",age:21,marks:67},
//     {name:"Darshan",age:34,marks:97},
//     {name:"Mohit",age:25,marks:77},
//     {name:"sadik",age:34,marks:35}
// ];

// const passedStudents = students.filter(student => student.marks > 50);
// console.log(passedStudents);


// map is used to transform an array. It creates a new array with the results of applying a function to each element.
// const arr =[1,2,3,4,5];
// const result = arr.map((num,index)=> num*index);
// console.log(result);


// chaining with fillter

// const arr =[1,2,3,4,5,6];
// const result = arr
//      .filter(num => num%2==0)
//      .map(num => num*num)
//      .map(num =>num/2);

//      console.log(result)



    //  reduce is used to accumulate values in an array into a single result.

    // const arr=[1,2,3,4,5];
    // const sum = arr.reduce((accumulator,current) =>{
    //     return accumulator + current;
    // } ,0);

    // console.log(sum)


    const arr =[10,5,20,8,30];
    const max =arr.reduce((accumulator,current)=>{
        return current > accumulator ? current:accumulator;
    } , -Infinity);

    console.log(max)