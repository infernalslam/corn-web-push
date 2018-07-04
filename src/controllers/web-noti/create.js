const firestore = require('../../library/firestore')
const onesignal = require('../../library/onesignal')
const { STAGE } = require('../../config/constant')

module.exports = async function (req, res) {
  var playerId = req.params.playerid
  var storeId = req.params.storeid
  var date = new Date()
  var oneSignalData = await onesignal.getDevice(playerId)

  return new Promise((resolve, reject) => {
    resolve(
        firestore.createData( storeId, { creatAt: date, 
          dataOneSignal: oneSignalData, 
          dataSellsuki: {},
          isComplete: false,
          playerId: playerId,
          stage: STAGE.PRODUCT,
          storeId: storeId,
          updateAt: date
        })
        .catch(err => {
          console.log('Error getting document', err)
        })
    )
  })
}