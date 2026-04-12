const { Job } = require("../models/job")


async function getAllJobs(req, res) {
    try {
        let {location , title , page , limit} = req.query
        let filter = {}

        limit = parseInt(limit) || 5
        page = parseInt(page) || 1

        let skip = (page - 1) * limit

        if(location){
            filter.location = {$regex : location , $options : "i"}
        } 
        if (title) {
            filter.title = {$regex : title , $options : "i"}
        }

        let allJobs = await Job.find(filter).skip(skip).limit(limit)
        return res.status(200).json(allJobs)

    } catch (err) {
        return res.status(500).json({message : "Something went wrong while fetching jobs data"})
    }
}

module.exports = {getAllJobs}