// build your `Resource` model here
const db = require('../../data/dbConfig');

// get all resources
function getAllResources() {
    return db('resources as res')
    .leftJoin('projects as p', 'res.resource_id', 'p.project_id')
    .select('res.resource_id', 'res.resource_name','res.resource_description', 'p.project_name')
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
