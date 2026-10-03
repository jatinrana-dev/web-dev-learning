const express = require('express')
const upload = require('../config/multer')

const router = express.Router()

router.post('/' ,upload.single("image"),(req,res)=>{
    try {
let body = req.body
let file = req.file
console.log(file)
console.log(body)
        res.status(200).json({
            message:"file recieved succesfuly"
        })
        
    } catch (error) {
        return res.status(500).json({
            message: "internal server error "
        })

        
    }
})

module.exports = router