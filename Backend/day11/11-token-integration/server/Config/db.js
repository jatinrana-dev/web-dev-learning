const mongoose = require('mongoose')
const dotenv = require('dotenv')
dotenv.config()
const conectdb =async ()=>{
    try {
        await mongoose.connect(process.env.mongodb_uri)
        console.log("mongodb is connected")
        
    } catch (error) {
        console.log("error in connecting mongodb",error)
    }

}
module.exports = conectdb