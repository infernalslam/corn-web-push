const {
  sequelize,
  Sequelize,
  dbUtil
} = require('./dbContext')
const BillStateHistory = sequelize.define('billStateHistory', {
  "billId": {
    "type": Sequelize.STRING(16),
    "allowNull": true,
    "field": "bill_id"
  },
  "billState": {
    "type": Sequelize.STRING(45),
    "allowNull": true,
    "field": "bill_state"
  },
  "date": {
    "type": Sequelize.DATE,
    "allowNull": true,
    "defaultsTo": "CURRENT_TIMESTAMP",
    "field": "date"
  },
  "createBySellsukiId": {
    "type": Sequelize.INTEGER(10).UNSIGNED,
    "allowNull": true,
    "defaultsTo": "1",
    "field": "create_by_sellsuki_id"
  },
  "id": {
    "type": Sequelize.INTEGER(20).UNSIGNED,
    "autoIncrement": true,
    "allowNull": true,
    "field": "id"
  }
}, {
  "tableName": "bill_state_history",
  "freezeTableName": true,
  "underscored": true,
  "timestamps": false,
  "classMethods": {}
})
module.exports = BillStateHistory