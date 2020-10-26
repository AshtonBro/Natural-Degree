'use strict';

//? Задание 1: Используя оператор while, выведите все числа от 45 до 670, кратные 10.
let startIndex = 45;
let endIndex = 670;
while (++startIndex < endIndex) {
    if ((startIndex % 10) === 0) {
        console.log(startIndex);
    }
}

//? Задание 2: Напишите функцию возведения натурального числа x в степень n.
const isNaturalNumber = (num) => {
    if (num => 0 && (num % 1) === 0) {
        return true;
    }
    return false;
};

const naturalDegree = (naturalNum, degree) => {
    //? Check is number null
    if (isNaturalNumber(naturalNum) == true && isNaturalNumber(degree) && degree >= 0) {
        let firstNaturalNum = naturalNum;
        return Math.pow(naturalNum, degree);
        for (let i = 2; i <= degree; i++) {
            naturalNum *= firstNaturalNum;
        }
        return naturalNum;
    }
    return false;
};

console.log(naturalDegree(5, 2));

//? Задание 3: Палиндром — слово, предложение или последовательность символов, которая абсолютно одинаково читается как в привычном направлении, так и в обратном. К примеру, “Anna” — это палиндром, а “table” и “John” — нет.
const isPalindrome = (text) => {
    const firstText = text.toLowerCase();
    let reverseText = "";
    for (let i = firstText.length - 1; i >= 0; i--) {
        reverseText += firstText[i];
    }
    return reverseText === firstText;
};

console.log(isPalindrome('Anna'));

//? Задание 4: Напишите функцию,  которая в зависимости от переданного в нее целочисленного аргумента n, будет выводить слово «товар» в нужной форме («12 товаров», но «22 товара»).
const isDeclensions = (num) => {
    if (isNaturalNumber(num)) {
        let num2 = num % 10;
        if (num > 10 && num < 20 || num === 0) {
            return "товаров";
        }
        if (num2 > 1 && num2 < 5) {
            return "товара";
        }
        if (num2 === 1) {
            return "товар";
        }
        return "товаров";
    }
};

for (let i = 0; i < 200; i++) {
    console.log(i + ": " + isDeclensions(i));
}

//? Задание 5: Напишите функцию, показывающую текущий день недели в коротком формате: пн, вт и т.д.
(function getDayOfWeek() {
    let date = new Date();
    return console.log(date.toLocaleString('ru', {
        weekday: 'short'
    }));
    // let date = new Date().getDate();
    // let daysArray = ['вс', 'пн', 'вт', 'ср', 'чт', 'пт', 'сб'];
    // return console.log(daysArray[date]);
}());

let a = 1, b = 1;
let c = ++a;
let d = b++;
console.log(a, b);

let a1 = "" + 1 + 0;
let a2 = "" - 1 + 0;
let a3 = true + false;
let b4 = 6 / "3";
let b5 = "2" * "3";
let b6 = 4 + 5 + "px";
let b7 = "$" + 4 + 5;
let b8 = "4" - 2;
let b9 = "4px" - 2;
let b10 = 7 / 0;
let b11 = "  -9  " + 5;
let b12 = "  -9  " - 5;
let b13 = null + 1;
let b14 = undefined + 1;
let b15 = " \t \n" - 2;

console.log('Какой результат будет у выражений ниже?');
console.log(a1);
console.log(a2);
console.log(a3);
console.log(b4);
console.log(b5);
console.log(b6);
console.log(b7);
console.log(b8);
console.log(b9);
console.log(b10);
console.log(b11);
console.log(b12);
console.log(b13);
console.log(b14);
console.log(b15);
console.log(!!"non-empty string");

let fruits = ["Яблоки", "Груша", "Апельсин"];

//добавляем новое значение в "копию"
let shoppingCart = fruits;
shoppingCart.push("Банан");


let arr = [1, -2, 3, 4, -9, 6];

let fruit = "apple";

let user = {
    name: "John",
    age: 35,
    [fruit]: 5,
};

let userr = new Object();

delete user.age;
console.log(user.age);

const objCon = {
    model: "Toyota",
    maxSpeed: 130,
    test: +44,
    maxTemperature: 80.4,
};

objCon.model = "Mazda";
console.dir(objCon.model);
objCon["engine"] = 5.5;
objCon["quantity doors"] = 5;

console.log("apple" in user);

for (let elem in objCon) {
    console.log(elem + " : " + objCon[elem]);
}

console.log(String(Math.trunc(objCon.maxSpeed)));
console.log(String(Math.trunc(objCon.maxTemperature)));
console.log(String(Math.trunc(objCon.test)));

