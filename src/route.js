const express = require('express')

const route = express.Router()
const login = require('./controllers/userController')
const authMiddleware = require('./middleware/auth')

const forfaitController = require('./controllers/forfaitController')
const facturationController = require('./controllers/facturationController')
const consommationController = require('./controllers/consommationController')
const optionController = require('./controllers/optionController')
const paiementController = require('./controllers/paiementController')

route.get('/', (req, res) => {
    res.send({
        message: 'Hello world'
    })
})

// Forfait
route.get('/forfaits', authMiddleware, forfaitController.get)

//Facturation
route.get('/facturations', authMiddleware, facturationController.get)

//Consommation
route.get('/consommations', authMiddleware, consommationController.get)

//Option
route.get('/options', authMiddleware, optionController.get)

//Paiement
route.get('/paiement', authMiddleware, paiementController.get)

// Authentification
route.post('/login', login)

module.exports = route
