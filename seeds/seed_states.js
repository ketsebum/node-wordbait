
exports.seed = function(knex, Promise) {
  return Promise.join(
    // Deletes ALL existing entries
    knex('states').del(),

    // Inserts seed entries
    knex('states').insert({state_name: 'Alabama'}),
    knex('states').insert({state_name: 'Alaska'}),
    knex('states').insert({state_name: 'Arizona'}),
    knex('states').insert({state_name: 'Arkansas'}),
    knex('states').insert({state_name: 'California'}),
    knex('states').insert({state_name: 'Colorado'}),
    knex('states').insert({state_name: 'Connecticut'}),
    knex('states').insert({state_name: 'Delaware'}),
    knex('states').insert({state_name: 'Florida'}),
    knex('states').insert({state_name: 'Georgia'}),
    knex('states').insert({state_name: 'Hawaii'}),
    knex('states').insert({state_name: 'Idaho'}),
    knex('states').insert({state_name: 'Illinois'}),
    knex('states').insert({state_name: 'Indiana'}),
    knex('states').insert({state_name: 'Iowa'}),
    knex('states').insert({state_name: 'Kansas'}),
    knex('states').insert({state_name: 'Kentucky'}),
    knex('states').insert({state_name: 'Louisana'}),
    knex('states').insert({state_name: 'Maine'}),
    knex('states').insert({state_name: 'Maryland'}),
    knex('states').insert({state_name: 'Massachusetts'}),
    knex('states').insert({state_name: 'Michigan'}),
    knex('states').insert({state_name: 'Minnesota'}),
    knex('states').insert({state_name: 'Mississippi'}),
    knex('states').insert({state_name: 'Missouri'}),
    knex('states').insert({state_name: 'Montana'}),
    knex('states').insert({state_name: 'Nebraska'}),
    knex('states').insert({state_name: 'Nevada'}),
    knex('states').insert({state_name: 'New Hampshire'}),
    knex('states').insert({state_name: 'New Jersey'}),
    knex('states').insert({state_name: 'New Mexico'}),
    knex('states').insert({state_name: 'New York'}),
    knex('states').insert({state_name: 'North Carolina'}),
    knex('states').insert({state_name: 'North Dakota'}),
    knex('states').insert({state_name: 'Ohio'}),
    knex('states').insert({state_name: 'Oklahoma'}),
    knex('states').insert({state_name: 'Oregon'}),
    knex('states').insert({state_name: 'Pennsylvania'}),
    knex('states').insert({state_name: 'Rhode Island'}),
    knex('states').insert({state_name: 'South Carolina'}),
    knex('states').insert({state_name: 'South Dakota'}),
    knex('states').insert({state_name: 'Tennessee'}),
    knex('states').insert({state_name: 'Texas'}),
    knex('states').insert({state_name: 'Utah'}),
    knex('states').insert({state_name: 'Vermont'}),
    knex('states').insert({state_name: 'Virginia'}),
    knex('states').insert({state_name: 'Washington'}),
    knex('states').insert({state_name: 'West Virginia'}),
    knex('states').insert({state_name: 'Wisconsin'}),
    knex('states').insert({state_name: 'Wyoming'})
  );
};
