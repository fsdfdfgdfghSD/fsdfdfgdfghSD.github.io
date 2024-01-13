// TODO: Add subdomain "/dimonapi"

const app = require("express")()
const PORT = 6969

const words = ["dimon", "net", "hamachi", "fignea polnaia", "awoo"]

app.get("fsdfdfgdfghSD.github.io", (request, response) => {
    response.status(200).send({
        word: words[Math.floor(Math.random() * words.length)]
    })
})

app.listen(PORT, () => {
    console.log(`Server started on: http://localhost${PORT}`)
})