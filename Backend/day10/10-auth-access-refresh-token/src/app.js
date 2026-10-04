const express = require('express')
const connectdb = require('../config/db.js')
const authroute = require('../Route/auth.route.js')
const cookieParser = require('cookie-parser')
const app =express()
connectdb()
app.use(express.json())
app.use(cookieParser())
app.get('/' ,(req,res)=>{
    res.send("backend succesfuly")

})
    app.use('/auth' ,authroute)

module.exports = app