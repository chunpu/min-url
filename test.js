var assert = require('assert')
var url = require('./')
var _url = require('url')

var fullUrl = 'http://user:pass@host.com:8080/p/a/t/h?query=string#hash'

describe('parse', function() {
	it('full element', function() {
		var ret = url.parse(fullUrl, true)
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
		}, ret)
	})

	it('simple url', function() {
		var str = 'https://www.google.com/#q=search'
		assert.deepEqual(url.parse(str, true), {
			  protocol: 'https:'
			, hostname: 'www.google.com'
			, port: 0
			, pathname: '/'
			, query: {}
			, hash: '#q=search'
			, auth: null
		})
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
		var str = url.format(obj)
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
		assert.equal(url.format(obj), str)
	})

})
