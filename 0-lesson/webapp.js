const express = require("express")
const MongoClient = require("mongodb").MongoClient
const bodyParser = require("body-parser")

const app = express()
app.use(bodyParser.urlencoded({extended: true}))

let db

MongoClient.connect('mongodb://5ahit:5ahit@ds149535.mlab.com:49535/5ahit', (err, mdb) => {
    db = mdb
    if (err) console.log("Fehler bei der Datenbankverbindung");
})

app.get("/", (req, res) => {
    db.collection("test").find().toArray((err, test_res) => {
        if (err) console.log(err)
        res.render("index.ejs", {students:test_res})
    })
})

app.post("/new", (req, res) => {
    db.collection("test").add(req.body, (err, add_res) => {
        if (err) console.log(err)
        console.log("Saved")
        res.redirect("/")
    })
})

app.listen(8009, () => {
    console.log('Running on http://localhost:8009')
})