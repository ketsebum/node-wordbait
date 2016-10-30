var bookshelf = require('../config/bookshelf');

var Company = bookshelf.Model.extend({
  tableName: 'company',
  users: function() {
    return this.hasMany(User);
  },
  city: function() {
    return this.belongsTo(City);
  }
});

module.exports = Company;
