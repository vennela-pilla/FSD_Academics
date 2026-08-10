function display<T>(value:T){
    console.log(value);
}
display<number>(10);
display<string>("Hello");


class Box<T>{
    value:T;
    constructor(value:T){
        this.value=value;
    }
}
let b=new Box<string>("Book");
console.log(b.value);


interface Length{
    length:number;
}
function printLength<T extends Length>(item:T){
    console.log(item.length);
}
printLength("TypeScript");