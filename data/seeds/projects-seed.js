
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('projects').truncate()
    .then(function () {
      // Inserts seed entries
      return knex('projects').insert([
        {project_id: 1, project_name: 'testing1', project_description: 'testing1', project_completed: true},
        {project_id: 2, project_name: 'testing2', project_description: 'testing2', project_completed: ''},
        {project_id: 3, project_name: 'testing3', project_description: 'testing3', project_completed: true}
      ]);
    });
};

