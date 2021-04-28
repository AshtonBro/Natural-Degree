'use strict'

class Rectangle {
    width = 0;
    height = 0;

    constructor(w, h) {
        this.width = w;
        this.height = h;
        Object.freeze(this);
    }

    area() {
        return this.width * this.height;
    }
}

class Square extends Rectangle {
    constructor(w, h) {
        if(h != undefined && w !== h) {
            throw new Error('Param error');
        }
        super(w, w);
    }
}

function mutation(rectangle) {
    //rectangle.width *= 3;
    const tmpRect = new Rectangle(rectangle.width * 3, rectangle.height);
    console.log(tmpRect.area());
}

function builder(Rect) {
    // проверки на Rect, Square, proto
    return new Rect(5, 10);
}

const rect = new Rectangle(5, 10);
const square = new Square(5);

console.log(rect.area());
console.log(square.area());

console.log(rect);
console.log(square);

const rectMutation = new Rectangle(5, 10);
const squareMutation = new Square(5);

console.log(rectMutation.area());
console.log(squareMutation.area());

mutation(rectMutation);
mutation(squareMutation);

const rectBuilder = builder(Rectangle);
const squareBuilder = builder(Square);

console.log(rectBuilder.area());
console.log(squareBuilder.area());

mutation(rectBuilder);
mutation(squareBuilder);
