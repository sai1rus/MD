// Задание 1

fetch ('https://jsonplaceholder.typicode.com/posts/1')
    .then (response => response.json())
    .then(data => console.log(data))
    .catch(error => console.error('Ошибка:', error));


// Задание 2

const data = {title: "Новый пост", body: "Содержимое поста", userId: 1}

fetch('https://jsonplaceholder.typicode.com/posts', {
 method: 'POST', 
 headers: {
   'Content-Type': 'application/json' 
 },
 body: JSON.stringify(data) 
})

.then(response => response.json())
 .then(data => console.log('Успешное создание поста:', data))
 .catch(error => console.error('Ошибка:', error));


 // Задание 3

fetch('https://jsonplaceholder.typicode.com/nonexistent')
 .then(response => {
   if (!response.ok) {
     throw new Error('Ошибка сети: ' + response.status);
   }
   return response.json();
 })
 .then(data => console.log(data))
 .catch(error => console.error('Ошибка:', error));

// Задание 4

const updatedData = {title: "Обновленный заголовок"}

fetch('https://jsonplaceholder.typicode.com/posts/1', {
    method: 'PUT',
    headers: {
        'Content-Type': 'application/json'
    },
    body: JSON.stringify(updatedData)
})

 .then(response => response.json())
 .then(data => console.log('Обновлено:', data))
 .catch(error => console.error('Ошибка:', error));

fetch('https://jsonplaceholder.typicode.com/posts/1', {
    method: 'DELETE'
})
 .then(() => console.log('Пост удален'))
 .catch(error => console.error('Ошибка:', error));

// Задание 5

async function fetchPost() {
    try {
        const response = await fetch('https://jsonplaceholder.typicode.com/posts/1')
        const data2 = await response.json();
        console.log(data2);
    } catch (error) {
        console.error('Ошибка:', error);
    }
}

fetchPost();


// Задание 6

fetch('https://jsonplaceholder.typicode.com/comments', {
  method: 'GET',
  headers: {
    'Authorization': 'Bearer dummy_token_12345'
  }
})
  .then(response => {
    if (!response.ok) {
      throw new Error(`Ошибка: ${response.status} ${response.statusText}`);
    }
    return response.json();
  })
  .then(data => {
    console.log('Результат запроса:', data);
  })
  .catch(error => {
    console.error('Произошла ошибка при выполнении запроса:', error.message);
  });
