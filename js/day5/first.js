
// primitive data type

// const num=10;
// console.log(num);

// non primitive datatype
// const obj={
//     id:20,
//     money:30
// };

// obj=obj2;
// error

// string in js

// let str1="Hello Coder army ";
// let str2='Mein toh mast hu ';
// let st3=`Aur bhaiya kya haal chaal `;

// let price =80;

// console.log(`price of the fresh tomato is ${price },get is asap `);
// console.log( "price of the fresh tomato is",price,"get it asp");
// console.log(str1 , str2 ,st3);


// string concatentaion
// let s1="hello";
// let s2="Coder Army";
// let s3=s1+s2;
// console.log(s3.length);

//  "hello coder army"
// console.log('"hello coder army"')

// 'hello coder army'
// console.log("'hello coder army'")

//Rohit bhaiya bhut bade badmash hai. \nWo bhut gande insaan hai.

// let message="Rohit bhaiya bhut bade badmash hai. \nWo bhut gande insaan hai ";
// console.log(message);

//escape character \

// let commment ="Rohit BHaiya Bhut bade badmash hai.\\nWo bhut gande insaan hai"
// console.log(commment)


// let special="Rohit"
// console.log(special[4])

// console.log(special.charAt(3))

//to lowercase
//to uppercase


// console.log(special.toLowerCase());
// console.log(special.toUpperCase())


// let hero = " Hello Coder Army Coder ";

//start index show
// console.log(hero.indexOf("Coder"));

//last index denoted of C
// console.log(hero.lastIndexOf("Coder"));

// console.log(hero.indexOf("coder")); // -1 is not available word in sentence


// includes in  show the true and false

// console.log ( hero.includes("Ceoder"));


let newstring="HeloDon"
console.log(newstring.slice(1,3))

// slice can take negative index also

console.log(newstring.slice(-6,5));
console.log(newstring.substring(0,3));


//replacethe elemnet
let str10="Hello ji kaise ho ji";
console.log(str10.replace("ji","Money"));

let str11="Money! honey! sunny! funny!"
console.log(str11.split("!"));



//new way to create string

let lastteststring = new String("Hello Coder Army ");
console.log(lastteststring);
// o/p
// [String: 'Hello Coder Army ']

console.log(typeof lastteststring) // type of object