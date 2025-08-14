// Задание 1

let fruits = ["Яблоко", "Банан", "Апельсин"]

console.log(fruits)


// Задание 2

console.log(fruits[0])
console.log(fruits[fruits.length - 1])

fruits.push("Груша")
console.log(fruits)


// Задание 3

fruits.pop()
fruits.shift()

console.log(fruits)


// Задание 4

fruits.forEach(fruit => console.log(fruit))


// Задание 5

let lengths = fruits.map(fruit => fruit.length)

console.log(lengths)


// Задание 6

let numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

let numEven = numbers.filter(num => num % 2 === 0)
console.log(numEven)


// Задание 7

let sumNumbers = numbers.reduce((acc, cur) => acc + cur, 0)

console.log(sumNumbers)


// Задание 8

let x = numbers.find(num => num > 5)
console.log(x)


// Задание 9

let arr1 = [1, 2, 3]
let arr2 = [4, 5, 6]

let arr = arr1.concat(arr2)
console.log(arr)


// Задание 10

console.log(fruits.includes("Банан"))


// Задание 11

fruits.reverse()
console.log(fruits)







