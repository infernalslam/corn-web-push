module.exports = function (sequelize, Sequelize) {
  const StorePhoto = sequelize.define('storePhoto', {
    "id": {
      "type": "type",
      "allowNull": true,
      "field": "id"
    },
    "src": {
      "type": "type",
      "allowNull": true,
      "field": "src"
    },
    "refId": {
      "type": "type",
      "allowNull": false,
      "field": "ref_id"
    },
    "uploadType": {
      "type": "type",
      "allowNull": true,
      "defaultsTo": "upload",
      "field": "upload_type"
    },
    "createBySellsukiUserId": {
      "type": "type",
      "allowNull": true,
      "field": "create_by_sellsuki_user_id"
    },
    "createTime": {
      "type": "type",
      "allowNull": true,
      "defaultsTo": "0000-00-00 00:00:00",
      "field": "create_time"
    },
    "storeId": {
      "type": "type",
      "allowNull": true,
      "field": "store_id"
    }
  }, {
    "tableName": "cti_bill_state",
    "freezeTableName": true,
    "underscored": true,
    "timestamps": false,
    "classMethods": {}
  }) return StorePhoto
}