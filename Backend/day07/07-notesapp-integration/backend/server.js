 require('dotenv').config()


const app = require('./src/app.js')


app.listen(2501,()=>{
    console.log("server is running on port 2501")
})