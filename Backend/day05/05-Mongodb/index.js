const app = require('./config/app')
const connectDb = require('./config/mongo')





 

app.listen(3000,() => {
    console.log("server is running on  port 3000")
})