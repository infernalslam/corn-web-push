const { getUserByStoreId } = require('../../library/firestore')
const { getDevice } = require('../../library/onesignal')
const { getUser } = require('../../library/sellsuki')
const { transferData } = require('../web-noti/')

module.exports = {
  checkPlayerFirestore: async function(storeId) {
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
    console.log('isAllow: ', isAllow)
    transferData(storeId, playerId, isAllow, '', '', updateTime, updateTime, userOneSignal, userSellsuki)
  }
}
