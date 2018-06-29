// const model = require('../../repositories')
// const { db } = require('../../utils/constant')
const userRef = require('./config')

module.exports = async function (storeId, data) {
  userRef
    .init()
    .doc(storeId)
    .set(data)
    //Add .then and return status success or fail
  return {}
}


