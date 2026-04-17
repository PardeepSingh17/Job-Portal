const jwt = require("jsonwebtoken")

async function tokenVerify(req, res, next) {
    try {
        let authHeader = req.headers.authorization

        let token = authHeader && authHeader.split(' ')[1]

        if(!token) {
            return res.status(401).json({
                success : false,
                message : "Token not found"
            })
        }

        let decoded = jwt.verify(token , process.env.JWT_SECRET) 
        req.user = decoded;
        next()

    } catch(err) {
        return res.status(401).json({
            success : false,
            message : "Something went wrong while checking for token."
        })
    }
}

module.exports = {tokenVerify}