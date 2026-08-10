class Person {
    private age=20;
    show(){
        console.log(this.age);
    }
}
let p=new Person();
p.show();


class Animal{
    protected sound="makes sound.....";
}
class Dog extends Animal{
    display(){
        console.log(this.sound);
    }
}
new Dog().display();

class Car{
    public brand="MyBrand";
}
let c=new Car();
console.log(c.brand);