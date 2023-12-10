const express = require('express');
const http = require('http');
const socketIO = require('socket.io');
const cors = require('cors');
const { connection } = require('./db');
const { userRouter } = require('./Routes/user.routes');

const app = express();
const server = http.createServer(app);


const io = socketIO(server, {
    cors: {
      origin: ['http://localhost:3000', 'http://localhost:3000/'],
      methods: ['GET', 'POST'],
      credentials: true,
    },
});

app.use(cors());
app.use(express.json());

const users=[]

io.on("connection", (socket) => {

    //user connected to app
    socket.on("new-user-joined", (newUserId) => {

        if (newUserId != null) {
            let res=users.some((user) => user.userId === newUserId)
            if (!res) {
               users.push({ userId: newUserId, socketId: socket.id });
              console.log("New User Connected", users);
            }
          }
       
        // send all active users to new user
        io.emit("get-users", users);

    });

    socket.on("send-notification", (subject)=>{

        io.emit("recieve-notification", subject);
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