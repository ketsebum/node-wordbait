exports.seed = function(knex, Promise) {
  return Promise.join(
    // Deletes ALL existing entries
    knex('roles').del(),

    // Inserts seed entries
    //["admin", "company", "owner", "tenant", "user"]
    knex('roles').insert({id: 1, role_name: 'admin'}),
    knex('roles').insert({id: 2, role_name: 'company'}),
    knex('roles').insert({id: 3, role_name: 'owner'}),
    knex('roles').insert({id: 4, role_name: 'tenant'}),
    knex('roles').insert({id: 5, role_name: 'user'})
  );
};
