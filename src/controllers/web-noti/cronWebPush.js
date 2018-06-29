// const { Bill } = require('../../response/models')
const { webPushNotification } = require('../../services/web-noti')

module.exports = async function (req, res) {
  console.log('cronWebPush')

  var usersNotDone = await webPushNotification.getUserNotComplete()
  const store = await webPushNotification.getStringStore(usersNotDone)
  const usersSellsuki = await webPushNotification.getUserFromSellsuki(store)
  
  usersSellsuki.results.forEach((user) => {
    var stage = webPushNotification.getStage(user)
    var date = new Date()
    webPushNotification.updateDataToFireStore(user, stage, date)
  })
  
  usersNotDone = await webPushNotification.getUserNotComplete()
  usersNotDone.forEach((user) => {
    webPushNotification.pushNotification(user)
  })
  return {success: 1, message: 'success'}
}
