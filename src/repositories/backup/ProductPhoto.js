const {sequelize, Sequelize} = require('./dbContext')
module.exports = function (sequelize, Sequelize) {
  const productPhoto = sequelize.define('productPhoto', {
    "productId": {
      "type": Sequelize.BIGINT(20).UNSIGNED,
      "allowNull": true,
      "field": "product_id",
      primaryKey: true
    },
    "storePhotoId": {
      "type": Sequelize.BIGINT(20).UNSIGNED,
      "allowNull": true,
      "field": "store_photo_id",
      primaryKey: true
    },
    "default": {
      "type": Sequelize.INTEGER(4),
      "allowNull": true,
      "field": "default"
    }
  }, {
    "tableName": "product_photo",
    "freezeTableName": true,
    "underscored": true,
    "timestamps": false,
    "classMethods": {}
  }) 
  return productPhoto
}