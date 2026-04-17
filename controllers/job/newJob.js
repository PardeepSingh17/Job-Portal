const { Job } = require("../../models/job")


async function newJob(req, res) {
    try{
        let {title , description , salary , location , company} = req.body
        let createdBy = req.user.id

        await Job.create({title , description , salary , location , company , createdBy})
        return res.status(201).json({
            success : true,
            message : "Job listed successfully"
        })
    } catch(err) {
        return res.status(500).json({
            success : false,
            message : err.message
        })
    }
}

module.exports = {newJob}