const exampleController = require('../controllers/example')
const cronController = require('../controllers/web-noti/index')

module.exports = {
  example: [
    {
      methods: 'GET',
      path: '/',
      controller: exampleController.get
    },
    // {
    //   methods: 'GET',
    //   path: '/corn',
    //   controller: cronController.cronWebPush
    // },
  ]
}
