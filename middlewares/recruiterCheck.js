

async function recruiterCheck(req, res, next) {
    if(req.user.role !== "recruiter") {
        return res.status(403).json({
            success : false,
            message : "Access denied"
        })
    }
    next()
}

module.exports = {recruiterCheck}