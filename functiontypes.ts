
export {};// FUNCTION WITH RETURN TYPE
function add(a: number, b: number): number {
    return a + b;
}

let a = 50;
let b = 70;
console.log(add(a, b));

// FUNCTION WITH NO RETURN TYPE
function greet(name: string): void {
    console.log("Hello " + name);
}

let Username = "Vennela";
greet(Username);

// DEFAULT PARAMETER
function getOrder(food: string = "Shawarma"): void {
    console.log("My favourite " + food + " lovely!");
}

getOrder("Dum Biryani");

// REST PARAMETERS
function multiplyNumbers(...numbers: number[]): void {
    let result = 1;

    for (let num of numbers) {
        result *= num;
    }

    console.log(result);
}

multiplyNumbers(1, 2, 3, 4, 5, 6);

// ARROW FUNCTION
const square = (a: number): number => {
    return a * a;
};

console.log(square(73));

// OPTIONAL PARAMETER
function getOrders(food: string, juice?: string): void {
    console.log("Food: " + food);
    console.log("Drink: " + juice);
}

getOrders("SHAWARMA", "COKE");