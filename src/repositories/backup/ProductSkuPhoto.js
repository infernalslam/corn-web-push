const {sequelize, Sequelize, dbUtil} = require('./dbContext')
const productSkuPhoto = sequelize.define('productSkuPhoto', {
  "productSkuId": {
    "type": Sequelize.BIGINT(20).UNSIGNED,
    "allowNull": true,
    "field": "product_sku_id"
  },
  "storePhotoId": {
    "type": Sequelize.BIGINT(20).UNSIGNED,
    "allowNull": true,
    "field": "store_photo_id"
  },
  "default": {
    "type": Sequelize.INTEGER(4),
    "allowNull": true,
    "defaultsTo": "0",
    "field": "default"
  },
  "id": {
    "type": Sequelize.BIGINT(20).UNSIGNED,
    "allowNull": true,
    "field": "id",
    primaryKey: true
  }
}, {
  "tableName": "product_sku_photo",
  "freezeTableName": true,
  "underscored": true,
  "timestamps": false,
  "classMethods": {}
}) 


module.exports = productSkuPhoto