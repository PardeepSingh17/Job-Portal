const mongoose = require("mongoose")
const {Schema} = mongoose

let jobSchema = new Schema ({
    title : {
        type : String,
        required : true
    },
    description : {
        type : String,
        required : true
    },
    salary : {
        type : Number,
        required : true
    },
    location : {
        type : String,
        required : true
    },
    company : {
        type : String,
        required : true
    },
    createdBy : {
        type : Schema.Types.ObjectId,
        ref : 'User',
        required : true
    } ,
    applications : [{
        applicant : Schema.Types.ObjectId,
        appliedAt : Date,
        resume : String
    }]
} , {timestamps : true})

let Job = mongoose.model("Job" , jobSchema)

module.exports = {Job}