// wiki: http://en.wikipedia.org/wiki/URI_scheme
// spec: https://url.spec.whatwg.org/
// e.g. http://user:pass@host.com:8080/p/a/t/h?query=string#hash

var qs = require('min-qs')

exports.parse = function(url, parseQuery) {
	var ret = {}, arr

	// hash
	arr = split(url, '#')
	url = arr[0]
	ret.hash = arr[1]
	
	// get scheme
	arr = splicePattern(url, /^[a-Z][a-zA-Z0-9+-.]*/)
}

var a = exports.parse('http://user:pass@host.com:8080/p/a/t/h?query=string#hash', true)
console.log(a)

function splicePattern(str, reg) {
	var ret = ''
	str.replace(reg, function(matched) {
		ret = matched
		return ''
	})
	return [ret, str]
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
