
// 11.REMOVE DUPLICATES
let str = "typescript";
let result = "";

for (let ch of str) {
    if (!result.includes(ch))
        result += ch;
}

console.log(result);


// 12.SECOND LARGEST NUMBER
let arr = [40, 50, 60 ,70, 20];

let largest = arr[0];
let second = arr[0];

for (let i = 1; i < arr.length; i++) {

    if (arr[i] > largest) {

        second = largest;
        largest = arr[i];

    } else if (arr[i] > second && arr[i] != largest) {

        second = arr[i];
    }
}

console.log("Second Largest =", second);


// 13.MERGE TWO ARRAYS
let arr1 = [1, 2, 3];
let arr2 = [4, 5, 6];

let arr3 = [];

for (let i = 0; i < arr1.length; i++) {

    arr3[arr3.length] = arr1[i];
}

for (let i = 0; i < arr2.length; i++) {

    arr3[arr3.length] = arr2[i];
}

console.log(arr3);

// 14.FIND MISSING NUMBER IN ARRAY
let ar = [1, 2, 3, 5];

let n = 5;

let total = (n * (n + 1)) / 2;

let sum = 0;

for (let i = 0; i < ar.length; i++) {

    sum = sum + ar[i];
}

console.log("Missing Number =", total - sum);


// 15.ROTATE ARRAY BY L POSITIONS
let a1 = [1, 2, 3, 4, 5];

let n1= 2;

for (let i = 1; i <= n1; i++) {

    let first = a1[0];

    for (let j = 0; j < a1.length - 1; j++) {

        a1[j] = a1[j + 1];
    }

    a1[a1.length - 1] = first;
}

console.log(a1);

// 16.COUNT OCCRENCES
let a2 = [1, 3, 4, 3, 2, 1, 5, 4, 3];

let count: any = {};

for (let i of a2) {
    if (count[i])
        count[i]++;
    else
        count[i] = 1;
}

console.log(count);


// 17.DUPLICATE ELEMENTS

let a = [1, 2, 3, 4, 2, 5, 1];

for (let i = 0; i < a.length; i++) {
    for (let j = i + 1; j < a.length; j++) {
        if (a[i] == a[j]) {
            console.log(a[i]);
            break;
        }
    }
}


// 18.STUDENT CLASS
class Student {
    constructor(public name: string, public age: number) {}

    display() {
        console.log("Name:", this.name);
        console.log("Age:", this.age);
    }
}

let s = new Student("Vennela", 19);
s.display();


// 19.BANK ACCOUNT CLASS
class BA{
    balance: number = 200;

    deposit(amount: number) {
        this.balance += amount;
    }

    withdraw(amount: number) {
        this.balance -= amount;
    }

    displayBalance() {
        console.log("Balance:", this.balance);
    }
}

let b1= new BA();

b1.deposit(500);
b1.withdraw(200);
b1.displayBalance();


// 20.EMPLOYEE CLASS
class BankAccount {
    balance: number = 500;

    deposit(amount: number) {
        this.balance += amount;
    }

    withdraw(amount: number) {
        this.balance -= amount;
    }

    displayBalance() {
        console.log("Balance:", this.balance);
    }
}

let b = new BankAccount();

b.deposit(500);
b.withdraw(200);
b.displayBalance();

