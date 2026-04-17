const { JobSchemaValidation } = require("../validations");


function JobSchemaCheck(req, res, next) {
    try {
        const {error} = JobSchemaValidation.validate(req.body)

        if(error) {
            return res.status(400).json({
                success : false ,
                message : error.message
            })
        }

        next()

    }catch (err) {
        return res.status(500).json({
            success : false,
            message : "something went wrong while validation check"
        })
    }
    
}

module.exports = {JobSchemaCheck}