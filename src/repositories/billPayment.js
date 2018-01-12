const {
  sequelize,
  Sequelize,
  dbUtil
} = require('./dbContext')
const BillPayment = sequelize.define('billPayment', {
  "id": {
    "type": Sequelize.INTEGER(20).UNSIGNED,
    "allowNull": true,
    "field": "id"
  },
  "billId": {
    "type": Sequelize.STRING(16),
    "allowNull": true,
    "field": "bill_id"
  },
  "billDebtPayOrder": {
    "type": Sequelize.INTEGER(4),
    "allowNull": true,
    "field": "bill_debt_pay_order"
  },
  "date": {
    "type": Sequelize.DATE,
    "allowNull": true,
    "defaultsTo": "CURRENT_TIMESTAMP",
    "field": "date"
  },
  "amount": {
    "type": Sequelize.INTEGER(15,2),
    "allowNull": true,
    "defaultsTo": "0.00",
    "field": "amount"
  },
  "createTime": {
    "type": Sequelize.DATE,
    "allowNull": true,
    "defaultsTo": "CURRENT_TIMESTAMP",
    "field": "create_time"
  },
  "storePaymentChannelId": {
    "type": Sequelize.INTEGER(10).UNSIGNED,
    "allowNull": true,
    "field": "store_payment_channel_id"
  },
  "attachedSlip": {
    "type": Sequelize.TEXT,
    "allowNull": false,
    "field": "attached_slip"
  },
  "additionalPaymentStatus": {
    "type": Sequelize.STRING(255),
    "allowNull": false,
    "field": "additional_payment_status"
  },
  "cachePaymentChannelName": {
    "type": Sequelize.STRING(255),
    "allowNull": true,
    "field": "cache_payment_channel_name"
  },
  "cachePaymentChannelId": {
    "type": Sequelize.STRING(255),
    "allowNull": false,
    "field": "cache_payment_channel_id"
  },
  "cachePaymentChannelLogo": {
    "type": Sequelize.TEXT,
    "allowNull": true,
    "field": "cache_payment_channel_logo"
  },
  "cachePaymentChannelType": {
    "type": Sequelize.STRING(10),
    "allowNull": true,
    "field": "cache_payment_channel_type"
  },
  "cacheStorePaymentChannelCredential": {
    "type": Sequelize.STRING(255),
    "allowNull": true,
    "field": "cache_store_payment_channel_credential"
  }
}, {
  "tableName": "bill_payment",
  "freezeTableName": true,
  "underscored": true,
  "timestamps": true,
  "createAt": "create_time"
})
module.exports = BillPayment