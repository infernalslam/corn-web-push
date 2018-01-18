const {
  sequelize,
  Sequelize
} = require('./dbContext')
const BillProductSku = sequelize.define('billProductSku', {
  'id': {
    'type': Sequelize.INTEGER(20).UNSIGNED,
    'allowNull': false,
    'field': 'id'
  },
  'billId': {
    'type': Sequelize.STRING(16),
    'allowNull': false,
    'field': 'bill_id'
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
    'defaultsTo': '0.00',
    'field': 'cache_unit_price'
  },
  'createTime': {
    'type': Sequelize.DATE,
    'allowNull': false,
    'defaultsTo': 'CURRENT_TIMESTAMP',
    'field': 'create_time'
  },
  'cacheProductName': {
    'type': Sequelize.TEXT,
    'allowNull': false,
    'field': 'cache_product_name'
  },
  'cacheConcatOptions': {
    'type': Sequelize.TEXT,
    'allowNull': true,
    'field': 'cache_concat_options'
  },
  'warehouseName': {
    'type': Sequelize.STRING(10),
    'allowNull': false,
    'defaultsTo': 'sellsuki',
    'field': 'warehouse_name'
  }
}, {
  'tableName': 'bill_product_sku',
  'freezeTableName': true,
  'underscored': true,
  'timestamps': false,
  'createTime': 'create_time',
  'classMethods': {}
})

module.exports = BillProductSku
