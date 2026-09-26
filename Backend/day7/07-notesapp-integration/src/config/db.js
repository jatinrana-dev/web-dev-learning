const mongoose = require('mongoose')

const connectdb =  async()=>{
    try {
        await mongoose.connect('mongodb://localhost:27017/notes-app')
        console.log("mongo db is conected")
        
    } catch (error) {
        console.log("error while conncting conncting db  " , error)
    }

}

module.exports = connectdb