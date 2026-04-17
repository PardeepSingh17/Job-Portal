const { Job } = require("../../models/job")


async function getJobById(req, res) {
    try {
        let {id} = req.params
        
        let job = await Job.findById(id)

        if(!job){
            return res.status(404).json({
                success : false,
                message : "No job found"
            })
        }
        return res.status(200).json(job)
    } catch (err) {
        return res.status(500).json({
            success : false,
            message : "Something went wrong while fetching data by id"
        })
    }
}

module.exports = {getJobById}