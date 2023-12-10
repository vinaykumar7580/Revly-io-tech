const express = require('express');
const http = require('http');
const socketIO = require('socket.io');
const cors = require('cors');
const { connection } = require('./db');
const { userRouter } = require('./Routes/user.routes');

const app = express();
const server = http.createServer(app);
const io = socketIO(server);

app.use(cors());
app.use(express.json());

const users={}

io.on("connection", (socket) => {
    //user connected to app
    socket.on("new-user-joined", (name)=>{
        users[socket.id]=name;
        console.log(users)
        socket.broadcast.emit("user-joined", name)
    })

    // user send messages
    socket.on("send", (message)=>{
        socket.broadcast.emit("receive", {message:message, name: users[socket.id]})

    })

    //for disconnecting users
    socket.on("disconnect", (message)=>{
        socket.broadcast.emit("leave", users[socket.id]);
        delete users[socket.id]
    })

})

app.use("/auth", userRouter)

server.listen(8080, async() => {
    try{
        await connection
        console.log("Database connected")

    }catch(err){
        console.log(err)
        console.log("Database not connected")
    }
    console.log(`Server is running on port 8080`);
});