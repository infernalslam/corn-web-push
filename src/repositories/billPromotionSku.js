const {
  sequelize,
  Sequelize
} = require('./dbContext')
const BillPromotionSku = sequelize.define('billPromotionSku', {
  'id': {
    'type': Sequelize.INTEGER(20),
    'allowNull': false,
    'field': 'id'
  },
  'billId': {
    'type': Sequelize.STRING(16),
    'allowNull': false,
    'field': 'bill_id'
  },
  'billPromotionId': {
    'type': Sequelize.INTEGER(20).UNSIGNED,
    'allowNull': false,
    'field': 'bill_promotion_id'
  },
  'productSkuId': {
    'type': Sequelize.INTEGER(20).UNSIGNED,
    'allowNull': false,
    'field': 'product_sku_id'
  },
  'amount': {
    'type': Sequelize.INTEGER(8,2),
    'allowNull': false,
    'defaultsTo': '1.00',
    'field': 'amount'
  },
  'cacheUnitPrice': {
    'type': Sequelize.INTEGER(11,2),
    'allowNull': false,
    'field': 'cache_unit_price'
  },
  'discount': {
    'type': Sequelize.INTEGER(8,2),
    'allowNull': false,
    'field': 'discount'
  },
  'discountType': {
    'type': Sequelize.STRING(20),
    'allowNull': false,
    'field': 'discount_type'
  },
  'createBy': {
    'type': Sequelize.INTEGER(10).UNSIGNED,
    'allowNull': false,
    'field': 'create_by'
  },
  'createTime': {
    'type': Sequelize.DATE,
    'allowNull': false,
    'defaultsTo': 'CURRENT_TIMESTAMP',
    'field': 'create_time'
  }
}, {
  'tableName': 'bill_promotion_sku',
  'freezeTableName': true,
  'underscored': true,
  'timestamps': false,
  'createTime': 'create_time',
  'classMethods': {}
})

module.exports = BillPromotionSku
