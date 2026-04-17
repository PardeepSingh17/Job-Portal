const { Job } = require("../../models/job")


async function deleteJob(req, res) {
    try {
        let {id} = req.params

        let jobToDlete = await Job.findByIdAndDelete(id)

        if(!jobToDlete) {
            res.status(404).json({
                success :false,
                message : "Job not found"
            })
        }

        return res.status(200).json({
            success : true,
            message : "Job deleted"
        })

    } catch (err) {
        return res.status(500).json({
            success : false,
            message : "Something went wrong while deleting."
        })
    }
}

module.exports = {deleteJob}