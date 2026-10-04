const router = require('../Route/auth.route.js')
const userModel = require('../models/user.model.js')
const bcrypt = require('bcrypt')
const {generateTokens,
    verifyAcessToken
} = require('../utils/auth.js')
const cookieParser = require('cookie-parser')
const { decode } = require('jsonwebtoken')


const registerController = async (req,res) => {
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

 const user =  await userModel.create({
    name,email,
    passwordHash: await bcrypt.hash(password, 12)

 })
 const { accesToken,refreshToken } = generateTokens({userId:  user._id})
 user.refreshToken = refreshToken
 await  user.save()
 res.cookie("refreshToken",refreshToken, {
    httpOnly:true
 })

 res.status(201).json({
    message:"user registered succesfuly",
    data:{
        name:user.name,
        email:user.email
    },
    accesToken
 })
}
const findMeController= async(req,res)=>{

    const accesToken = req.headers.authorization?.split(" ")[ 1 ]
    try {
        const decoded = verifyAcessToken(accesToken)
        const user = await userModel.findById(decoded.userId)
        res.status(200).json({
            message:"user fetced succesfully",
            name:user.name,
            email:user.email
        })

    } catch (error) {
        return res.status(401).json({
            message: "Unauthoized , Invalid or expired access token "
        })
        
    }


}
module.exports = {
    registerController,
    findMeController,
    
}