const express = require("express")
const app = express()
const port = 3000

const words = ["hamachi", "net", "fignea polnaia", "awoo", "dimon", "zima", "dimon gandon"]

app.get("/api/dimonapi", (req, res) => {
    const randomWord = words[Math.floor(Math.random() * words.length)]
    res.json({ word: randomWord })
})

app.listen(port, () => {
    console.log("Started!")
})