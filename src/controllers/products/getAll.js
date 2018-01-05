const httpError = require('../../utils/httpError')

const { getAll } = require('../../services/products')
module.exports = async function (req,res,next) {
  const {limit, offset} = req.query
  if(!limit || !offset) {
    throw httpError(400, 'Bad Request')
  }
  const [err, productData] = await getAll(parseInt(limit), parseInt(offset))
  res.send(productData)
}