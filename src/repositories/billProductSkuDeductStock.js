const {
  sequelize,
  Sequelize
} = require('./dbContext')
const BillProductSkuDeductStock = sequelize.define('billProductSkuDeductStock', {
  'id': {
    'type': Sequelize.INTEGER(20).UNSIGNED,
    'allowNull': false,
    'field': 'id'
  },
  'stockLotId': {
    'type': Sequelize.INTEGER(20).UNSIGNED,
    'allowNull': false,
    'field': 'stock_lot_id'
  },
  'billProductSkuId': {
    'type': Sequelize.INTEGER(20).UNSIGNED,
    'allowNull': false,
    'field': 'bill_product_sku_id'
  },
  'productSkuId': {
    'type': Sequelize.INTEGER(20).UNSIGNED,
    'allowNull': false,
    'field': 'product_sku_id'
  },
  'deductAmount': {
    'type': Sequelize.INTEGER(13,2),
    'allowNull': false,
    'field': 'deduct_amount'
  },
  'cacheCost': {
    'type': Sequelize.INTEGER(13,2),
    'allowNull': false,
    'field': 'cache_cost'
  }
}, {
  'tableName': 'bill_product_sku_deduct_stock',
  'freezeTableName': true,
  'underscored': true,
  'timestamps': false,
  'classMethods': {}
})

module.exports = BillProductSkuDeductStock
