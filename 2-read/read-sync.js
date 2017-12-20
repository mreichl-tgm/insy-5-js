fs = require('fs')

console.time("read-sync")
let files = fs.readdirSync('../', 'utf8')
console.log(files)
console.timeEnd("read-sync")
