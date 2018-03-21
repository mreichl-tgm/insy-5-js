const express = require('express')
const MongoClient = require('mongodb').MongoClient
const bodyParser = require('body-parser')
const path = require('path')

const app = express()

var db

/* Send index.html */
app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname + '/index.html'))
})

/* Send list of teachers */
app.get('/teachers', (req, res) => {
    db.collection('teachers').find().toArray((err, result) => {
        res.send(result)
    })
})

MongoClient.connect('mongodb://5ahit:5ahit@ds149535.mlab.com:49535/5ahit', (err, client) => {
    db = client.db('5ahit')
    if (err) { console.log('Connection error') }
    // Listen for connections
    app.listen(3000, () => { console.log('Server running on http://localhost:3000') })
})
