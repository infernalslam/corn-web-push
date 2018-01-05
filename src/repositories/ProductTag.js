module.exports = function (sequelize, Sequelize) {
  const ProductTag = sequelize.define('productTag', {
    "productId": {
      "type": "type",
      "allowNull": true,
      "field": "product_id"
    },
    "tag": {
      "type": "type",
      "allowNull": true,
      "field": "tag"
    },
    "tagType": {
      "type": "type",
      "allowNull": true,
      "field": "tag_type"
    }
  }, {
    "tableName": "cti_bill_state",
    "freezeTableName": true,
    "underscored": true,
    "timestamps": false,
    "classMethods": {}
  }) return ProductTag
}