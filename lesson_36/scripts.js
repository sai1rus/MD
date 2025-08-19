// Задание 1

let message = document.getElementById("message")
message.textContent = "Добро пожаловать в JavaScript!"


// Задание 2

let box = document.getElementsByClassName("box")

for (let i = 0; i < box.length; i++) {
    box[i].style.width = "200px"
    box[i].style.height = "200px"
    switch (i) {
        case 0:
            box[0].style.backgroundColor = "red"
        case 1:
            box[1].style.backgroundColor = "green"
        case 2:
            box[2].style.backgroundColor = "blue"
    }

}


// Задание 3

let box2 = document.querySelectorAll('.box2')

box2.forEach(box2 => {
    box2.style.width = "200px"
    box2.style.height = "200px"
    box2.style.backgroundColor = "red"
})

let text = document.querySelector('#text')

text.textContent = 'Измененный текст'

// Задание 4

let hig = document.querySelectorAll('.highlight')

hig.forEach(hig => {
    hig.style.color = "red"
})