const repeatString = (str, num) => {
	let arrOfStr = []
	if (num < 0) return 'ERROR'
	for (let i = 0; i < num; i++) {
		arrOfStr.push(str)
	}
	return arrOfStr.join('')
}

// Do not edit below this line
module.exports = repeatString;
