// build your `Resource` model here
const db = require('../../data/dbConfig');

// get all resources
function getAllResources() {
    return db('resources')
}

// find by id
function getById(resource_id) {
    return db('resources')
    .where({resource_id})
    .first()
}

// create a new resource and return obj data
function create(resource) {
    return db('resources')
    .insert(resource)
    .then(data => {
        return getById(data[0])
    })
}

module.exports = {
    getAllResources,
    getById,
    create
}
