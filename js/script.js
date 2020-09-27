'use strict';

//? Задание 1: Используя оператор while, выведите все числа от 45 до 670, кратные 10.
let startIndex = 45;
let endIndex = 670;
while (++startIndex < endIndex) {
    if ((startIndex % 10) == 0) {
        console.log(startIndex);
    }
}