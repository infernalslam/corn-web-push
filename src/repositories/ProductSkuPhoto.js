module.exports = function (sequelize, Sequelize) {
  const ProductSkuPhoto = sequelize.define('productSkuPhoto', {
    "productSkuId": {
      "type": "type",
      "allowNull": true,
      "field": "product_sku_id"
    },
    "storePhotoId": {
      "type": "type",
      "allowNull": true,
      "field": "store_photo_id"
    },
    "default": {
      "type": "type",
      "allowNull": true,
      "defaultsTo": "0",
      "field": "default"
    },
    "id": {
      "type": "type",
      "allowNull": true,
      "field": "id"
    }
  }, {
    "tableName": "cti_bill_state",
    "freezeTableName": true,
    "underscored": true,
    "timestamps": false,
    "classMethods": {}
  }) return ProductSkuPhoto
}