const express = require('express');
const connectDb = require('./mongo');
const NotesModel = require('../models/note.model');
const app = express();
connectDb()
app.use(express.json())

app.get('/',(req,res) =>{
    res.send("server is running")
})

app.post('/create' , async(req,res ) => {
let {title ,description} = req.body

const newNote = await  NotesModel.create({
    title,
    description,
})

res.send({
    success:true,
    message:"note created succesfully",
    data:newNote,
})
})

module.exports = app;