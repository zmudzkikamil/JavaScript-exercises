const sumAll = function (a, b) {
	let sum = 0
	if (typeof a !== 'number' || typeof b !== 'number') return 'ERROR'
	if (a < 0 || b < 0) return 'ERROR'
	const first = Math.min(a, b)
	const last = Math.max(a, b)
	for (i = first; i <= last; i++) {
		sum += i
	}
	return sum
}
// Do not edit below this line
module.exports = sumAll
