const {sequelize, Sequelize, dbUtil} = require('./dbContext')
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

  product.fetchWithphotoAndSku = async function (params) {
    const queryBinding = [{
      prefix: 'sp',
      field: 'store_id',
      condition: '=',
      value: params.where.store_id
    },
    {
      prefix: 'p',
      field: 'store_id',
      condition: '=',
      value: params.where.store_id
    },
    {
      prefix: 'p',
      field: 'status',
      condition:  params.where.status ? '=' : '!=',
      value: params.where.status
    },
    {
      prefix: 'p',
      field: 'product_code',
      condition: 'LIKE',
      value: params.where.product_code
    },
    {
      prefix: 'p',
      field: 'name',
      condition: 'LIKE',
      value: params.where.name
    },
    {
      prefix: 'p_sku',
      field: 'sku_code',
      condition: 'LIKE',
      value: params.where.sku_code
    }]
    params.where.product_code = `%${params.where.product_code}%`
    params.where.name = `%${params.where.name}%`
    params.where.sku_code = `%${params.where.sku_code}%`
    const {sp, p, p_sku} = dbUtil.createWhereCondition(queryBinding)
    const bindOption = dbUtil.createBindOption(params)
    console.log(sp, p, p_sku)
    let sql = `SELECT *,p.code_temp as product_code,p_sku.code as sku_code,p_sku.status as sku_status
    ,p.id as id,p_sku.id as product_sku_id
      FROM (SELECT * FROM product as p 
        WHERE ${p.store_id} AND ${p.status} AND (${p.product_code} OR ${p.name})
        ORDER BY p.${params.otherOptions.sort} ${params.otherOptions.order}
        LIMIT :limit OFFSET :offset) as p
      JOIN product_sku as p_sku ON p.id = p_sku.product_id AND p_sku.status != 0
      LEFT JOIN (
          SELECT pp.product_id as product_id, GROUP_CONCAT(sp.src SEPARATOR ':;:') as product_photo,
            GROUP_CONCAT(sp.id SEPARATOR ':;:') as photo_id, 
            GROUP_CONCAT(pp.default SEPARATOR ':;:') as product_photo_flag
          FROM store_photo as sp
          JOIN product_photo as pp ON sp.id = pp.store_photo_id
          WHERE ${sp.store_id}
          GROUP BY pp.product_id
          ) as pp ON pp.product_id = p.id
      LEFT JOIN (
          SELECT psp.product_sku_id as product_sku_id, GROUP_CONCAT(sp.src SEPARATOR ':;:') as sku_photo, 
            GROUP_CONCAT(psp.id SEPARATOR ':;:') as sku_photo_id ,
            GROUP_CONCAT(psp.default SEPARATOR ':;:') as product_sku_photo_flag
          FROM store_photo as sp
          JOIN product_sku_photo as psp ON sp.id = psp.store_photo_id
          WHERE ${sp.store_id}
          GROUP BY psp.product_sku_id
          ) as psp ON psp.product_sku_id = p_sku.id
      LEFT JOIN  (
        SELECT pt.product_id, GROUP_CONCAT(pt.tag SEPARATOR ':;:') as tag , GROUP_CONCAT(pt.tag_type SEPARATOR ':;:') as tag_type 
        FROM product_tag as pt
        GROUP BY pt.product_id
        ) pt ON p.id = pt.product_id
      WHERE ${p_sku.sku_code}`
    const rows = await sequelize.query(sql, bindOption)
    sql = `SELECT COUNT(*) as count FROM product as p WHERE ${p.store_id} AND ${p.status} AND (${p.product_code} OR ${p.name})`
    let count = await sequelize.query(sql, bindOption)
    count = count[0].count
    return {
      rows,
      count
    }
  }

  product.fethOnlyProduct = async function (params) {
    const queryBinding = [{
      prefix: 'p',
      field: 'status',
      condition:  params.where.status ? '=' : '!=',
      value: params.where.status
    },
    {
      prefix: 'p',
      field: 'product_code',
      condition: 'LIKE',
      value: params.where.product_code
    },
    {
      prefix: 'p',
      field: 'name',
      condition: 'LIKE',
      value: params.where.name
    },
    {
      prefix: 'p_sku',
      field: 'sku_code',
      condition: 'LIKE',
      value: params.where.sku_code
    }]
    const whereConditions = dbUtil.createWhereCondition(params)
    const bindOption = dbUtil.createBindOption(params)
    const condition = whereConditions.length ? `${result.sql}` : ''
    let sql = `SELECT * FROM product as p WHERE TRUE ${condition}
      ORDER BY :sort :order
      LIMIT :limit OFFSET :offset`
    const rows = await sequelize.query(sql, bindOption)
    sql = `SELECT COUNT(*) as count FROM product ${condition}`
    let count = await sequelize.query(sql, bindOption)
    count = count[0].count
    console.log(rows)
    return {
      rows,
      count
    }
  }
  
  

  module.exports = product

