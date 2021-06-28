// build your `Task` model here
const db = require('../../data/dbConfig')

// find all tasks
function getAllTasks() {
    return db('tasks')
}
// find individual task
function findById(task_id) {
    return db('tasks').where({task_id}).first()
}
// create new task
function create(task) {
    return db('tasks').insert(task)
    .then(task => {
        return findById(task[0])
    })
}

module.exports = {
getAllTasks,
findById,
create
}
