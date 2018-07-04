const userRef = require('./config')

module.exports = async function (storeId, data) {
  userRef
    .init()
    .doc(storeId)
    .update(data)

  return {}
}


