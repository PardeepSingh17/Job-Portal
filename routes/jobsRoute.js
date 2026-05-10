const express = require("express")
const router = express.Router()

const {recruiterCheck} = require("../middlewares/recruiterCheck")
const {tokenVerify} = require("../middlewares/tokenVerify")
const {isOwner} = require("../middlewares/isOwner")
const { JobSchemaCheck } = require("../middlewares/schemaCheck")
const { fileCheck } = require("../middlewares/fileCheck")

const { newJob } = require("../controllers/job/newJob")
const { getAllJobs } = require("../controllers/job/getAllJobs")
const { getJobById } = require("../controllers/job/getjobById")
const { deleteJob } = require("../controllers/job/deleteJob")
const { applyJob } = require("../controllers/job/applyJob")
const { appliedJob } = require("../controllers/job/appliedJob")
const { recruiterJobs } = require("../controllers/job/recruiterJob")
const { jobAndApplicants } = require("../controllers/job/jobAndApplicants")

const { upload } = require("../server")

router.post("/" , tokenVerify , recruiterCheck , JobSchemaCheck , newJob)

router.get("/" , getAllJobs)

router.get("/applied" , tokenVerify , appliedJob)

router.get("/myJobs" , tokenVerify , recruiterCheck , recruiterJobs)

router.get("/myJobs/:id", tokenVerify , recruiterCheck , isOwner , jobAndApplicants)

router.get("/:id" , getJobById)

router.delete("/:id" , tokenVerify , recruiterCheck , isOwner , deleteJob)

router.post("/:id/apply" , tokenVerify ,  upload.single('resume') , fileCheck , applyJob)


module.exports = router