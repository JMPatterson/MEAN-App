var fs = require('fs');

var onFileLoad = function(err, file) {
	console.log('Got the file');
};

console.log('Pre file fetch');
fs.readFile('readFileSync.js', onFileLoad);  // name callback function must already be defined (e.g. above the call to the function)

console.log('Continue...');