exports.up = function(knex, Promise) {
  return Promise.all([
    knex.schema.createTable('roles', function(table) {
      table.increments();
      table.string('role_name').notNullable();
    })
  ]);
};

exports.down = function(knex, Promise) {
  return Promise.all([
    knex.schema.dropTable('roles')
  ]);
};
