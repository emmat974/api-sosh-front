const consommation = require('../models/consommation')

const consommationController = {
    get: (req, res) => {
        try {
            consommation.get(req.user.id).then((result) => {
                res.status(200).json(result[0])
            })
        } catch (err) {
            console.error(err)
        }
    }
}

module.exports = consommationController