 require('dotenv').config()


const app = require('./src/app.js')


app.listen(2500,()=>{
    console.log("server is running on port 2500")
})