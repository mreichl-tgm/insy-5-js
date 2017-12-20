const express = require('express')
const app = express()
// Send response on request
app.get('/', (req, res) => {
    res.send('Hello World')
})
// Send response on request to path /user/id
app.get('/user/{id}', (req, res) => {
    res.send('{id}')
})
// Start server to listen on port 8009
app.listen(8009, () => {
    console.log('Running on http://localhost:8009')
})
