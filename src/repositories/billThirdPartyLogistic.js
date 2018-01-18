const {
  sequelize,
  Sequelize
} = require('./dbContext')
const BillThirdPartyLogistic = sequelize.define('billThirdPartyLogistic', {
  'billId': {
    'type': Sequelize.STRING(16),
    'allowNull': false,
    'field': 'bill_id'
  },
  'logisticType': {
    'type': Sequelize.STRING(20),
    'allowNull': false,
    'field': 'logistic_type'
  },
  'credential': {
    'type': Sequelize.STRING(225),
    'allowNull': false,
    'field': 'credential'
  },
  'logisticRefCode': {
    'type': Sequelize.STRING(20),
    'allowNull': true,
    'field': 'logistic_ref_code'
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
  'updateBy': {
    'type': Sequelize.INTEGER(10).UNSIGNED,
    'allowNull': false,
    'field': 'update_by'
  },
  'updateTime': {
    'type': Sequelize.DATE,
    'allowNull': false,
    'defaultsTo': '0000-00-00 00:00:00',
    'field': 'update_time'
  }
}, {
  'tableName': 'bill_third_party_logistic',
  'freezeTableName': true,
  'underscored': true,
  'timestamps': false,
  'createTime': 'create_time',
  'classMethods': {}
})

module.exports = BillThirdPartyLogistic
