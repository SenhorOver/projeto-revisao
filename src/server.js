const express = require('express')
const path = require('path')

const routes = require('./routes/index')
const database = require('./database/index')

const app = express()

//Connecting to database
database.connect()

//ejs template engine
app.set('view engine', 'ejs')
app.set('views', path.join(__dirname, 'views'))

//Public files
app.use(express.static(path.resolve(__dirname, 'public')))

//Routes
app.use('/', routes)

//404 Error - Not Found
app.use('/', (req, res) => {
    res.send('404 - Not Found')
})

//Server init
const port = process.env.PORT || 8080
app.listen(port, () => console.log('server connected to port', port))