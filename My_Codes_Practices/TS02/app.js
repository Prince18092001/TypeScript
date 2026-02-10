"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
//num
let num = 10; //automatic number declare
//string
let str = "prince"; //automatic str declare
//any
let money; // It's type any declare automatically
money = 20; //It contain any type of value
money = "hello"; // It's behave like javaScript
console.log(money.toUpperCase());
//unknown
let val2;
val2 = 10;
val2 = "kumar";
if (typeof val2 === "string")
    console.log(val2.toUpperCase());
if (typeof val2 === "number")
    console.log(val2.toFixed(2));
//Non Primitive Data type
let arr = [20, 30, 40, 50, 60];
let arr1 = [20, "prince", 10, "raj"];
let arr2 = [20, "prince", 10, "raj", true];
let tuple = [50, "hi"]; // here index are also fix
//object
let person;
person = {
    name: "prince",
    age: 20,
    isStudent: true
};
//in oneline
let account = {
    name: "Rohit",
    balance: 420
};
let college_student = {
    name: "prince",
    age: 20,
};
let sports_student = {
    name: "raj",
    age: 21
};
let per = {
    name: "akash",
    age: 22,
    student_id: 25655,
    course: "B.Tech",
    course_id: 12556
};
//# sourceMappingURL=app.js.map