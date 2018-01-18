const model = require('../../repositories')
const { db } = require('../../utils/constant')

module.exports = async function (storeId, userId, payload) {
  let transaction = await model.transaction({
    autocommit: false,
  })

  try {
    // create bill
    let billId = await generateBillId(storeId)
    let billData = createBillObject(storeId, userId, payload, billId)
    let bill = await model.bill.bulkCreate(billData, {
      transaction: transaction
    })

    // get product to create bill item
    let productSku = []

    // create bill item
    let billItemData = createBillItemObject(billId, productSku)
    let billItem = await model.billProductSku.bulkCreate(billItemData, {
      transaction: transaction
    })

    transaction.commit()
  } catch (err) {
    console.log(err)
    transaction.rollback()
    throw err
  }

  return {
    billId: billId
  }
}

function generateBillId (storeId) {

}

function createBillObject (storeId, userId, payload, billId) {
  
}

function createBillItemObject (billId, productSku) {

}
