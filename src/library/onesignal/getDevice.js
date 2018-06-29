const axios = require('axios')

module.exports = async function (playerId) {
  return new Promise((resolve, reject) => {
    resolve(
      axios.get('https://onesignal.com/api/v1/players/' + playerId + '?app_id=17056444-a80b-40d4-9388-1a9a751b0f31')
        .then(function (response) {
          return response.data
        })
        .catch(function (error) {
          console.log(error)
        })
    )
  })
}
