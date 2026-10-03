const express = require('express')

const app = express()



app.get('/' , (req ,res)=>{
    res.send("hey u have reached hereeeeee")
})

app.get('/products' , (req ,res)=>{
    res.send("u r in products section")
})

app.get('/users' , (req ,res)=>{
    res.send("u r in users section")
})

app.listen(2000, ()=> {
    console.log("server is runnning on portttttttt 3000")
})
