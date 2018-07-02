const userRef = require('./config')
module.exports = async function () {
  return new Promise((resolve, reject) => {
    resolve(//'183.88.225.55'
      userRef.init().doc('183.88.225.55').get()
        .then(doc => {
          if (!doc.exists) {
            console.log('No such document!')
          } else {
            console.log('Document data:', doc.data().playerId)
            //return doc.data().playerId
          }
        })
        .catch(err => {
          console.log('Error getting document', err)
        })
    )
  })
}

  