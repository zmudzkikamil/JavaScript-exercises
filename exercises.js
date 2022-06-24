// exercise 1
// Write a function that simply repeats the string a given number of times:
// repeatString('hey', 3) // returns 'heyheyhey'
const repeatString = (str, num) => {
	let repeatedString = ''
	if (num < 0) return 'ERROR'
	for (let i = 0; i < num; i++) {
		repeatedString += str
	}
	return repeatedString
}

// exercise 2
// Pretty simple, write a function called reverseString that returns its input, reversed!
// reverseString('hello there') // returns 'ereht olleh'
const reverseString = function (string) {
	const reversedString = string.split('').reverse().join('')
	return reversedString
}

// exercise 3
// Implement a function that takes an array and some other arguments then removes the other arguments from that array:
// removeFromArray([1, 2, 3, 4], 3); // should remove 3 and return [1,2,4]
const removeFromArray = function (arr, ...toDelete) {
	const filteredArr = arr.filter(el => !toDelete.includes(el))
	return filteredArr
}

// exercise 4
// Implement a function that takes 2 integers and returns the sum of every number between(and including) them:
// sumAll(1, 4) // returns the sum of 1 + 2 + 3 + 4 which is 10
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

// exercise 5
// Create a function that determines whether or not a given year is a leap year. Leap years are determined by the following rules:
// Leap years are years divisible by four (like 1984 and 2004). However, years divisible by 100 are not leap years (such as 1800 and 1900) unless they are divisible by 400 (like 1600 and 2000, which were in fact leap years). (Yes, it's all pretty confusing)
const leapYears = function (year) {
	if (year % 4 !== 0) return false
	if (year % 100 === 0 && year % 400 !== 0) return false
	return true
}

// exercise 6
// Write two functions that convert temperatures from Fahrenheit to Celsius, and vice versa:
// ftoc(32) // fahrenheit to celsius, should return 0
// ctof(0) // celsius to fahrenheit, should return 32
const ftoc = function (f) {
	const cels = (f - 32) / 1.8
	return Math.round(cels * 10) / 10
}
const ctof = function (c) {
	const fahr = c * 1.8 + 32
	return Math.round(fahr * 10) / 10
}

// exercise 7
// The goal for this exercise is to create a calculator that does the following:
// add, subtract, get the sum, multiply, get the power, and find the factorial
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
	return arr.reduce((a, b) => {
		return a * b
	})
}
// exercise 8
// Write a function that determines whether or not a given string is a palindrome.
const palindromes = function (sentence) {
	const sentenceWithoutSpaces = sentence.toLowerCase().replace(/[^a-z]/g, '')
	if (sentenceWithoutSpaces !== sentenceWithoutSpaces.split('').reverse().join('')) return false
	return true
}

// exercise 9
// Create a function that returns a specific member of the Fibonacci sequence
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

// exercise 10
// Implement the legendary Caesar cipher:
// write a function that takes a string to be encoded and a shift factor and then returns the encoded string:
// caesar('A', 1) // simply shifts the letter by 1: returns 'B'
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

// exercise 11
// Unikalne wartosci w tablicy. [3, 1, 3, 2, 4] -> [1, 2, 3, 4]
// i posortowane
// zalozenie: tylko numeryczne tablice
const sortUniqArr = function (arr) {
	const set = new Set(arr)
	return [...set].sort((a, b) => a - b)
}

// exercise 12
// FizzBuzz is a task where the programmer is asked to print numbers from 1 to 100, but here’s the catch, multiple of three should print “Fizz” and similarly print “Buzz” for multiples of 5 and lastly print “FizzBuzz” for multiples of three and five.
const fizzBuzz = function () {
	for (let i = 1; i <= 100; i++) {
		if (i % 3 === 0 && i % 5 === 0) {
			console.log('FizzBuzz')
		} else if (i % 3 === 0) {
			console.log('Fizz')
		} else if (i % 5 === 0) {
			console.log('Buzz')
		} else {
			console.log(i)
		}
	}
}

