exports.up = function(knex, Promise) {
  return Promise.all([
    knex.schema.createTable('properties', function(table) {
      table.increments();
      table.string('address').notNullable();
      table.integer('city_id').index().references('id').inTable('cities').notNullable();
      table.integer('zip_code').notNullable();
      table.text('description').notNullable();
      table.specificType('images', 'bytea');
      table.boolean('available').notNullable().defaultTo(true);
      table.integer('price');
      table.timestamps();
    })
  ]);
};

exports.down = function(knex, Promise) {
  return Promise.all([
    knex.schema.dropTable('properties')
  ]);
};
