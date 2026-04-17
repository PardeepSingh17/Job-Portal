const { Job } = require("../../models/job")


async function appliedJob(req, res) {
    try {
        let userId = req.user.id

        let appliedJobs = await Job.find({"applications.applicant" : userId})
        
        if(appliedJobs.length === 0) {
            return res.status(404).json({
                success : false,
                message : "No job applied yet"
            })
        }

        return res.status(200).json({
            success : true,
            appliedJobs
        })
    } catch (err) {
        return res.status(500).json({
            success : false,
            message : "Something went wrong while fetching applied job"
        })
    }
}

module.exports = {appliedJob}