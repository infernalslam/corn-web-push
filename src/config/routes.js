const cronController = require('../controllers/web-noti')
const registerController = require('../controllers/web-noti')
const getPlayerIdFireStore = require('../controllers/web-noti')
const CreateUserToFirestore = require('../controllers/web-noti')

module.exports = {
  webPushNotification: [
    {
      methods: 'GET',
      path: '/cron',
      controller: cronController.cronWebPush
    },
  ],
  webnoti: [
    {
      methods: 'GET',
      path: '/',
      controller: registerController.register
    }
  ],
  getPlayerId: [
    {
      methods: 'GET',
      path: '/:storeid',
      controller: getPlayerIdFireStore.getPlayer
    }
  ],
  register: [
    {
      methods: 'GET',
      path: '/:storeid/:playerid',
      controller: CreateUserToFirestore.create
    }
  ],
}
