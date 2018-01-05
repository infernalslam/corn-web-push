const {sequelize, Sequelize} = require('./dbContext')
const product = sequelize.define('product', {
    'id': {
      'type': Sequelize.BIGINT(20).UNSIGNED,
      'allowNull': true,
      primaryKey: true,
      'field': 'id'
    },
    'codeTemp': {
      'type': Sequelize.STRING(255),
      'allowNull': true,
      'field': 'code_temp'
    },
    'name': {
      'type': Sequelize.STRING(100),
      'allowNull': true,
      'field': 'name'
    },
    'description': {
      'type': Sequelize.STRING(2000),
      'allowNull': false,
      'field': 'description'
    },
    'status': {
      'type': Sequelize.INTEGER(4),
      'allowNull': true,
      'defaultsTo': 1,
      'field': 'status'
    },
    'createBySellsukiUserId': {
      'type': Sequelize.INTEGER(10).UNSIGNED,
      'allowNull': true,
      'field': 'create_by_sellsuki_user_id'
    },
    'updateBySellsukiUserId': {
      'type': Sequelize.INTEGER(10).UNSIGNED,
      'allowNull': true,
      'field': 'update_by_sellsuki_user_id'
    },
    'createTime': {
      'type': Sequelize.DATE,
      'allowNull': true,
      'defaultsTo': '0000-00-00 00:00:00',
      'field': 'create_time'
    },
    'updateTime': {
      'type': Sequelize.DATE,
      'allowNull': true,
      'defaultsTo': '0000-00-00 00:00:00',
      'field': 'update_time'
    },
    'storeId': {
      'type': Sequelize.INTEGER(10).UNSIGNED,
      'allowNull': true,
      'field': 'store_id'
    },
    'variant1': {
      'type': Sequelize.STRING(45),
      'allowNull': false,
      'field': 'variant_1'
    },
    'variant2': {
      'type':  Sequelize.STRING(45),
      'allowNull': false,
      'field': 'variant_2'
    },
    'variant3': {
      'type':  Sequelize.STRING(45),
      'allowNull': false,
      'field': 'variant_3'
    },
    'genUrl': {
      'type':  Sequelize.STRING(45),
      'allowNull': false,
      'field': 'gen_url'
    },
    'optionConcat1': {
      'type':  Sequelize.STRING(330),
      'allowNull': false,
      'field': 'option_concat_1'
    },
    'optionConcat2': {
      'type': Sequelize.STRING(330),
      'allowNull': false,
      'field': 'option_concat_2'
    },
    'optionConcat3': {
      'type': Sequelize.STRING(330),
      'allowNull': false,
      'field': 'option_concat_3'
    },
    'legacyId': {
      'type':Sequelize.BIGINT(20).UNSIGNED,
      'allowNull': false,
      'field': 'legacy_id'
    }
  }, {
    'tableName': 'product',
    'freezeTableName': true,
    'underscored': true,
    'timestamps': false,
    'classMethods': {}
  })
  product.testRaw = function () {
    const sql = `SELECT 1+1`
    return sequelize.query(sql)
  } 

  module.exports = product

