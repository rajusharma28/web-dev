import { useContext } from "react";
import GlobalContext from "./Global";

export default function Third() {
  const { count, setCount } = useContext(GlobalContext);

  return (
    <>
      <h2>I am printing {count}</h2>
      <button onClick={() => setCount(count + 5)}>Increment</button>
    </>
  );
}
