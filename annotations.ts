//annotations
console.log("-----Annotations-----");

console.log("1.variable annotations");
let my_name:string = "Jyothsna";
console.log("My name is " + my_name);

let n:number = 10;
console.log(n);

let found1:boolean = true;
console.log(found1);

console.log("2.function parameters and return type  annotations");
function greet(name:string): String {
  return "Welcome, " + name + "!";
}
console.log(greet("Jyo"));

function add_number(a: number, b: number): number {
  return a + b;
}
console.log(add_number(10, 20));

function subtract_num(a: number, b: number): void {
  console.log(a - b);
}
subtract_num(20, 10);

console.log("3.Array annotations");
let arr:number[] = [1,2,3,4,5];
console.log(arr);

let names:string[] = ["afs", "hgd", "hsdu"];
console.log(names);
