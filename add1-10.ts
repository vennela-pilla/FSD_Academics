export {};

// 1.CHECK PRIME
let n: number = 21;
let prime: boolean = true;

if (n <= 1) {
    prime = false;
}

for (let i = 2; i < n; i++) {
    if (n % i == 0) {
        prime = false;
        break;
    }
}

if (prime)
    console.log("Prime Number");
else
    console.log("Not Prime");


// 2.GENARTE PRIME IN RANGE
let start: number = 1;
let end: number = 17;

for (let i = start; i <= end; i++) {
    let prime = true;

    if (i <= 1)
        prime = false;

    for (let j = 2; j < i; j++) {
        if (i % j == 0) {
            prime = false;
            break;
        }
    }

    if (prime)
        console.log(i);
}


// 3.FIND GCD AND LCM
let a: number = 8;
let b: number = 16;
let gcd: number = 1;

for (let i = 1; i <= a && i <= b; i++) {
    if (a % i == 0 && b % i == 0)
        gcd = i;
}

let lcm = (a * b) / gcd;

console.log("GCD =", gcd);
console.log("LCM =", lcm);


// 4.ARMSTRONG NUMBER
let num: number = 153;
let temp = num;
let sum = 0;

while (temp > 0) {
    let digit = temp % 10;
    sum = sum + digit * digit * digit;
    temp = Math.floor(temp / 10);
}

if (sum == num)
    console.log("Armstrong Number");
else
    console.log("Not Armstrong");

// 5.CHECK PREFECT NUMBER
let n1: number = 28;
let sum1 = 0;

for (let i = 1; i < n; i++) {
    if (n1% i == 0)
        sum1 += i;
}

if (sum1== n1)
    console.log("Perfect Number");
else
    console.log("Not Perfect");


// 6.CHECK STRONG NUMBER
let n2: number = 145;
let temp1 = num;
let sum2 = 0;

while (temp1 > 0) {
    let digit = temp1 % 10;
    let fact = 1;

    for (let i = 1; i <= digit; i++) {
        fact *= i;
    }

    sum2 += fact;
    temp1 = Math.floor(temp1 / 10);
}

if (sum2 == n2)
    console.log("Strong Number");
else
    console.log("Not Strong");


// 7.SUM OF DIGITS
let num1: number = 1234;
let sum3 = 0;

while (num1 > 0) {
    sum3+= num1 % 10;
    num1 = Math.floor(num1 / 10);
}

console.log("Sum =", sum3);

// 8.DECIMAL => BINARY
let num3: number = 4;

console.log(num3.toString(2));

// 9.BINARY => DECIMAL
let binary: string = "1010";

console.log(parseInt(binary, 2));

// 10.FREQUENCY OF CHARACTERS
let str = "vaseline";

let count: any = {};

for (let ch of str) {
    if (count[ch])
        count[ch]++;
    else
        count[ch] = 1;
}

console.log(count);