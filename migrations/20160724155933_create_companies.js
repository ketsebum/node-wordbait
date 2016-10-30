exports.up = function(knex, Promise) {
  return Promise.all([
    knex.schema.createTable('company', function(table) {
      table.increments();
      table.string('company_name').notNullable();
      table.string('address').notNullable();
      table.integer('city_id').index().references('id').inTable('cities').notNullable();
      table.timestamps();
    })
  ]);
};

exports.down = function(knex, Promise) {
  return Promise.all([
    knex.schema.dropTable('company')
  ]);
};
