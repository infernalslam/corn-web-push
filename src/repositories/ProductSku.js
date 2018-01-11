const {sequelize, Sequelize, dbUtil} = require('./dbContext')

const productSku = sequelize.define('productSku', {
  "id": {
    "type": Sequelize.BIGINT(20).UNSIGNED,
    "allowNull": true,
    primaryKey: true,
    "field": "id"
  },
  "codeTemp": {
    "type": Sequelize.STRING(20),
    "allowNull": true,
    "field": "code_temp"
  },
  "code": {
    "type": Sequelize.STRING(255),
    "allowNull": true,
    "field": "code"
  },
  "price": {
    "type": Sequelize.DECIMAL(13, 2),
    "allowNull": true,
    "defaultsTo": "0.00",
    "field": "price"
  },
  "status": {
    "type": Sequelize.INTEGER(4),
    "allowNull": true,
    "defaultsTo": "1",
    "field": "status"
  },
  "createBySellsukiUserId": {
    "type": Sequelize.INTEGER(10).UNSIGNED,
    "allowNull": true,
    "field": "create_by_sellsuki_user_id"
  },
  "updateBySellsukiUserId": {
    "type": Sequelize.INTEGER(10).UNSIGNED,
    "allowNull": true,
    "field": "update_by_sellsuki_user_id"
  },
  "createTime": {
    "type": Sequelize.DATE,
    "allowNull": true,
    "defaultsTo": "0000-00-00 00:00:00",
    "field": "create_time"
  },
  "updateTime": {
    "type": Sequelize.DATE,
    "allowNull": true,
    "defaultsTo": "0000-00-00 00:00:00",
    "field": "update_time"
  },
  "productId": {
    "type": Sequelize.BIGINT(20).UNSIGNED,
    "allowNull": true,
    "field": "product_id"
  },
  "option1": {
    "type": Sequelize.STRING(100),
    "allowNull": false,
    "field": "option_1"
  },
  "option2": {
    "type": Sequelize.STRING(100),
    "allowNull": false,
    "field": "option_2"
  },
  "option3": {
    "type": Sequelize.STRING(100),
    "allowNull": false,
    "field": "option_3"
  },
  "barcode": {
    "type": Sequelize.STRING(45),
    "allowNull": false,
    "field": "barcode"
  },
  "reservedQuantity": {
    "type": Sequelize.INTEGER(11),
    "allowNull": true,
    "defaultsTo": "0",
    "field": "reserved_quantity"
  },
  "legacyId": {
    "type": Sequelize.BIGINT(20).UNSIGNED,
    "allowNull": false,
    "field": "legacy_id"
  }
}, {
  "tableName": "product_sku",
  "freezeTableName": true,
  "underscored": true,
  "timestamps": false,
  "classMethods": {}
}) 

productSku.fetchProductSkus = async function (params) {
  const queryBinding = [
  {
    prefix: 'p_sku',
    field: 'sku_code',
    condition: 'LIKE',
    value: params.where.sku_code
  },
  {
    prefix: 'p_sku',
    field: 'id',
    condition: '=',
    value: params.where.id
  },
  {
    prefix: 'p_sku',
    field: 'product_id',
    condition: '=',
    value: params.where.product_id
  },
  {
    prefix: 'p',
    field: 'store_id',
    condition: '=',
    value: params.where.store_id
  },
  {
    prefix: 'sp',
    field: 'store_id',
    condition: '=',
    value: params.where.store_id
  }]
  params.where.sku_code = `%${params.where.sku_code}%`
  const {sp, p, p_sku} = dbUtil.createWhereCondition(queryBinding)
  const bindOption = dbUtil.createBindOption(params)
  let sql = `SELECT  *,p.code_temp as product_code,p_sku.code as sku_code,p_sku.status as sku_status
  ,p.id as id,p_sku.id as product_sku_id 
  FROM product_sku as p_sku 
  JOIN product as p ON p.id = p_sku.product_id
  LEFT JOIN (
    SELECT psp.product_sku_id as product_sku_id, GROUP_CONCAT(sp.src SEPARATOR ':;:') as sku_photo, 
      GROUP_CONCAT(psp.id SEPARATOR ':;:') as sku_photo_id ,
      GROUP_CONCAT(psp.default SEPARATOR ':;:') as product_sku_photo_flag
    FROM store_photo as sp
    JOIN product_sku_photo as psp ON sp.id = psp.store_photo_id
    WHERE ${sp.store_id}
    GROUP BY psp.product_sku_id
    ) as psp ON psp.product_sku_id = p_sku.id
  WHERE ${p_sku.sku_code} AND ${p_sku.id} AND ${p_sku.product_id} AND ${p.store_id}`
  const rows = await sequelize.query(sql, bindOption)
  sql = `SELECT COUNT(*) as count FROM 
  product_sku as p_sku 
  JOIN product as p ON p.id = p_sku.product_id
  WHERE ${p_sku.sku_code} AND ${p_sku.id} AND ${p_sku.product_id} AND ${p.store_id}`
  let count = await sequelize.query(sql, bindOption)
  console.log(count)
  count = count[0].count
  return {
    rows,
    count
  }
}

module.exports = productSku