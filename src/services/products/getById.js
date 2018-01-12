const model = require('../../repositories')
const tranformDataUtil = require('../../utils/tranformData')
const {db} = require('../../utils/constant')
module.exports = async function (id, storeId) {
  let params = {
    where: {
      store_id: storeId,
      id: id
      },
    otherOptions: {
      sort: db.sort,
      order: db.order,
      limit: db.limit,
      offset: db.offset
    }
  }
  let productData = await model.product.fetchWithphotoAndSku(params)
  productData.rows = tranformDataUtil.groupBy(productData.rows, 'id')
  return productData

}


