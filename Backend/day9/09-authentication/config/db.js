const mongoose = require('mongoose')
 require('dotenv').config()

 const connectdb = async ()=>{
    try {
        await mongoose.connect(process.env.mongodb_uri)
        console.log("mongodb is conected")
    } catch (error) {
        console.log("error while connecting the mongodb" , error)
        
    }
 }




module.exports = connectdb