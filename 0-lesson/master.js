const child_process = require('child_process')
// Use the child_process package to create a fork of task.js
const task = child_process.fork('task.js');
// Log success
console.log('master')
// Log finished task
task.on('close', (code) => {console.log('Task closed: ' + code)})
