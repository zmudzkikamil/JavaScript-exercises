const ftoc = function (f) {
	const cels = (f - 32) / 1.8
	return Math.round(cels * 10) / 10
}
const ctof = function (c) {
	const fahr = c * 1.8 + 32
	return Math.round(fahr * 10) / 10
}
// Do not edit below this line
module.exports = {
	ftoc,
	ctof,
}
