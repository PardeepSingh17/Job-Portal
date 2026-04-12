const mongoose = require("mongoose")

const ATLASDB_URL = process.env.MONGO_URI

async function connectDB(){
    try {
        await mongoose.connect(ATLASDB_URL)
        console.log("connection successful")
    } catch(err) {
        console.log(err)
    }

}

module.exports = connectDB