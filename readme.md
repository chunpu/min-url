min-url
===

[![Build status][travis-image]][travis-url]
[![NPM version][npm-image]][npm-url]
[![Downloads][downloads-image]][downloads-url]
[![Dependency Status][david-image]][david-url]
[npm-image]: https://img.shields.io/npm/v/min-url.svg?style=flat-square
[npm-url]: https://npmjs.org/package/min-url
[downloads-image]: http://img.shields.io/npm/dm/min-url.svg?style=flat-square
[downloads-url]: https://npmjs.org/package/min-url
[david-image]: http://img.shields.io/david/chunpu/min-url.svg?style=flat-square
[david-url]: https://david-dm.org/chunpu/min-url

[![Test coverage][coveralls-image]][coveralls-url]

Simple Url Parse and Format

Installation
---

```sh
npm i min-url
```

Usage
---

```js
var url = require('min-url')

url.parse('http://user:pass@host.com:8080/p/a/t/h?query=string#hash', true)

/* =>
{ hash: '#hash',
  protocol: 'http:',
  query: { query: 'string' },
  pathname: '/p/a/t/h',
  auth: 'user:pass',
  hostname: 'host.com',
  port: 8080 }
*/
```

Api
---

- `url.parse(string, [shouldParseQuery])`

- `url.format(object)`

License
---

[![License][license-image]][license-url]

[travis-image]: https://img.shields.io/travis/chunpu/min-url.svg?style=flat-square
[travis-url]: https://travis-ci.org/chunpu/min-url
[coveralls-image]: https://img.shields.io/coveralls/chunpu/min-url/gh-pages.svg?style=flat-square
[coveralls-url]: https://coveralls.io/r/chunpu/min-url
[license-image]: http://img.shields.io/npm/l/min-url.svg?style=flat-square
[license-url]: #
