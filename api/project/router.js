// build your `/api/projects` router here
const express = require('express');
const Projects = require('./model');
const router = express.Router()

// getAll
router.get('/', (req, res, next) => {
    Projects.getAllProjects()
    .then(projects => {
        res.json(projects)
    })
    .catch(error => {
        next(error)
    })
})

//getById
router.get('/:id', (req, res, next) => {
    Projects.getProjectById(req.params.id)
    .then(project => {
        if (project) {
            res.json(project)
        } else {
            res.status(404).json({message: "Unable to find project"})
        }
    })
    .catch(error => {
        next(error)
    })
})


// newProject
router.post('/', (req, res, next) => {
    const {name} = req.body;

    Projects.create(req.body)
    .then(project => {
        if (!name) {
            res.status(400).json({message: "please provide a name for project"})
        } else {
            res.status(201).json(project)
        }
    })
    .catch(error => {
        next(error)
    })
})


module.exports = router;