const client = require('../models/clients')

const clientController = {
    get: (req, res) => {
        try {
            client.get(req.user.id).then((result) => {
                res.status(200).json(result[0])
            })
        } catch (err) {
            console.error(err)
        }
    }
}

module.exports = clientController