const { getUserByStoreId, createData } = require('../../library/firestore')
const { getDevice } = require('../../library/onesignal')
const { getUser } = require('../../library/sellsuki')
const webPushNotification  = require('./webPushNotification')

module.exports = {
  checkPlayerFirestore: async function (storeId) {
    const result = await getUserByStoreId(storeId)
    if (!result) {
      return false
    } else { 
      return true
    }
  },
  
  createNewUser: async function (storeId, playerId, isAllow, updateTime) {
    let userOneSignal = await getDevice(playerId)
    let userSellsuki = await getUser(storeId)
    let data = webPushNotification.transferData(
      storeId, 
      playerId, 
      isAllow, 
      '', 
      '', 
      updateTime, 
      updateTime, 
      userOneSignal, 
      userSellsuki.data.results.results[0]
    )

    const resCreateData = await createData(storeId, data)
    return resCreateData
  }
}