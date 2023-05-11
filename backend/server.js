const express = require("express");
const app = express();
const dotenv = require("dotenv");
const notes = require("./data/demoData");
const geomap = require("./GeoMap.json");
const GeoMap = require("./geomap")

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

app.get("/api/geomap", async (req, res) => {
    try {
        await res.json(geomap);

    } catch (error) {
        res.send(error)
    }
    
})

app.get("/api/geomapData", async (req, res) => {
    try {
        await res.json(GeoMap);

    } catch (error) {
        res.send(error)
    }
    
})


app.listen(PORT, () => {
    console.log("server is running at port 5500")
})