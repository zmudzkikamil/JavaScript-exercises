// exercise 1
// Write a function that simply repeats the string a given number of times:
// repeatString('hey', 3) // returns 'heyheyhey'
const repeatString = (str, num) => Array(num).fill(str).join('') || 'ERROR'

// exercise 2
// Pretty simple, write a function called reverseString that returns its input, reversed!
// reverseString('hello there') // returns 'ereht olleh'
const reversedString = str => str.split('').reverse().join('')

// exercise 3
// Implement a function that takes an array and some other arguments then removes the other arguments from that array:
// removeFromArray([1, 2, 3, 4], 3); // should remove 3 and return [1,2,4]
const removeFromArray = (arr, ...toDelete) => arr.filter(el => !toDelete.includes(el))

// exercise 4
// Implement a function that takes 2 integers and returns the sum of every number between(and including) them:
// sumAll(1, 4) // returns the sum of 1 + 2 + 3 + 4 which is 10
const sumAll = function (a, b) {
	if (typeof a !== 'number' || typeof b !== 'number') return 'ERROR'
	if (a < 0 || b < 0) return 'ERROR'
	let sum = 0
	for (i = Math.min(a, b); i <= Math.max(a, b); i++) {
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
const ftoc = f => Math.round(((f - 32) / 1.8) * 10) / 10
const ctof = c => Math.round((c * 1.8 + 32) * 10) / 10

// exercise 7
// The goal for this exercise is to create a calculator that does the following:
// add, subtract, get the sum, multiply, get the power, and find the factorial
const add = (a, b) => a + b

const subtract = (a, b) => a - b

const sum = function (arr) {
	if (arr.length < 1) return 0
	return arr.reduce((acc, curr) => acc + curr, 0)
}

const multiply = function (arr) {
	arr.length ? arr.reduce((acc, curr) => acc * curr) : 0
}

const power = (a, b) => a ** b

const factorial = function (a) {
	let sum = 1
	for (let i = a; (i = 1); i--) {
		sum *= i
	}
	return sum
}
// exercise 8
// Write a function that determines whether or not a given string is a palindrome.
const palindromes = sentence => {
	const formattedSentence = sentence.toLowerCase().replace(/[^a-z]/g, '')
	return formattedSentence === formattedSentence.split('').reverse().join('')
}

// exercise 9
// Create a function that returns a specific member of the Fibonacci sequence
const fibonacci = function (num) {
	if (num < 0) return 'OOPS'
	if (num == 0) return 0
	let a = 0
	let b = 1
	for (let i = 1; i < num; i++) {
		const temp = a + b
		a = b
		b = temp
	}
	return b
}

// exercise 10
// Implement the legendary Caesar cipher:
// write a function that takes a string to be encoded and a shift factor and then returns the encoded string:
// caesar('A', 1) // simply shifts the letter by 1: returns 'B'
const caesar = function (str, num) {
	const newNum = Math.abs(num) > 26 ? num % 26 : num
	const checkLetter = code => {
		if (code >= 97 && code <= 122) return String.fromCharCode(move(code, 97, 122))
		if (code >= 65 && code <= 90) return String.fromCharCode(move(code, 65, 90))
		return String.fromCharCode(code)
	}
	const move = (code, min, max) => {
		let result = code + newNum
		if (result > max) {
			return result - max + min - 1
		}
		if (result < min) {
			return result + max - min + 1
		}
		return result
	}
	return str.split('').reduce((acc, current) => {
		acc += checkLetter(current.charCodeAt(0))
		return acc
	}, '')
}

// exercise 11
// Unikalne wartosci w tablicy. [3, 1, 3, 2, 4] -> [1, 2, 3, 4]
// i posortowane
// zalozenie: tylko numeryczne tablice
const sortUniqArr = function (arr) {
	return [...new Set(arr)].sort((a, b) => a - b)
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
	let shuffled = []
	let unshuffled = arr
	for (let i = 0; i < arr.length; i++) {
		let num = Math.floor(Math.random() * unshuffled.length)
		shuffled.push(unshuffled[num])
		unshuffled = unshuffled.filter(el => unshuffled.indexOf(el) !== num)
	}
	return shuffled
}

// exercise 14
// Write a JavaScript function to find the unique elements from two arrays.
// Input  : [1, 2, 3, 10], [100, 2, 1, 10]
// Output : ['3', '100']
const unique = (arr1, arr2) => [...new Set([...arr1, ...arr2])].filter(el => !(arr1.includes(el) && arr2.includes(el))) // set for optimization

// version 2 - reduce practice
// [...new Set([...arr1, ...arr2])].reduce(
// 	(acc, current) => (arr1.includes(current) && arr2.includes(current) ? acc : [...acc, current]),
// 	[]
// )

// exercise 15
// Write a JavaScript function that accepts a string as a parameter and counts the number of vowels within the string.
// Input  : 'The quick brown fox'
// Output : 5
const vowels = ['a', 'e', 'i', 'o', 'u', 'y']
const checkVowels = str => str.split('').reduce((prev, current) => (vowels.includes(current) ? ++prev : prev), 0)
// exercise 16
// Write a JavaScript program to compute the union of two arrays.
// Input  : [1, 2, 3], [100, 2, 1, 10]
// Output : [1, 2, 3, 10, 100]
const UniqueSortArrays = (arr1, arr2) => [...new Set([...arr1, ...arr2])].sort((a, b) => a - b)

// exercise 17
// Write a JavaScript function that accepts a string as a parameter and find the longest word within the string.
// Input  : 'Web Development Tutorial'
// Output : 'Development'
const findLongestWord = str => str.split(' ').reduce((acc, current) => (acc.length >= current.length ? acc : current))

// exercise 18
// Return the character that is most common in a string
// ex. maxCharacter('javascript') == 'a'
const maxChar = function (str) {
	const charSet = [...new Set(str.toLowerCase().split(''))] //optimization
	let max = 0
	let char = ''
	charSet.forEach(letter => {
		let current = str.toLowerCase().split(letter).length
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
// Odtworzyc dzialanie reduce bez uzycia reduce.
function reduceFromScratch(arr, callback, initialValue) {
	let value = initialValue
	arr.forEach((arrVal, arrIndex) => {
		value = callback(value, arrVal, arrIndex)
	})
	return value
}
// console.log(reduceFromScratch([1,2,3],(acc,curr)=>acc+curr,10))

//exercise 22
// You are given an integer array prices where prices[i] is the price of a given stock on the ith day.
// On each day, you may decide to buy and/or sell the stock. You can only hold at most one share of the stock at any time. However, you can buy it then immediately sell it on the same day.
// Find and return the maximum profit you can achieve.
var maxProfit = function (prices) {
	return prices.reduce((acc, curr, index) => (curr < prices[index + 1] ? (acc += prices[index + 1] - curr) : acc), 0)
}

//exercise 23
// To be a senior, a member must be at least 55 years old  and have a handicap greater than 7
// input: [[1,2],[56,1],[56,13]]
// output: ['Open', 'Open', 'Senior']
const openOrSenior = data => {
	return data.map(arr => (arr[0] >= 55 && arr[1] > 7 ? 'Senior' : 'Open'))
}

//exercise 24
const clearTextFromWUB = str => {
	return str.replace(/(WUB)+/g, ' ').trim()
}

//exercise 25
const minAndMaxFromString = str => {
	const arr = str.split(' ').sort((a, b) => a - b)
	return `${arr[0]} ${arr[arr.length - 1]}`
}

//exercise 26
// create a function that masks a string of characters with # except for the last four (4) characters
const maskString = str => {
	return str.slice(-4).padStart(str.length-1, '#')
}

