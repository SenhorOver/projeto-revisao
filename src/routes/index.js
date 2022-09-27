const router = require('express').Router()

const IndexController = require('../controllers/index')
const ProductsController = require('../controllers/products')

// Main Page
router.get('/', IndexController.index)

// Register Procucts Page
router.get('/register', ProductsController.index)
router.post('/register/new', ProductsController.register)

// List Products Page
router.get('/list', ProductsController.list)

module.exports = router