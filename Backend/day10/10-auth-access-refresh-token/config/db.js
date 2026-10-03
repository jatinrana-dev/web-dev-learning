const mongoose = require('mongoose')
 require('dotenv').config()
 const conectdb = async ()=> {
    try {
        await mongoose.connect(process.env.mongodb_uri)
        console.log("mongod is connected")
    } catch (error) {
        console.log("error while conecting mongodb" , error)
        
    }
    
 }

 module.exports = conectdb
