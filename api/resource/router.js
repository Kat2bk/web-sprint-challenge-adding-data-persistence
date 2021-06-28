// build your `/api/resources` router here
const express = require('express');
const Resources = require('./model');
const router = express.Router()

// get all resources
router.get('/', (req, res, next) => {
    Resources.getAllResources()
    .then(resources => {
        res.json(resources)
    })
    .catch(error => {
        next(error)
    })
})

// find resource by id
router.get('/:id', (req, res, next) => {
    Resources.getById(req.params.id)
    .then(resource => {
        if (resource) {
            res.json(resource)
        } else {
            res.status(404).json({message: "Unable to get that resource"})
        }
    })
    .catch(error => {
        next(error)
    })
})

// create resource
router.post('/', (req, res, next) => {
    Resources.create(req.body)
    .then(resource => {
        res.status(201).json(resource)
    })
    .catch(error => {
        next(error)
    })
})

module.exports = router;