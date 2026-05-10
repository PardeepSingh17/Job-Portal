

async function isLogin(req, res) {
    try {
        res.status(200).json({
            success : true,
            message : "User is logged in."
        })
    } catch (err) {
        return res.status(500).json({
            success : false,
            message : "Something went wrong while checking for login."
        })
    }
}

module.exports = {isLogin}