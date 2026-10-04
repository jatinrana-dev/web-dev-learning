const express = require('express')
const { registerController , 
    findMeController
} = require('../Controller/user.controller.js')

const router = express.Router()


router.post('/register' ,registerController )
router.get('/me' , findMeController)



module.exports=router