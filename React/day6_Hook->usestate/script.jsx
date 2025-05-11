import React, { useState } from "react";
import ReactDOM from "react-dom/client";

function Counter(){
    // let count =0;
    let [count,setCount]=useState(0);  
    function Incrementnumber(){
        count =count+1;
        setCount(count);
        // console.log("count value is:",count);
        // document.querySelector('h1').innerText=`Count is ${count}`;
        
    }
    function Decrementnumber(){
        count = count-1;
        setCount(count);
        // console.log("count value is:",count);
        // document.querySelector('h1').innerText=`Count is ${count}`;
    }
    return (
        <div className="first">
        <h1>Count is:{count}</h1>
        <button onClick={Incrementnumber}>Increment{count}</button>
        <button onClick={Decrementnumber}>Decrement{count}</button>
        </div>
    )
}


ReactDOM.createRoot(document.getElementById('root')).render(<Counter/>)



