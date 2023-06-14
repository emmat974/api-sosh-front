const option = require('../models/options')

const optionController = {
    get: (req, res) => {
        try {
            option.get(req.user.id).then((result) => {
                res.status(200).json(result[0])
            })
        } catch (err) {
            console.error(err)
        }
    }
}

module.exports = optionController