const httpError = require('../../utils/httpError')
const { ProductSku } = require('../../response/models')
const { getSkus } = require('../../services/products')
module.exports = async function (req,res,next) {
  const { id } = req.params
  const skuData = await getSkus(id, req.auth.storeId)
  let response = {}
  response.data = new ProductSku(skuData.rows)
  response.count = skuData.count
  res.send(response)
}