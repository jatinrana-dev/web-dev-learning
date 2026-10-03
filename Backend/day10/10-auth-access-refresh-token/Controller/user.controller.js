const router = require('../Route/auth.route.js')
const userModel = require('../models/user.model.js')
const bcrypt = require('bcrypt')

const reisgterController = async (req,res) => {
    const {name,email,password} = req.body
    const isUserExist = await userModel.findOne({ email})

    if(isUserExist){
return res.status(400).json({
    Message:"user already exists",
    error:[{
        path:email,
        message:"user already exists"
    }]
})
    }

 const user = userModel.create({
    name,email,
    passwordHash: await bcrypt.hash(password, 12)

 })
}