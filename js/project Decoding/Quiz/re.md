<!-- Data store -->
1:store the question
2:option ko store karan :4 option
3;Answer

obj1={
    question:"1. Who has the most centuries international cricket?";
    options:["sachin tendulkar","virat kohali","Ricky              pointing","jacqueKallies" ]
    answer:"Sachin Tendulkar"
}


obj2 ={}...obj20

const questionBack =[obj1,obj2,obj3.....obj20];





 <!-- <div class="question">
                <p>1. Who has the most centuries in international cricket?</p>
                <label>
                    <input type="radio" name="q1" value="Sachin Tendulkar"> Sachin Tendulkar
                </label><br>
                <label>
                    <input type="radio" name="q1" value="Virat Kohli"> Virat Kohli
                </label><br>
                <label>
                    <input type="radio" name="q1" value="Ricky Ponting"> Ricky Ponting
                </label><br>
                <label>
                    <input type="radio" name="q1" value="Jacques Kallis"> Jacques Kallis
                </label><br>
            </div>
            
            </div> -->
         






         <!-- most optimize -->
         sort fuunction 




         <!-- ======================================/ -->


function RandomQuestion(){
    // const index = Math.floor(Math.random()*20);
    // const answer =[];
    const data = new set(); // unique element and unique object

    while(data.size!=5){
        const index = Math.floor(Math.random()*20);
        data.add(questionBank[index]);
        
    }

    //coverted set into Array
    return [...data];


}



// select the from and insert all the element into it 

const problem = RandomQuestion();

const original_answer ={};

//key value

// obj =>  { question: "Who has the most centuries in international cricket?", options: ["Sachin Tendulkar", "Virat Kohli", "Ricky Ponting", "Jacques Kallis"], answer: "Sachin Tendulkar" },
problem.forEach((obj,index)=>{
    const form = document.querySelector('form');
const div_element =document.createElement('div');
div_element.className ='question';

 original_answer [`q${index+1}`]= obj['answer'];



const para =document.createElement('p');
// para.textContent = obj['question'];

para.textContent = `${index+1}. ${obj['question']}`;


div_element.appendChild(para);



// creaete a for option

obj ['options'].forEach((value)=>{

    const label = document.createElement('label');
    const input = document.createElement('input');

    input.type ="radio";
    input.name =`q${index+1}`;
    input.value = data;

    label.appendChild(input);
    label.appendChild(document.createTextNode(data));
    div_element.appendChild(label);

    div_element.appendChild(document.createElement('br'));


})

form.appendChild(div_element);

})


const button  = document.createElement('button');
button.type='submit';
button.className ="submit-btn";
button.textContent ="Submit";

form.appendChild(button);

// check a submit
 
 form.addEventListener('submit',(event)=>{
     
    event.preventDefault();
    const data = new FormData(form);

 
    let result = 0
 
    for(let [key,value] of data.entries())
    {
     if(value===original_answer[key])
         result++;
    }
 
    const out = document.getElementById('out');
    out.innerText = `${result} out of 5 is correct`;
 
 
    form.reset();
 
 })

// sortking 