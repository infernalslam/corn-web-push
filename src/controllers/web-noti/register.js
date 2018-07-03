const { getUserByStoreId } = require('../../library/firestore')

module.exports = async function (req, res) {
  const updateTime = new Date()

  let hasDataFirestore = await checkPlayerFirestore(req.params.storeid)
  if (!hasDataFirestore) {
    console.log(req.params.allow)
    createNewUser(req.params.storeid, req.params.playerid, req.params.allow, updateTime)
  }
}