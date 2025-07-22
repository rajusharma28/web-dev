const express = require('express');
const app=express();
const main=require('./AiChat')


//we will install our user chat histroy here
//key value pair
//key =id
//value=array
app.use(express.json());

const chatttingHistory={};


app.post('/chat', async (req, res) => {
    const {id, msg } = req.body; 
    if(!chatttingHistory[id]){
      chatttingHistory[id]=[]; //initilize the empty array
    }
   //extract the chat history
    const History = chatttingHistory[id];


    // History user. //Histroy+current message
    const prompmessage =[...History,{
      role:'user',
      parts:[{text:msg}]
    }]


    const answer = await main(prompmessage);

    // user question ko bhi insert karan hai
    //model ke resonse ko bhi insert karna h
    History.push({role:"user",parts:[{text:msg}]})
    History.push({role:"model",parts:[{text:answer}]});
    
    res.send({ reply: answer });
  });
  


app.listen(3000,()=>{
    console.log("listening on port 3000");
    
})
