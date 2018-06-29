// const model = require('../../repositories')
// const { db } = require('../../utils/constant')
module.exports = async function (storeId) {
  userRef
    .doc(storeId)
    .delete()
  return {}
}


