// const { Bill } = require('../../response/models')
const { webPushNotification } = require('../../services/web-noti')
const { getUserByStoreId } = require('../../library/firestore')

module.exports = async function (req, res) {
  const usersNotDone = await webPushNotification.getUserNotComplete()
  const userCollections = await webPushNotification.setDataStoreCollections(usersNotDone)
  const usersSellsuki = await webPushNotification.getUserFromSellsuki(userCollections.storeIds)

  usersSellsuki.results.forEach((user, i) => {
    var stage = webPushNotification.getStage(user)
    var updateTime = new Date()
    webPushNotification.updateDataToFireStore(userCollections.data[i], user, stage, updateTime)
  })
  
  usersNotDone = await webPushNotification.getUserNotComplete()
  usersNotDone.forEach((user) => {
    webPushNotification.pushNotification(user)
  })
  return {
    success: 1, 
    message: 'success'
  }
}
