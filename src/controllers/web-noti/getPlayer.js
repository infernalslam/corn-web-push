const userRef = require('../../library/firestore/config')
module.exports = async function (req, res) {
  return new Promise((resolve, reject) => {
    resolve(
      userRef.init().doc(req.params.storeid).get()
        .then(doc => {
          if (!doc.exists) {
            console.log('No such document!')
            return 'unsuccess'
          } else {
            console.log('Document data:', doc.data().playerId)
            return 'success'
          }
        })
        .catch(err => {
          console.log('Error getting document', err)
        })
    )
  })
}
