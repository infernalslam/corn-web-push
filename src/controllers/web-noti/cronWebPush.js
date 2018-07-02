// const { Bill } = require('../../response/models')
const { webPushNotification } = require('../../services/web-noti')

module.exports = async function (req, res) {
  var usersNotDone = await webPushNotification.getUserNotComplete()
  const userCollections = await webPushNotification.setDataStoreCollections(usersNotDone)
  const usersSellsuki = await webPushNotification.getUserFromSellsuki(userCollections.storeIds)

  usersSellsuki.results.forEach((user, i) => {
    var stage = webPushNotification.getStage(user)
    var date = new Date()
    webPushNotification.updateDataToFireStore(userCollections.data[i], user, stage, date)
  })
  
  usersNotDone = await webPushNotification.getUserNotComplete()
  usersNotDone.forEach((user) => {
    webPushNotification.pushNotification(user)
  })
  return {success: 1, message: 'success'}
}
