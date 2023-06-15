const userModel = require('../models/user')
const { generateToken } = require('../utils/token')

const login = async (req, res) => {
    try {
        const { username, password } = req.body
        userModel.login(username).then((result) => {
            if (password == result[0].password) {
                res.status(200).json({ token: generateToken(result[0].id) })
                return;
            } else {
                res.status(401).json({ message: `L'adresse email ou le mot de passe est incorrect` })
                return;
            }
        }).catch(() => {
            res.status(401).json({ message: `L'adresse email ou le mot de passe est incorrect` })
            return;
        })
    } catch (err) {
        console.error(err)
    }
}

module.exports = login 