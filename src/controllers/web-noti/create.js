const firestore = require('../../library/firestore)
const {STAGE} = require('../../config/constant')

module.exports = async function (req, res) {
  return new Promise((resolve, reject) => {
    resolve(
        firestore.created(req.params.storeid, {creatAt: date
            , dataOneSignal: httpGet('https://onesignal.com/api/v1/players/' + playerIdCurrent + '?app_id=17056444-a80b-40d4-9388-1a9a751b0f31')
            , dataSellsuki: {}
            , isComplete: false
            , playerId: req.params.playerid
            , stage: STAGE.PRODUCT
            , storeId: req.params.storeid
            , updateAt: date})
        .catch(err => {
          console.log('Error getting document', err)
        })
    )
  })
}