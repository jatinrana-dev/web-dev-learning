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


// const updateNotesController = async () => {
//     try {
//         let noteId = req.params.id
//         let body = req.body
//         let updatednote = await NotesModel.findByIdAndUpdate(noteId , body ,{
//             new:true

//         })
//         res.status(200 ).json({
//             message:"Notes fetced succesfully",
//             data:updatednote
        
//     } catch (error) {
        
//         console.log("error while updating notes by id")
//     }
// }


    module.exports = {
       createNotescontroller,
         getNotesController,
         getSingleNoteController
    }
    



    