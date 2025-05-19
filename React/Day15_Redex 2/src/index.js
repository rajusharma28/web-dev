import React from "react";
import ReactDOM from "react-dom/client";
import { Provider } from "react-redux";
import store from "./Stores";
import Counting from "./Counting";
import CustomCounter from "./CoustomCounter";

function App() {

  return (
    <Provider store={store}>

      <Counting />
      <br></br>
            <br></br>
                  <br></br>
       <CustomCounter></CustomCounter>
    </Provider>
  );
}

ReactDOM.createRoot(document.getElementById("root")).render(<App />);
