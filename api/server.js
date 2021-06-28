// build your server here and require it from index.js
const express = require('express');
const server = express()
// routers
server.use(express.json())

server.get('/', (req, res) => {
    res.json({message: "Welcome to the home API, it's running!"})
})

module.exports = server;
