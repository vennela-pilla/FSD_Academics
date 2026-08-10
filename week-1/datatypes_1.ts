//storing string
let userName:string = "ALice";

//storing number
let userAge:number = 25;

//storing boolean
let isMember:boolean = true;

//types of variables we created
console.log("Data type of userName is -->"+typeof userName);
console.log("Data type of userAge is -->"+typeof userAge);
console.log("Data type of isMember is -->"+typeof isMember);

//function using the data types
function displayUserProfile(name:string, age:number,active:boolean): void{
    console.log('User:${userName}');
    console.log('Age:${userAge}');
    console.log('Status:${active? "Active" : "Inactive}');
}
//calling function
displayUserProfile(userName,userAge,isMember);


