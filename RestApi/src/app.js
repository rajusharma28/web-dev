const express = require("express");
require("./db/conn");
const MensRanking = require("./models/menns.js");

const app = express();
const port = process.env.PORT || 3000;

// Middleware to parse JSON
app.use(express.json());

app.post("/mens", async (req, res) => {
  try {
    const addMensRecords = new MensRanking(req.body);
    console.log(req.body);
    

   const insertMens = await addMensRecords.save();
   res.send(insertMens);
    res.status(201).send("Record added successfully");
  } catch (e) {

    res.status(400).send(e.message);
  }
});

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
