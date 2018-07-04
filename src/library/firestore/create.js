// const model = require('../../repositories')
// const { db } = require('../../utils/constant')
const userRef = require('./config')

module.exports = async function (storeId, data) {
  let result = null
  try {
    result = await userRef
      .init()
      .doc(storeId)
      .set(data)
      .then( function () {
        console.log('status is >>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>: success')
        return 'success'
      }).catch( function () {
        console.log('status is >>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>: unsuccess')
        return 'unsuccess'
      })
  } catch (e) {
    console.error(e)
  }
  return result
  //------------------------------------------------
  
  //Add .then and return status success or fail
  //return {}
}


