const {
  sequelize,
  Sequelize
} = require('./dbContext')
const BillPayment = sequelize.define('billPayment', {
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
  'billDebtPayOrder': {
    'type': Sequelize.INTEGER(4),
    'allowNull': false,
    'field': 'bill_debt_pay_order'
  },
  'date': {
    'type': Sequelize.DATE,
    'allowNull': false,
    'defaultsTo': 'CURRENT_TIMESTAMP',
    'field': 'date'
  },
  'amount': {
    'type': Sequelize.INTEGER(15,2),
    'allowNull': false,
    'defaultsTo': '0.00',
    'field': 'amount'
  },
  'createTime': {
    'type': Sequelize.DATE,
    'allowNull': false,
    'defaultsTo': 'CURRENT_TIMESTAMP',
    'field': 'create_time'
  },
  'storePaymentChannelId': {
    'type': Sequelize.INTEGER(10).UNSIGNED,
    'allowNull': false,
    'field': 'store_payment_channel_id'
  },
  'attachedSlip': {
    'type': Sequelize.TEXT,
    'allowNull': true,
    'field': 'attached_slip'
  },
  'additionalPaymentStatus': {
    'type': Sequelize.STRING(255),
    'allowNull': true,
    'field': 'additional_payment_status'
  },
  'cachePaymentChannelName': {
    'type': Sequelize.STRING(255),
    'allowNull': false,
    'field': 'cache_payment_channel_name'
  },
  'cachePaymentChannelId': {
    'type': Sequelize.STRING(255),
    'allowNull': true,
    'field': 'cache_payment_channel_id'
  },
  'cachePaymentChannelLogo': {
    'type': Sequelize.TEXT,
    'allowNull': false,
    'field': 'cache_payment_channel_logo'
  },
  'cachePaymentChannelType': {
    'type': Sequelize.STRING(10),
    'allowNull': false,
    'field': 'cache_payment_channel_type'
  },
  'cacheStorePaymentChannelCredential': {
    'type': Sequelize.STRING(255),
    'allowNull': false,
    'field': 'cache_store_payment_channel_credential'
  }
}, {
  'tableName': 'bill_payment',
  'freezeTableName': true,
  'underscored': true,
  'timestamps': false,
  'createTime': 'create_time',
  'classMethods': {}
})

module.exports = BillPayment
