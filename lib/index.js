/**
 * Modules
 */

var filter = require('@f/filter-array')
var index = require('@f/index')
var has = require('@f/has')

/**
 * Expose difference
 */

module.exports = difference

/**
 * difference
 */

function difference (a, b, fn) {
  if (!fn) {
    // Slow path
    return filter(function (item) {
      return b.indexOf(item) === -1
    }, a)
  } else {
    // Fast path
    var map = index(fn, b)
    console.log('fn', map)
    return filter(function (item) {
      return !has(fn(item), map)
    }, a)
  }
}

