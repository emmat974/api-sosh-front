const jwt = require('jsonwebtoken')

function generateToken(userId) {
    return jwt.sign({ id: userId }, process.env.JWT_SECRET, {
        expiresIn: '24h'
    })
}

module.exports = { generateToken }