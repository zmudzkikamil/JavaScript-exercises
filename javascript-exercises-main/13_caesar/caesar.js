const caesar = function (str, num) {
	let newNum = num
	if (Math.abs(num) > 26) {
		newNum = num % 26
	}
	let newStr = ''
	let newCharCode
	const lowerCase = () => {
		if (newCharCode > 90) {
			newStr += String.fromCharCode(newCharCode - 26)
		} else if (newCharCode < 65) {
			newStr += String.fromCharCode(newCharCode + 26)
		} else {
			newStr += String.fromCharCode(newCharCode)
		}
	}
	const biggerCase = () => {
		if (newCharCode > 122) {
			newStr += String.fromCharCode(newCharCode - 26)
		} else if (newCharCode < 97) {
			newStr += String.fromCharCode(newCharCode + 26)
		} else {
			newStr += String.fromCharCode(newCharCode)
		}
	}
	for (let i = 0; i < str.length; i++) {
		re = /[A-Za-z]/g
		if (!re.test(str[i])) {
			newStr += str[i]
		} else {
			newCharCode = str.charCodeAt(i) + newNum
			str.charCodeAt(i) <= 90 ? lowerCase() : biggerCase()
		}
	}
	return newStr
}
// Do not edit below this line
module.exports = caesar
