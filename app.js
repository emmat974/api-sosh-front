require('dotenv').config()

const express = require('express')
const bodyParser = require('body-parser')
const routes = require('./src/route')

const app = express()
const port = 3000

const cors = require('cors')
app.use(cors())

app.use(bodyParser.json())
app.use(express.urlencoded({ extended: true }))

app.use(routes)

app.listen(port, () => {
    console.log(`listen to ${port}`)
})