const httpError = require('../../utils/httpError')
const {Product} = require('../../response/models')
const { getAll } = require('../../services/products')
module.exports = async function (req,res,next) {
  const {limit, offset, sort, order, status, name, productCode, skuCode } = req.query
  const productData = await getAll(parseInt(limit), parseInt(offset), sort, order, req.auth.storeId, status, name, productCode, skuCode )
  console.log(productData)
  let response = {}
  response.data = new Product(productData.rows)
  response.count = productData.count
  res.send(response)
}