const jwt = require("jsonwebtoken")

async function tokenVerify(req, res, next) {
    try {
        let authHeader = req.headers.authorization

        let token = authHeader && authHeader.split(' ')[1]

        if(!token) {
            return res.status(401).json({message : "Token not found"})
        }

        let decoded = jwt.verify(token , "default") 
        req.user = decoded;
        next()

    } catch(err) {
        return res.status(401).json({message : "Something went wrong while checking for token."})
    }
}

module.exports = {tokenVerify}