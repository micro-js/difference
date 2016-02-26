
# difference

[![Build status][travis-image]][travis-url]
[![Git tag][git-image]][git-url]
[![NPM version][npm-image]][npm-url]
[![Code style][standard-image]][standard-url]

Subtract one list from another

## Installation

    $ npm install @f/difference

## Usage

```js
var difference = require('@f/difference')

difference([1, 2, 3], [2, 3, 4]) // -> [1]
difference([1, 2], [3, 4])       // -> [1, 2]
```

## API

### difference(a, b, getKey)

- `a` - The list to be subtracted from
- `b` - The list to subtract from `a`
- `getKey` - Optional key function for the items of both lists. If not passed, a much slower algorithm is used. It is highly recommended that you pass `getKey`.

**Returns:** The result of filtering the items in list `a` to contain only items not found in list `b`.

## License

MIT

[travis-image]: https://img.shields.io/travis/micro-js/difference.svg?style=flat-square
[travis-url]: https://travis-ci.org/micro-js/difference
[git-image]: https://img.shields.io/github/tag/micro-js/difference.svg?style=flat-square
[git-url]: https://github.com/micro-js/difference
[standard-image]: https://img.shields.io/badge/code%20style-standard-brightgreen.svg?style=flat-square
[standard-url]: https://github.com/feross/standard
[npm-image]: https://img.shields.io/npm/v/@f/difference.svg?style=flat-square
[npm-url]: https://npmjs.org/package/@f/difference
