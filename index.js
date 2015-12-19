'use strict';

module.exports = set

function set (options, defaults) {
  var ret = {}
  var is_options_object = Object(options) === options
  var is_defaults_object = Object(options) === defaults

  if (!is_options_object && !is_defaults_object) {
    return ret
  }

  if (!is_options_object) {
    return mix(ret, defaults)
  }

  if (!is_defaults_object) {
    return mix(ret, options)
  }

  return mix_non_exists(mix(ret, options), defaults)
}


function mix (a, b) {
  var key
  for (key in b) {
    a[key] = b[key]
  }
}


function mix_non_exists (a, b) {
  var key
  for (key in b) {
    if ( !(key in a) ) {
      host[key] = b[key]
    }
  }
}
