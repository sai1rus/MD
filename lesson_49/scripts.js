// Задание 1

/**
 * AJAX - - это технология, позволяющая веб-страницам обмениваться данными с сервером в фоновом режиме, не обновляя всю страницу. 
 * Она использует объект XMLHttpRequest или fetch API для отправки и получения данных, что делает интерфейс более динамичным и отзывчивым. 
 * Благодаря AJAX можно, например, подгружать новые сообщения, обновлять таблицы или фильтровать контент без потери состояния страницы.
 * 
 * Примеры реальных приложений и сайтов, использующих AJAX - - Google Maps, Gmail, YouTube, Интенет-магазины.
 */


// Задание 2

const xhr = new XMLHttpRequest();
xhr.open('GET', 'https://jsonplaceholder.typicode.com/posts', true);
xhr.onload = function() {
 if (xhr.status === 200) {
   const data = JSON.parse(xhr.responseText);
   data.forEach(post => {
      console.log(post.title);
    });

 } else {
   console.error('Ошибка загрузки данных:', xhr.status);
 }
};
xhr.onerror = function() {
 console.error('Ошибка соединения');
};
xhr.send();


// Задание 3

// const xhrRender = new XMLHttpRequest();
// xhr.open('GET', 'https://jsonplaceholder.typicode.com/posts', true);
// xhr.onload = function() {
//  if (xhr.status === 200) {
//    const posts = JSON.parse(xhr.responseText);
//    renderPostsList(posts); 
//  } else {
//    console.error('Ошибка загрузки данных:', xhr.status);
//  }
// };
// xhr.onerror = function() {
//  console.error('Ошибка соединения');
// };
// xhr.send();

// function renderPostsList(posts) {
//    const postsList = document.getElementById('postsList');
//    posts.forEach(post => {
//      const listItem = document.createElement('li');
//      listItem.textContent = `${post.title}`;
//      postsList.appendChild(listItem);
//    });
//  } 

// Задание 3, 4, 5 и 6

const statusDiv = document.getElementById('status');
    const contentDiv = document.getElementById('content');

    const xhr2 = new XMLHttpRequest();
    xhr.open('GET', 'https://jsonplaceholder.typicode.com/posts', true);

    xhr.onload = function () {
      if (xhr.status >= 200 && xhr.status < 300) {
        statusDiv.remove(); // Удаляем индикатор загрузки
        const posts = JSON.parse(xhr.responseText);

        const ul = document.createElement('ul');

        posts.forEach(post => {
          const li = document.createElement('li');

          const title = document.createElement('strong');
          title.textContent = post.title;

          const body = document.createElement('p');
          body.textContent = post.body;

          const userId = document.createElement('small');
          userId.textContent = `ID пользователя: ${post.userId}`;

          li.appendChild(title);
          li.appendChild(body);
          li.appendChild(userId);
          ul.appendChild(li);
        });

        contentDiv.appendChild(ul);
      } else {
        showError(`Ошибка загрузки: ${xhr.status} ${xhr.statusText}`);
      }
    };

    xhr.onerror = function () {
      showError('Ошибка сети. Проверьте подключение к интернету.');
    };

    xhr.send();

    function showError(message) {
      statusDiv.className = 'error';
      statusDiv.textContent = message;
    }


