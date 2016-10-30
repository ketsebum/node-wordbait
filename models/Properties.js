var bookshelf = require('../config/bookshelf');

var Property = bookshelf.Model.extend({
  tableName: 'property',
  owners: function() {
    return this.hasMany(User);
  }
});

module.exports = Property;
