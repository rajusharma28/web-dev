const grandParent = document.getElementById('grandParent');
const parent = document.getElementById('parent')
const child = Document.getElementById('child')


// event bubbling and evnet capturing

child.addEventListener('click',(Event)=>{
    console.log("child Clicked");+


    console.log(Event.target);
    
    
},false)

parent.addEventListener('click',(evnet) =>{
    console.log("parent Clicked");
    // console.log(event.target);
    // console.log(evnet.currentTarget);
    
    
    
},false)


grandParent.addEventListener('click',(event)=>{
    console.log("grandParent Clicked");
    console.log(event.currentTarget);
    
    
},false)


// addEventListener(first_event,cancelIdleCallback,capture);