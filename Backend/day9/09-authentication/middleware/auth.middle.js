const jwt = require('jsonwebtoken')
const bcyrpt = require('bcryptjs')
const userModel = require('../models/user.model.js')

const authentication = async(req,res,next) => {
    const token = req.headers.authorization
if (!token) {
        return res.status(401).json({
            message: "Token not found"
        })
    }

    const data = jwt.verify(token,'K!)tc+MnH&9kykE*Nx*bJ1GIXTBvAHx__z6.b/pAu-b')


    const user =  await userModel.findById(data.id)
req.user = user
next ()
}

module.exports = authentication