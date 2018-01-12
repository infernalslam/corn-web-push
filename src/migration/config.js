module.exports = {
  dbConfig: {
    host: '192.168.1.254',
    username: 'root',
    password: '',
    schema: 'sellsukinew'
  },
  dbTables: [
    // 'Bill',
    'Bill_Coupon',
    'Bill_Debt_Balance',
    'Bill_Offer_Type',
    'Bill_Payment',
    'Bill_Product_Sku',
    'Bill_Product_Sku_Deduct_Stock',
    'Bill_Promotion',
    'Bill_Promotion_Sku',
    'Bill_Seller',
    'Bill_State',
    'Bill_State_History',
    'Bill_Third_Party_Logistic',
    'Bill_Type'
  ],
  outputPath: './src/repositories/'
}