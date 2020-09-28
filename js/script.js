'use strict';

//? Задание 1: Используя оператор while, выведите все числа от 45 до 670, кратные 10.
let startIndex = 45;
let endIndex = 670;
while (++startIndex < endIndex) {
    if ((startIndex % 10) == 0) {
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
        //return Math.pow(naturalNum, degree);
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
    //let date = new Date().getDate();
    // let daysArray = ['вс', 'пн', 'вт', 'ср', 'чт', 'пт', 'сб'];
    // return console.log(daysArray[date]);
}());