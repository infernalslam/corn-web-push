// const { Bill } = require('../../response/models')
const { getAll } = require('../../services/bill')

module.exports = async function (req, res) {
  const { limit, offset, sort, order } = req.query
  const payload = {
    storeId: req.query.storeId || 1, 
    storePaymentChannelId: req.query.storePaymentChannelId, 
    storeChannelType: req.query.storeChannelType, 
    currentState: req.query.currentState, 
    prepared: req.query.prepared, 
    deducted: req.query.deducted, 
    shipped: req.query.shipped, 
    flagClosedBill: req.query.flagClosedBill, 
    expire: req.query.expire
  }
  let results = await getAll(limit, offset, sort, order, payload)
  let response = {
    data: results.data,
    count: results.count
  }
  res.send(response)
}
