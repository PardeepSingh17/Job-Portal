const { Job } = require("../../models/job")


async function getAllJobs(req, res) {
    try {
        let {location , title , page , limit , salary , company} = req.query
        let filter = {}
        let sort = {}

        if(req.query.sort === "salary") {
            sort.salary = 1
        }

        limit = parseInt(limit) || 5
        page = parseInt(page) || 1

        let skip = (page - 1) * limit

        if(location){
            filter.location = {$regex : location , $options : "i"}
        } 
        if (title) {
            filter.title = {$regex : title , $options : "i"}
        } 
        if (salary) {
            filter.salary = {$gte : salary}
        }
        if (company) {
            filter.company = {$regex : company , $options : "i"}
        }

        let allJobs = await Job.find(filter).sort(sort).skip(skip).limit(limit)
        return res.status(200).json({
            success :true,
            allJobs
        })

    } catch (err) {
        return res.status(500).json({
            success :false,
            message : "Something went wrong while fetching jobs data"
        })
    }
}

module.exports = {getAllJobs}