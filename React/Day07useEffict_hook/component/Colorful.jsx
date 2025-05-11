import React, { useEffect, useState } from "react";
import { createRoot } from "react-dom/client";




function colorful(){


    const [Color,setColor] = useState("black");
    
      // console.log("render");
      
     // useEffect(callback function,dependancy)

     document.body.style.backgroundColor = Color;
    
    //  useEffect(()=>{
    //   console.log("useEffect Executed");
    //   document.body.style.backgroundColor = Color;
    
      
    //  },[Color])
    
    
    
      // document.body.style.backgroundColor = Color;
    
    
      return (
        <>
          <h1>Background Color Changer</h1>
          <div className="but">
            <button style={{backgroundColor:"red"}} onClick={()=>setColor("red")} >Red</button>
            <button style={{backgroundColor:"blue"}} onClick={()=>setColor("Blue")}  >Blue</button>
            <button style={{backgroundColor:"orange"}}  onClick={()=>setColor("orange")}  > Orange</button>
            <button style={{backgroundColor:"Green"}}  onClick={()=>setColor("Green")} >Green</button>
            <button style={{backgroundColor:"pink"}}  onClick={()=>setColor("pink")}  >Pink</button>
          </div>
        </>
      );


}

module.exports=colorful;