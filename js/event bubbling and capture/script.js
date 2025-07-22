// const red =document.getElementById('red');
// const blue =document.getElementById('blue');
// const green =document.getElementById('green');
// const yellow =document.getElementById('yellow');
// const orange =document.getElementById('orange');

// const body = document.body;
// // document.querySelector('body');

// red.addEventListener('click',()=>{
//     body.style.backgroundColor ='red';
// })


// blue.addEventListener('click',()=>{
//     body.style.backgroundColor ='blue';
// })

// green.addEventListener('click',()=>{
//     body.style.backgroundColor ='green';
// })

// yellow.addEventListener('click',()=>{
//     body.style.backgroundColor ='yellow';
// })

// orange.addEventListener('click',()=>{
//     body.style.backgroundColor ='orange';
// })


// ========================================================================

// const body = document.body;
// const buttons = document.querySelectorAll('button');
// console.log(buttons);

// buttons.forEach((button)=>{
//     // console.log(button);

//     button.addEventListener('click',()=>{
//         // console.log(button.id); // id access
//         body.style.backgroundColor =button.id;
        
//     })
    
// })


// ==========================================================================================


//event delegation -> delegate karan dena -> parent ko pata chalate hain

const root = document.getElementById('root');
root.addEventListener('click',(event)=>{

    // console.log(event.target.tagName);
    
    if(event.target.tagName === 'BUTTON'); // conditions
    document.body.style.backgroundColor =event.target.id;



    // console.log(event.target.id);
    
})





1