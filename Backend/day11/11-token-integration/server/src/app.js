const express = require('express')
const connectdb = require('../Config/db.js')
const authRoutes = require('../Routes/auth.routes.js')
const cookieParser = require('cookie-parser')
connectdb()
 const app = express()
app.use(express.json())
app.use(cookieParser())
app.use( "/auth",authRoutes)

app.get('/', (req, res) => {
    res.send('Backend is running successfully!')
})  

 module.exports = app