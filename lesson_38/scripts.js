// Задание 1

localStorage.setItem("greeting", "Привет, мир!")

console.log(localStorage.getItem("greeting"))


// Задание 2

localStorage.removeItem("greeting")
console.log(localStorage.getItem("greeting"))


// Задание 3

const user = {name: "Рустам", age: 34, city: "Караганда"} 

localStorage.setItem("user", JSON.stringify(user))

console.log(JSON.parse(localStorage.getItem("user")))


// Задание 4

const userParse = JSON.parse(localStorage.getItem("user"))
userParse.country = "Казахстан"

localStorage.setItem("user", JSON.stringify(userParse))

console.log(JSON.parse(localStorage.getItem("user")))


// Задание 5

if (JSON.parse(localStorage.getItem("user"))) {
    console.log(JSON.parse(localStorage.getItem("user")))
} else {
    const user1 = {name: "Рустам", age: 34, city: "Караганда", country: "Казахстан" }
    localStorage.setItem("user", JSON.stringify(user))
}


// Задание 6

localStorage.clear()
console.log(JSON.parse(localStorage.getItem("user")))


// Задание 7
let tasks = [
    {title: "Task-1", completed: true},
    {title: "Task-2", completed: false},
    {title: "Task-3", completed: false}
]

localStorage.setItem("tasks", JSON.stringify(tasks))

function tasksList() {
    JSON.parse(localStorage.getItem("tasks")).forEach((item, i) => {
        if (item.completed) {
            console.log(`${++i} - ${item.title} - Выполнено!`)
        } else {
            console.log(`${++i} - ${item.title} - Не выполнено!`) 
        }
    })
}

tasksList()


// Задание 8

tasks = JSON.parse(localStorage.getItem("tasks"))
tasks[1].completed = true
tasks[2].completed = true

localStorage.setItem("tasks", JSON.stringify(tasks))

tasksList()