const {
  sequelize,
  Sequelize,
  dbUtil
} = require('./dbContext')
const BillCoupon = sequelize.define('billCoupon', {
  "billId": {
    "type": Sequelize.STRING(16),
    "allowNull": true,
    "field": "bill_id"
  },
  "couponCode": {
    "type": Sequelize.STRING(40),
    "allowNull": true,
    "field": "coupon_code"
  },
  "createBy": {
    "type": Sequelize.INTEGER(10).UNSIGNED,
    "allowNull": true,
    "field": "create_by"
  },
  "createTime": {
    "type": Sequelize.DATE,
    "allowNull": true,
    "defaultsTo": "CURRENT_TIMESTAMP",
    "field": "create_time"
  },
  "storeCouponId": {
    "type": Sequelize.INTEGER(10).UNSIGNED,
    "allowNull": true,
    "field": "store_coupon_id"
  },
  "storeId": {
    "type": Sequelize.INTEGER(10).UNSIGNED,
    "allowNull": true,
    "field": "store_id"
  }
}, {
  "tableName": "bill_coupon",
  "freezeTableName": true,
  "underscored": true,
  "timestamps": true,
  "createAt": "create_time",
  "classMethods": {}
})
module.exports = BillCoupon