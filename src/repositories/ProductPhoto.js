module.exports = function (sequelize, Sequelize) {
  const ProductPhoto = sequelize.define('productPhoto', {
    "productId": {
      "type": "type",
      "allowNull": true,
      "field": "product_id"
    },
    "storePhotoId": {
      "type": "type",
      "allowNull": true,
      "field": "store_photo_id"
    },
    "default": {
      "type": "type",
      "allowNull": true,
      "field": "default"
    }
  }, {
    "tableName": "cti_bill_state",
    "freezeTableName": true,
    "underscored": true,
    "timestamps": false,
    "classMethods": {}
  }) return ProductPhoto
}