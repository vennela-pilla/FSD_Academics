//using any type
let flexibleValue: any = 10;
flexibleValue = "I am a String Now";//no error
flexibleValue = true;

//using unknown type
let mysteryValue: unknown = "Hello";
//error unknown dont have properties
//let length:number = mysteryValue.length;
if(typeof mysteryValue ==="string"){ // unknown is treated as string here
    console.log("Length of unknown string:"+mysteryValue.length);
}

//using void type
function logNotification(message:string): void{
    console.log("Alert:"+message);
    //return "Success";
}

logNotification("Environment setup Completed");
