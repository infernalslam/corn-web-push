module.exports = function (sequelize, Sequelize) {
  const productTag = sequelize.define('productTag', {
    "productId": {
      "type": Sequelize.BIGINT(20).UNSIGNED,
      "allowNull": true,
      primaryKey: true,
      "field": "product_id"
    },
    "tag": {
      "type": Sequelize.STRING(45),
      "allowNull": true,
      primaryKey: true,
      "field": "tag"
    },
    "tagType": {
      "type": Sequelize.STRING(15),
      "allowNull": true,
      primaryKey: true,
      "field": "tag_type"
    }
  }, {
    "tableName": "product_tag",
    "freezeTableName": true,
    "underscored": true,
    "timestamps": false,
    "classMethods": {}
  }) 
  return ProductTag
}