const {
  sequelize,
  Sequelize
} = require('./dbContext')
const BillDebtBalance = sequelize.define('billDebtBalance', {
  'billId': {
    'type': Sequelize.STRING(16),
    'allowNull': false,
    'field': 'bill_id'
  },
  'payOrder': {
    'type': Sequelize.INTEGER(4),
    'allowNull': false,
    'field': 'pay_order'
  },
  'debtBalance': {
    'type': Sequelize.INTEGER(13,2),
    'allowNull': false,
    'field': 'debt_balance'
  },
  'payAmount': {
    'type': Sequelize.INTEGER(13,2),
    'allowNull': false,
    'field': 'pay_amount'
  },
  'paidDate': {
    'type': Sequelize.DATE,
    'allowNull': true,
    'field': 'paid_date'
  },
  'deadlineDate': {
    'type': Sequelize.DATE,
    'allowNull': true,
    'field': 'deadline_date'
  }
}, {
  'tableName': 'bill_debt_balance',
  'freezeTableName': true,
  'underscored': true,
  'timestamps': false,
  'classMethods': {}
})

module.exports = BillDebtBalance
