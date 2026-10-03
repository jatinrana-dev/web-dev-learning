const mongoose = require('mongoose')

const userSchema = new mongoose.Schema({
    name:{
        type:String,
        required:true,
        minLength:2,
        maxLenght: 30,

    },
    email:{
        type:String,
        required:true,
        unique:true,


    },
    passwordHash:{
        type:String,
        required:true,

    },
    refreshToken:{
        type:String,

    }
})
const userModel = mongoose.model('users',userSchema)

module.exports =userModel