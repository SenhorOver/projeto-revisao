const express = require('express')
const path = require('path')

const routes = require('./routes/index')

const app = express()

//ejs template engine
app.set('view engine', 'ejs')
app.set('views', path.join(__dirname, 'views'))

//Public files
app.use(express.static(path.resolve(__dirname, 'public')))

//Routes
app.use('/', routes)

//Server init
const port = process.env.PORT || 8080
app.listen(port, () => console.log('server connected to port', port))