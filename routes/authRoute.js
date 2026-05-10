const express = require("express")
const router = express.Router()

const {registerUser} = require("../controllers/user/register")
const {loginUser} = require("../controllers/user/login")
const { tokenVerify } = require("../middlewares/tokenVerify")
const { isLogin } = require("../controllers/user/isLogin")

router.post("/register" , registerUser)

router.post("/login" , loginUser)

router.get("/isLogin" , tokenVerify , isLogin)

module.exports = router