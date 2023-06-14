const forfait = require('../models/forfait')

const forfaitController = {
    get: (req, res) => {
        try {
            forfait.get(req.user.id).then((result) => {
                res.status(200).json(result[0])
            })
        } catch (err) {
            console.error(err)
        }
    }
}

module.exports = forfaitController