const mongodb = require('mongodb')
const client = mongodb.MongoClient
// Predefine url
const url = 'mongodb://5ahit:5ahit@ds149535.mlab.com:49535/5ahit'

function clean() {
    /**
     * Clean up the whole student collection from the 5ahit database
     */
    client.connect(url, (err, db) => {
        // Save collection reference
        let dbc = db.db('5ahit').collection('student')
        // Remove all students
        dbc.remove({}, (err, result) => {
            console.log("Clear database!")
            db.close()
        })
    })
}

function insert() {
    /**
     * Insert 3 students into 5ahit
     */
    client.connect(url, (err, db) => {

        // Save collection reference
        let dbc = db.db('5ahit').collection('student')
        // Students to add
        let students = [
            {
                first_name: 'Arthur', last_name: 'Dent', born: 1999, school_class: '5ahit',
                lights: {AM: "red", SEW: "orange", INSY: "green"}
            },
            {
                first_name: 'Ford', last_name: 'Perfect', born: 2000, school_class: '5ahit',
                lights: {AM: "orange", SEW: "green", INSY: "red"}
            },
            {
                first_name: 'Zaphod', last_name: 'Beeblebrox', born: 2001, school_class: '5bhit',
                lights: {AM: "green", SEW: "orange", INSY: "red"}
            },
        ]
        // Save students to collection
        dbc.insertMany(students, (err, result) => {
            console.log("Insert many students:")
            console.log(err, result)
            db.close()
        })
    })
}

function find() {
    /**
     * Find some some things
     */
    client.connect(url, (err, db) => {
        // Save collection reference
        let dbc = db.db('5ahit').collection('student')
        // Find all students
        dbc.find({}).toArray((err, result) => {
            console.log("# Find all students:")
            console.log(err, result)
            db.close()
        })
        // All students, born before 2000
        dbc.find({'born': {$lt: 2000}}).toArray((err, result) => {
            console.log("# Find all students born before 2000:")
            console.log(err, result)
            db.close()
        })
        // All students, born in 2000 and in 5ahit
        dbc.find({'born': {$lt: 2000}, 'school_class': '5ahit'}).toArray((err, result) => {
            console.log("# Find all students born 2000 and in 5ahit:")
            console.log(err, result)
            db.close()
        })
        // All students, in 5ahit red in AM
        dbc.find({'school_class': '5ahit', 'lights.AM': 'red'}).toArray((err, result) => {
            console.log("# Find all in 5ahit red in AM:")
            console.log(err, result)
            db.close()
        })
    })
}

clean()
setTimeout(insert, 1000)
setTimeout(find, 1000)