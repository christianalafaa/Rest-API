const express = require('express')
const colors = require('colors')
const dotenv = require('dotenv').config()
const port = process.env.PORT || 3000
const connectDB = require('./config/db')
const Route = require('./routes/userRoutes')

connectDB()

const app = express()
const router = express.Router()

app.use(express.json());
app.use(express.urlencoded({ extended: false }))
app.use('/', Route(router))

app.listen(port, () => {
    console.log(`Server is running on port ${port}`)
})