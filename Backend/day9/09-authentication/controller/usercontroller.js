const userModel = require('../models/user.model.js')
const jwt = require('jsonwebtoken')
const bcyrpt = require('bcryptjs')

const authentication = require('../middleware/auth.middle.js')


const authController = async (req,res)=>{
    try {
        res.send("backend is running succesufully")
    } catch (error) {
        console.log("error while running backend smoothly")
    }

}



const resgiterController = async (req,res)=>{
    try {
        let { name,email ,password} = req.body
         const user = await userModel.create({
            name,email,password: await bcyrpt.hash(password,10)
         })
         const token = jwt.sign(
            {
                id:user._id
            },
            'K!)tc+MnH&9kykE*Nx*bJ1GIXTBvAHx__z6.b/pAu-b'
        )
        res.status(201).json({
        message:"user registered succesfully",
        data:{
            name,email,
            id:user._id
        },
        token
    })
        
        
    } catch (error) {
        console.log(error)
        res.status(500).json({ message: "registration failed" })
        
    }
}

const userFinderController = async (req,res)=>{
    
  

res.status(200).json({
    message:'user found succesfully',
    data: { user: req.user }
})
}

module.exports ={

    authController,
    resgiterController,
    userFinderController
}
