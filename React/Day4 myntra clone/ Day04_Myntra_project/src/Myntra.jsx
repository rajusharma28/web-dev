import React, { useState } from "react";
import ReactDOM from "react-dom/client";

import Card from "./component/Card";
import Header from "./component/Header";
import Footer from "./component/Footer"
import arr from "./utils/dummy"
import { set } from "mongoose";

//header
//body
//footer





console.log(arr);


 
function App(){
    let [A,setA] = useState(arr);

    function sortArray(){
        arr.sort((a,b)=>a.price-b.price);
        setA([...A] );





    }

    function priceabove499(){
        const B= arr.filter((value)=>value.price>499);
        setA(B)
    }
    return (<> 
    <Header/>
    <button onClick={sortArray}>Sort by price </button>
    <button onClick={priceabove499}> price above 499</button>

        <div className="middle" style={{display:"flex", gap:"20px",flexWrap:"wrap", paddingTop:"30px"}}>
            {/* <Card cloth="T-shirt" offer="20-80%off"/>
            <Card cloth="jeans" offer="30-90%off"/>
            <Card cloth="pant" offer="40-80%off"/>
            <Card cloth="Kurta" offer="60-80%off"/>
            <Card cloth="pajama" offer="10-80%off"/>
           
            <Card cloth="joker" offer="28-80%off"/>
            
            <Card cloth="T-shirt" offer="20-70%off"/>
            <Card cloth="pant" offer="40-80%off"/>
            <Card cloth="Kurta" offer="60-80%off"/>
            <Card cloth="pajama" offer="10-80%off"/>
           
            <Card cloth="joker" offer="28-80%off"/>
            
            <Card cloth="T-shirt" offer="20-70%off"/>
            <Card cloth="T-shirt" offer="20-70%off"/>
            <Card cloth="pant" offer="40-80%off"/> */}
    {

    
      A.map((value,index)=> <Card  key={index} cloth={value.cloth} offer={value.offer} price={value.price} />)  //return the array

      
    }

        </div>

        <Footer/>

        </>
        
        
    )
    

}

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<App/>);













