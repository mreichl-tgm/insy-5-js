const mongodb = require('mongodb')
const MongoClient = mongodb.MongoClient

MongoClient.connect('mongodb://5ahit:5ahit@ds149535.mlab.com:49535/5ahit', (err, db) => {
    // Save arthur dent to collection
    db.collection('test').save({
        firstname: 'Arthur', lastname: 'Dent'
    }, (err, result) => {
        // Log error or result
        console.log(err, result)
        // Close connection
        db.collection.close()
    })
})
