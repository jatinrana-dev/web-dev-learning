const express = require('express');
const router = express.Router();
const  { urlController,getAllUrlController,getUrlController }  = require('../Controllers/url.controller.js');

//post /api/url

router.post('/', urlController)
module.exports = router;


//get /api/url

router.get('/', getAllUrlController)

//get /api/url/:shortCode
router.get('/:code', getUrlController)
