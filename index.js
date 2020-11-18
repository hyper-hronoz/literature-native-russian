const express = require('express')
const path = require('path')
const app = express()

const PORT = process.env.PORT || 80

app.use(express.static('public'))

app.get('/', (req, res) => {
    res.sendFile(__dirname + "/public/index.html")
})

app.listen(PORT, () => {
    console.log("Server was starting")
})