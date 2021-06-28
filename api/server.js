// build your server here and require it from index.js
const express = require('express');
const server = express()
const projectsRouter = require('./project/router');
const resourceRouter = require('./resource/router');
const tasksRouter = require('./task/router');
// routers
server.use(express.json())


server.use('/api/tasks', tasksRouter)
server.use('/api/resources', resourceRouter)
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
