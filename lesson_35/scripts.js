// Задание 1

let count = 1

while (count <= 10) {
    console.log(count)
    count++
}


// Задание 2

count = 1

while (count <= 10) {
    if (count === 5) {
        count++
        continue
    } else if (count === 8) {
        console.log(count)
        break
    } else {
        console.log(count)
    }
    count++
}


// Задание 3

count = 1

do {
    console.log(count)
    count++
} while (count <= 5) 

/**
 * цикл while начинает итерации только если уловие истинно,
 * соответсвенно если условие ложно while не сделает ни одной итерации,
 * а do-while гарантирует выполнение минимум ондной итерации, даже если
 * условие ложно
 */


// Задание 4

let input

while (true) {
    console.log("Бесконечный цикл")
    input = Number(prompt())
    if (input === 10) {
        break
    }
}


// Задание 5

for (let i = 1; i <= 10; i++) {
    console.log(i)
}


// Задание 6

i = 0

for (;;) {
    console.log("For")
    if (i > 100) {
        break
    }
    i++
}


// Задание 7

let numbers = [1, 2, 3, 4, 5]

for (let i = 0; i < numbers.length; i++) {
    console.log(numbers[i])
}


// Задание 8


// 8.1

/**
 * Цикл while используется когда заранее неизвестно 
 * количество итераций, но если изветно сколько раз будет итерироваться 
 * цикл, тогда используется for
 */

// 8.2

/**
 * цикл for можно использовать для перебора элементов массива
 * или пребора строк или чисел в определенном колличестве,
 * выполнение определенных операций заданое количество раз,
 * для всего остального можно использовать while
 */


// Задание 9

for (count = 10; count > 0; count--) {
    console.log(count)
}


// Задание 10

for (i = 1; i <= 10; i++) {
    if (i % 2 !== 0) {
        continue
    } else {
        console.log(i)
    }
}














