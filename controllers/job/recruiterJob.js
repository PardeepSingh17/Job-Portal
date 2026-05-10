const { Job } = require("../../models/job")

async function recruiterJobs(req, res) {
    try {
        recruiterId = req.user.id

        let recruiterJobs = await Job.find({createdBy : recruiterId})

        if(recruiterJobs.length < 1) {
            return res.status(404).json({
                success : false,
                message : "No Jobs Found"
            })
        }

        return res.status(200).json({
            success : true,
            message : recruiterJobs
        })
    } catch (err) {
        return res.status(500).json({
            success : false,
            message : "Something went wrong while fetching jobs for recruiter"
        })
    }
}

module.exports = {recruiterJobs}