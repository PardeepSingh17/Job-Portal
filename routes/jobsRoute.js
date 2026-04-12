const express = require("express")
const router = express.Router()

const {recruiterCheck} = require("../middlewares/recruiterCheck")
const {tokenVerify} = require("../middlewares/tokenVerify")
const {isOwner} = require("../middlewares/isOwner")

const { newJob } = require("../controllers/newJob")
const { getAllJobs } = require("../controllers/getAllJobs")
const { getJobById } = require("../controllers/getjobById")
const { deleteJob } = require("../controllers/deleteJob")

router.post("/" , tokenVerify , recruiterCheck , newJob)

router.get("/" , getAllJobs)

router.get("/:id" , getJobById)

router.delete("/:id" , tokenVerify , recruiterCheck , isOwner , deleteJob)

module.exports = router