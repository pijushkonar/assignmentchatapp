const path = require('path')
const http = require('http')
const express = require('express')
const socketio = require('socket.io')

const app = express()

// Server Created to pass with Socket.IO, because if 
// express creates it by default we don't have access to it
const server = http.createServer(app)
const io = socketio(server)

const port = process.env.PORT || 3000
const publicDirectoryPath = path.join(__dirname, '../public')

app.use(express.static(publicDirectoryPath))

io.on('connection', (socket) => {
    console.log('New Client Connected')

    socket.emit('message', 'Welcome!')
})

server.listen(port, () => {
    console.log(`Server is up on port ${port}`)
})