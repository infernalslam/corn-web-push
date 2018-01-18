const {
  sequelize,
  Sequelize
} = require('./dbContext')
const BillPromotion = sequelize.define('billPromotion', {
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
  'promotionId': {
    'type': Sequelize.INTEGER(10).UNSIGNED,
    'allowNull': false,
    'field': 'promotion_id'
  },
  'discountType': {
    'type': Sequelize.STRING(20),
    'allowNull': false,
    'field': 'discount_type'
  },
  'promotionType': {
    'type': Sequelize.STRING(15),
    'allowNull': false,
    'field': 'promotion_type'
  },
  'discountNet': {
    'type': Sequelize.INTEGER(20,2),
    'allowNull': false,
    'defaultsTo': '0.00',
    'field': 'discount_net'
  },
  'priority': {
    'type': Sequelize.INTEGER(3).UNSIGNED,
    'allowNull': false,
    'defaultsTo': '1',
    'field': 'priority'
  },
  'usedStepJson': {
    'type': Sequelize.STRING(100),
    'allowNull': true,
    'field': 'used_step_json'
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
  'tableName': 'bill_promotion',
  'freezeTableName': true,
  'underscored': true,
  'timestamps': false,
  'createTime': 'create_time',
  'classMethods': {}
})

module.exports = BillPromotion
