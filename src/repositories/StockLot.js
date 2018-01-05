module.exports = function (sequelize, Sequelize) {
  const StockLot = sequelize.define('stockLot', {
    "id": {
      "type": "type",
      "allowNull": true,
      "field": "id"
    },
    "productSkuId": {
      "type": "type",
      "allowNull": true,
      "field": "product_sku_id"
    },
    "flagIsActive": {
      "type": "type",
      "allowNull": true,
      "field": "flag_is_active"
    },
    "quantity": {
      "type": "type",
      "allowNull": true,
      "field": "quantity"
    },
    "remainingQuantity": {
      "type": "type",
      "allowNull": true,
      "field": "remaining_quantity"
    },
    "stockLotType": {
      "type": "type",
      "allowNull": true,
      "field": "stock_lot_type"
    },
    "warehouseName": {
      "type": "type",
      "allowNull": true,
      "defaultsTo": "sellsuki",
      "field": "warehouse_name"
    },
    "cost": {
      "type": "type",
      "allowNull": false,
      "defaultsTo": "0.00",
      "field": "cost"
    }
  }, {
    "tableName": "cti_bill_state",
    "freezeTableName": true,
    "underscored": true,
    "timestamps": false,
    "classMethods": {}
  }) return StockLot
}