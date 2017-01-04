// computational blocking.
console.log(1);

// because this computation takes a long time to compute it blocks thet rest of the app.  This is BAD in context of hundreds/thousands of people accessing the app at the same time.
require('./_fibonacci');

console.log(2);