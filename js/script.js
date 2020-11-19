'use strict';

const inputFile = document.querySelector('.input-file'),
elemDOM = document.getElementById('elem'),
inputBox = document.querySelector('.input-box'),
body = document.querySelector('body');
console.log('body: ', body);

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
//*     <li>1</li>
//*     <li>2</li>
//*         <----ol.append
//* </ol>
//*        <----ol.after