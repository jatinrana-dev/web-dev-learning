const express = require('express')
const jwt = require('jsonwebtoken')
const userRoute = require('../routes/user.route')

const app = express()

app.use(express.json())


app.use('/auth' , userRoute)

// app.get('/api' , (req,res)=>{
//     res.status(200).json({
//         Message:"welcome to the auth api"
//     })

// })
// app.post('/api/register' , (req,res)=>{
//     const {name,email,password}= req.body

//     const token = jwt.sign(
//         {
//             email,name
//         },
//         "87e3bcba2db6158786896de10c85bc2f9eec6fef124f8cecd07843976c260fb6"
//     )
//     res.status(201).json({
//         message:"user registered succesfully",
//         data:{
//             name,email
//         },
//         token
//     })
 
// })





module.exports = app