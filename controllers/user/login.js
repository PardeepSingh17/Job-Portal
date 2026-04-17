const User = require("../../models/user")
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
                } , process.env.JWT_SECRET , {expiresIn : "1d"})

                res.json({token , user : {
                    id : checkUser._id,
                    username : checkUser.username,
                    role : checkUser.role
                }})
            } else {
                return res.status(400).json({
                    success : false,
                    message : "Wrong password"})
            }
        } else {
            return res.status(400).json({
                success : false,
                message : "User not found"
            })
        }
    }catch(err) {
        return res.status(500).json({
            success : false,
            message : "Something went wrong"
        })
    }
}

module.exports = {loginUser}