const http = require('http')
const url = require("url")
const fs = require("fs")
// Create the server and listen to 8009
http.createServer( (req, res) => {
    let path = url.parse(req.url).pathname
    // Read file and send response
    fs.readFile("." + path, "UTF-8", (err, str) => {
        if (err) {  // On error
            res.writeHead(404, {'Content-Type': 'text/html'})
            res.write("File not found")
        } else {    // On success
            res.writeHead(200, {'Content-Type': 'text/html'})
            res.write(str)
        }
        res.end()   // End write stream
    })
}).listen(8009)
// Log success
console.log('Server running on http://localhost:8009')
