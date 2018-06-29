const cronController = require('../controllers/web-noti')

module.exports = {
  webPushNotification: [
    {
      methods: 'GET',
      path: '/cron',
      controller: cronController.cronWebPush
    },
  ]
}
