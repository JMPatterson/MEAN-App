var filename = "index.js";

var hello = function(name) {
	console.log("Hello " + name);
};

var intro = function() {
	console.log("I'm a node file called " + filename);
};

module.exports = { // think of modlue.expores as the 'return' statement
	hello: hello,
	intro: intro
};