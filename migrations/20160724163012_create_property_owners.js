exports.up = function(knex, Promise) {
  return Promise.all([
    knex.schema.createTable('property_owners', function(table) {
      table.increments();
      table.integer('owner_id').index().references('id').inTable('users').notNullable();
      table.integer('property_id').index().references('id').inTable('properties').notNullable();
      table.timestamps();
    })
  ]);
};

exports.down = function(knex, Promise) {
  return Promise.all([
    knex.schema.dropTable('property_owners')
  ]);
};
