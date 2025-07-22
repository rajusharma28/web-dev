const { GoogleGenAI} = require("@google/genai");
const readlineSync = require('readline-sync');


const ai = new GoogleGenAI({ apiKey: "AIzaSyB2py7cnYZumJPdKhVogxh_7UiMxw87Jyo" });

async function main() {
  const response = await ai.models.generateContent({
    model: "gemini-2.0-flash",
    contents: "Explain how AI works in a few words",
  });
  console.log(response.text);
}

 main();



async function getWeather(location){
    const weatherapiInfo=[];
    for(const {city,data} of location){
        if(data.tolowerCase()=='today')
        {

        
       const response = await fetch(`http://api.weatherapi.com/v1/current.json?key=221e320ad90948be8cc32840252804&q=${city}`)
       const data=await response.json();
       weatherapiInfo.push(data);
        }
        else{
            const response = await fetch(`http://api.weatherapi.com/v1/current.json?key=221e320ad90948be8cc32840252804&q=${city} &dt ${data}`);
            const data=await response.json();
             weatherapiInfo.push(data);
        }
    }
    return weatherapiInfo;
}
getWeather();

const question = readlineSync.question("May I have your name");
console.log(question);
