const express = require('express')

const route = express.Router()
const login = require('./controllers/userController')
const authMiddleware = require('./middleware/auth')

const forfaitController = require('./controllers/forfaitController')

route.get('/', (req, res) => {
    res.send({
        message: 'Hello world'
    })
})

// Forfait
route.get('/forfait', authMiddleware, forfaitController.get)

// Authentification
route.post('/login', login)

module.exports = route