console.log(user);
console.log(objCon);

userr = Object.assign({}, user);
console.log('user2: ', userr);

user = objCon;
user.model = "Opel"

console.log(user);
console.log(objCon);

console.log(userr.age === user.age);

/*  Чтобы исправить это, мы должны перебирать свойства объекта в цикле и 
делать проверку, не является ли значение user[key] объектом, и если это так 
– скопировать и его структуру тоже. Это называется «глубокое клонирование».
Можно реализовать глубокое клонирование, используя рекурсию. Или использовать
 готовую реализацию из JavaScript-библиотеки lodash.
*/

user["sayHi"] = function() {
    console.log("Hello");
};

console.log(user);

//? Значение this – это объект «перед точкой», который использовался для вызова метода.


let objMeth = {
    name: "Max",
    sayHi() {
        console.log(`Hello ${this.name}, This is ${this}`);
    },
    hi() {console.log('hi');},
    bye() {console.log('bye');},
}

objMeth.sayHi();

(objMeth.name === "Max" ? objMeth.hi : ObjMeth.bye)();

let obj3 = objMeth.hi;
console.log('obj3: ', obj3);

obj3();

let objThis= {
    name: "Ilja",
    sayHi() {
        let arrow = () => console.log(this.name);
        arrow();
    },
}

objThis.sayHi();

let struct = new function () {
    this.name = "Legacy",
    this.isAdmin = false
}

struct.name = "Inter";
console.log(struct);

function BigUser(name) {
    this.name = name;
    this.sayHi = function() {
        console.log("Меня зовут " + this.name);
    }
}

new BigUser("Женя").sayHi()

let user1 = {
    firstName: "Иван"
  };
  
let user2 = null;
let keys = "firstName";

console.log( user1?.[keys] );
console.log( user2?.[keys] );

console.log( user1?.[keys]?.something?.not?.existing);
  
let user3 = {
    name: "Петя"
};

let id = Symbol("id");
user3[id] = 1;

console.log(user3[id]);
console.log(user3);
let num = Number(user3);
console.dir(user3.valueOf());

let user5 = {
    name: "John",
    money: 1000,
  
    [Symbol.toPrimitive](hint) {
      console.log(`hint: ${hint}`);
      return hint == "string" ? `{name: "${this.name}"}` : this.money;
    }
};
  
console.log(user5);
console.log(+user5);
console.log(user5 + 500); 

let user6 = {
    name: "Sara",
    money: 5000,
    toString() {
        return this.name + " " + this.money;
    }
}

console.log(user6);
console.log(user6 + 500);

console.log("Home work");

//* Home work
let myUser = {
    name: "John",
    surName: "Smith",
}

let empryObj = {};
myUser.name = "Pete";

const isEmpty = (obj) => {
    console.log(obj);
    for(key in obj) {
        return true;
    }
    return false;
}

console.log(isEmpty(empryObj));

let myObj = {
    width: 200,
    height: 300,
    title: "My Obj",
}

console.log('before: ', myObj);

const mulriplyNumeric = (obj) => {
    for(let key in obj) {
        if(typeof(obj[key]) === "number") {
            obj[key] *= 2;
        }
    }
}

mulriplyNumeric(myObj);
console.log('after: ', myObj);

function makeUser() {
    return {
        name: "John",
        ref: this //? Object (Class) DOM
    };
};

console.log(makeUser().ref);

let testUser = makeUser();

console.log(testUser.ref);

let calculator = {
    firstNum: 0,
    secondNum: 0,
    total: 0,
    read() {
         this.firstNum = 5 //+prompt("Введите число?", "5");
         this.secondNum = 10// +prompt("Введите ещё одно?", "18"); 
    },
    sum() {
        this.total = this.firstNum + this.secondNum;
    },
    mul() {
        return this.firstNum * this.secondNum;
    },
}

calculator.read();
calculator.sum();
console.log(calculator.mul());

let ladder = {
    step: 0,
    up() {
        this.step++;
        return this;
    },  
    down() {
        this.step--;
        return this;
    },
    showStep: function() { 
        console.log( this.step );
        return this;
    }
};

 ladder.up().up().down().showStep()

.up().down().showStep(); 
console.log(ladder.step);

function Calculator() {
    this.firstNum = 0,
    this.secondNum = 0,
    this.total = 0,

    this.read = function() {
        this.firstNum = 5;//+prompt("Введите число?", "5");
         this.secondNum = 18;//+prompt("Введите ещё одно?", "18"); 
    },
    this.sum = function() {
        return this.firstNum + this.secondNum;
    },
    this.mul = function() {
        return this.firstNum * this.secondNum;
    }
}

