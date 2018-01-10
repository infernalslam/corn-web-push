module.exports = function (sequelize, Sequelize) {
  const storePhoto = sequelize.define('storePhoto', {
    "id": {
      "type": Sequelize.BIGINT(20).UNSIGNED,
      "allowNull": true,
      "field": "id"
    },
    "src": {
      "type": Sequelize.TEXT,
      "allowNull": true,
      "field": "src"
    },
    "refId": {
      "type": Sequelize.TEXT,
      "allowNull": false,
      "field": "ref_id"
    },
    "uploadType": {
      "type": Sequelize.STRING(10),
      "allowNull": true,
      "defaultsTo": "upload",
      "field": "upload_type"
    },
    "createBySellsukiUserId": {
      "type": Sequelize.INTERGER(10),
      "allowNull": true,
      "field": "create_by_sellsuki_user_id"
    },
    "createTime": {
      "type": Sequelize.DATE,
      "allowNull": true,
      "defaultsTo": "0000-00-00 00:00:00",
      "field": "create_time"
    },
    "storeId": {
      "type": Sequelize.INTERGER(10),
      "allowNull": true,
      "field": "store_id"
    }
  }, {
    "tableName": "store_photo",
    "freezeTableName": true,
    "underscored": true,
    "timestamps": false,
    "classMethods": {}
  }) 
  return storePhoto
}