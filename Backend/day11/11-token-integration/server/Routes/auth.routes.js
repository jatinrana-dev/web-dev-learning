const express = require('express')
const router = express.Router()
const { registerController, getMeController,newAccessTokenController } = require('../Controller/user.controller.js')


router.post('/register', registerController)
router.get('/me',getMeController)
router.post('/refresh',newAccessTokenController)
module.exports = router