var fs = require('fs');

console.log('Pre file fetch');
var file = fs.readFileSync('readFileSync.js');
console.log('Got the file');

console.log('Continue...');