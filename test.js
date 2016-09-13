var assert = require('assert')
var Url = require('./')
var _Url = require('url')

var fullUrl = 'http://user:pass@host.com:8080/p/a/t/h?query=string#hash'

describe('parse', function() {
	it('full element', function() {
		var ret = Url.parse(fullUrl, true)
		assert.deepEqual({
			  protocol: 'http:'
			, auth: 'user:pass'
			, hostname: 'host.com'
			, port: 8080
			, pathname: '/p/a/t/h'
			, query: {
				query: 'string'
			}
			, hash: '#hash'
			, href: fullUrl
		}, ret)
	})

	it('simple url', function() {
		var str = 'https://www.google.com/#q=search'
		assert.deepEqual(Url.parse(str, true), {
			  protocol: 'https:'
			, hostname: 'www.google.com'
			, port: 0
			, pathname: '/'
			, query: {}
			, hash: '#q=search'
			, auth: null
			, href: str
		})
	})

	it('support nested parse', function() {
		var url = Url.parse(fullUrl)
		var url2 = Url.parse(url)
		assert(url2 === url)
		var url3 = Url.parse(url2)
		assert(url3 === url)
		var str = Url.format(url)
		assert.deepEqual(str, fullUrl)
	})
})

describe('format', function() {
	it('full element', function() {
		var obj = {
			  protocol: 'http:'
			, auth: 'user:pass'
			, hostname: 'host.com'
			, port: 8080
			, pathname: '/p/a/t/h'
			, query: {
				query: 'string'
			}
			, hash: '#hash'
		}
		var str = Url.format(obj)
		assert(str == fullUrl)
	})

	it('simple url', function() {
		var str = 'https://www.google.com/#q=search'
		var obj = {
			  protocol: 'https:'
			, hostname: 'www.google.com'
			, port: 0
			, pathname: '/'
			, query: {}
			, hash: '#q=search'
			, auth: null
		}
		assert.equal(Url.format(obj), str)
	})

	it('support nested format', function() {
		var expect = 'http://www.google.com/path?query=string&foo=bar'
		var obj = {
			  protocol: 'http:'
			, hostname: 'www.google.com'
			, pathname: '/path'
			, query: 'query=string&foo=bar'
		}
		var str = Url.format(obj)
		assert.deepEqual(str, expect)
		assert.deepEqual(Url.format(str), expect)
		assert.deepEqual(Url.format(Url.format(str)), expect)
	})

	it('support object query format', function() {
		var expect = 'http://www.google.com/path?query=string'
		var obj = {
			  protocol: 'http:'
			, hostname: 'www.google.com'
			, pathname: '/path'
			, query: {
				query: 'string'
			}
		}
		var str = Url.format(obj)
		assert.deepEqual(str, expect)
		assert.deepEqual(Url.format(str), expect)
		assert.deepEqual(Url.format(Url.format(str)), expect)
	})

})
