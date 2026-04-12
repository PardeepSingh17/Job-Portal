const User = require("../models/user")
const jwt = require("jsonwebtoken")
const bcrypt = require('bcrypt');

async function loginUser(req, res) {
    try {
        let {username , password} = req.body

        let checkUser = await User.findOne({username})
        
        if(checkUser){
            let checkPassword = await bcrypt.compare(password , checkUser.password)

            if(checkPassword){
                let token = jwt.sign({
                    id : checkUser._id,
                    role : checkUser.role
                } , "default" , {expiresIn : "1d"})

                res.json({token , user : {
                    id : checkUser._id,
                    username : checkUser.username,
                    role : checkUser.role
                }})
            } else {
                return res.status(400).json({message : "Wrong password"})
            }
        } else {
            return res.status(400).json({message : "User not found"})
        }
    }catch(err) {
        return res.status(500).json({message : "Something went wrong"})
    }
}

module.exports = {loginUser}