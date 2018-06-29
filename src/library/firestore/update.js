// const model = require('../../repositories')
// const { db } = require('../../utils/constant')
module.exports = async function (storeId, data) {
  userRef
    .doc(storeId)
    .update(data)
  return {}
}


