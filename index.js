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

//Sets
app.set('view engine',"ejs");
console.log(path.join(__dirname,"public"));

app.set(express.static(path.join(__dirname,"public")));

//API calls
app.get("/", (req,res)=>{
    res.send("API called");
})

//Server listen
httpServer.listen(PORT,()=>{
    console.log(`http://localhost:${PORT}`);
})