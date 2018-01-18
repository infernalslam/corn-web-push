const billController = require('../controllers/bill')
const billItemController = require('../controllers/billItem')

module.exports = {
  bill: [
    {
      methods: 'GET',
      path: '/',
      controller: billController.get
    },
    {
      methods: 'GET',
      path: '/:id',
      controller: billController.getById
    },
    {
      methods: 'POST',
      path: '/',
      controller: billController.create
    },
    {
      methods: 'PUT',
      path: '/',
      controller: billController.update
    },
    {
      methods: 'DELETE',
      path: '/:id',
      controller: billController.delete
    },
    {
      methods: 'GET',
      path: '/:id/items',
      controller: billItemController.get
    },
    {
      methods: 'POST',
      path: '/:id/items',
      controller: billItemController.create
    },
    {
      methods: 'PUT',
      path: '/:id/items/:itemId',
      controller: billItemController.update
    },
    {
      methods: 'DELETE',
      path: '/:id/items/:itemId',
      controller: billItemController.delete
    }
  ]
}
