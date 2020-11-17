'use strict';

const inputFile = document.querySelector('.input-file');

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
