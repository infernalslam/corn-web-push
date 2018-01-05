module.exports = function (sequelize, Sequelize) {
  const ProductSku = sequelize.define('productSku', {
    "id": {
      "type": "type",
      "allowNull": true,
      "field": "id"
    },
    "codeTemp": {
      "type": "type",
      "allowNull": true,
      "field": "code_temp"
    },
    "code": {
      "type": "type",
      "allowNull": true,
      "field": "code"
    },
    "price": {
      "type": "type",
      "allowNull": true,
      "defaultsTo": "0.00",
      "field": "price"
    },
    "status": {
      "type": "type",
      "allowNull": true,
      "defaultsTo": "1",
      "field": "status"
    },
    "createBySellsukiUserId": {
      "type": "type",
      "allowNull": true,
      "field": "create_by_sellsuki_user_id"
    },
    "updateBySellsukiUserId": {
      "type": "type",
      "allowNull": true,
      "field": "update_by_sellsuki_user_id"
    },
    "createTime": {
      "type": "type",
      "allowNull": true,
      "defaultsTo": "0000-00-00 00:00:00",
      "field": "create_time"
    },
    "updateTime": {
      "type": "type",
      "allowNull": true,
      "defaultsTo": "0000-00-00 00:00:00",
      "field": "update_time"
    },
    "productId": {
      "type": "type",
      "allowNull": true,
      "field": "product_id"
    },
    "option1": {
      "type": "type",
      "allowNull": false,
      "field": "option_1"
    },
    "option2": {
      "type": "type",
      "allowNull": false,
      "field": "option_2"
    },
    "option3": {
      "type": "type",
      "allowNull": false,
      "field": "option_3"
    },
    "barcode": {
      "type": "type",
      "allowNull": false,
      "field": "barcode"
    },
    "reservedQuantity": {
      "type": "type",
      "allowNull": true,
      "defaultsTo": "0",
      "field": "reserved_quantity"
    },
    "legacyId": {
      "type": "type",
      "allowNull": false,
      "field": "legacy_id"
    }
  }, {
    "tableName": "cti_bill_state",
    "freezeTableName": true,
    "underscored": true,
    "timestamps": false,
    "classMethods": {}
  }) return ProductSku
}