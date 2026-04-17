const Joi = require("joi")

let JobSchemaValidation = Joi.object({
    title: Joi.string().min(3).required(),
    description: Joi.string().min(10).required(),
    salary: Joi.number().min(0).required(),
    location: Joi.string().required(),
    company: Joi.string().required()
})

module.exports = {JobSchemaValidation}