const cronController = require('./cronWebPush')
const uiController = require('./ui')
const getPlayerIdFireStore = require('./getPlayer')
const createUserToFirestore = require('./create')

module.exports = {
  cronController,
  uiController,
  getPlayerIdFireStore,
  createUserToFirestore
}
