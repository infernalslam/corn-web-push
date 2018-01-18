const { ProductSku } = require('../../response/models')
const { getSkuById } = require('../../services/products')

module.exports = async function (req, res) {
  const { id, skuId } = req.params
  const productData = await getSkuById(id, skuId, req.auth.storeId)
  let response = {}
  response.data = new ProductSku(productData.rows)
  res.send(response)
}