// exercise 13
// Write a JavaScript program to shuffle an array.
// Input  : [7, 9, 0, -2]
const shuffle = function (arr) {
	let shuffledArr = []
	let unshuffled = arr
	for (let i = 0; i < arr.length; i++) {
		let num = Math.floor(Math.random() * unshuffled.length)
		shuffledArr.push(unshuffled[num])
		unshuffled = unshuffled.filter(el => unshuffled.indexOf(el) !== num)
	}
	return shuffledArr
}

// exercise 14
// Write a JavaScript function to find the unique elements from two arrays.
// Input  : [1, 2, 3, 10], [100, 2, 1, 10]
// Output : ['3', '100']
const unique = function (arr1, arr2) {
	fullArr = arr1.concat(arr2)
	const uniqueArr = fullArr.filter(el => !(arr1.includes(el) && arr2.includes(el)))
	return uniqueArr
}
// exercise 15
// Write a JavaScript function that accepts a string as a parameter and counts the number of vowels within the string.
// Input  : 'The quick brown fox'
// Output : 5
const checkVowels = function (str) {
	const vowels = ['a', 'e', 'i', 'o', 'u', 'y']
	let vowelsCount = 0
	for (let i = 0; i < str.length; i++) {
		vowels.forEach(el => {
			if (el === str.charAt(i)) {
				vowelsCount++
			}
		})
	}
	return vowelsCount
}
// exercise 16
// Write a JavaScript program to compute the union of two arrays.
// Input  : [1, 2, 3], [100, 2, 1, 10]
// Output : [1, 2, 3, 10, 100]
const UniqueSortArrays = function (arr1, arr2) {
	const fullArr = arr1.concat(arr2)
	const uniqueFullArr = new Set(fullArr)
	return [...uniqueFullArr].sort((a, b) => a - b)
}
UniqueSortArrays([1, 2, 10], [3, 1, 100])
// exercise 17
// Write a JavaScript function that accepts a string as a parameter and find the longest word within the string.
// Input  : 'Web Development Tutorial'
// Output : 'Development'
const findLongestWord = function (str) {
	const newStr = str.replace(/[,]/, ' ')
	let length = 0
	let longestWord = ''
	const arrOfWords = newStr.split(' ')
	arrOfWords.forEach(word => {
		if (length < word.length) {
			length = word.length
			longestWord = word
		}
	})
	return longestWord
}
findLongestWord('abcd, aer sadd')
// exercise 18
// Return the character that is most common in a string
// ex. maxCharacter('javascript') == 'a'
const maxChar = function (str) {
	const strLowerCase = str.toLowerCase()
	let max = 0
	let char = ''
	strLowerCase.split('').forEach(letter => {
		let current = strLowerCase.split(letter).length
		if (current > max) {
			max = current
			char = letter
		}
	})
	return char
}
// exercise 19
// Funkcja rekurencyjna, która deep freezuje podany obiekt
// obiekt (moze miec znestowane obiekty)

// const hero = { name: 'zombie', stats: { mana: { energy: 20, stamina: 10 }, hp: 100 } }
const deepFreeze = function (obj) {
	Object.freeze(obj)
	for (const key in obj) {
		if (typeof obj[key] === 'object' && !Array.isArray(obj[key]) && obj[key] !== null) {
			deepFreeze(obj[key])
		}
	}
}
// deepFreeze(hero)

// exercise 20
// Write a JavaScript function that accepts a number as a parameter and check the number is prime or not.
const numberIsPrime = function (num) {
	for (let i = 2; i <= Math.sqrt(num); i++) {
		if (num % i === 0) return false
	}
	return num > 1
}
// exercise 21
// Odtworzyc dzialanie reduce bez uzycia reduce. (liczby,stringi i tablice)
let accumulator
const reduceFunction = function (arr, callback, initialValue) {
	accumulator = initialValue
	if (typeof accumulator == 'number' || typeof accumulator == 'string') {
		// for strings and numbers
		accumulator += arr[0]
	} else {
		// for Arrays
		accumulator.push(arr[0])
	}

	for (let i = 1; i < arr.length; i++) {
		callback(arr[i])
	}
	return accumulator
}
const sumFunction = function (curr) {
	// for strings and numbers
	if (typeof accumulator == 'number' || typeof accumulator == 'string') return (accumulator += curr)

	// for Arrays
	return accumulator.push(curr)
}
reduceFunction([1, 2, 3], sumFunction, 1)
