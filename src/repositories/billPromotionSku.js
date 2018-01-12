const {
  sequelize,
  Sequelize,
  dbUtil
} = require('./dbContext')
const BillPromotionSku = sequelize.define('billPromotionSku', {
  "id": {
    "type": Sequelize.INTEGER(20),
    "allowNull": true,
    "field": "id"
  },
  "billId": {
    "type": Sequelize.STRING(16),
    "allowNull": true,
    "field": "bill_id"
  },
  "billPromotionId": {
    "type": Sequelize.INTEGER(20).UNSIGNED,
    "allowNull": true,
    "field": "bill_promotion_id"
  },
  "productSkuId": {
    "type": Sequelize.INTEGER(20).UNSIGNED,
    "allowNull": true,
    "field": "product_sku_id"
  },
  "amount": {
    "type": Sequelize.INTEGER(8,2),
    "allowNull": true,
    "defaultsTo": "1.00",
    "field": "amount"
  },
  "cacheUnitPrice": {
    "type": Sequelize.INTEGER(11,2),
    "allowNull": true,
    "field": "cache_unit_price"
  },
  "discount": {
    "type": Sequelize.INTEGER(8,2),
    "allowNull": true,
    "field": "discount"
  },
  "discountType": {
    "type": Sequelize.STRING(20),
    "allowNull": true,
    "field": "discount_type"
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
  "tableName": "bill_promotion_sku",
  "freezeTableName": true,
  "underscored": true,
  "timestamps": true,
  "createAt": "create_time"
})
module.exports = BillPromotionSku