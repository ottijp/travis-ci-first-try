var assert = require('assert')
var hello = require('./index')

console.log(hello())

if (process.argv[2] === 'good') {
  // good
  assert('Hello Circle CI' === hello())
}
else {
  // bad
  assert('Hello Circle' === hello())
}
