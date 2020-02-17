require("dotenv").config()
const express = require("express");
const http = require("http")
const socket = require("socket.io");
const actions = require("./socket.actions")
const { Player } = require("./models/player")
const { Game } = require("./controllers/game")
const initDbConnection = require("./db/db")
const app = express();
const server = http.Server(app)
const socketHandler = socket(server)
const UsersModel = require("./modelsMongoos/User")
initDbConnection();

// const position = {
//   x:350,
//   y:350  
// }

setTimeout(() => {
    const user = new UsersModel({ name: "gal", email: "ee@e.com", password: 1234 })
    user.save()
}, 3000);

const newGame = new Game();


const movement = Number(process.env.MOVEMENT_SIZE)
socketHandler.on("connection", (currentSocket) => {

    console.log(currentSocket.id);
    console.log("new connection opened")
    newGame.addPlayer(new Player(currentSocket.id))
    socketHandler.emit(actions.position, newGame.players)


    currentSocket.on("disconnect", () => {
        newGame.removePlayer(currentSocket.id)
        socketHandler.emit(actions.position, newGame.players)
    })

    currentSocket.on(actions.move, ({ playerId, direction }) => {
        const { players } = newGame;
        const currentPlayer = newGame.getPlayer(playerId);
        if (!currentPlayer) return;
        const { position } = currentPlayer;
        switch (direction) {
            case "left": {
                position.x = position.x - movement
                socketHandler.emit(actions.position, players)
                break;
            }
            case "right": {
                position.x = position.x + movement
                socketHandler.emit(actions.position, players)
                break;
            }
            case "up": {
                position.y = position.y - movement
                socketHandler.emit(actions.position, players)
                break;
            }
            case "down": {
                position.y = position.y + movement
                socketHandler.emit(actions.position, players)
                break;
            }
        }
    })
})



app.use("/", (req, res, next) => {
    console.log("middleware...")
    next()
})

app.get("/start", (req, res, next) => {
    console.log("game start...")
    res.send("game start...")
})


server.listen(process.env.PORT, () => {
    console.log(`listening to ${process.env.PORT}`)
})
