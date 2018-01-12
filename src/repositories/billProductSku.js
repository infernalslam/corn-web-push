const {
  sequelize,
  Sequelize,
  dbUtil
} = require('./dbContext')
const BillProductSku = sequelize.define('billProductSku', {
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
    "defaultsTo": "0.00",
    "field": "cache_unit_price"
  },
  "createTime": {
    "type": Sequelize.DATE,
    "allowNull": true,
    "defaultsTo": "CURRENT_TIMESTAMP",
    "field": "create_time"
  },
  "cacheProductName": {
    "type": Sequelize.TEXT,
    "allowNull": true,
    "field": "cache_product_name"
  },
  "cacheConcatOptions": {
    "type": Sequelize.TEXT,
    "allowNull": false,
    "field": "cache_concat_options"
  },
  "warehouseName": {
    "type": Sequelize.STRING(10),
    "allowNull": true,
    "defaultsTo": "sellsuki",
    "field": "warehouse_name"
  }
}, {
  "tableName": "bill_product_sku",
  "freezeTableName": true,
  "underscored": true,
  "timestamps": true,
  "createAt": "create_time"
})
module.exports = BillProductSku