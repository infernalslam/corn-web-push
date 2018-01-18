const { Bill } = require('../../response/models')
// const { getAll } = require('../../services/bill')

module.exports = async function (req, res) {
  // const { limit, offset, sort, order, status, name, productCode, skuCode } = req.query
  // const productData = await getAll(parseInt(limit), parseInt(offset), sort, order, req.auth.storeId, status, name, productCode, skuCode )
  const { id } = req.params
  let response = {}
  console.log(id)
  response.data = new Bill([{ id: '123' }, { id: '456' }])
  response.count = 20
  res.send(response)
}
