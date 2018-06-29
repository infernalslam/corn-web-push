// const model = require('../../repositories')
// const { db } = require('../../utils/constant')
const userRef = require('./config')

module.exports = async function (key, operation, value) {
  return new Promise((resolve, reject) => {
    resolve(
      userRef.init().where(key, operation, value).get()
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