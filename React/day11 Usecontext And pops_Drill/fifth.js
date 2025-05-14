import GlobalContext from "./Global";
import { useContext } from "react";

export default function Fifth() {
  const { count } = useContext(GlobalContext); // Destructure the count for display

  return (
    <>
      <p>Mein Hu Dom — Count is: {count}</p>
    </>
  );
}
