const express = require("express");
const app = express();
const dotenv = require("dotenv");
const notes = require("./data/demoData")

dotenv.config();
const PORT = process.env.PORT || 5500;
app.get('/', (req, res) => {
    res.send("API is running...")
})

app.get("/api/notes", (req, res) => {
    res.json(notes)
})

app.get("/api/notes/:id", (req, res) => {
    const note = notes.find((n) => n.id === req.params.id);
    // console.log(req.params)
    res.send(note);
})

app.listen(PORT, () => {
    console.log("server is running at port 5500")
})