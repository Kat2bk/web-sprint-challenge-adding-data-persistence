// build your `Project` model here
const db = require('../../data/dbConfig');

//get all projects
function getAllProjects() {
    return db('projects')
}

// get by Id
function getProjectById(project_id) {
    return db('projects').where({project_id}).first()
}

// post projects
function create(project) {
    return db('projects').insert(project)
        .then(project => {
            return getProjectById(project[0])
        })
}

module.exports = {
    getAllProjects,
    getProjectById,
    create
}