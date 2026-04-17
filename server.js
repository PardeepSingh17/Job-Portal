require('dotenv').config() 

const express = require("express")
const multer = require("multer")
const cors = require("cors")

const app = express()

const morgan = require("morgan")

app.use(morgan("dev"))

app.use(express.json())
app.use(express.urlencoded({extended : true}))

const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, "uploads/")
  },
  filename: function (req, file, cb) {
    cb(null, Date.now() + "-" + file.originalname)
  }
})

const upload = multer({
  storage,

  limits : {
    fileSize : 5 * 1024 * 1024
  },

  fileFilter: (req, file, cb) => {
    if (file.mimetype === "application/pdf") {
      cb(null, true)
    } else {
      cb(new Error("Please upload a PDF resume only"), false)
    }
  }
})

module.exports = {upload}

app.use("/uploads", express.static("uploads"))

const rateLimit = require("express-rate-limit")

const limiter = rateLimit({
  windowMs: 15 * 60 * 1000,
  limit: 100
})

app.use(limiter)

const authRoute = require("./routes/authRoute")
const jobsRoute = require("./routes/jobsRoute")

const connectDB = require("./config/mongoConnect")

app.use(cors())

connectDB()

app.get("/" , ((req, res) => {
    res.send("Server working.")
}))

app.use("/api/auth" , authRoute)

app.use("/api/jobs" , jobsRoute)

app.use((err, req, res, next) => {
  if (err) {
    return res.status(400).json({
      success: false,
      message: err.message
    })
  }

  next()
})

app.listen(8080, () => {
    console.log("app is listening")
})