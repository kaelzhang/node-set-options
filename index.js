'use strict';

module.exports = set

function set (options, defaults, filter) {
  var ret = {}
  var is_options_object = Object(options) === options
  var is_defaults_object = Object(defaults) === defaults

  if (!is_options_object && !is_defaults_object) {
    return ret
  }

  if (!is_options_object) {
    return mix(ret, defaults)
  }

  if (!is_defaults_object) {
    return mix(ret, options)
  }

  mix(ret, options)
  return mix_if_not_has(ret, defaults, filter)
}


function mix (a, b) {
  var key
  for (key in b) {
    a[key] = b[key]
  }

  return a
}


function default_filter (v, k, a) {
  return a.hasOwnProperty(k)
}


function mix_if_not_has (a, b, filter) {
  filter = filter || default_filter

  var key
  for (key in b) {
    if (!filter(a[key], key, a)) {
      a[key] = b[key]
    }
  }

  return a
}
