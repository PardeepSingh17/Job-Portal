const { Job } = require("../models/job")


async function isOwner(req, res, next) {
    try{
        let {id} = req.params
        let userId = req.user.id
        
        let job = await Job.findById(id)

        if(!job){
            return res.status(404).json({message : "Job not found"})
        }

        if(userId.toString() == job.createdBy.toString()){
            next()
        } else {
            return res.status(400).json({message : "Access denied , you are not owner of this job"})
        }
    }catch(err) {
        return res.status(500).json({message : "Something went wrong while checking for owner"})
    }
}

module.exports = {isOwner}