// Задание 1

function greet() {
    console.log("Привет, мир!")
}

greet()


// Задание 2

function sayHello(name) {
    console.log(`Привет, ${name}!`)
}

sayHello("Рустам")
sayHello("Александр")
sayHello("Азамат")


// Задание 3

const sum = function(a, b) {
    return a + b
}

console.log(sum(2, 3))
console.log(sum(22, 11))
console.log(sum(30, 40))


// Задание 4

const isEven = function(x) {
    return x % 2 === 0
}

console.log(isEven(9))
console.log(isEven(4))
console.log(isEven(20))


// Задание 5

function max(a, b) {
    if (a > b) {
        return a
    } else if (b > a) {
        return b
    } else {
        return "Числа равны"
    }
}

console.log(max(2, 3))
console.log(max(6, 3))
console.log(max(3, 3))


// Задание 6

function getInitials(firstName, lastName) {
    const in1 = prompt("Введите имя:").charAt(0).toUpperCase()
    const in2 = prompt("Введите фамилию:").charAt(0).toUpperCase()
    return `${in1}.${in2}.`
}

console.log(getInitials())


// Задание 7

const square = function(n) {
    return n * n
}

const cube = function(n) {
    return square(n) * n
}

console.log(square(2))
console.log(cube(2))
console.log(square(3))
console.log(cube(3))


// Задание 8

const sumAr = (a, b) => a + b

console.log(sumAr(20, 10))


// Дополнительное задание


function getFactorial(x) {
    if (x > 1) {
        return x * getFactorial(x - 1)
    } else {
        return 1
    }
}

console.log(getFactorial(5))
console.log(getFactorial(0))
console.log(getFactorial(1))
console.log(getFactorial(7))


















