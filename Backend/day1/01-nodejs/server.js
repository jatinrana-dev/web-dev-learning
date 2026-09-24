let http = require("http");

let server = http.createServer((req, res) =>{
    console.log("the server is started")
    res.end("the request is accepted and resond is being send")

})

server.listen(3000);