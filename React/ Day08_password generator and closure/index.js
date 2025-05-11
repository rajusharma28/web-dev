import React, { useEffect, useState } from "react";
import ReactDOM from "react-dom/client";

function PasswordGenerator() {
    const [password, setPassword] = useState("");
    const [length, setLength] = useState(10);
    const [numberChanger, setNumberChanged] = useState(false);
    const [charChange, setCharChanged] = useState(false);

    function generatePassword() {
        let str = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ";
        if (numberChanger)
            str += "0123456789";
        if (charChange)
            str += "+-)(*&^$#@!~{}";

        let pass = "";
        for (let i = 0; i < length; i++) {
            const randomIndex = Math.floor(Math.random() * str.length);
            pass += str[randomIndex];
        }
        setPassword(pass);
    }

    useEffect(() => {
        generatePassword();
    }, [length, numberChanger, charChange]);

    return (
        <>
            <h2>{password}</h2>
            <div className="second">
                <input
                    type="range"
                    min={5}
                    max={50}
                    value={length}
                    onChange={(e) => setLength(parseInt(e.target.value))} 
                />
                <label>Length ({length})</label>

                <input 
                    type="checkbox" 
                    checked={numberChanger} 
                    onChange={() => setNumberChanged(!numberChanger)} 
                />
                <label>Numbers</label>
                
                <input 
                    type="checkbox" 
                    checked={charChange} 
                    onChange={() => setCharChanged(!charChange)} 
                />
                <label>Special Characters</label>
            </div>
        </>
    );
}

ReactDOM.createRoot(document.getElementById("root")).render(<PasswordGenerator />);