const mongoose = require('mongoose');
const express = require('express');
const router = express.Router();
const  {getUrlController}  = require('../Controllers/url.controller.js');


router.get('/:code',getUrlController)

module.exports = router;
