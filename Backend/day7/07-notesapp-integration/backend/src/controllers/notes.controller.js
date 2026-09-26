const NotesModel = require("../models/notes.model")

const createNotescontroller = async (req,res)=>{
    try {
        let {title,description} = req.body

        let newNote = await NotesModel.create({
            title,
            description
        })

        return res.status(201).json({
    message: "note created succesfully",
    data:newNote
})
    } catch (error) {
        console.log("error in creation")
        
    }}

    const getNotesController = async(req,res) =>{
    try {
        const allnotes = await NotesModel.find()
        res.status(200).json({
            message: "all notes get fetched",
            data : allnotes
        })

    } catch (error) {
        console.log("erroec occured in get notes api")
        
    }
}



const getSingleNoteController= async(req,res )=>{
    try {
        let noteId = req.params.id

        let note = await NotesModel.findById(noteId)
        res.status(200 ).json({
            message:"Notes fetced succesfully",
            data:note
        })


    } catch (error) {
        console.log("error in getting the single api")

        
    }
}

const updatedNotesController = async (req, res) => {
  try {
    let noteId = req.params.id;
    let body = req.body;

    let updatedNote = await NotesModel.findByIdAndUpdate(noteId, body, {
      new: true,
    });

    return res.status(200).json({
      message: "Note updated successfully",
      data: updatedNote,
    });
  } catch (error) {
    return res.status(500).json({
      message: "Internal server error",
    });
  }
};



const deleteNoteController = async (req, res) => {
  try {
    let noteId = req.params.id;

    await NotesModel.findByIdAndDelete(noteId);

    return res.status(200).json({
      message: "Note deleted successfully",
    });
  } catch (error) {
    return res.status(500).json({
      message: "Internal server error",
    });
  }
};

const singleEntityUpdateController = async () =>{
  try {
    let noteId = req.params.id
    let body = req.body 
    let updatedNote = await NotesModel.findByIdAndUpdate(noteId , body , {new:true})

    return res.status(200).json({
      message:"note updated succesfulyy",
      data:updatedNote
    })
    
  } catch (error) {
    return res.status(500).json({
      message: "INTERNAL SERVER ERROR"
    })
    
  }
}


    module.exports = {
       createNotescontroller,
         getNotesController,
         getSingleNoteController,
updatedNotesController,
         deleteNoteController,
         singleEntityUpdateController
    }
    



    