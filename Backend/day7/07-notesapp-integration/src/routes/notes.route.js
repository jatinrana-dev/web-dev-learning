const express = require('express')
const {
    createNotescontroller,
    getNotesController,
    getSingleNoteController,
} = require('../controllers/notes.controller')
 const router = express.Router()

 router.post("/create", createNotescontroller)
router.get("/allnotes" , getNotesController)
router.get('/:id', getSingleNoteController)
 module.exports = router