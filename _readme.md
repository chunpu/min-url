Usage
---

```js
var Url = require('min-url')

var url = Url.parse('http://user:pass@host.com:8080/p/a/t/h?query=string#hash', true)

console.log(url)

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

- `Url.parse(string, [shouldParseQuery])`

- `Url.format(object)`


