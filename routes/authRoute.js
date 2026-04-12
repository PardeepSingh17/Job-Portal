const express = require("express")
const router = express.Router()

const {registerUser} = require("../controllers/register")
const {loginUser} = require("../controllers/login")

router.post("/register" , registerUser)

router.post("/login" , loginUser)

module.exports = router