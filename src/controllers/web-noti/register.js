// const firestore  = require('../../library/firestore')
const { register } = require('../../services/web-noti')
module.exports = async function (req, res) {
  const updateTime = new Date()
  let hasDataFirestore = await register.checkPlayerFirestore(req.params.storeid)
  if (!hasDataFirestore) {
    console.log(req.params.allow)
    console.log(req.params.storeid)
    register.createNewUser(req.params.storeid, req.params.playerid, req.params.allow, updateTime)
  }
}