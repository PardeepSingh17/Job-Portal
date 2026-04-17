
function fileCheck(req, res, next) {
    try{
        if(!req.file){
            return res.status(400).json({
                success : false,
                message : "Valid resume file required"
            })
        }

        next()
    }catch(err) {
        return res.status(500).json({
            success : false,
            message : "something went wrong while checking for file"
        })
    }
}

module.exports = {fileCheck}