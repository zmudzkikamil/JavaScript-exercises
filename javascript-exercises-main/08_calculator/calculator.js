const add = function (a, b) {
	return a + b
}

const subtract = function (a, b) {
	return a - b
}
const sum = function (arr) {
	if (arr.length < 1) return 0
	return arr.reduce((a, b) => a + b)
}
const multiply = function (arr) {
	if (arr.length < 1) return 0
	return arr.reduce((a, b) => {
		return a * b
	})
}
const power = function (a, b) {
	return a ** b
}
const factorial = function (a) {
	let arr = []
  if (a < 1) return 1
	for (let i = 1; i <= a; i++) {
		arr.push(i)
	}
  return arr.reduce((a,b)=>{
    return a*b
  })
}
// Do not edit below this line
module.exports = {
	add,
	subtract,
	sum,
	multiply,
	power,
	factorial,
}
