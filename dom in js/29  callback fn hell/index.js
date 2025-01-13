// call back hell
function fetchuser1(){
    console.log("fetching the user Detail....");
    setTimeout(()=>{
        console.log("Data fetched succesfully");
        const name ="raju"
    },2000)
    greet(name);
}



function fetchuser2(){
    console.log("fetching the user Detail....");
    setTimeout(()=>{
        console.log("Data fetching succesfully");
        const name ="raju";
        meet(name);
        
    },2000)
    
 }

 function fetchuser(){
    console.log("fetching the user Detail....");
    setTimeout(()=>{
        console.log("Data fetching succesfully");
        const obj ={
            name:"raju",
            age:28,
            city:"Delhi",
        }
        greet(obj);
    },2000)    
 }


function fetching1(){
    console.log("fetching the user Detail.....");
    setTimeout(()=>{
        // printAge(obj);

    },2000)
    
 }

 
function greet(obj){
    console.log(`hello ${obj.name}`);
    
 }

 fetchuser();
 fetching1();
//  printAge();

function meet(obj){
    console.log(`Hello ${obj.name},I will meet you in Delhi`);
    
}

function edit(obj){
    console.log(`Edit ${obj.name},of the user`);
    
}

function edit(obj){
    (`Hello ${obj.name},of the user`);
}   


function printAge(obj){
    console.log(`User ${obj.age}`)
}

fetchuser(greet);
fetchuser(meet);
fetchuser(greet);
fetchuser(edit);

