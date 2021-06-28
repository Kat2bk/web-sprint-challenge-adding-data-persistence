exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('resources').truncate()
    .then(function () {
      // Inserts seed entries
      return knex('resources').insert([
        {resource_id: 1, resource_name: 'Canvas', resource_description: "testing testing"},
        {resource_id: 2, resource_name: 'Lambda', resource_description: "testing testing"},
        {resource_id: 3, resource_name: 'Slack', resource_description: "testing testing"}
      ]);
    });
};
