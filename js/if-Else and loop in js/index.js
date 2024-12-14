
// 1. If-Else Statement:The if-else construct is used to execute one block of code if a condition is true and another block if the condition is false.

// let age = 88;
// if(age >= 18){
//     console.log("Eligible for vote");
// }
// else {
//     console.log("Not Eligible for vote");
    
// }

// . If-Else If-Else Ladder :This is useful when you have multiple conditions to check.


// let age = 49;
// if(age < 18){
//     console.log("KID");
    
// }
// else if(age > 45) {
//     console.log("OLD");
    
// }else{
//     console.log("YOUNG");
    
// }



// 3. Switch Statement:The switch statement is an alternative to multiple if-else conditions, especially when comparing a single variable with multiple values.

// let day =5;

// switch(day){
//     case 0:
//         console.log("SUNDAY");
//         break;
//      case 1:
//         console.log("MONDAY");
//         break;
//     case 2:
//         console.log("TUNDAY");
//         break;
//     case 3:
//         console.log("WEDNESDAY");
//         break;
//     case 4:
//         console.log("THUSDAY");
//         break;
//     case 5:
//         console.log("FRIDAY");
//         break;
//     case 6:
//         console.log("SUNDAY");
//         break;

//      default:
//         console.log("Invaild Day");
               
       
// }

// 4. For Loop:Used to repeat a block of code a specific number of times.

// for(let i=0;i<20;i++){
//     console.log("Hello Coder Army");
    
// }

// sum of first 10 Number

// let sum = 0;
// for(let i=0;i<=10;i++){
//     sum+=i;
// }
// console.log(sum);


// 6. Nested Loops:Used for patterns or operations involving multiple levels.

// for(let j=0;j<6;j++)
// {
//     for(let i=1;i<=5;i++){
//         console.log(i);
        
//     }
// }

//  7. While Loop :Runs a block of code as long as a condition is true.

// let i=1;
// while(i<6){
//     console.log(i);
//     i++;
    
// }


// 8. Do-While Loop:Executes the code block at least once before checking the condition.

// let i=1;

// do{
//     console.log("Current value of i is:",i);
//     i++;
       
// }while(i <=5);


// 9. For Loop with Arrays

// let arr =[10,20,30,40,50];
// for(let i=0; i<arr.length;i++){
//     console.log(arr[i]);
    
// }

// 10. For-In Loop with Objects

const obj ={
    name:"Rohit",
    age:30,
    amount:420,
    city:"mumbai",
};

const keys = Object.keys(obj);
for(let i=0;i<keys.length;i++){
    console.log(obj[keys[i]]);
    
}


