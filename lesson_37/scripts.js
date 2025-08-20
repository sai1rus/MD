// Задание 2

const button1 = document.querySelector('#jsButton')

button1.addEventListener ('click', () => {
    console.log("Событие обработано через JS")
})


// Задание 3

const box = document.querySelector('#myDiv')

box.addEventListener('click', () => {
    box.style.backgroundColor = "blue"
})

box.addEventListener('mouseout', () => {
    console.log("Элемент нажат")
})


// Задание 4

const inputEvent = document.querySelector('#textInput')

inputEvent.addEventListener('keyup', (event) => {
    console.log(event.target.value)
})

// Задание 5

const link = document.querySelector('#myLink')

link.addEventListener('click', (event) => {
    event.preventDefault()
    console.log("Переход по ссылке отменен")
})

// Задание 6

const list = document.querySelector('#list')

list.addEventListener ('click', (event) => {
    console.log(event.target.textContent)
})

// Задание 7

const keyboardInput = document.querySelector('#keyboardInput')

keyboardInput.addEventListener ('keydown', (event) => {
    console.log(`Код клавиши: ${event.code}`)
})