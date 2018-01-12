const {
  sequelize,
  Sequelize,
  dbUtil
} = require('./dbContext')
const BillPromotion = sequelize.define('billPromotion', {
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
  "promotionId": {
    "type": Sequelize.INTEGER(10).UNSIGNED,
    "allowNull": true,
    "field": "promotion_id"
  },
  "discountType": {
    "type": Sequelize.STRING(20),
    "allowNull": true,
    "field": "discount_type"
  },
  "promotionType": {
    "type": Sequelize.STRING(15),
    "allowNull": true,
    "field": "promotion_type"
  },
  "discountNet": {
    "type": Sequelize.INTEGER(20,2),
    "allowNull": true,
    "defaultsTo": "0.00",
    "field": "discount_net"
  },
  "priority": {
    "type": Sequelize.INTEGER(3).UNSIGNED,
    "allowNull": true,
    "defaultsTo": "1",
    "field": "priority"
  },
  "usedStepJson": {
    "type": Sequelize.STRING(100),
    "allowNull": false,
    "field": "used_step_json"
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
  }
}, {
  "tableName": "bill_promotion",
  "freezeTableName": true,
  "underscored": true,
  "timestamps": true,
  "createAt": "create_time"
})
module.exports = BillPromotion