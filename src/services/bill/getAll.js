const model = require('../../repositories')
const { db } = require('../../utils/constant')
module.exports = async function (limit, offset, sort, order, payload) {
  let { storeId, storePaymentChannelId, storeChannelType, currentState, prepared, deducted, shipped, flagClosedBill, expire } = payload
  let params = {
    where: {
      store_id: storeId,
      store_payment_channel_id: storePaymentChannelId,
      store_channel_type: storeChannelType,
      current_state: currentState,
      prepared: prepared || null,
      deducted: deducted || null,
      shipped: shipped || null,
      flag_closed_bill: flagClosedBill || 0,
      expire: expire || null
    },
    otherOptions: {
      sort: sort || db.sort,
      order: order || db.order,
      limit: limit || db.limit,
      offset: offset || db.offset
    }
  }

  let bills = await model.bill.fetchBills(params)
  let billCount = await model.bill.fetchBillsCount(params)

  return {
    data: bills,
    count: billCount
  }
}


