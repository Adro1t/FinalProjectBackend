const express = require('express')
require('dotenv').config()
const db = require('./db/connection')
const bodyParser = require('body-parser')
const morgan = require('morgan')
const expressValidator = require('express-validator')
const CookieParser = require('cookie-parser')

const CategoryRoute = require('./route/categoryRoute')
const SubCategoryRoute = require('./route/subCategoryRoute')
const ProductRoute = require('./route/productRoute')
const UserRoute = require('./route/userRoute')
const OrderRoute = require('./route/orderRoute')


const app = express()

//middleware
app.use(bodyParser.json())
app.use(morgan('dev'))
app.use(expressValidator())
app.use(CookieParser())
app.use('/public/uploads', express.static('public/uploads'));

//route
app.use('/', CategoryRoute)
app.use('/', SubCategoryRoute)
app.use('/', ProductRoute)
app.use('/', UserRoute)
app.use('/', OrderRoute)


const port = process.env.PORT || 8000

app.listen(port, () => {
    console.log(`Server started on port ${port}`)
})