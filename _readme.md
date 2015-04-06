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
  port: '8080' }
*/
```

Api
---

- `url.parse(string[, shouldParseQuery])`

- `url.format(object)`
