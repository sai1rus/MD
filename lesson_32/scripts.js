// Задание 1

let person = {
    name: "Рустам",
    age: "34",
    city: "Караганда"
}

console.log(person)


// Задание 2

console.log(person["name"], person.age)

person.city = "Алмата"
console.log(person.city)


// Задание 3

person.greet = function() {
    console.log(`Привет, меня зовут ${this.name}, мне ${this.age} лет(года)!`)
}

person.greet()


// Задание 4

let obj1 = {
    a: 10,
    b: 20
}

let obj2 = {
    a: 10,
    b: 20
}

console.log(obj1 == obj2) // false
console.log(obj1 === obj2) // false

/**
 *  В обоих случаях ответ - false, т.к. сравнение идет по ссылкам,
 * а не по внутренним свойствам и в памяти это разные объекты
 */


// Задание 5

let book = {
    title: 'Title',
    author: 'Author',
    details: {
        year: 2011,
        pages: 1500
    }
}

let copyBook = Object.assign({}, book)

book.details.year = 2025

console.log(copyBook.details.year) // 2025
console.log(copyBook.details.year) // 2025

/**
 * Изменение во вложенном объекте повлияло на копию, потому что
 * `Object.assign()` копирует объект поверхностно, свойства копируются
 * по значению только у верхнего уровня, а вложенные объкты копируются по ссылке,
 * соответсвенно изменения во вложенном объекте будут одиникаво передаваться и копии,
 * и оригиналу.
 */


// Задание 6

let calculator = {
    a: 4,
    b: 6,
    sum: function() {
        return this.a + this.b
    },
    multiply: function() {
        return this.a * this.b
    }
}

console.log(calculator.sum()) // 4
console.log(calculator.multiply()) // 24


// Задание 7

const car = {
    brand: "Brand",
    model: "Model"
}

car.brand = "newBrand"

console.log(car.brand) // newBrand


/**
 * Изменение удалось сделать, потому что const
 * не позволяет переопределять или переназнать объект,
 * но при этом допускает изменения содержимого объекта.
 */




