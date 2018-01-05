const model = require('../../repositories')
module.exports = async function (limit, offset) {
  return await model.product.findAndCountAll({
    limit: limit,
    offset: offset
  })
}