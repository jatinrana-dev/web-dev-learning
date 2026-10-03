const express = require('express')
const fileRoute = require('../routes/file.route.js')
const app = express()
app.use(express.json());
app.get('/' , (req,res)=>{
    res.send("backend running succesfully")


})
app.use("/files" , fileRoute)

module.exports = app
