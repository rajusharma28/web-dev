import { useState } from "react";
import { CustomIncreaser } from "./Slicer1";
import { useDispatch } from "react-redux";

export default function CustomCounter() {
  const [number, setNumber] = useState(""); // local state for input store in state 
  const dispatch = useDispatch();

  function handleClick() {
    dispatch(CustomIncreaser(Number(number)));
    setNumber("");
  }

  return (
    <>
      <input 
        type="number" 
        value={number} 
        onChange={(e) => setNumber(e.target.value)} 
      />
      <button onClick={handleClick}>Submit</button>
    </>
  );
}
