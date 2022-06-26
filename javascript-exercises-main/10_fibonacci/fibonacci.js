const fibonacci = function (index) {
	if (index < 0) return 'OOPS'
	if (index == 0) return 0
	let a = 0
	let b = 1
	let fiboArr = []
	for (let i = 0; i < index; i++) {
		fiboArr.push(b)
		const temp = b
		b = a + temp
		a = temp
	}
	return fiboArr[fiboArr.length - 1]
}

// Do not edit below this line
module.exports = fibonacci
