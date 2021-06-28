// build your `Resource` model here
const db = require('../../data/dbConfig');


function getAllResources() {
    return db('resources')
}

function getById(resource_id) {
    return db('resources')
    .where({resource_id})
    .first()
}

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
