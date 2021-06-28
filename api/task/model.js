// build your `Task` model here
const db = require('../../data/dbConfig')

// find all tasks
function getAllTasks() {
    return db('tasks as tk')
    .leftJoin('projects as p', 'p.project_id', 'tk.project_id')
    .select('tk.task_id', 'tk.task_description', 'tk.task_notes', 'tk.task_completed', 'p.project_id', 'p.project_description')
}
// find individual task
function findById(task_id) {
    return db('tasks').where('task_id', task_id).first()
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
