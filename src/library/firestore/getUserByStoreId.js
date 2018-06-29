module.exports = async function (storeId) {
  return new Promise((resolve, reject) => {
    resolve(
      userRef.doc(storeId).get()
        .then(doc => {
          if (!doc.exists) {
            console.log('No such document!')
          } else {
            console.log('Document data:', doc.data())
            return doc.data()
          }
        })
        .catch(err => {
        console.log('Error getting document', err)
        })
    )
  })
}