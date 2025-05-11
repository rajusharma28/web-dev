
import React from "react";
import ReactDOM from "react-dom/client";

// element : 50 card pade hue hai

const obj={
    name:"Raju",
    age:"19",
    salary:"2000"
}


const newElement = <h1>Hello coder Army {obj}</h1>


const Reactroot = ReactDOM.createRoot(document.getElementById('root'));
// React root container: is


// multiple element ki liya 
Reactroot.render(newElement)