const app = require('./src/app.js')
const connectdb = require('./config/db.js')
  connectdb()

app.listen(3001,()=>{
    console.log("server is running on port 3001")
})