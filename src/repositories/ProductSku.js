module.exports = function (sequelize, Sequelize) {
  const productSku = sequelize.define('productSku', {
    "id": {
      "type": Sequelize.BIGINT(20).UNSIGNED,
      "allowNull": true,
      primaryKey: true,
      "field": "id"
    },
    "codeTemp": {
      "type": Sequelize.STRING(20),
      "allowNull": true,
      "field": "code_temp"
    },
    "code": {
      "type": Sequelize.STRING(255),
      "allowNull": true,
      "field": "code"
    },
    "price": {
      "type": Sequelize.DECIMAL(13, 2),
      "allowNull": true,
      "defaultsTo": "0.00",
      "field": "price"
    },
    "status": {
      "type": Sequelize.INTEGER(4),
      "allowNull": true,
      "defaultsTo": "1",
      "field": "status"
    },
    "createBySellsukiUserId": {
      "type": Sequelize.INTEGER(10).UNSIGNED,
      "allowNull": true,
      "field": "create_by_sellsuki_user_id"
    },
    "updateBySellsukiUserId": {
      "type": Sequelize.INTEGER(10).UNSIGNED,
      "allowNull": true,
      "field": "update_by_sellsuki_user_id"
    },
    "createTime": {
      "type": Sequelize.DATE,
      "allowNull": true,
      "defaultsTo": "0000-00-00 00:00:00",
      "field": "create_time"
    },
    "updateTime": {
      "type": Sequelize.DATE,
      "allowNull": true,
      "defaultsTo": "0000-00-00 00:00:00",
      "field": "update_time"
    },
    "productId": {
      "type": Sequelize.BIGINT(20).UNSIGNED,
      "allowNull": true,
      "field": "product_id"
    },
    "option1": {
      "type": Sequelize.STRING(100),
      "allowNull": false,
      "field": "option_1"
    },
    "option2": {
      "type": Sequelize.STRING(100),
      "allowNull": false,
      "field": "option_2"
    },
    "option3": {
      "type": Sequelize.STRING(100),
      "allowNull": false,
      "field": "option_3"
    },
    "barcode": {
      "type": Sequelize.STRING(45),
      "allowNull": false,
      "field": "barcode"
    },
    "reservedQuantity": {
      "type": Sequelize.INTEGER(11),
      "allowNull": true,
      "defaultsTo": "0",
      "field": "reserved_quantity"
    },
    "legacyId": {
      "type": Sequelize.BIGINT(20).UNSIGNED,
      "allowNull": false,
      "field": "legacy_id"
    }
  }, {
    "tableName": "product_sku",
    "freezeTableName": true,
    "underscored": true,
    "timestamps": false,
    "classMethods": {}
  }) 
  return productSku
}