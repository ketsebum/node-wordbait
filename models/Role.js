var bookshelf = require('../config/bookshelf');

var Role = bookshelf.Model.extend({
  tableName: 'roles',
  user: function() {
    return this.hasMany(User);
  }
});

module.exports = Role;
