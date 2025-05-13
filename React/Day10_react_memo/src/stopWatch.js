// import React, { useCallback, useEffect, useMemo, useRef, useState } from "react";
// import ReactDOM from "react-dom/client";



// function StopWatch(){

//     const [time,setTimer] =useState(0);
//     const [start,setstart] = useState(0);
//     const intervalRef = useRef(null);
//     const [isRunning,setisRunning]=useState(false);

//     function start(){
//         if(!isRunning){
//       intervalRef.current= setInterval(()=>{
//             setTimer(prevTime=>prevTime+1);

//         },1000)
//         // clearInterval(abc); // stop 
//         setisRunning(true);

//     }
//     }
//     function stop(){
//         if(isRunning){

        
//         clearInterval(intervalRef.current);
//         intervalRef.current=null;
//         setisRunning(false);

//     }
// }
//     function reset(){
//         clearInterval(intervalRef.current);
//         intervalRef.current=null;
//         setTimer(0);

//     }

//     return(
//         <>
//         <h1>StopWatch is :{time}</h1>
//         <button onClick={start}>Start</button>
//         <br></br>
//         <br></br>
        

//         <button onClick={stop} >Stop</button>
//          <br></br>
//         <br></br>
//          <button onClick={reset} >Reset</button>
//           <br></br>
//         <br></br>
//         </>
//     )


// }
// ReactDOM.createRoot(document.getElementById('root')).render(<StopWatch></StopWatch>




import React, { useEffect, useRef, useState } from "react";
import ReactDOM from "react-dom/client";

function StopWatch() {
  const [time, setTime] = useState(0);
  const intervalRef = useRef(null);
  const [isRunning, setIsRunning] = useState(false);

  // Cleanup interval on component unmount
  useEffect(() => {
    return () => {
      if (intervalRef.current) clearInterval(intervalRef.current);
    };
  }, []);

  const startTimer = () => {
    if (!isRunning) {
      intervalRef.current = setInterval(() => {
        setTime(prevTime => prevTime + 1);
      }, 1000);
      setIsRunning(true);
    }
  };

  const stopTimer = () => {
    if (isRunning) {
      clearInterval(intervalRef.current);
      intervalRef.current = null;
      setIsRunning(false);
    }
  };

  const resetTimer = () => {
    clearInterval(intervalRef.current);
    intervalRef.current = null;
    setTime(0);
    setIsRunning(false);
  };

  return (
    <>
      <h1>StopWatch: {time}s</h1>
      <button onClick={startTimer} disabled={isRunning}>
        Start
      </button>
      <br /><br />
      <button onClick={stopTimer} disabled={!isRunning}>
        Stop
      </button>
      <br /><br />
      <button onClick={resetTimer}>
        Reset
      </button>
    </>
  );
}

ReactDOM.createRoot(document.getElementById('root')).render(<StopWatch />);