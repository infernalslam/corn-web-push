const {
  sequelize,
  Sequelize
} = require('./dbContext')
const BillOfferType = sequelize.define('billOfferType', {
  'type': {
    'type': Sequelize.STRING(45),
    'allowNull': false,
    'field': 'type'
  }
}, {
  'tableName': 'bill_offer_type',
  'freezeTableName': true,
  'underscored': true,
  'timestamps': false,
  'classMethods': {}
})

module.exports = BillOfferType
