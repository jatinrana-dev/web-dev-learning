let http = require("http");

let server = http.createServer((req,res) => {
    console.log("heloo i am server");
    res.end("i have proccesed your request");

})

server.listen(3000, () => {
    console.log('server is running in the port 3000')
})
