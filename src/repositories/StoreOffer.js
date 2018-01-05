module.exports = function (sequelize, Sequelize) {
  const StoreOffer = sequelize.define('storeOffer', {
    "id": {
      "type": "type",
      "allowNull": true,
      "field": "id"
    },
    "storeId": {
      "type": "type",
      "allowNull": true,
      "field": "store_id"
    },
    "offerId": {
      "type": "type",
      "allowNull": true,
      "field": "offer_id"
    },
    "startDate": {
      "type": "type",
      "allowNull": false,
      "field": "start_date"
    },
    "expireDate": {
      "type": "type",
      "allowNull": false,
      "field": "expire_date"
    },
    "note": {
      "type": "type",
      "allowNull": false,
      "field": "note"
    },
    "status": {
      "type": "type",
      "allowNull": true,
      "defaultsTo": "queue",
      "field": "status"
    },
    "createBySellsukiUserId": {
      "type": "type",
      "allowNull": true,
      "field": "create_by_sellsuki_user_id"
    },
    "createTime": {
      "type": "type",
      "allowNull": true,
      "defaultsTo": "CURRENT_TIMESTAMP",
      "field": "create_time"
    },
    "sellsukiOrderId": {
      "type": "type",
      "allowNull": false,
      "field": "sellsuki_order_id"
    }
  }, {
    "tableName": "cti_bill_state",
    "freezeTableName": true,
    "underscored": true,
    "timestamps": false,
    "classMethods": {}
  }) return StoreOffer
}