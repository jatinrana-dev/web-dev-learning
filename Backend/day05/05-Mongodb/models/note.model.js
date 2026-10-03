const mongoose = require('mongoose')
const newSchema = new mongoose.Schema({
title:{
    requires:true,
    type:string
},
description:{
    type:string,
    minlenght: 10,
},
})

const NotesModel = mongoose.NotesModel('notes ' , newSchema)

module.exports = NotesModel