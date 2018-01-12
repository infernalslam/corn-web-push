const httpError = require('../../utils/httpError')
const { Product } = require('../../response/models')
const { getById } = require('../../services/products')
module.exports = async function (req,res,next) {
  const { id } = req.params
  const productData = await getById(id, req.auth.storeId)
  let response = {}
  response.data = new Product(productData.rows)
  res.send(response)
}