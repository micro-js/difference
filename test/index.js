/**
 * Imports
 */

var identity = require('@f/identity')
var difference = require('..')
var test = require('tape')

/**
 * Tests
 */

test('should work', function (t) {
  t.deepEqual(difference([1, 2, 3, 4], [1, 2]), [3, 4])
  t.deepEqual(difference([1, 2, 3, 7], [1, 2, 3, 4, 5, 6], identity), [7])
  t.end()
})
