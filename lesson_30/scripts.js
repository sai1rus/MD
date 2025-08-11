// Задание 1

let a = 10
let b = 5
let c = 2

console.log(a + b + c)  //17
console.log((a + c) - b) //7
console.log((a * b) / c) //25
console.log(a % b) //0


// Задание 2

let x = 7

console.log(x++ + ++x) //16
console.log(x-- - --x) //2

// Задание 3 

console.log("The result is: " + String(4 + 5))


// Задание 4

/* переменные a, b и c объявлены в Задании 1 */

console.log((a > b) && (a > 0 && b > 0)) //true
console.log(c < 10 || c === 2) //true
console.log(a / c !== 5) //false


// Задание 5

console.log(10 == "10") //true, т.к. данное сравнение не учитывает тип данных 
console.log(10 === "10") //false, т.к. данное сравнение учитывает тип данных, поэтому число 10 не равно строке "10"


// Задание 6

let X = 9
let y = 11

console.log((X % 2 === 0 || X % 3 === 0) && X % 6 !== 0) //true
console.log(!(y > 10 || y < 5)) //false
