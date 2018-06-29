// const model = require('../../repositories')
// const { db } = require('../../utils/constant')
module.exports = async function () {
  return new Promise((resolve, reject) => {
    resolve(
      userRef.where('stage', '!=', 'Done').get()
        .then((snapshot) => {
          return snapshot
        })
        .catch((err) => {
          console.log('Error getting not done stage', err)
        })
    )
  })
  // return {}
}