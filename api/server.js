// build your server here and require it from index.js
const express = require('express');
const server = express()
const projectsRouter = require('./project/router');
// routers
server.use(express.json())

server.use('/api/projects', projectsRouter)

server.get('/', (req, res) => {
    res.json({message: "Welcome to the home API, it's running!"})
})

server.use((err, req, res, next) => {
    res.status(err.status || 500).json({
        error: {},
        message: err.message,
        customMessage: "Something went wrong, try again"
    })
})

module.exports = server;
