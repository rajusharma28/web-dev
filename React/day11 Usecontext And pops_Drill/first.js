import React, { useState, useMemo, useCallback, useEffect } from "react";
import ReactDOM from "react-dom/client";
import GlobalContext from "./Global";
import Fifth from "./fifth";
import Second from "./second"; 

function App() {
  const [count, setCount] = useState(0);

  return (
    <GlobalContext.Provider value={{ count, setCount }}>
      <Fifth />
      <h1>Hello coder Army {count}</h1>
      <Second />
    </GlobalContext.Provider>
  );
}

ReactDOM.createRoot(document.getElementById("root")).render(<App />);
