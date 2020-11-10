require("dotenv").config();
const http = require("http");
const express = require("express");
const app = express();

app.get("/",(req,res)=>{
    res.send("hello");
})
const server = require('http').createServer(app);
const io = require('socket.io')(server);
io.on('connection', client => {
    console.log("Client Connected");
    client.on('event', data => { /* … */ });
    client.on('disconnect', () => { /* … */ });
  });
server.listen(process.env.PORT||3000,()=>{
    console.log("App running on port : " + (process.env.PORT||3000))
});
