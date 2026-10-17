const mongoose = require('mongoose')
require('dotenv').config()
const config = require('./env.js')


const connectdb = async ()=>{
    try{
        await mongoose.connect(config.MONGO_URI)
        console.log("MongoDB connected successfully")
    }catch(error){
        console.log("Error connecting to MongoDB", error)
    }
}

module.exports=connectdb;