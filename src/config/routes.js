const productControllers = require('../controllers/products')

module.exports = {
  product: [
    {
      methods: 'GET',
      path: '/',
      controller: productControllers.getAll
    },
    // {
    //   methods: 'GET',
    //   path: '/:id',
    //   controller: productControllers.getById
    // }
  ]
}