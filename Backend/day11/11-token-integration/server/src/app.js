const express=require('express');
const app = express()
const connectdb = require('../config/db.js');
const authRoutes = require('../Routes/authRoutes.js');
const cookieParser = require('cookie-parser');
connectdb();

app.use(express.json());
app.use(cookieParser());


 app.use('/api/auth', authRoutes);

app.get('/', (req, res) => {
    res.send('Backend in runing succesfuly')
})

module.exports = app