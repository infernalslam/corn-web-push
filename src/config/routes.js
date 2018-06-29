const exampleController = require('../controllers/example')
const cronController = require('../controllers/web-noti')

module.exports = {
  example: [
    {
      methods: 'GET',
      path: '/',
      controller: exampleController.get
    }
  ],
  webPushNotification: [
    {
      methods: 'GET',
      path: '/cron',
      controller: cronController.cronWebPush
    },
  ]
}
