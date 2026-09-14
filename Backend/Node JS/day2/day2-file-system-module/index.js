const fs = require('fs');
const { syncBuiltinESMExports } = require('module');

 fs.writeFileSync("hello.txt","this is hello.txt");



fs.writeFile("index.html","this is index.html" ,(err) => {
    if(err) console.log("Error")
        else console.log("the file is succefully created")
})
console.log("this is the last line of code")


async function createfile() {
   await fs.promises.writeFile('style.css','this is style.css')
   console.log("file is susccesfully created")

    
}
createfile()
console.log("this is the last line of code");

fs.appendFileSync('index.html','helooo this conntent is added using append');
fs.mkdir('alpha/beta/gama/theta',
   {recursive:true},
   (err)=>{
   if(err) console.log(err)
else console.log("the folder is created")
})


