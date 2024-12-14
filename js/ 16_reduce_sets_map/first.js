let obj ={
    name:"raju",
    age:20,
    orange:1,
};

let curr = "apple";   // Dynamic property key

if(obj.hasOwnProperty(curr)){
    obj[curr]++;

}else{
    obj[curr]=1;
}
console.log(obj);