// Задание 1

setTimeout(() => {
    console.log('Привет, мир!')
}, 2000)

// Задание 2

const timerId = setInterval(() => {
  const now = new Date();
  const hours = String(now.getHours()).padStart(2, '0');
  const minutes = String(now.getMinutes()).padStart(2, '0');
  const seconds = String(now.getSeconds()).padStart(2, '0');
  console.log(`${hours}:${minutes}:${seconds}`);
}, 1000);

// Задание 3

setTimeout(() => {
   clearInterval(timerId);
 }, 6000); 

// Задание 4

  function fetchData() {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve("Данные получены!");
    }, 3000);
  });
}

fetchData().then((result) => {
  console.log(result);
});

// Задание 5

const fetchDataWithError = new Promise((resolve, reject) => {
    const success = false; 
    if (success) {
     resolve('Операция успешна!');
    } else {
        setTimeout(() => {
            reject('Произошла ошибка.');
        }, 2000);;
    }
 });

fetchDataWithError.catch(error => console.log(error));  

// Задание 6

async function fetchDataAsync() {
  try {
    const result = await fetchData(); 
    console.log("Результат:", result); 
  } catch (error) {
    console.error("Ошибка:", error); 
  }
}

fetchDataAsync()

// Задание 7

async function fetchDataWithErrorAsync() {
  try {
    const result = await fetchDataWithError(); 
    console.log("Результат:", result); 
  } catch (error) {
    console.error("Ошибка:", error); 
  }
}

fetchDataWithErrorAsync()

// Задание 8

function task1() {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve("Задача 1 выполнена");
    }, 1000); 
  });
}

function task2() {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve("Задача 2 выполнена");
    }, 2000); 
  });
}

async function runTasksSequentially() {
  const result1 = await task1();
  console.log(result1); 

  const result2 = await task2();
  console.log(result2); 
}

runTasksSequentially();


// Задание 9

function taskA() {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve("Задача A выполнена");
    }, 2000); 
  });
}

function taskB() {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve("Задача B выполнена");
    }, 3000);
  });
}

async function runTasksInParallel() {
  try {
    const [resultA, resultB] = await Promise.all([taskA(), taskB()]);
    console.log("Результат A:", resultA);
    console.log("Результат B:", resultB);
  } catch (error) {
    console.error("Ошибка при выполнении задач:", error);
  }
}

runTasksInParallel();

// Задание 10

async function delayedMessage(message, delay) {
  await new Promise((resolve) => setTimeout(resolve, delay));
  console.log(message);
}

delayedMessage("Прошло 4 секунды", 4000);


