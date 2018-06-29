// const model = require('../../repositories')
// const { db } = require('../../utils/constant')
module.exports = async function (storeId, data) {
  userRef
    .doc(storeId)
    .set(data)
    //Add .then and return status success or fail
  return {}
}


