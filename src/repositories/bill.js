const {sequelize, Sequelize, dbUtil} = require('./dbContext')
const Bill = sequelize.define('bill', {
  'id': {
    'type': Sequelize.STRING(16),
    'allowNull': false,
    'primaryKey': true,
    'field': 'id'
  },
  'url': {
    'type': Sequelize.STRING(7),
    'allowNull': true,
    'field': 'url'
  },
  'expire': {
    'type': Sequelize.DATE,
    'allowNull': true,
    'field': 'expire'
  },
  'discount': {
    'type': Sequelize.DECIMAL(8, 2),
    'allowNull': false,
    'field': 'discount'
  },
  'shipCost': {
    'type': Sequelize.DECIMAL(8, 2),
    'allowNull': false,
    'field': 'ship_cost'
  },
  'net': {
    'type': Sequelize.DECIMAL(16, 2),
    'allowNull': false,
    'field': 'net'
  },
  'note': {
    'type': Sequelize.STRING(1000),
    'allowNull': true,
    'field': 'note'
  },
  'printTagDate': {
    'type': Sequelize.DATE,
    'allowNull': true,
    'field': 'expire'
  },
  'shippingRefCode': {
    'type': Sequelize.STRING(255),
    'allowNull': true,
    'field': 'shipping_ref_code'
  },
  'billType': {
    'type': Sequelize.STRING(20),
    'allowNull': false,
    'field': 'bill_type'
  },
  'billOfferType': {
    'type': Sequelize.STRING(45),
    'allowNull': false,
    'field': 'bill_offer_type'
  },
  'currentState': {
    'type': Sequelize.STRING(45),
    'allowNull': false,
    'field': 'current_state'
  },
  'shipmentTimestamp': {
    'type': Sequelize.DATE,
    'allowNull': true,
    'field': 'shipment_timpstamp'
  },
  'flagBillSeen': {
    'type': Sequelize.INTEGER(4),
    'allowNull': false,
    'field': 'flag_bill_seen'
  },
  'status': {
    'type': Sequelize.INTEGER(4),
    'allowNull': false,
    'field': 'status'
  },
  'createBy': {
    'type': Sequelize.INTEGER(10).UNSIGNED,
    'allowNull': false,
    'field': 'create_by_sellsuki_user_id'
  },
  'updateBy': {
    'type': Sequelize.INTEGER(10).UNSIGNED,
    'allowNull': false,
    'field': 'update_by_sellsuki_user_id'
  },
  'createTime': {
    'type': Sequelize.INTEGER(10),
    'allowNull': false,
    'field': 'update_by_sellsuki_user_id'
  },
  'updateTime': {
    'type': Sequelize.INTEGER(10),
    'allowNull': false,
    'field': 'update_by_sellsuki_user_id'
  },
  'currencyId': {
    'type': Sequelize.INTEGER(10).UNSIGNED,
    'allowNull': false,
    'field': 'update_by_sellsuki_user_id'
  },
  'storeId': {
    'type': Sequelize.INTEGER(10).UNSIGNED,
    'allowNull': false,
    'field': 'update_by_sellsuki_user_id'
  },
  'storeChannelType': {
    'type': Sequelize.STRING(45),
    'allowNull': false,
    'field': 'store_channel_type'
  },
  'customerName': {
    'type': Sequelize.STRING(100),
    'allowNull': true,
    'field': 'customer_name'
  },
  'customerShippingName': {
    'type': Sequelize.STRING(100),
    'allowNull': true,
    'field': 'customer_shipping_name'
  },
  'customerAddress': {
    'type': Sequelize.STRING(255),
    'allowNull': true,
    'field': 'customer_address'
  },
  'customerSubDistrict': {
    'type': Sequelize.STRING(100),
    'allowNull': true,
    'field': 'customer_sub_district'
  },
  'customerDistrictCity': {
    'type': Sequelize.STRING(100),
    'allowNull': true,
    'field': 'customer_district_city'
  },
  'customerStateProvince': {
    'type': Sequelize.STRING(100),
    'allowNull': true,
    'field': 'customer_state_province'
  },
  'customerAreaCode': {
    'type': Sequelize.STRING(10),
    'allowNull': true,
    'field': 'customer_area_code'
  },
  'customerPostCode': {
    'type': Sequelize.STRING(10),
    'allowNull': true,
    'field': 'customer_post_code'
  },
  'customerCountry': {
    'type': Sequelize.STRING(45),
    'allowNull': true,
    'field': 'customer_country'
  },
  'customerTel': {
    'type': Sequelize.STRING(100),
    'allowNull': true,
    'field': 'customer_tel'
  },
  'customerEmail': {
    'type': Sequelize.STRING(50),
    'allowNull': true,
    'field': 'customer_email'
  },
  'customerPictureCredential': {
    'type': Sequelize.STRING(255),
    'allowNull': true,
    'field': 'customer_picture_credential'
  },
  'storeOfferId': {
    'type': Sequelize.BIGINT(20).UNSIGNED,
    'allowNull': true,
    'field': 'store_offer_id'
  },
  'flagClosedBill': {
    'type': Sequelize.INTEGER(4),
    'allowNull': false,
    'field': 'flag_closed_bill'
  },
  'stockTimestamp': {
    'type': Sequelize.DATE,
    'allowNull': true,
    'field': 'stock_timestamp'
  },
  'cacheShippingType': {
    'type': Sequelize.STRING(255),
    'allowNull': true,
    'field': 'cache_shipping_type'
  },
  'concatWarehouse': {
    'type': Sequelize.STRING(100),
    'allowNull': false,
    'field': 'concat_timestamp'
  },
  'prepareShipmentTimestamp': {
    'type': Sequelize.DATE,
    'allowNull': true,
    'field': 'prepare_shipment_timestamp'
  },
  'notifyShipmentTimestamp': {
    'type': Sequelize.DATE,
    'allowNull': true,
    'field': 'notify_shipment_timestamp'
  }
}, {
  'tableName': 'bill',
  'freezeTableName': true,
  'underscored': true,  
  'timestamps': true,
  'createAt': 'create_time',
  'updateAt': 'update_time'
})

