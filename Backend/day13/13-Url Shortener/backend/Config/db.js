const mongoose = require('mongoose');
const dotenv = require('dotenv');
dotenv.config();
const connectdb = async () =>{

    try {
         await mongoose.connect(process.env.MONGO_URI)
         console.log("Mongodb is conneced")

    } catch (error) {
        console.log("Error while connecting to mongodb", error.message)
        
    }
 
}

module.exports = connectdb;