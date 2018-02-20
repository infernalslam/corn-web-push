const exampleController = require('../controllers/example')

module.exports = {
  example: [
    {
      methods: 'GET',
      path: '/',
      controller: exampleController.get
    },
  ]
}
