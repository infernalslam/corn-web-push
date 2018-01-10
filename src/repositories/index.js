const product = require('./Product')
const {Op, QueryTypes} = require('./dbContext')

module.exports = {
  product,
  Op,
  QueryTypes
}