'use strict';

var expect = require('chai').expect
var set = require('../')
var clone = require('clone')

var d = {
  a: 1
}

var cs = [
  // all undefined
  [undefined, undefined, {}],
  [undefined, 1, {}],
  [1, undefined, {}],
  [1, 1, {}],

  // default undefined or not object
  [{}, undefined, {}],
  [{a: 1}, undefined, {a: 1}],
  [{a: 1}, 1, {a: 1}],

  // options undefined, or not object
  [null, d, d],
  [undefined, d, d],
  [1, d, d],

  // normal
  [{}, d, d],
  [{a: 1}, d, d],
  [{a: 0}, d, {a: 0}],
  [{a: 2, b: 1}, d, {a: 2, b: 1}],
  [{b: 1}, d, {a: 1, b: 1}]
];


describe("set(options, defaults)", function(){
  cs.forEach(function (c) {
    var options = c[0]
    var defaults = c[1]
    var exp = c[2]

    var description = JSON.stringify(options) + ', ' + JSON.stringify(defaults)
    it(description, function(done){
      var config = set(options, defaults)
      expect(config).to.deep.equal(exp)
      expect(config).not.to.equal(options)
      expect(config).not.to.equal(defaults)
      done()
    })
  })
})


describe("set(options, defaults, filter)", function(){
  it("allow zero", function(done){
    var config = set({a: 0}, {a: 1}, function (v, k) {
      return v || v === 0
    });

    expect(config).to.deep.equal({a: 0})
    done()
  });

  it("test if exists", function(done){
    var config = set({a: undefined}, {a: 1}, function (v, k, o) {
      return k in o
    });

    expect(config).to.deep.equal({a: undefined})
    expect('a' in config).to.equal(true)
    done()
  })
});