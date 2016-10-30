exports.up = function(knex, Promise) {
  return Promise.all([
    knex.schema.createTable('cities', function(table) {
      table.increments();
      table.string('city_name').notNullable();
      table.integer('state_id').index().references('id').inTable('states').notNullable();
    })
  ]);

};

exports.down = function(knex, Promise) {
  return Promise.all([
    knex.schema.dropTable('cities')
  ]);
};
