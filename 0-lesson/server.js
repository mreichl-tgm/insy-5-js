const http = require('http')
const url = require("url")
// Send request to a http server and fetch response
http.createServer( (request, response) => {
    let path = url.parse(request.url).pathname
    // Log url
    console.log('Sending request to' + path)
    // Write to server and wait for response
    response.writeHead(200, {'Content-Type': 'text/html'})
    response.write('Hello World')
    // Listen to port
}).listen(8008)
// Log success
console.log('Server running on http://localhost:8008')
