const express = require('express')
const bodyParser = require('body-parser')
const gameApp = require(__dirname + '/game.js')
const app = express()

//configuration
app.use(bodyParser.urlencoded({ extended: true }))
app.use(express.static('public'))


let playerPick = ""

module.exports = {
    'playerPick': playerPick
}

app.get('/', (req, res) => {
    res.sendFile(__dirname + '/game.html')
})

app.post('/', (req, res) => {

    playerPick = req.body.pick
    console.log(playerPick)

    const winner = gameApp.result()
    console.log(winner)
})







app.listen('3000', () => {
    console.log("Server started on port 3000")
})