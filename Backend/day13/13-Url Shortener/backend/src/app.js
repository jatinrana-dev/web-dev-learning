const express = require('express');
const app = express();
const connectdb = require('../Config/db');
const router = require('../Routes/url.routes');

app.use(express.json());
app.use('/api/url', router);

connectdb();

app.get('/', (req, res) => {
  res.send('Backend is running successfuly!');
})

module.exports = app;
