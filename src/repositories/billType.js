const {
  sequelize,
  Sequelize
} = require('./dbContext')
const BillType = sequelize.define('billType', {
  'type': {
    'type': Sequelize.STRING(20),
    'allowNull': false,
    'field': 'type'
  }
}, {
  'tableName': 'bill_type',
  'freezeTableName': true,
  'underscored': true,
  'timestamps': false,
  'classMethods': {}
})

module.exports = BillType
