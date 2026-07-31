
// 21.Student Class with readonly ID

class STUDENT {
    readonly id: number;
    name: string;

    constructor(id: number, name: string) {
        this.id = id;
        this.name = name;
    }

    display() {
        console.log(this.id);
        console.log(this.name);
    }
}

let s1 = new STUDENT(101, "Vennela");
s1.display();


// 22.STATIC COLLEGE NAME
class Stu1 {
    static college = "SVECW";

    static showCollege() {
        console.log(Stu1.college);
    }
}

Stu1.showCollege();


// 23.NAME SPACE
namespace MathOperations {

    export function add(a: number, b: number) {
        return a + b;
    }

    export function subtract(a: number, b: number) {
        return a - b;
    }

    export function multiply(a: number, b: number) {
        return a * b;
    }

    export function divide(a: number, b: number) {
        return a / b;
    }
}

console.log(MathOperations.add(5,10));
console.log(MathOperations.subtract( 15,10));
console.log(MathOperations.multiply(10, 5));
console.log(MathOperations.divide(30, 5));


// 25.GENERIC BOX T
class Box<T> {
    data: T;

    constructor(data: T) {
        this.data = data;
    }

    display() {
        console.log(this.data);
    }
}

let box1 = new Box<number>(100);
let box2 = new Box<string>("Printing");

box1.display();
box2.display();

