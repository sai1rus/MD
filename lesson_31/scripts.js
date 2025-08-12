// Задание 1

n = Number(prompt("Введите число: "))

if (n > 10) {
    console.log("Число больше 10")
} else {
    console.log("Число меньше или равно 10")
}


// Задание 2

let userConfirmed = confirm("Удалить файл?")

if (userConfirmed) {
    console.log("Файл удален")
} else {
    console.log("Удаление отменено")
}


// Задание 3

let age = Number(prompt("Сколько вам лет?"))

if (age < 18) {
    console.log("Вы еще подросток")
} else if (age >= 18 && age <= 30) {
    console.log("Вы молодой взрослый")
} else {
    console.log("Вы взрослый")
}


// Задание 4

let N = Number(prompt("Введите число: "))

console.log((N % 2 === 0)?"Четное число":"Нечетное число")


// Задание 5

let num = Number(prompt("Число от 1 до 7"))

switch (num) {

    case 1:
        console.log("Понедельник")
        break

    case 2:
        console.log("Вторник")
        break

    case 3:
        console.log("Среда")
        break
    
    case 4:
        console.log("Четверг")
        break
    
    case 5:
        console.log("Пятница")
        break
    
    case 6:
        console.log("Суббота")
        break
    
    case 7:
        console.log("Воскресенье")
        break
    
    default:
        console.log("Некорректное значение")


}


// Задание 6

let x = Number(prompt("Введите первое число:"))
let y = Number(prompt("Введите второе число:"))

if (x === y) {
    console.log("Числа равны")
} else {
    console.log((x > y)?"Первое число больше":"Второе число больше")
}


// Дополнительное задание

let m = Number(prompt("Введите номер месяца:"))
let season

switch (m < 3 || m === 12) {
    case true:
        season = "Зима"
        break
    
    default:
        switch (m >= 3 && m < 6) {
            case true:
                season = "Весна"
                break
           
            default:
                switch (m >= 6 && m < 9) {
                    case true:
                        season = "Лето"
                        break
                    
                    default:
                        switch (m >= 9 && m < 12) {
                            case true:
                                season = "Осень"
                                break
                            
                            default:
                                season = "Некорректное значение"
                        }
                }
        }
}

console.log(season)





















