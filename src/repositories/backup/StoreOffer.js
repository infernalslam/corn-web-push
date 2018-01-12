const {sequelize, Sequelize, dbUtil} = require('./dbContext')
const storeOffer = sequelize.define('storeOffer', {
  "id": {
    "type": Sequelize.BIGINT(20).UNSIGNED,
    "allowNull": true,
    "field": "id"
  },
  "storeId": {
    "type": Sequelize.INTERGER(10).UNSIGNED,
    "allowNull": true,
    "field": "store_id"
  },
  "offerId": {
    "type": Sequelize.INTERGER(10).UNSIGNED,
    "allowNull": true,
    "field": "offer_id"
  },
  "startDate": {
    "type": Sequelize.DATE,
    "allowNull": false,
    "field": "start_date"
  },
  "expireDate": {
    "type": Sequelize.DATE,
    "allowNull": false,
    "field": "expire_date"
  },
  "note": {
    "type": Sequelize.STRING(255),
    "allowNull": false,
    "field": "note"
  },
  "status": {
    "type": Sequelize.STRING(10),
    "allowNull": true,
    "defaultsTo": "queue",
    "field": "status"
  },
  "createBySellsukiUserId": {
    "type": Sequelize.INTERGER(10).UNSIGNED,
    "allowNull": true,
    "field": "create_by_sellsuki_user_id"
  },
  "createTime": {
    "type": Sequelize.DATE,
    "allowNull": true,
    "defaultsTo": "CURRENT_TIMESTAMP",
    "field": "create_time"
  },
  "sellsukiOrderId": {
    "type": Sequelize.STRING(12),
    "allowNull": false,
    "field": "sellsuki_order_id"
  }
}, {
  "tableName": "store_offer",
  "freezeTableName": true,
  "underscored": true,
  "timestamps": false,
  "classMethods": {}
}) 
module.exports = storeOffer