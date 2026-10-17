const express = require('express');
const router = express.Router();
const { registerController,meController,refreshTokenController } = require('../Controller/authController.js');
//Post /api/auth/register

router.post('/register', registerController);

 //Get /api/auth/me

router.get('/me', meController);

//Post /api/auth/refresh
router.post('/refresh', refreshTokenController);


module.exports = router;