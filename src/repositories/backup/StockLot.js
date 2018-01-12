module.exports = function (sequelize, Sequelize) {
  const stockLot = sequelize.define('stockLot', {
    "id": {
      "type": Sequelize.BIGINT(20).UNSIGNED,
      "allowNull": true,
      primaryKey: true,
      "field": "id"
    },
    "productSkuId": {
      "type": Sequelize.BIGINT(20).UNSIGNED,
      "allowNull": true,
      "field": "product_sku_id"
    },
    "flagIsActive": {
      "type": Sequelize.INTEGER(4),
      "allowNull": true,
      "field": "flag_is_active"
    },
    "quantity": {
      "type": Sequelize.INTEGER(11),
      "allowNull": true,
      "field": "quantity"
    },
    "remainingQuantity": {
      "type": Sequelize.INTEGER(11),
      "allowNull": true,
      "field": "remaining_quantity"
    },
    "stockLotType": {
      "type": Sequelize.STRING(45),
      "allowNull": true,
      "field": "stock_lot_type"
    },
    "warehouseName": {
      "type": Sequelize.STRING(10),
      "allowNull": true,
      "defaultsTo": "sellsuki",
      "field": "warehouse_name"
    },
    "cost": {
      "type": Sequelize.DECIMAL(13, 2),
      "allowNull": false,
      "defaultsTo": "0.00",
      "field": "cost"
    }
  }, {
    "tableName": "stock_lot",
    "freezeTableName": true,
    "underscored": true,
    "timestamps": false,
    "classMethods": {}
  }) 
  return stockLot
}