let calc = new Calculator();
calc.read();

console.log("Sum= " + calc.sum());
console.log("Mul= " + calc.mul());

function Accumulator(startingValue) {
    this.value = startingValue,
    this.read = function() {
        return this.value += 10 //+prompt("Введите число?", "10");
    }
}

let accumulator = new Accumulator(5);
accumulator.read();
accumulator.read();
accumulator.read();

console.log(accumulator.value);

function pow(x, n) {
    let result = 1;
    for (let i = 0; i < n; i++) {
        result *= x;
    }
    return result;
}

console.log(pow(3,3));

function powRec(x, n) {
    if(n === 1) {
        return x;
    } else {
        return x * pow(x, n - 1);
    }
}

console.log(powRec(5,7));

function powTer(x, n) {
    return n === 1 ? x : x * pow(x, n - 1);
}

let company = {
    sales: [
        {
            name: 'John',
            salary: 600
        },
        {
            name: 'Alice',
            salary: 1200
        }
    ],
    development: {
        sites: [
            {
                name: 'Max',
                salary: 6000
            },
            {
                name: 'Zhenua',
                salary: 4800
            }
        ],
        unternals: [
            {
                name: 'Erik',
                salary: 580
            }
        ]
    }
};

function sumSalaries(department) {
if (Array.isArray(department)) { // случай (1)
    return department.reduce((prev, current) => prev + current.salary, 0); // сумма элементов массива
} else { // случай (2)
    let sum = 0;
    for (let subdep of Object.values(department)) {
    sum += sumSalaries(subdep); // рекурсивно вызывается для подотделов, суммируя результаты
    }
    return sum;
}
}

console.log(sumSalaries(company)); 

let range = {
    from: 1,
    to: 5
};

range[Symbol.iterator] = function() {
    return {
        current: this.from,
        last: this.to,
        next() {
            if(this.current <= this.last) {
                return {
                    done: false,
                    value: this.current++
                }
            }
            return {
                done: true
            }
        }
    }
}

for (let num of range) {
    console.log("range:" + num);
}

let str = "Hello";
let iterator = str[Symbol.iterator]();

while(true) {
    let result = iterator.next();
    if(result.done) break;
    console.log(result.value);
}

let arrayLike = { // есть индексы и свойство length => псевдомассив
    0: "Hello",
    1: "World",
    length: 2
};

arrayLike[Symbol.iterator] = function() {
    return {
        current: 0,
        last: 1,
        next() {
            if(this.current <= this.last) {
                return {
                    done: false,
                    value: this.current++
                }
            }
            return {
                done: true
            }
        }
    }
};

//Ошибка (отсутствует Symbol.iterator)
for (let item of arrayLike) {
    console.log(item);
}

let psevdoArr = {
    0: "I",
    1: "'",
    2: "am",
    3: "like",
    4: "array",
    5: "!",
    length: 6
}

let arrGen = Array.from(psevdoArr);
for (const key in arrGen) {
    console.log(arrGen[key]);
}

let objPow = {
    0: 2,
    1: 3,
    2: 5,
    3: 6,
    length: 4
}

let arrPow = Array.from(objPow, num => num *= num);
console.log(arrPow);

let classicObject = {
    name: "John",
    age: "28",
    gender: "Man",
    "Marital status": "Single",
    salary: 4500
}

//? Собрать новый обьект
let newObj = {};
let newArr = [];

for (const key of Object.keys(classicObject)) {
    console.log("keys: " + key);
}
for (const key of Object.values(classicObject)) {
    console.log("values: " + key);
}
for (const key of Object.entries(classicObject)) {
    console.log("entries: " + key);
}
for (const key of Object.entries(classicObject)) {
    newArr.push(key)
}
console.log(newArr);

newObj = Object.fromEntries(Object.entries(classicObject).map(([key, value]) => [key, value]));
console.log('newObj: ', newObj);

let nameArr = ["Vasja","Petja", "Kolja", "Maxim"]

//* Desctruct arr on the variables
let [ name1, name2, name3, name5 ] = nameArr; 

let [ nameOne, , nameThree] = nameArr;

let [ firstNameVas, ...another] = nameArr;
console.log('another: ', another);

let objName = {};
[objName.name, objName.surname] = "Vasyja Shishkin".split(' ');
console.log('objName: ', objName);

let newClassicObject = {
    name: "John",
    age: "28",
    gender: "Man",
    "Marital status": "Single",
    salary: 4500
}

