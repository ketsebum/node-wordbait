var bookshelf = require('../config/bookshelf');

var City = bookshelf.Model.extend({
  tableName: 'cities',
  users: function() {
    return this.hasMany(User);
  },
  state: function() {
    return this.belongsTo(State);
  },
  properties: function() {
    return this.hasMany(Property);
  },
  companies: function() {
    return this.hasMany(Company);
  }
});

module.exports = City;