Bill.fetchBills = async function (params) {
  params.where.current_state = params.where.current_state || 'asked'
  params.where.prepare_shipment_timestamp = (parseInt(params.where.prepared) === 1) ? 'NOT NULL' : (parseInt(params.where.prepared) === 0) ? 'NULL' : null
  params.where.stock_timestamp = (parseInt(params.where.deducted) === 1) ? 'NOT NULL' : (parseInt(params.where.deducted) === 0) ? 'NULL' : null
  params.where.shipment_timestamp = (parseInt(params.where.shipped) === 1) ? 'NOT NULL' : (parseInt(params.where.shipped) === 0) ? 'NULL' : null
  params.where.is_expired = params.where.expire
  params.where.expire = params.where.expire ? 'NOW()' : null
  const queryBinding = [{
    prefix: 'bp',
    field: 'store_payment_channel_id',
    condition: '=',
    value: params.where.store_payment_channel_id
  }, {
    prefix: 'bill',
    field: 'store_id',
    condition: '=',
    value: params.where.store_id
  }, {
    prefix: 'bill',
    field: 'store_channel_type',
    condition: '=',
    quote: true,
    value: params.where.store_channel_type
  }, {
    prefix: 'bill',
    field: 'current_state',
    condition: params.where.current_state === 'asked' ? '!=' : '=',
    quote: true,
    value: params.where.current_state
  }, {
    prefix: 'bill',
    field: 'prepare_shipment_timestamp',
    condition: 'IS',
    value: params.where.shipment_timestamp
  }, {
    prefix: 'bill',
    field: 'stock_timestamp',
    condition: 'IS',
    value: params.where.stock_timestamp
  }, {
    prefix: 'bill',
    field: 'shipment_timestamp',
    condition: 'IS',
    value: params.where.shipment_timestamp
  }, {
    prefix: 'bill',
    field: 'flag_closed_bill',
    condition: '=',
    value: params.where.flag_closed_bill
  }, {
    prefix: 'bill',
    field: 'expire',
    condition: params.where.is_expired === 1 ? '>' : '<',
    value: params.where.expire
  }, {
    prefix: 'sort',
    field: 'by',
    condition: '',
    value: 'bill.' + params.otherOptions.sort
  }, {
    prefix: 'order',
    field: 'by',
    condition: '',
    value: params.otherOptions.order
  }, {
    prefix: 'limit',
    field: 'value',
    condition: '',
    value: params.otherOptions.limit
  }, {
    prefix: 'offset',
    field: 'value',
    condition: '',
    value: params.otherOptions.offset
  }]
  
  const {bill, bp, sort, order, limit, offset} = dbUtil.createWhereCondition(queryBinding)
  // const bindOption = dbUtil.createBindOption(params)
  // get only lastest bill psyment
  let sql = `SELECT DISTINCT bill.*,
              COALESCE(st.logistic_group, 'other') as logistic_group, 
              COALESCE(btpl.logistic_type, 'other') as logistic_type, 
              btpl.*,
              cb.customer_id,scc.ref_code,
              GROUP_CONCAT(bps.cache_product_name SEPARATOR ':;:') as cache_product_name,
              GROUP_CONCAT(bps.amount SEPARATOR ':;:') as sku_amount,
              GROUP_CONCAT(ps.code SEPARATOR ':;:') as  product_sku_id,
              GROUP_CONCAT(bps.cache_concat_options SEPARATOR ':;:') as cache_concat_options
              FROM (SELECT bill.*,
                bp.attached_slip,bp.cache_payment_channel_logo,
                bp.date,
                bp.amount,
                bp.cache_payment_channel_name,
                bp.cache_store_payment_channel_credential
                FROM bill use index(status_index)
                JOIN bill_payment bp 
                ON bp.bill_id = bill.id
                  AND ${bill.store_id}
                  AND ${bp.store_payment_channel_id}
                LEFT JOIN bill_payment bp2 
                ON bp.bill_id = bp2.bill_id AND bp.id < bp2.id
                WHERE bill.status = 1
                AND bp2.bill_id IS NULL
                AND ${bill.store_channel_type}
                AND ${bill.current_state}
                AND ${bill.prepare_shipment_timestamp}
                AND ${bill.stock_timestamp}
                AND ${bill.shipment_timestamp}
                AND ${bill.flag_closed_bill}
                AND ${bill.expire}) as bill
              LEFT JOIN customer_bill as cb ON cb.bill_id = bill.id
              LEFT JOIN store_customer_contact as scc ON cb.customer_id = scc.id
              LEFT JOIN bill_third_party_logistic as btpl ON bill.id = btpl.bill_id
              LEFT JOIN shipping_type as st ON btpl.logistic_type = st.type
              LEFT JOIN bill_product_sku bps ON bill.id = bps.bill_id
              LEFT JOIN product_sku ps ON bps.product_sku_id = ps.id
              GROUP BY bill.id
              ORDER BY ${sort.by} ${order.by}
              LIMIT ${limit.value}
              OFFSET ${offset.value}`

  let results = await sequelize.query(sql, { type: sequelize.QueryTypes.SELECT })
  return results
}

