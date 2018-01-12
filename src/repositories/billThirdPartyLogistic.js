const {
  sequelize,
  Sequelize,
  dbUtil
} = require('./dbContext')
const BillThirdPartyLogistic = sequelize.define('billThirdPartyLogistic', {
  "billId": {
    "type": Sequelize.STRING(16),
    "allowNull": true,
    "field": "bill_id"
  },
  "logisticType": {
    "type": Sequelize.STRING(20),
    "allowNull": true,
    "field": "logistic_type"
  },
  "credential": {
    "type": Sequelize.STRING(225),
    "allowNull": true,
    "field": "credential"
  },
  "logisticRefCode": {
    "type": Sequelize.STRING(20),
    "allowNull": false,
    "field": "logistic_ref_code"
  },
  "createBy": {
    "type": Sequelize.INTEGER(10).UNSIGNED,
    "allowNull": true,
    "field": "create_by"
  },
  "createTime": {
    "type": Sequelize.DATE,
    "allowNull": true,
    "defaultsTo": "CURRENT_TIMESTAMP",
    "field": "create_time"
  },
  "updateBy": {
    "type": Sequelize.INTEGER(10).UNSIGNED,
    "allowNull": true,
    "field": "update_by"
  },
  "updateTime": {
    "type": Sequelize.DATE,
    "allowNull": true,
    "defaultsTo": "0000-00-00 00:00:00",
    "field": "update_time"
  }
}, {
  "tableName": "bill_third_party_logistic",
  "freezeTableName": true,
  "underscored": true,
  "timestamps": true,
  "createAt": "create_time",
  "updateAt": "update_time",
  "classMethods": {}
})
module.exports = BillThirdPartyLogistic