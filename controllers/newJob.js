const { Job } = require("../models/job")


async function newJob(req, res) {
    try{
        let {title , description , salary , location , company} = req.body
        let createdBy = req.user.id

        await Job.create({title , description , salary , location , company , createdBy})
        return res.status(201).json({message : "Job listed successfully"})
    } catch(err) {
        return res.status(500).json({message : "Something went wrong"})
    }
}

module.exports = {newJob}