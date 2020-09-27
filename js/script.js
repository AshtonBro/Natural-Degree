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