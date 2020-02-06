require("dotenv").config()
const express = require("express");
const http = require("http")
const socket = require("socket.io");
const actions = require("./socket.actions")

const app = express();
const server = http.Server(app)
const socketHandler = socket(server)

const position = {
  x:350,
  y:350  
}
const movement = Number(process.env.MOVEMENT_SIZE)
socketHandler.on("connection",(currentSocket)=>{
    console.log(currentSocket.id);
    console.log("new connection opened")
    currentSocket.emit(actions.position, position)
    currentSocket.on(actions.move,(direc)=>{

        switch(direc){
            case "left":{
                position.x = position.x - movement
                socketHandler.emit(actions.position,position)
                break;
            }
            case "right":{
                position.x = position.x + movement
                socketHandler.emit(actions.position,position)
                break;
            }
            case "up":{
                position.y = position.y - movement
                socketHandler.emit(actions.position,position)
                break;
            }
            case "down":{
                position.y = position.y + movement
                socketHandler.emit(actions.position,position)
                break;
            }
        }
    })
})

app.use("/",(req,res,next)=>{
    console.log("middleware...")
    next()
})

app.get("/start",(req,res,next)=>{
    console.log("game start...")
    res.send("game start...")
})


server.listen(process.env.PORT,()=>{
    console.log(`listening to ${process.env.PORT}`)
})
