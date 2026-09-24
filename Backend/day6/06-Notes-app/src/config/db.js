const mongoose = require('mongoose')

const connectdb =  async()=>{
    try {
        await mongoose.connect(process.env.mongodb_uri)
        console.log("mongo db is conected")
        
    } catch (error) {
        console.log("error while conncting conncting db  " , error)
    }

}

module.exports = connectdb