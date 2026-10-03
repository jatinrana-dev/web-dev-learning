const express = require('express')
const { authController,
    resgiterController,
    userFinderController,

 } = require('../controller/usercontroller.js')
const authentication = require('../middleware/auth.middle.js')

const router = express.Router()

router.get('/',authController)
router.post('/register', resgiterController)
router.get('/me', authentication ,userFinderController)

module.exports = router