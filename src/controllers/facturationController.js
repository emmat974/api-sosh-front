const facturation = require('../models/facturations')

const facturationController = {
    get: (req, res) => {
        try {
            facturation.get(req.user.id).then((result) => {
                res.status(200).json(result[0])
            })
        } catch (err) {
            console.error(err)
        }
    }
}

module.exports = facturationController