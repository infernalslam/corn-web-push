const model = require('../../repositories')
const tranformDataUtil = require('../../utils/tranformData')
const {db} = require('../../utils/constant')
module.exports = async function (product_id, storeId) {
  let params = {
    where: {
      store_id: storeId,
      product_id: product_id
      },
    otherOptions: {
      sort: db.sort,
      order: db.order,
      limit: db.limit,
      offset: db.offset
    }
  }
  let skuData = await model.productSku.fetchProductSkus(params)
  return skuData

}


