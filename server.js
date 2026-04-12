require('dotenv').config() 

const express = require("express")
const cors = require("cors")

const app = express()

app.use(express.json())

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

app.listen(8080, () => {
    console.log("app is listening")
})