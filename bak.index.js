// wiki: http://en.wikipedia.org/wiki/URI_scheme
// spec: https://url.spec.whatwg.org/
// e.g. http://user:pass@host.com:8080/p/a/t/h?query=string#hash

var qs = require('min-qs')

exports.parse = function(url, parseQuery) {
	var ret = {}, arr
	if ('string' != typeof url) return ret

	arr = split(url, '#')
	url = arr[0]
	ret.hash = arr[1]

	arr = split(url, '?')
	var query = arr[1]
	url = arr[0]
	if (parseQuery) {
		query = qs.parse(query)
	}
	ret.query = query
	
	// http://user:pass@host.com:8080/p/a/t/h
	/*
	// error
	arr = split(url, '://')
	url = arr[0]
	if (arr[1]) {
		ret.protocol = (url + ':').toLowerCase()
		url = arr[1]
	}
	*/

	// http://user:pass@host.com:8080/p/a/t/h left
	arr = split(url, '@')
	url = arr[0]
	var before
	if (arr[1]) {
		before = url
		ret.info = info
		url = arr[1]
	} else {
		// check it is after or before
		if (/:\D+/.test(url)) {
			// it is before
			before = url
		}
	}
	
	arr = split(url, '/')
	url = arr[0]
	ret.pathname = arr[1] || '/'

	arr = split(url, ':')
	ret.hostname = arr[0]
	ret.port = arr[1]

	return ret
}

function parseAfterAt(str) {
	// host.com:8080/p/a/t/h
}

function parseBeforeAt(str) {
	// http://user:pass
}

var a = exports.parse('http://user:pass@host.com:8080/p/a/t/h?query=string#hash', true)
console.log(a)

function parseUrlBeforeQuery(url) {
	var arr = url.split(':')
	
}

function split(str, sep) {
	var arr = []
	var index = str.indexOf(sep)
	if (-1 == index) {
		arr[0] = str
	} else {
		arr[0] = str.substr(0, index)
		arr[1] = str.substr(index + sep.length)
	}
	return arr
}
