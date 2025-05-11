import React, { useEffect, useState } from "react";
import ReactDOM from "react-dom/client";
import Header  from "./component/Header";
import Body from "./component/Body";

function GithubProfile(){
    //header 
    //body

   return (
    <>
    <Header></Header>
    <Body></Body>
    </>
   )

}



ReactDOM.createRoot(document.getElementById("root")).render(<GithubProfile/>);