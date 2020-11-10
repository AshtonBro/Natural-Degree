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


