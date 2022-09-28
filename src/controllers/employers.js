const EmployersModel = require('../models/employers')
const {pwdCrypt} = require('../utils/pwdCrypt')


function index(req, res){
    const {c} = req.query

    res.render('registerEmployers', {
        title: 'Registro de funcionários',
        cadastrado: c,
    })
}

async function register(req, res){
    const {name, lastname, age, pwd} = req.body

    const newPwd = await pwdCrypt(pwd)

    const register = new EmployersModel({
        name,
        lastname,
        age,
        pwd: newPwd,
    })

    register.save()

    res.redirect('/registerEmployers?c=1')
}

module.exports = {
    index,
    register,
    list,
}