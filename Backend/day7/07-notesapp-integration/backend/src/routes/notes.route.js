const express = require('express')
const {
    createNotescontroller,
    getNotesController,
    getSingleNoteController,
updatedNotesController,
    deleteNoteController,
    singleEntityUpdateController
} = require('../controllers/notes.controller')
 const router = express.Router()

 router.post("/create", createNotescontroller)
router.get("/allnotes" , getNotesController)
router.get('/:id', getSingleNoteController)
router.put("/:id", updatedNotesController);
router.delete("/:id", deleteNoteController);

router.patch('/:id/single' ,singleEntityUpdateController)


 module.exports = router