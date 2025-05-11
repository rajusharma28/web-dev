import React, { useEffect, useState } from "react";
import { createRoot } from "react-dom/client";
import Colorful from './component/Colorful';

function Main() {
  const [count ,setCount] = useState(0);

  return(
    <>
    <div className="counter">
      <h1>Counter is :{count }</h1>
      <button onClick={()=>{setCount(count+1)}} style={{backgroundColor:"blue"}}>Increment</button>
    </div>
    <Colorful name={count}></Colorful>
    
    
    </>
  )
}


const container = document.getElementById('root');
const root = createRoot(container);
root.render(<Main />);


