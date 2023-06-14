const jwt = require('jsonwebtoken')

const authMiddleware = (req, res, next) => {
    const token = req.headers['authorization'] ? req.headers['authorization'].split(" ")[1] : null

    if (token == null) {
        return res.status(401).json({ message: "No login" })
    }

    jwt.verify(token, process.env.JWT_SECRET, (err, user) => {
        if (err) {
            return res.status(403).json({ message: "Token expired" })
        }
        req.user = user
        next()
    })
}

module.exports = authMiddleware