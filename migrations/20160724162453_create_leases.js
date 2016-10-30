exports.up = function(knex, Promise) {
  return Promise.all([
    knex.schema.createTable('leases', function(table) {
      table.increments();
      table.integer('tenant_id').index().references('id').inTable('users').notNullable();
      table.integer('property_id').index().references('id').inTable('properties').notNullable();
      table.date('lease_sign_date').notNullable();
      table.integer('lease_payment');
      table.date('lease_payment_date').notNullable();
      table.date('lease_end_date').notNullable();
      table.integer('lease_length').notNullable();
      table.timestamps();
    })
  ]);
};

exports.down = function(knex, Promise) {
  return Promise.all([
    knex.schema.dropTable('leases')
  ]);
};
