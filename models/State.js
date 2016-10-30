var bookshelf = require('../config/bookshelf');

var State = bookshelf.Model.extend({
  tableName: 'states',
  city: function() {
    return this.hasMany(City);
  }
});

module.exports = State;
