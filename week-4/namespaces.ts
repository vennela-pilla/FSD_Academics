namespace Demo{
    export function show(){
        console.log("Welcome");
    }
}
Demo.show();


namespace MathDemo1{
    export function add(a:number,b:number){
        console.log(a+b);
    }
}
MathDemo1.add(5,4);


namespace Student2{
    export class Details{
        display(){
            console.log("Student");
        }
    }
}
let std=new Student2.Details();
std.display();