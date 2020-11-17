'use strict'

function showFile(input) {
    let file = input.files[0];

    let reader = new FileReader();
    reader.readAsText(file);

    reader.onload = () => {
        console.log(reader.result);
    };

    reader.onerror = () => {
        console.log(reader.error);
    }
}

const getResponse = async (url) => {
    let response = await fetch(url);
    if (response.ok) { // если HTTP-статус в диапазоне 200-299
    // получаем тело ответа (см. про этот метод ниже)
    // let json = await response.json();
    // console.log('json: ', json[4].author.id);

    console.log(response.headers.get('Content-Type'));
    for(let [key, value] of response.headers) {
        console.log(`${key} : ${value}`);
    }
    } else {
        console.log("Ошибка HTTP: " + response.status);
    }
}

getResponse('https://api.github.com/repos/javascript-tutorial/en.javascript.info/commits');

fetch('https://api.github.com/repos/javascript-tutorial/en.javascript.info/commits')
    .then(response => response.json())
    .then(commits => console.log(commits[0].author.login));

let user = {
    name: "John",
    surname: "Smith"
};

async function postMethod(data) {
    let response = await fetch('/article/fetch/post/user', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json;charset=utf-8'
        },
        body: JSON.stringify(data)
    });

    let result = await response.json();
    console.log(result.message);
}

postMethod(user);

let controller = new AbortController();
let signal = controller.signal;

// срабатывает при вызове controller.abort()
signal.addEventListener('abort', () => console.log("отмена!"));

controller.abort(); // отмена!

console.log(signal.aborted);

// прервать через 1 секунду
let controller3 = new AbortController();
setTimeout(() => controller.abort(), 1000);

try {
    let response = fetch('/article/fetch-abort/demo/hang', {
        signal: controller3.signal
    });
    } catch(err) {
    if (err.name == 'AbortError') { // обработать ошибку от вызова abort()
        alert("Прервано!");
    } else {
        throw err;
    }
}

// let urls = [...]; // список URL для параллельных fetch

// let controller2 = new AbortController();

// let fetchJobs = urls.map(url => fetch(url, {
//     signal: controller.signal
// }));

// let results = await Promise.all(fetchJobs);

// let response = await fetch('https://site.com/service.json', {
//     method: 'PATCH',
//     headers: {
//     'Content-Type': 'application/json',
//     'API-Key': 'secret'
//     }
// });

let userNames = ['AshtonBro', 'iliakan', 'Max', '22'];

const getUsers = async (userNames) => {
    let data = [];
    for(let userName of userNames) {
        let response = await fetch(`https://api.github.com/users/${userName}`)
        .then(response => {
            if(response.status != 200) {
                return null;
            } else {
                return response.json();
            }
        }, reject => {
            return new Error(`Юзер не найден: ${reject.error}`)
        })
        data.push(response);
    }

    let result = await Promise.all(data);
    return result;
    
};

//* Cookie

console.log('getUsers(userNames);: ', getUsers(userNames));

document.cookie = "user = Jhon";
console.log(document.cookie);

let name = 'username';
let value = 'John Smith'

document.cookie = encodeURIComponent(name) + '=' + encodeURIComponent(value);

//* localStorage

localStorage.setItem('test', 1)

for(let i = 0; i < localStorage.length; i++) {
    let key = localStorage.key(i);
    console.log(`${key}: ${localStorage.getItem(key)}`);
}

for(let key in localStorage) {
    if (!localStorage.hasOwnProperty(key)) {
      continue; // пропустит такие ключи, как "setItem", "getItem" и так далее
    }
    console.log(`${key}: ${localStorage.getItem(key)}`);
}

