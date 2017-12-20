fs = require('fs')

console.time("read-async")
files = fs.readdir('../', 'utf8', function (err, file) {
    // Log error or file
    err ? console.log(err) : console.log(file)
})
console.timeEnd("read-async")
