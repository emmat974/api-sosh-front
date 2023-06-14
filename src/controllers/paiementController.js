const paiement = require('../models/paiement')

const paiementController = {
    get: (req, res) => {
        try {
            paiement.get(req.user.id).then((result) => {
                res.status(200).json(result[0])
            })
        } catch (err) {
            console.error(err)
        }
    }
}

module.exports = paiementController