// build your `/api/tasks` router here
const express = require('express');
const Tasks = require('./model');
const router = express.Router()

// get all tasks
router.get('/', (req, res, next) => {
    Tasks.getAllTasks()
    .then(tasks => {
        res.json(tasks)
    })
    .catch(error => {
        next(error)
    })
})

// get by id
router.get('/:id', (req, res, next) => {
    Tasks.findById(req.params.id)
    .then(task => {
        if (task) {
            res.json(task)
        } else {
            res.status(404).json({message: "Unable to find that task"})
        }
    })
    .catch(error => {
        next(error)
    })
})

// create
router.post('/', (req, res, next) => {
    Tasks.create(req.body)
    .then(newTask => {
        res.status(201).json(newTask)
    })
    .catch(error => {
        next(error)
    })
})


module.exports = router;
