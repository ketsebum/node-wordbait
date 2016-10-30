exports.up = function(knex, Promise) {
  return Promise.all([
    knex.schema.createTable('states', function(table) {
      table.increments();
      table.string('state_name').notNullable();
    })
  ]);
};

exports.down = function(knex, Promise) {
  return Promise.all([
    knex.schema.dropTable('states')
  ]);
};
