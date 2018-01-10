const httpError = require('../../utils/httpError')
const { ProductSku } = require('../../response/models')
const { getById } = require('../../services/products')
module.exports = async function (req,res,next) {
  const { id } = req.params
  const productData = await getById(id, req.auth.storeId)
  let response = {}
  response.data = new ProductSku(productData.rows[0].child)
  res.send(response)
}