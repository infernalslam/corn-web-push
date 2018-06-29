const { firestore } = require('../../library/firestore/index')
const { sellsuki } = require('../../library/sellsuki/index')
const { STAGE } = require('../../config/constant')

module.exports = async function () {
  var str
  var allowUser = await firestore.getAllowUser()
  console.log('allowUser: ', allowUser)

  allowUser.forEach((collections) => {
    if (isFirst) {
      str += collections.data().storeId
      isFirst = false
    } else {
      str += ',' + collections.data().storeId
    }
  })

  var users = await sellsuki.getUser(str)
  console.log('userSellsuki: ', users)
  users.forEach((user) => {
    var stage
    
    if (user.count_product <= 1) {
      stage = STAGE.PRODUCT
    } else if (user.count_store_payment_channel === 0) {
      stage = STAGE.PAYMENT
    } else if (user.count_store_shipping_type <= 1) {
      stage = STAGE.SHIPPING
    } else {
      stage = STAGE.DONE
    }

    firestore
      .update(user.store_id, {
        dataSellsuki: user, 
        stage: stage
      })
  })

  return {}
}
