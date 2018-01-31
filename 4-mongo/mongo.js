const mongodb = require('mongodb')
const client = mongodb.MongoClient
// Predefine url
const url = 'mongodb://5ahit:5ahit@ds149535.mlab.com:49535/5ahit'

function insert() {
    /**
     * Insert 3 students into 5ahit
     */
    client.connect(url, (err, db) => {
        // Save collection reference
        let dbc = db.db('5ahit').collection('students')
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
        let dbc = db.db('5ahit').collection('students')
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

function find_reduced() {
    /**
     * Find some some more things
     */
    client.connect(url, (err, db) => {
        // Save collection reference
        let dbc = db.db('5ahit').collection('students')

        dbc.mapReduce(() => {
            emit(this.school_class, this.lights.AM)
        }, (key, values) => {
            return values.length
        }, {
            query: {'lights.AM': 'red'},
            out: 'red_lights'
        }, (err, res) => {
            console.log("#Find all red lights in AM")
            console.log(err, res)
            db.close()
        })

        dbc.mapReduce(() => {
            emit(this.lights.AM)
        }, (key, values) => {
            return values.length
        }, {
            query: {'lights.AM': 'red'},
            out: 'red_lights'
        }, (err, res) => {
            console.log("#Find all red lights in AM")
            console.log(err, res)
            db.close()
        })

        dbc.mapReduce(() => {       // BEGIN MAP
            // Return if no signal
            if (!this.signals) return
            // Iterate over signals
            this.signals.forEach((elm) => {
                emit(elm.color, 1)
            }, (key, values) => {   // BEGIN REDUCE
                return Array.sum(values)
            }, {                    // BEGIN QUERY
                query: {"clazz": "5ahit"},
                out: {"inline": 1}
            }, (err, res) => {      // BEGIN RESULT
                console.log("Find all red lights in AM in 5ahit")
                console.log(err, res)
                db.close()
            })
        })

    })
}

find()
find_reduced()
