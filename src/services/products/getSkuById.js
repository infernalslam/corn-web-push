const model = require('../../repositories')
const tranformDataUtil = require('../../utils/tranformData')
const {db} = require('../../utils/constant')
module.exports = async function (productId, skuId, storeId) {
  let params = {
    where: {
      store_id: storeId,
      id: skuId,
      product_id: productId
      },
    otherOptions: {
      sort: db.sort,
      order: db.order,
      limit: db.limit,
      offset: db.offset
    }
  }
  let productData = await model.productSku.fetchProductSkus(params)
  return productData

}
