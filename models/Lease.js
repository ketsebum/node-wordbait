var bookshelf = require('../config/bookshelf');

var Lease = bookshelf.Model.extend({
  tableName: 'leases',
  tenant: function() {
    return this.belongsTo(User);
  },
  property: function() {
    return this.belongsTo(Property);
  }
});

module.exports = Lease;
