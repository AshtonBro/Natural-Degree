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
    if (num > 0 && (num % 1) === 0) {
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

console.log(naturalDegree(3, 3));

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
    num = num % 100;
    if (num <= 14 && num >= 11) {
        console.log(num + ": товаров");
    }

};

function declension(oneNominative, severalGenitive, severalNominative, number) {
    number = number % 100;

    return (number <= 14 && number >= 11) ?
        severalGenitive : (number %= 10) < 5 ? number > 2 ? severalNominative :
        number === 1 ?
        oneNominative :
        number === 0 ?
        severalGenitive :
        severalNominative //number === 2
        :
        severalGenitive;
};

for (let i = 0; i < 200; i++) {
    console.log(i + ": " + isDeclensions(i));
}