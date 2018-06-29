// const { Bill } = require('../../response/models')
const { updateFirestore } = require('../../services/web-noti/updateFirestore')

module.exports = async function (req, res) {
  updateFirestore()

  const response = notification()
  res.send(response)
}
