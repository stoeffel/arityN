var cached = {}

module.exports = function(fn, n) {
    n = Number(n)

    if (Number.isNaN(n) || n < 0) return fn

    if (cached[n]) return cached[n](fn)

    var args = []
    for (var i = 0; i < n; i++) args.push('a' + i)
    args = args.join(', ')

    var functionTemplate = 'return function(' + args +	') { return fn.call(this' +
	(args.length ? ', ' + args : '') +
	') }'

    cached[n] = new Function('fn', functionTemplate)
    return cached[n](fn)
}
