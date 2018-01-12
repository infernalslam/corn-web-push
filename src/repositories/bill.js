const {sequelize, Sequelize, dbUtil} = require('./dbContext')
const Bill = sequelize.define('bill', {
    'id': {
      'type': Sequelize.STRING(16),
      'allowNull': false,
      primaryKey: true,
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
    "timestamps": true,
    "createAt": "create_time",
    "updateAt": "update_time"
  })

  module.exports = Bill