import React, { useEffect, useState } from "react";
import ReactDOM from "react-dom/client";

function PasswordGenerator() {
    const [password, setPassword] = useState(" ");
    const [length, setLength] = useState(10);
    const [numberChanger,setnumberChanged]=useState(false);
    const[charchange,setcharChanged]=useState(false);

    function genreatePassword(){
        let str="abcdefghijklmnopqrstvwxyzABCDEFGHIJKLMNOPQRSTVWXYZ";
        if(numberChanger)
            str+="0123456789"
        if(charchange)
            str+="+-)(*&^$#@!~{}";

        let pass= "";
        for(let i=0;i<length;i++){
            pass=str[Math.floor(Math.random()*str.length)]
        }
        setPassword(pass);
        
    }
    // genreatePassword();
    useEffect(()=>{
        genreatePassword();
    },[length,numberChanger,charchange])

    return (
        <>
            <h2> {password}</h2>
            <div className="second">
                <input
                    type="range"
                    min={5}
                    max={50}
                    value={length}
                    onChange={(e)=>setLength(e.target.value)}

                />
                <label>Length ({length})</label>

                <input type="checkbox" defaultChecked={numberChanger} onChange={()=>setnumberChanged(!numberChanger)}/>
                <label>Number</label>
                <input type="checkbox" defaultChecked={charchange}  onChange={()=>setcharChanged(!charchange)} />
                <label>Characters</label>
            </div>
        </>
    );
}

ReactDOM.createRoot(document.getElementById("root")).render(<PasswordGenerator />);
