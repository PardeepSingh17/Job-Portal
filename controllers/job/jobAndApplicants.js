const { Job } = require("../../models/job")
const { User } = require("../../models/user")


async function jobAndApplicants(req, res) {
    try {
        let {id} = req.params
        let appliacntsDetails = await Job.findById(id).populate("applications.applicant")

        if(appliacntsDetails.applications.length < 1) {
            return res.status(404).json({
                success : false,
                message : "No One Applied Yet"
            })
        }
        
        return res.status(200).json({
            success : true,
            message : appliacntsDetails
        })
    } catch (err) {
        return res.status(500).json({
            success : false,
            message : "Something went wrong while fethching applicants data"
        })
    }
}

module.exports = {jobAndApplicants}