let objNewIbj = {};
for (const [key, value] of Object.entries(newClassicObject)) {
    objNewIbj[key] = value;
}
console.log('objNewIbj: ', objNewIbj);

let [aVar, bVar, cVar] = "abc";

let [name = "Guest", surname = "Anonymous"] = ["Julius"];

console.log(name);
console.log(surname); 

let params = {
    width: 100,
    height: 300,
    "font-size": 15
}

let { width: w, height: h, "font-size": font } = params;

let parametrs = {
    size: 15
}

let { width: wi = 400, heigth: hi = 700, size} = parametrs;
console.log('parametrs: ', parametrs);

let nestedObj = {
    size: {
        width: 100,
        height: 200
        },
    items: ["Cake", "Donut"],
    extra: true
};

let {
    size: {
        width,
        height,
        },
    items: [item1, item2],
    extra,
    title = "Menu"
} = nestedObj;

console.log(title);

let options = {
    title: "My menu",
    items: ["Item1", "Item2"]
};

//...и она немедленно извлекает свойства в переменные
function showMenu({title = "Untitled", width = 200, height = 100, items = []}) {
    title, items // – взято из options,
    width, height //– используются значения по умолчанию
    console.log( `${title} ${width} ${height}` ); // My Menu 200 100
    console.log( items ); // Item1, Item2
}

function showMenu2(options = {}) {
    const { title = "Untitled", width = 200, height = 100, items = []} = options;
    console.log( `${title} ${width} ${height}` );
}

showMenu2();

let student = {
    name: "Zhenya",
    age: 29,
    isAdmin: true,
    courses: ["html", "css", "js", "c#", "msSql"],
    credit: null,
    work: {
        position: "developer",
        salary: 4500
    }
}

let json = JSON.stringify(student);
console.log(json);

json = JSON.parse(json)
console.log('json: ', json);



//* Home work 4

const sumTo = (n) => {
    return n === 1 ? n : n += sumTo(n - 1);
}

const sumToFor = (n) => {
    let result = 0;
    for (let i = 1; i <= n; i++) {
        result += i;
    }
    return result;
}

const sumToProg = (n) => {
    let result = 0;
    for (let i = 1; i <= n; i += 2) {
        result += i;
    }
    return result;
}

//console.log("sumTo: " + sumTo(100000)); //! Uncaught RangeError: Maximum call stack size exceeded
console.log("sumTo: " + sumTo(100));
console.log("sumToFor: " + sumToFor(100));
console.log("sumToProg: " + sumToProg(100));

const factorial = (n) => {
   return n === 1 ? n : n *= factorial(n - 1);
}

console.log("factorial: " + factorial(5));

const fibonachiNumbers = (n) => {
    let firstNum = 1;
    let secondNum = 1;
    let result = 0;
    for (let i = 1; i < n; i++) {
        result = firstNum;
        firstNum = firstNum + secondNum;
        secondNum = result;
    }
    return result;
}

const fiboRec = (n) => {
    return n <= 1 ? n : fiboRec(n - 1) + fiboRec(n - 2);
}

console.log(fibonachiNumbers(7));
console.log(fiboRec(2));

let epmty = {};

let salaries = {
    "John": 100,
    "Johya": 300,
    "Pete": 300,
    "Maty": 250,
}

const topSalary = (obj) => {
    let resultKey = "";
    let resultValue = 0;
    for(let [key, value] of Object.entries(obj)) {
        if(value > resultValue) {
            resultValue = value;
            resultKey = key;
        }
    }
    return resultKey === "" ? null : resultKey;
};

console.log(topSalary(salaries));

let currentUser = {
    names: "John",
    age: 30
};

let { names, age: years, isAdmin = false } = currentUser;
console.log('currentUser: ', currentUser);

let userJs = {
    name: "Василий Иванович",
    age: 35
};

let json2 = JSON.stringify(userJs);
json2 = JSON.parse(json2);

let date = new Date(2012, 0, 3);
const getLocalDay = (date) => {
    return console.log(date.toLocaleString('gr', {
        weekday: 'long'
    }));
};

getLocalDay(date);

const getDateAgo = (date, days) => {
    let dateClon = new Date(date);
    return dateClon.getDate(dateClon.setDate(date.getDate() - days));
};

console.log(getDateAgo(new Date(2020, 10, 21), 2));

//* Функции, Остаточные параметры

function sum(a, b) {
    return a + b;
}

console.log( sum(1, 3, 4, 5, 6) );

function sumAll(...args) {
    let sum = 0;
    for(let arg of args) {
        sum += arg;
    }
    return sum;
}

