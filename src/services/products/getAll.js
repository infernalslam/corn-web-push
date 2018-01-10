const model = require('../../repositories')
const tranformDataUtil = require('../../utils/tranformData')
module.exports = async function (limit, offset, sort, order, storeId, status, name, productCode, skuCode) {
  let params = {
    where: {
      store_id: storeId,
      product_code: productCode,
      sku_code: skuCode,
      name: name,
      status: status || 0
      },
    otherOptions: {
      sort: sort || 'id',
      order: order || 'DESC',
      limit: limit || 50,
      offset: offset || 0
    }
  }
  let productData = await model.product.fetchWithphotoAndSku(params)
  productData.rows = tranformDataUtil.groupBy(productData.rows, 'id')
  return productData

}


