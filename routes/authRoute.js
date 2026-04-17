const express = require("express")
const router = express.Router()

const {registerUser} = require("../controllers/user/register")
const {loginUser} = require("../controllers/user/login")

router.post("/register" , registerUser)

router.post("/login" , loginUser)

module.exports = router