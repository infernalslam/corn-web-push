const userRef = require('../../library/firestore/config')

module.exports = async function (req, res) {
  return new Promise((resolve, reject) => {
    resolve(
      userRef.init().doc(req.params.storeid).get()
        .then(doc => {
          if (!doc.exists) {
            console.log('storeid does not exists -> No such document!')
            return res.send('unsuccess')
          } else {
            console.log('Document data:', doc.data().playerId)
            console.log('storeid already exists -> success')
            return res.send('success')
          }
        })
        .catch(err => {
          console.log('Error getting document', err)
        })
    )
  })
}
