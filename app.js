require('./instantHello');
var goodbye = require('./talk/goodbye');
var talk = require('./talk'); // automatically looks for index.js files in the attributed folder (./talk/index.js)
var question = require('./talk/question');

talk.intro(); // intro method defined in the talk/index.js file

talk.hello("George Washington"); // hello method defined in the talk/index.js file

var answer = question.ask("What is your favorite color?"); // ask method defined in the talk/question.js file
console.log(answer); // question.ask returns answer

goodbye();