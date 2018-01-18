const {
  sequelize,
  Sequelize
} = require('./dbContext')
const BillCoupon = sequelize.define('billCoupon', {
  'billId': {
    'type': Sequelize.STRING(16),
    'allowNull': false,
    'field': 'bill_id'
  },
  'couponCode': {
    'type': Sequelize.STRING(40),
    'allowNull': false,
    'field': 'coupon_code'
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
  },
  'storeCouponId': {
    'type': Sequelize.INTEGER(10).UNSIGNED,
    'allowNull': false,
    'field': 'store_coupon_id'
  },
  'storeId': {
    'type': Sequelize.INTEGER(10).UNSIGNED,
    'allowNull': false,
    'field': 'store_id'
  }
}, {
  'tableName': 'bill_coupon',
  'freezeTableName': true,
  'underscored': true,
  'timestamps': false,
  'createTime': 'create_time',
  'classMethods': {}
})

module.exports = BillCoupon
