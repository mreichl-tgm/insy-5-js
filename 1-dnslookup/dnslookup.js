const dns = require('dns')

// First argument is node, second is the script name
// The other arguments shall be looked up
for (let i = 2; i < process.argv.length; i++) {
    let url = process.argv[i]       // Take arguments as urls
    dns.lookup(url, function (err, add) {
        if (err) console.log(err)   // Log errors
        else console.log(url + " :" + JSON.stringify(add))
    })
}
