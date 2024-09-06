//Imports 
const express = require("express");
const socketio = require("socket.io");
const http = require("http");
const ejs = require("ejs");
const path = require("path");

//Important calls 
const app = express();
const httpServer = http.createServer(app);
const io = socketio(httpServer);

//Port
const PORT = 4000;

//Static serving
app.set('view engine',"ejs");
app.use(express.static(path.join(__dirname,"public")));

//Socket io connection 
io.on("connection",function(socket){
  socket.on("send-location",(data)=>{
     io.emit("receive-location",{id : socket.id,  ...data});
  })
})

//API calls
app.get("/", function(req,res){
    res.render("index");
})

//Server listen
httpServer.listen(PORT,()=>{
    console.log(`http://localhost:${PORT}`);
})