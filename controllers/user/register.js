const User = require("../../models/user")
const bcrypt = require('bcrypt');
const saltRounds = 10;

async function registerUser(req, res) {   
    try{
        let {username , email , password , role} = req.body

        let checkExistingUser = await User.findOne({email})

        if(checkExistingUser){
            return res.status(400).json({ 
                success : false,
                message: "User already exists" 
            })
        } else {
            let hashedPassword = await bcrypt.hash(password, saltRounds)
            await User.create({username , email , password : hashedPassword , role})
            return res.status(201).json({
                success :true ,
                message: "User registered successfully"
            })
        }
    } catch(err) {
        return res.status(500).json({ 
            success : false,
            message: "Something went wrong while creating account" 
        })
    }
}

module.exports = {registerUser}