const { cronController, uiController, createUserToFirestore } = require('../controllers/web-noti')

module.exports = {
  webPushNotification: [
    {
      methods: 'GET',
      path: '/cron',
      controller: cronController
    },
  ],
  ui: [
    {
      methods: 'GET',
      path: '/',
      controller: uiController
    }
  ],
  register: [
    {
      methods: 'GET',
      path: '/:storeid/:playerid/:allow',
      controller: createUserToFirestore
    }
  ]
}
