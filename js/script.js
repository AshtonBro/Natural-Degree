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
    li = document.getElementsByTagName('li'),
    td = document.querySelectorAll('td'),
    table = document.querySelector('.table');

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

