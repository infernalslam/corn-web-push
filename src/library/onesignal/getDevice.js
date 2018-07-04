const axios = require('axios')
const { ONESIGNAL } = require('../../config/constant')

module.exports = async function (playerId) {
  return new Promise((resolve, reject) => {
    resolve(
      axios.get('https://onesignal.com/api/v1/players/' + playerId + '?app_id=' + ONESIGNAL.APP_ID)
        .then(function (response) {
          return response.data
        })
        .catch(function (error) {
          console.log(error)
        })
    )
  })
}
