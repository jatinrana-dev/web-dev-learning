const path = require('node:path')

let mypath = path.join('user','jatin','files','index.js')
console.log(mypath)

let mypath2 = path.resolve('user','jatin','files','index.js')
console.log(path.basename(mypath2))
console.log(path.extname(mypath2))
console.log(path.dirname(mypath2))
console.log(path.parse(mypath2))
console.log(path.isAbsolute(mypath2))


console.log(path.sep)
