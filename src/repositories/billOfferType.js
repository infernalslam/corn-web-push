const {
  sequelize,
  Sequelize,
  dbUtil
} = require('./dbContext')
const BillOfferType = sequelize.define('billOfferType', {
  "type": {
    "type": Sequelize.STRING(45),
    "allowNull": true,
    "field": "type"
  }
}, {
  "tableName": "bill_offer_type",
  "freezeTableName": true,
  "underscored": true,
  "timestamps": false,
  "classMethods": {}
})
module.exports = BillOfferType