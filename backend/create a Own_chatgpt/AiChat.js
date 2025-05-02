


const  { GoogleGenAI }= require('@google/genai');

const ai = new GoogleGenAI({ apiKey: "AIzaSyB2py7cnYZumJPdKhVogxh_7UiMxw87Jyo" });

async function main(msg) {
  const response = await ai.models.generateContent({
    model: "gemini-2.0-flash",
    contents:msg

  });
    return response.text;
}



module.exports = main;



// 1:20 start karan h
