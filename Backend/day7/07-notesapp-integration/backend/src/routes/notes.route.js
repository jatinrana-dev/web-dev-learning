const express = require('express')
const {
    createNotescontroller,
    getNotesController,
    getSingleNoteController,
updatedNotesController,
    deleteNoteController
} = require('../controllers/notes.controller')
 const router = express.Router()

 router.post("/create", createNotescontroller)
router.get("/allnotes" , getNotesController)
router.get('/:id', getSingleNoteController)
router.put("/:id", updatedNotesController);
router.delete("/:id", deleteNoteController);


 module.exports = router