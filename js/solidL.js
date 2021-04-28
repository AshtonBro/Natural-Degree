'use strict'

class Rectangle {
    width = 0;
    height = 0;

    constructor(w, h) {
        this.width = w;
        this.height = h;
    }

    area() {
        return this.width * this.height;
    }
}

class Square extends Rectangle {
    constructor(w) {
        super(w, w);
    }
}

const rect = new Rectangle(5, 10);
const square = new Square(5);

console.log(rect.area());
console.log(square.area());

console.log(rect);
console.log(square);
