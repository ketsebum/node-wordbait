exports.up = function(knex, Promise) {
  return Promise.all([
    knex.schema.table('users', function(table){
      table.integer('role_id').index().references('id').inTable('roles');
    })
  ]);
};

exports.down = function(knex, Promise) {
  return Promise.all([
    knex.schema.table('users', function(table){
      table.dropColumn('role_id');
    })
  ]);
};
