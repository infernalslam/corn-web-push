const {
  sequelize,
  Sequelize
} = require('./dbContext')
const BillState = sequelize.define('billState', {
  'stateName': {
    'type': Sequelize.STRING(45),
    'allowNull': false,
    'field': 'state_name'
  }
}, {
  'tableName': 'bill_state',
  'freezeTableName': true,
  'underscored': true,
  'timestamps': false,
  'classMethods': {}
})

module.exports = BillState
