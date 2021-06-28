
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('tasks').truncate()
    .then(function () {
      // Inserts seed entries
      return knex('tasks').insert([
        {task_id: 1, task_description: 'use TablePlus or Insomnia', task_notes: "test endpoints", task_completed: false, project_id: 3},
        {task_id: 2, task_description: 'set up modal', task_notes: "connect to database", task_completed: true, project_id: 1},
        {task_id: 3, task_description: 'codegrade submission', task_notes: "is it working?", task_completed: false, project_id: 2}
      ]);
    });
};
