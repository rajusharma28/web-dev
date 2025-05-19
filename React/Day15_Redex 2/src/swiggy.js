import React from "react";
import ReactDOM from "react-dom/client";
import {provider} from "react-redux";
import Header from "./Header";
import Body from "./Body";
import Card from "./Card";
import {Provider }from "react-redux"
import stores from "./Stores";




function App() {

  return (
    <Provider store={stores}>
   
      <Header></Header>
      <Card></Card>

      </Provider>
  
  );
}

ReactDOM.createRoot(document.getElementById("root")).render(<App />);
