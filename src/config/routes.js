const productControllers = require('../controllers/products')

module.exports = {
  product: [{
    methods: 'GET',
    path: 'getAll',
    controller: productControllers.getAll
  }]
}