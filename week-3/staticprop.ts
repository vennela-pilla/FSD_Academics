// READ ONLY & STATIC PROPERTIES
class Resturant{
    readonly order:string="Order cannot be changed";
    price:number=380;
}
let r1=new Resturant();

// ERROR
// r1.order="Order can be changed";
console.log(r1.order);


// HERE PRICE CAN BE CHANGED AS IT IS NOT READ ONLY
r1.price=400;
console.log(r1.price);

// STATIC =>CAN BE ACCESSED THROUGH CLASS NAME
class Hotel{
    static hotelName="Grand Aditya in Eluru"; 
}
console.log(Hotel.hotelName);



