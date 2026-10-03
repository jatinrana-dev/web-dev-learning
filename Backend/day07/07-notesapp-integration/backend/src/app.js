const express = require('express')
const NotesModel = require('./models/notes.model')
const connectdb = require('./config/db')
const cors = require('cors')

const notesRoute = require("./routes/notes.route.js")

const app = express()
connectdb()
app.use(cors({
    origin:"http://localhost:5173",
}

))

app.use(express.json())
app.get('/', (req,res)=>{
    res.send("ok got it")

})


app.use('/notes' , notesRoute)



module.exports = app