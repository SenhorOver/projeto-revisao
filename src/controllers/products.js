const ProductsModel = require('../models/products')


function index(req, res){
    const {c} = req.query
    res.render('register', {
        title: 'Registro de Produtos',
        cadastrado: c,
    })
}

function register(req, res){
    const {name, price, stock} = req.body

    const register = new ProductsModel({
        name,
        price,
        stock,
    })

    register.save()

    res.redirect('/register?c=1')
}

async function list(req, res){
    const products = await ProductsModel.find()

    res.render('list', {
        title: 'Listagem dos Produtos registrados',
        products
    })
}

module.exports = {
    index,
    register,
    list,
}