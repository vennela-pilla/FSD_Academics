
// class implementation with constructors
class student{
    name:string;
    age:number;
    constructor(name:string,age:number){
        this.name=name;
        this.age=age;
    }
    display():void{
        console.log("Name :"+ this.name);
        console.log("Age:"+ this.age);
    }
}
let s2=new student("Vennela",19);
s2.display();

// Employee class
class Employee{
    name:string;
    salary:number;
    experience:number;
    constructor(name:string,salary:number,experience:number){
        this.name=name;
        this.salary=salary;
        this.experience=experience;
    }
    show():void{
        console.log("Emp Name :" + this.name);
        console.log("Salary :" + this.salary);
        console.log("Experience :" + this.experience);
    }
}
let e1=new Employee("Rahul",27,5);
e1.show();

