const { Job } = require("../../models/job")


async function applyJob(req , res) {
    try {
        let resumePath = req.file.path

        let {id} = req.params
        let userId = req.user.id

        let jobToBeApplied = await Job.findById(id)

        if(!jobToBeApplied) {
            return res.status(404).json({
                success : false,
                message : "Job not found"
            })
        }

        let alreadyApplied = jobToBeApplied.applications.some(
            application => application.applicant.toString() === userId.toString()
        )

        if (alreadyApplied) {
            return res.status(400).json({
                success : false,
                message : "You already applied to this job"
            })
        }

        jobToBeApplied.applications.push({applicant: userId , appliedAt : new Date() , resume : resumePath})

        await jobToBeApplied.save()

        return res.status(201).json({
            success : true,
            message : "Job applied successfully"
        })

    } catch (err) {
        return res.status(500).json({
            success : false,
            message : err.message
        })
    }
}

module.exports = {applyJob}