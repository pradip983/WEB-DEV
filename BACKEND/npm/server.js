console.log("hello world");

var slugify = require('slugify')

let a = slugify('some string');
console.log(a);

let b = slugify('some string','/');
console.log(b);