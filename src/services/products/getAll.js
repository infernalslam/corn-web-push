const model = require('../../repositories')
const tranformDataUtil = require('../../utils/tranformData')
const {db} = require('../../utils/constant')
module.exports = async function (limit, offset, sort, order, storeId, status, name, productCode, skuCode) {
  console.log(db)
  let params = {
    where: {
      store_id: storeId,
      product_code: productCode,
      sku_code: skuCode,
      name: name,
      status: status || 0
    },
    otherOptions: {
      sort: sort || db.sort,
      order: order || db.order,
      limit: limit || db.limit,
      offset: offset || db.offset
    }
  }
  let productData = await model.product.fetchWithphotoAndSku(params)
  productData.rows = tranformDataUtil.groupBy(productData.rows, 'id')
  return productData
}