console.log(sumAll(1,2, 3, 2, 3));

function showName(firstName, lastName, ...titles) {
    console.log( firstName + ' ' + lastName );

    console.log( titles[0] );
    console.log( titles[1] );
    console.log( titles.length );
    console.log( titles );
}

showName("Юлий", "Цезарь", "Консул", "Император", "Cултан", "Посол");

let arrMer = [ 1, 2, 3, 5, 6, 7, 8 ];
let arrMer2 = [ 77, 88, 99, 55, 33 ];

let merge = [...arrMer, 0, ...arrMer2];
console.log('merge: ', merge);

let merged = arrMer.concat(arrMer2);
console.log('merged: ', merged);

//* Замыкание
//! Лексическое окружение LexicalEnvironment

let userName = 'John';

function sayHyi() {
    console.log('Hi ' + userName);
}
userName = 'Max';
sayHyi();

//! LexicalEnvironment состоит из двух частей:
/* 
* 1. Environment Record - обёект, в свойствах которого хранятся все локальные переменные
* a также другая информация например this.
* 2.Ссылка на внешнее лексическое окружение - то есть то, которое соответсвует кода снаружи
* (снаружи от текущих фигурных скобок)

* ЛЕКСИЧЕСКОЕ ОКРУЖЕНИЕ – ЭТО СПЕЦИАЛЬНЫЙ ВНУТРЕННИЙ ОБЪЕКТ
* «Лексическое окружение» – это специальный внутренний объект. Мы не можем получить его в нашем коде и изменять напрямую.
*/

function makeWorker() {
    let nameme = "Petee";
    return function() {
        console.log(nameme);
    }
}

let nameme = "John";
makeWorker();
let work = makeWorker();
work();

//* Функция конструктор
function Userr(name) {
    this.sayHu = function() {
        console.log(name);
    }
}

let user10 = new Userr('Zhenya');
user10.sayHu();

function makeCounter() {
    let count = 0;
    return function() {
        return count++;
    }
}

let counter1 = makeCounter();
let counter2 = makeCounter();

console.log(counter1());
console.log(counter1());
console.log(counter2());

{
    let message = 'Hello';
    console.log(message);
}
// console.log(message); // Ошибка: переменная message не определена

//* Global Object
/*
* В браузере он называется window, в Node.js — global, в другой среде исполнения может
* называться иначе. Недавно globalThis был добавлен в язык как стандартизированное имя 
* для глобального объекта, которое должно поддерживаться в любом окружении.
*/

console.log(window.Promise);

let sayHh = function() {
    console.log("sayHuu");
}

console.log(sayHh.name);

function f(sayHh = function() {}) {
    console.log(sayHh.name);
}

f();

/*
Свойство length иногда используется для интроспекций ( анализа типа объекта) в функциях, 
которые работают с другими функциями. Идея в том, чтобы иметь простой синтаксис 
обработчика без аргументов для положительных ответов, но также и возможность передавать 
универсальные обработчики.
*/

// function ask(question, ...handlers) {
//     let isYes = confirm(question);

//     for(let handler of handlers) {
//         if (handler.length == 0) {
//         if (isYes) handler();
//         } else {
//         handler(isYes);
//         }
//     }
// }

// для положительных ответов вызываются оба типа обработчиков
// для отрицательных - только второго типа
// ask("Вопрос?", () => alert('Вы ответили да'), result => alert(result));

function makeCounter2() {
    // вместо
    // let count = 0

    function counter() {
    return counter.count++;
    };

    counter.count = 0;

    return counter;
}

let counter = makeCounter2();
console.log( counter() ); // 0
console.log( counter() ); // 1
console.log( counter() ); // 2
counter.count = 22;
console.log( counter() );

//! Named Function Expression
//* Named Function Expression или NFE – это термин для Function Expression, у которого есть имя.

let sayHi = function func(who) {
    console.log(`Hello, ${who}`);
};

sayHi("John");

let sayHi2 = function func(who) {
    if(who) {
        console.log(`Hello, ${who}`);
    } else {
        func("Guest");
    }
};

sayHi2();
sayHi2('Is no a Guest');

//* Планирование
function sayHi3(phrase, who) {
    console.log( phrase + ', ' + who );
}

setTimeout(sayHi3, 1000, "Привет", "Джон"); 

let timerId = setTimeout(() => {
    console.log('Запущен таймаут');
}, 1000);

clearTimeout(timerId);
console.log(timerId); 

setTimeout(() => console.log("Мир"));
console.log('Before SetTimeout');

//* Упражнения
