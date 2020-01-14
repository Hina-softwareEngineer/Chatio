var express=require("express");
var socket=require("socket.io");
var app=express();

app.use(express.static("public"));

var server=app.listen(8000, "127.0.0.1",function() {
    console.log("server started");
});

var io=socket(server);
io.on("connection",function(socket){
    socket.on("chat",function(data){
        io.sockets.emit("chat",data);
    });
    socket.on("typing",function(data){
        socket.broadcast.emit("typing",data);
    });
});