Bill.fetchBillsCount = async function (params) {
  params.where.current_state = params.where.current_state || 'asked'
  params.where.prepare_shipment_timestamp = (parseInt(params.where.prepared) === 1) ? 'NOT NULL' : (parseInt(params.where.prepared) === 0) ? 'NULL' : null
  params.where.stock_timestamp = (parseInt(params.where.deducted) === 1) ? 'NOT NULL' : (parseInt(params.where.deducted) === 0) ? 'NULL' : null
  params.where.shipment_timestamp = (parseInt(params.where.shipped) === 1) ? 'NOT NULL' : (parseInt(params.where.shipped) === 0) ? 'NULL' : null
  params.where.is_expired = params.where.expire
  params.where.expire = params.where.expire ? 'NOW()' : null

  const queryBinding = [{
    prefix: 'bp',
    field: 'store_payment_channel_id',
    condition: '=',
    value: params.where.store_payment_channel_id
  }, {
    prefix: 'bill',
    field: 'store_id',
    condition: '=',
    value: params.where.store_id
  }, {
    prefix: 'bill',
    field: 'store_channel_type',
    condition: '=',
    quote: true,
    value: params.where.store_channel_type
  }, {
    prefix: 'bill',
    field: 'current_state',
    condition: params.where.current_state === 'asked' ? '!=' : '=',
    quote: true,
    value: params.where.current_state
  }, {
    prefix: 'bill',
    field: 'prepare_shipment_timestamp',
    condition: 'IS',
    value: params.where.prepare_shipment_timestamp
  }, {
    prefix: 'bill',
    field: 'stock_timestamp',
    condition: 'IS',
    value: params.where.stock_timestamp
  }, {
    prefix: 'bill',
    field: 'shipment_timestamp',
    condition: 'IS',
    value: params.where.shipment_timestamp
  }, {
    prefix: 'bill',
    field: 'flag_closed_bill',
    condition: '=',
    value: params.where.flag_closed_bill
  }, {
    prefix: 'bill',
    field: 'expire',
    condition: params.where.is_expired === 1 ? '>' : '<',
    value: params.where.expire
  }]

  const {bill, bp} = dbUtil.createWhereCondition(queryBinding)

  let sql = `SELECT COUNT(1) as count
                FROM bill use index(status_index)
                JOIN bill_payment bp 
                ON bp.bill_id = bill.id
                  AND ${bill.store_id}
                  AND ${bp.store_payment_channel_id}
                LEFT JOIN bill_payment bp2 
                ON bp.bill_id = bp2.bill_id AND bp.id < bp2.id
                WHERE bill.status = 1
                AND bp2.bill_id IS NULL
                AND ${bill.store_channel_type}
                AND ${bill.current_state}
                AND ${bill.prepare_shipment_timestamp}
                AND ${bill.stock_timestamp}
                AND ${bill.shipment_timestamp}
                AND ${bill.flag_closed_bill}
                AND ${bill.expire}`

  let count = await sequelize.query(sql, { type: sequelize.QueryTypes.SELECT })
  console.log(count)
  return count
}

module.exports = Bill
