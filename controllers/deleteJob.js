const { Job } = require("../models/job")


async function deleteJob(req, res) {
    try {
        let {id} = req.params

        await Job.findByIdAndDelete(id)
        return res.status(200).json({message : "Job deleted"})

    } catch (err) {
        return res.status(500).json({message : "Something went wrong while deleting."})
    }
}

module.exports = {deleteJob}