const {
  sequelize,
  Sequelize
} = require('./dbContext')
const BillSeller = sequelize.define('billSeller', {
  'id': {
    'type': Sequelize.INTEGER(20).UNSIGNED,
    'allowNull': false,
    'field': 'id'
  },
  'billId': {
    'type': Sequelize.STRING(16),
    'allowNull': false,
    'field': 'bill_id'
  },
  'sellerRefcode': {
    'type': Sequelize.STRING(100),
    'allowNull': false,
    'field': 'seller_refcode'
  },
  'sellerType': {
    'type': Sequelize.STRING(15),
    'allowNull': false,
    'field': 'seller_type'
  }
}, {
  'tableName': 'bill_seller',
  'freezeTableName': true,
  'underscored': true,
  'timestamps': false,
  'classMethods': {}
})
module.exports = BillSeller