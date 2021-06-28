
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('project_resources').truncate()
    .then(function () {
      // Inserts seed entries
      return knex('project_resources').insert([
        {resource_needed: 1, resource_id: 2, project_id: 1},
        {resource_needed: 2, resource_id: 3, project_id: 2}
      ]);
    });
};
