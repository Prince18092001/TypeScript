//num
let num = 10;         //automatic number declare
//string
let str = "prince";   //automatic str declare

//any
let money;   // It's type any declare automatically

money = 20;       //It contain any type of value
money = "hello";   // It's behave like javaScript

console.log(money.toUpperCase());

//unknown
let val2:unknown;

val2 = 10;
val2="kumar";

if(typeof val2 === "string")
console.log(val2.toUpperCase());
if(typeof val2 === "number")
console.log(val2.toFixed(2));

//Non Primitive Data type

let arr:number[] = [20,30,40,50,60];

let arr1:(number|string)[] = [20,"prince",10,"raj"];

let arr2:(number|string|boolean)[] = [20,"prince",10,"raj",true];

let tuple:[number,string] = [50,"hi"]; // here index are also fix


//object
let person : {
    name:string;
    age:number;
    isStudent:boolean;
};

 person = {
    name: "prince",
    age: 20,
    isStudent: true
}

//in oneline
let account: {name:string, balance:number, age?:number} = {
    name:"Rohit",
    balance:420
};

//Using Type Alises
type student = {
    name: string,
    age: number
};

let college_student:student ={
       name : "prince",
       age : 20,
};
let sports_student:student={
    name : "raj",
    age : 21
}

//using interface
interface customer {
    name : string,
    age : number,
    student_id:number
}

interface customer {       //both merge ho jata ha
    course : string,
    course_id : number
}

let per : customer ={
    name : "akash",
    age : 22,
    student_id : 25655,
    course : "B.Tech",
    course_id : 12556
}

