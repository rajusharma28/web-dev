const form = document.querySelector('form');

// form.addEventListener('input',(event)=>{
//     console.log(event.target.value);
    
// })



// input ke ander fill karne ke badh jab bhar click karege to wah event click hoga to show hoga
// form.addEventListener('change',(event)=>{
//     console.log(event.target.value);
    
//  })


//focusin -> jab kise value par focus karat hu tab jake wah show hota hai -> event click hoga 
// form.addEventListener('focusin',(event)=>{
//     console.log(event.target.value);
    
//  })


// focusout ->when a focus in out side than event trigger -> input value print
//  form.addEventListener('focusout',(event)=>{
//     console.log(event.target.value);
    
//  })


 //db click
//  form.addEventListener('dblclick',(event)=>{
//     console.log("double click");
    
//  })

// submit 
// form.addEventListener('submit',(event)=>{
//     // console.log(event.target.value);

//     console.log("submitted form");
    
    
//  })



// reset

// form.addEventListener('reset',(event)=>{
//     // console.log(event.target.value);

//     console.log("reset");
    
    
//  })


// ========================================================================================

// form.addEventListener('submit',(event)=>{

//     event.preventDefault();

//     const first = document.getElementById('first');
//     console.log(first.value);

//     const second = document.getElementById('second');
//     console.log(second.value);

//     const third = document.getElementById('third');
//     console.log(third.value);

//     const result = document.getElementById('result');
//     result.innerHTML =`${first.value} ${second.value} is a good boy`;
//     document.body.append(result);
    
    
   
// })


form.addEventListener('click',(event        )=>{
    event.preventDefault();
    const data = new FormData(form);

    for(let [key,value] of data.entries())
        console.log(key,value);
        
})





