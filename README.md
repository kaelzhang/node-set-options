[![Build Status](https://travis-ci.org/kaelzhang/node-set-options.svg?branch=master)](https://travis-ci.org/kaelzhang/node-set-options)
<!-- optional npm version
[![NPM version](https://badge.fury.io/js/set-options.svg)](http://badge.fury.io/js/set-options)
-->
<!-- optional npm downloads
[![npm module downloads per month](http://img.shields.io/npm/dm/set-options.svg)](https://www.npmjs.org/package/set-options)
-->
<!-- optional dependency status
[![Dependency Status](https://david-dm.org/kaelzhang/node-set-options.svg)](https://david-dm.org/kaelzhang/node-set-options)
-->

# set-options

Merges default options to the user-given options.

## Install

```sh
$ npm install set-options --save
```

## set(options, defaults)

Always returns an object, 

```js
var set = require('set-options')
var defaults = {
  a: 1
}

function factory (options) {
  var config = set(options, defaults)
  // `options` and `defaults` will not be ruined after `set()` 
  console.log(config, config === options, config === defaults)
}

factory()
// {a: 1} false false 

factory(undefined)
// {a: 1} false false

factory(null)
// {a: 1} false false

factory(1)
// {a: 1} false false

factory({})
// {a: 1} false false

factory({b: 1})
// {a: 1, b: 1} false false

factory({a: 0})
// {a: 1} false false
```

- options `Object=` can be undefined.
- defaults `Object` not defining `defaults` is silly, since that's the whole purpose of this lib.

### Define whether should override properties

```js
set(options, defaults, filter)
```

```js
var options = set({a: undefined}, {a: 1}, function (value, key, object) {
  return key in object
})

options  // {a: undefined}

## License

MIT
