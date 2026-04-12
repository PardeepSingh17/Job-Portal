const User = require("../models/user")
const bcrypt = require('bcrypt');
const saltRounds = 10;

async function registerUser(req, res) {
    console.log(req.body)
    let {username , email , password , role} = req.body
        
    try{
        let checkExistingUser = await User.findOne({email})

        let hashedPassword = await bcrypt.hash(password, saltRounds)

        if(checkExistingUser){
            return res.status(400).json({ message: "User already exists" })
        } else {
            await User.create({username , email , password : hashedPassword , role})
            return res.status(201).json({message: "User registered successfully"})
        }
    }catch(err) {
        return res.status(500).json({ message: "Something went wrong" })
    }
}

module.exports = {registerUser}