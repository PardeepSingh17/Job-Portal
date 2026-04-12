const mongoose = require("mongoose")
const {Schema} = mongoose

let userSchema = new Schema({
    username : {
        type : String,
        required : true,
        unique : true
    },
    email : {
        type : String,
        required : true,
        unique : true
    },
    password : {
        type : String,
        required : true
    },
    role : {
        type : String,
        enum : ["candidate" , "recruiter"],
        required : true
    }
} , {timestamps : true})

const User = mongoose.model("User" , userSchema)

module.exports = User