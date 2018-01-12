module.exports = function (sequelize, Sequelize) {
  const productTagType = sequelize.define('productTagType', {
    "type": {
      "type": Sequelize.varchar(15),
      "allowNull": false,
      primaryKey: true,
      "field": "type"
    }
  }, {
    "tableName": "product_tag_type",
    "freezeTableName": true,
    "underscored": true,
    "timestamps": false,
    "classMethods": {}
  })
  return productTagType
}