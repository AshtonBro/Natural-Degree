// 'use strict';

// //? Задание 1: Используя оператор while, выведите все числа от 45 до 670, кратные 10.
// let startIndex = 45;
// let endIndex = 670;
// while (++startIndex < endIndex) {
//     if ((startIndex % 10) === 0) {
//         console.log(startIndex);
//     }
// }

// //? Задание 2: Напишите функцию возведения натурального числа x в степень n.
// const isNaturalNumber = (num) => {
//     if (num => 0 && (num % 1) === 0) {
//         return true;
//     }
//     return false;
// };

// const naturalDegree = (naturalNum, degree) => {
//     //? Check is number null
//     if (isNaturalNumber(naturalNum) == true && isNaturalNumber(degree) && degree >= 0) {
//         let firstNaturalNum = naturalNum;
//         //return Math.pow(naturalNum, degree);
//         for (let i = 2; i <= degree; i++) {
//             naturalNum *= firstNaturalNum;
//         }
//         return naturalNum;
//     }
//     return false;
// };

// console.log(naturalDegree(5, 2));

// //? Задание 3: Палиндром — слово, предложение или последовательность символов, которая абсолютно одинаково читается как в привычном направлении, так и в обратном. К примеру, “Anna” — это палиндром, а “table” и “John” — нет.
// const isPalindrome = (text) => {
//     const firstText = text.toLowerCase();
//     let reverseText = "";
//     for (let i = firstText.length - 1; i >= 0; i--) {
//         reverseText += firstText[i];
//     }
//     return reverseText === firstText;
// };

// console.log(isPalindrome('Anna'));

// //? Задание 4: Напишите функцию,  которая в зависимости от переданного в нее целочисленного аргумента n, будет выводить слово «товар» в нужной форме («12 товаров», но «22 товара»).
// const isDeclensions = (num) => {
//     if (isNaturalNumber(num)) {
//         let num2 = num % 10;
//         if (num > 10 && num < 20 || num === 0) {
//             return "товаров";
//         }
//         if (num2 > 1 && num2 < 5) {
//             return "товара";
//         }
//         if (num2 === 1) {
//             return "товар";
//         }
//         return "товаров";
//     }
// };

// for (let i = 0; i < 200; i++) {
//     console.log(i + ": " + isDeclensions(i));
// }

// //? Задание 5: Напишите функцию, показывающую текущий день недели в коротком формате: пн, вт и т.д.
// (function getDayOfWeek() {
//     let date = new Date();
//     return console.log(date.toLocaleString('ru', {
//         weekday: 'short'
//     }));
//     //let date = new Date().getDate();
//     // let daysArray = ['вс', 'пн', 'вт', 'ср', 'чт', 'пт', 'сб'];
//     // return console.log(daysArray[date]);
// }());

// let a = 1, b = 1;
// let c = ++a;
// let d = b++;
// console.log(a, b);

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

// добавляем новое значение в "копию"
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

for (key in objCon) {
    console.log(key + " : " + objCon[key]);
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
    for(key in obj) {
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

// let calculator = {
//     firstNum: 0,
//     secondNum: 0,
//     total: 0,
//     read() {
//          this.firstNum = +prompt("Введите число?", "5");
//          this.secondNum = +prompt("Введите ещё одно?", "18"); 
//     },
//     sum() {
//         this.total = this.firstNum + this.secondNum;
//     },
//     mul() {
//         return this.firstNum * this.secondNum;
//     },
// }

// calculator.read();
// calculator.sum();
// console.log(calculator.mul());

// for( key in calculator) {
//     console.log(calculator[key]);
// }

let ladder = {
    step: 0,
    up() {
        this.step++;
    },  
    down() {
        this.step--;
    },
    showStep: function() { 
        console.log( this.step );
    },
  };
  
console.log(ladder?.up()?.down()?.showStep());

//.up().down().showStep(); 
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
        return this.value += +prompt("Введите число?", "10");
    }
}

let accumulator = new Accumulator(5);
accumulator.read();
accumulator.read();
accumulator.read();

console.log(accumulator.value);
