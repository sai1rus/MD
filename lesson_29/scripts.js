// Задание 1

let num_1 = 22
console.log(num_1)

num_1 = 33  // при сполобе let перменную можно изменить
console.log(num_1)

const num_2 = 22
console.log(num_2)

// при способе const перменную нельзя изменить, в консоли выходит ошибка


// Задание 2

/*
    Способ объявления переменной с ключевым словом "var", является усатревшим. В данном способе допускаются изменение и 
    переобявление переменных, что в современной разработке может вызвать множество проблем, поэтому данный способ является устаревшим.
*/


// Задание 3

let num = 11 // number
console.log(num)
console.log(typeof(num))

let nameUser = 'Rustam' // string
console.log(nameUser)
console.log(typeof(nameUser))

let bul = true // boolean
console.log(bul)
console.log(typeof(bul))

let v = null // null
console.log(v)
console.log(typeof(v))

let valUnd  // undefined
console.log(valUnd)
console.log(typeof(valUnd))

let valNan = 0 / 0 // Nan
console.log(valNan)
console.log(typeof(valNan))

// Задание 4

let valStr = "11" // строка
console.log(valStr)
console.log(typeof(valStr))

let valNum = Number(valStr) // преобразование строки в число
console.log(valNum)
console.log(typeof(valNum)) 

valNum = String(valNum) // преобразование числа в строку
console.log(valNum)
console.log(typeof(valNum))

valUnd = String(valUnd) // преобразование undefined в строку
console.log(valUnd)  // выводит слово undefined в состоянии строки
console.log(typeof(valUnd)) // выводит тип string

valUnd = Number(valUnd) // преобразование undefined в число
console.log(valUnd) // выводит значение NaN
console.log(typeof(valUnd)) // выводит тип number

v = String(v) // преобразование null в строку
console.log(v) // выводит слово null в состоянии строки
console.log(typeof(v)) // выводит тип string

v = Number(v) // преобразование null в число
console.log(v) // выводит значение NaN
console.log(typeof(v)) // выводит тип number


// Задание 5

let number = 256 // тип данных number
number = String(number)
console.log(number)
console.log(typeof(number))

/*
    При динамической типизации не нужно заранее объявлять тип данных для перменной, например при присвоении к переменной number числового
    значения 256 тип данных автоматически определится как number, а если в переменнойсохранить слово, то тип данных автоматически 
    будет string.
 */


// Задание 6

let name = prompt("Введите ваше имя: ")
let age = prompt("Введите ваш возраст: ")


console.log(`Имя: ${name}`)
console.log(`Возраст: ${age}`)
