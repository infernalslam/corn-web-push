const {
  sequelize,
  Sequelize
} = require('./dbContext')
const BillStateHistory = sequelize.define('billStateHistory', {
  'billId': {
    'type': Sequelize.STRING(16),
    'allowNull': false,
    'field': 'bill_id'
  },
  'billState': {
    'type': Sequelize.STRING(45),
    'allowNull': false,
    'field': 'bill_state'
  },
  'date': {
    'type': Sequelize.DATE,
    'allowNull': false,
    'defaultsTo': 'CURRENT_TIMESTAMP',
    'field': 'date'
  },
  'createBySellsukiId': {
    'type': Sequelize.INTEGER(10).UNSIGNED,
    'allowNull': false,
    'defaultsTo': '1',
    'field': 'create_by_sellsuki_id'
  },
  'id': {
    'type': Sequelize.INTEGER(20).UNSIGNED,
    'allowNull': false,
    'field': 'id'
  }
}, {
  'tableName': 'bill_state_history',
  'freezeTableName': true,
  'underscored': true,
  'timestamps': false,
  'classMethods': {}
})

module.exports = BillStateHistory
