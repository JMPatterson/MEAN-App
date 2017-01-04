// computational non-blocking.
var child_process = require('child_process');

console.log(1);

// spawn process into child process to not block the rest of the app/main app flow
// node is a single-threaded server.  Every request uses the same thread. 
// Move computational heavey-weights to child processes to eleminate the app
// from freezing up for all hits while the current request loads.
var newProcess = child_process.spawn('node', ['_fibonacci.js'], {
	stdio : 'inherit'
});

console.log(2);