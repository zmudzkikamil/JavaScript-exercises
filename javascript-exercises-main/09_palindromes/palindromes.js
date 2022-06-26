const palindromes = function (sentence) {
	const sentenceWithoutSpaces = sentence.toLowerCase().replace(/[^a-z]/g, "");
	if (sentenceWithoutSpaces !== sentenceWithoutSpaces.split('').reverse().join('')) return false

	return true
}
// Do not edit below this line
module.exports = palindromes
