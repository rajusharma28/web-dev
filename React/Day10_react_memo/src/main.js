import React, { useCallback, useEffect, useMemo, useState } from "react";
import ReactDOM from "react-dom/client";


//  function Fibbonnaci(n){
//         if(n<=1)
//             return n;
//         return Fibbonnaci(n-1)+Fibbonnaci(n-2);  
//     }
 

function App(){
    const [count,setCount] = useState(0);
    const [number ,setNumber]=useState("");
    // const[result,setResult]= useState(null);

    // timecomplixity o(n)2

    // expensive calculation

   const Fibbonnaci= useCallback((n)=>{
        if(n<=1)
            return n;
        return Fibbonnaci(n-1)+Fibbonnaci(n-2);  
    },[]);

    // const result = Fibbonnaci(number);
    const result = useMemo(()=>Fibbonnaci(number),[number]);
    // useEffect(()=>{
    //     setResult (Fibbonnaci(number));
    // },[number])

    return(
        <>
        <h1> Counter is:{count}</h1>
        <button onClick={()=>setCount(count+1)}>Increment</button>
         <button onClick={()=>setCount(count-1)}>   Decrement</button>

         <div>
            <h2> Fibbonnaci Number is :{result}</h2>
            <input type="number" value={number} onChange={(e)=>setNumber(e.target.value)}></input>
         </div>
        </>
        
    )

}
ReactDOM.createRoot(document.getElementById('root')).render(<App/>)