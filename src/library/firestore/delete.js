// const model = require('../../repositories')
// const { db } = require('../../utils/constant')
const userRef = require('./config')

module.exports = async function (storeId) {
  userRef
    .init()
    .doc(storeId)
    .delete()
  return {}
}


