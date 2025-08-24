const express = require('express');
const app = express();
const port = 3000;
const {Server}= require('socket.io')
const http = require('http')
const server= http.createServer(app)
// Initializing a new Socket.IO Server instance (io) on top of this HTTP server to handle WebSocket connections.
const io = new Server(server)

app.get('/', (req, res) => {
    res.sendFile(__dirname + '/index.html');
});

io.on('connection', (socket) => {
    socket.on('send name', (username) => {
        io.emit('send name', (username));
    });

    socket.on('send message', (chat) => {
        io.emit('send message', (chat));
    });
});
server.listen(port, () => {
    console.log(`Server is listening at the port: ${port}`);
});