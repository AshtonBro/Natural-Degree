'use strict';

const inputFile = document.querySelector('.input-file'),
elemDOM = document.getElementById('elem'),
inputBox = document.querySelector('.input-box'),
body = document.querySelector('body');

// родителем <body> является <html>
console.log( document.body.parentNode === document.documentElement ); // выведет true

// после <head> идёт <body>
console.log( document.head.nextSibling ); // HTMLBodyElement

// перед <body> находится <head>
console.log( document.body.previousSibling ); // HTMLHeadElement

Element.prototype.sayHi = function() {
    console.log(`Hello, I'm ${this.tagName}`);
};

document.documentElement.sayHi(); // Hello, I'm HTML
document.body.sayHi(); // Hello, I'm BODY
inputFile.sayHi();

inputFile.setAttribute('id', 'inputId');
console.log(inputFile.attributes[0].nodeValue = 'input-drop');

console.log(elemDOM.getAttribute('About'));
console.log(elemDOM.outerHTML);

for(let attr of elemDOM.attributes) {
    console.log(`${attr.name} = ${attr.value}`);
}

console.log(inputBox.checked);

let div = document.createElement('div');
let textNode = document.createTextNode('А вот и я');
div.className = "create-elem";
div.innerHTML = "<strong>Всем привет!</strong> Вы прочитали важное сообщение.";
inputBox.after(div);

//*        <----ol.befor
//* <ol>
//*         <----ol.prepend
//*     <li>0</li>
//*     <li>1</li>          (...nodes or string)
//*     <li>2</li>
//*         <----ol.append
//* </ol>
//*        <----ol.after

div.insertAdjacentHTML('beforebegin', '<p>Привет</p>');
div.insertAdjacentHTML('afterend', '<p>Пока</p>');

//*        <----beforebegin
//* <ol>
//*         <----afterbegin
//*     <li>0</li>
//*     <li>1</li>           ol.insertAdjacentHTML(*, html)
//*     <li>2</li>
//*         <----beforend
//* </ol>
//*        <----afterend

//* node.remove()
setTimeout(() => div.remove(), 5000);

body.style.backgroundColor = 'lightgreen';

div.style.cssText = `
color: red !important;
background-color: yellow;
width: 100px;
text-align: center;
`;


const divUser = document.querySelector('.user'),
    ul = document.getElementsByTagName('ul'),
    li = document.querySelectorAll('li'),
    td = document.querySelectorAll('td'),
    uls = document.querySelectorAll('ul'),
    table = document.querySelector('.table');
    console.log('li: ', li);
for (let i = 0; i < table.rows.length; i++) {
    let row = table.rows[i];
    row.cells[i].style.backgroundColor = 'red';
}

const ageTable = document.getElementById('age-table'),
    ageList = ageTable.getElementsByTagName('label'),
    tdAge = ageTable.firstElementChild.firstElementChild,
    formSearch = document.getElementsByName('search')[0],
    firstInput = formSearch.getElementsByTagName('input')[0],
    inputs = formSearch.querySelectorAll('input'),
    lastInput = inputs[inputs.length-1];
    console.log('lastInput: ', lastInput);
    console.log('firstInput: ', firstInput);
    console.log('formSearch: ', formSearch);
for(let elem of ageList) {
    console.log(elem);
}

for(let elem of li) {
    let elemNodeValue = elem.firstChild.nodeValue;
    let count = elem.getElementsByTagName('li').length;
    console.log(elemNodeValue + ' ' + count);
}

const aLinks = document.querySelectorAll('a');
console.log('aLinks: ', aLinks);

for(let link of aLinks) {
    let href = link.getAttribute('href');
    if(!href) continue;
    if(!href.includes('://')) continue;
    if(href.includes('http://internal.com')) continue;
    link.style.color = 'orange';
}

const fullElem = document.getElementById('ol-elem'),
    ulTheList = document.querySelector('.ul-the-list');

const clearElements = (elem) => {
    if(elem.childElementCount > 0) {
        for(let el of elem.children ) {
            el.textContent  = 'Удалён';
        }
    } else {
        elem.forEach(element => {
            element.textContent = 'Удалён not Iterable';
        });
    }
};

clearElements(fullElem);

const createList = document.querySelector('.create-list');

const createElem = (elem) => {
    while (true) {
        let text = prompt('Введите текст для элемента списка', '');
        if (!text) {
            break;
        }
        let li = document.createElement('li');
        li.textContent = text;
        elem.append(li);
    }
};

//createElem(createList);

//* createTree

let data = {
    "Рыбы": {
        "форель": {},
        "лосось": {}
    },
    
    "Деревья": {
        "Огромные": {
        "секвойя": {},
        "дуб": {}
        },
        "Цветковые": {
        "яблоня": {},
        "магнолия": {}
        }
    }
};

const createTreeDom = (object) => {
    let ul = document.createElement('ul');

    for(let key in object) {
        let li = document.createElement('li');
        li.innerHTML = key;

        let deepUl = createTreeDom(object[key]);
        if(deepUl) {
            li.append(deepUl);
        }
        ul.append(li);
    }
    return ul;
};

let container = document.querySelector('.container');
container.append(createTreeDom(data));

const exampleDiv = document.querySelector('.example');
console.log(exampleDiv.offsetParent.id);
console.log(exampleDiv.offsetTop);
console.log(exampleDiv.offsetHeight);
console.log(exampleDiv.clientTop);
console.log(exampleDiv.scrollHeight);

ball.style.left = Math.round(field.clientWidth / 2  - ball.offsetWidth / 2) + 'px';
ball.style.top = Math.round(field.clientHeight / 2 - ball.offsetHeight / 2) + 'px';

formElem.onsubmit = async (e) => {
    e.preventDefault();

    let response = await fetch('/article/formdata/post/user', {
      method: 'POST',
      body: new FormData(formElem)
    });

    let result = await response.json();

    alert(result.message);

    let str = "Любо, братцы, любо!";

let result = str.match(/любо/i); // без флага g

alert( result[0] );     // Любо (первое совпадение)
alert( result.length ); // 1

// Дополнительная информация:
alert( result.index );  // 0 (позиция совпадения)
alert( result.input );  // Любо, братцы, любо! (исходная строка)

let matches = "JavaScript".match(/HTML/) || [];

if (!matches.length) {
  alert("Совпадений нет"); // теперь работает
}

// без флага g
alert( "We will, we will".replace(/we/i, "I") ); // I will, we will

// с флагом g
alert( "We will, we will".replace(/we/ig, "I") ); // I will, I will

let str = "+7(903)-123-45-67";

let regexp = /\d/g;

alert( str.match(regexp) ); // массив совпадений: 7,9,0,3,1,2,3,4,5,6,7

// и можно сделать из них уже чисто цифровой номер телефона
alert( str.match(regexp).join('') ); // 79035419441

alert( "1 - 5".match(/\d - \d/) ); // 1 - 5, теперь работает
// или можно использовать класс \s:
alert( "1 - 5".match(/\d\s-\s\d/) ); // 1 - 5, тоже работает

// \d – цифры.
// \D – не цифры.
// \s – пробельные символы, табы, новые строки.
// \S – все, кроме \s.
// \w – латиница, цифры, подчёркивание '_'.
// \W – все, кроме \w.
// . – любой символ, если с флагом регулярного выражения s, в противном случае любой символ, кроме перевода строки \n.

