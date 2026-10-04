const mongoose = require('mongoose')
const userSchema = new mongoose.Schema({
    name:{
        type:String,
        required:true
    },
    email:{ 
        type:String,
        required:true,
        unique:true },
    passwordhash:{
        type:String,
        required:true
    },
    resfreshToken:{
        type:String,
    },
})
const userModel = mongoose.model('user',userSchema)
module.exports = userModel