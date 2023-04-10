const express = require('express')
const app = express()
const port = 3000;
const http = require('http')
const server = http.createServer(app)
const { Server } = require('socket.io')
const io = new Server(server)

app.get('/', function (req, res) {
    res.sendFile(__dirname + '/client/index.html')
})

io.on('connection', (socket) => {
    socket.on('on-chat', data => {
        io.emit('user-chat', data)
    })
})


server.listen(port, () =>
    console.log(`Example app listening at http://localhost:${port}`)
);