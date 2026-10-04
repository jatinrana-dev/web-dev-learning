const express = require('express')
const router = express.Router()
const { registerController, getMeController } = require('../Controller/user.controller.js')


router.post('/register', registerController)
router.get('/me',getMeController)
module.exports = router