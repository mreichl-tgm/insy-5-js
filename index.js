function execute(fun) {
	console.log("Ergebnis: " + fun())	
}

function add5(x) {
	return function() { return x+5 }	
}

function irgendwas() {
	return 123	
}

fun1 = add5(37)
fun2 = add5(38)

execute(fun2)

const fs = require('fs')
var inhalt = fs.readFile('index.txt', (err,data) => {
	if (err) 
		throw err
	console.log(data.toString());
})

console.log('main')

const modul = require('./1-dnslookup/dnslookup')
console.log('Foo: '+ modul.foo())

