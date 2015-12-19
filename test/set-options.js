'use strict';

var expect = require('chai').expect;
var set_options = require('../');

function a (a, b) {
  a.a = a.a || b.a
}

function b (a, b) {
  
}

console.time(1)

var i = 0;
var len = 100000
for (; i < len; i ++) {
  a({a: 1}, {a: 1})
}
console.timeEnd(1)


