const app = require('./src/app.js')

let port = 3000
app.listen(port,()=>{
    console.log("server is running on port $ {port}")
})