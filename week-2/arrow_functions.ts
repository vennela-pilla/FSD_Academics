//Arrow functions
const addition = (num1: number, num2: number): void => {
    console.log("Adiition of num1 and num2 : " + (num1 + num2));
};
addition(12, 34);

const subtraction = (a: number, b: number): void => {
    console.log("Subtraction of a and b: " + (a - b));
}
subtraction(300, 23);

const square = (n: number): void => {
    console.log("Square of n: " + (n * n));
}
square(4);