interface Person {
    name : string,
    age : number,
    aadhar? : number       // aadhar is optional
}

// const obj : Person ={
//     name : "prince",
//     age : 20,
// }

interface customer {
    c_name : string,
    c_age : number,
    productId : number
}

const obj2 : Partial<customer> = {  // all property are optional
       c_name : "Raj"
}

const obj3 : Required<customer> = {  // all property should be required
       c_name : "Raj",
       c_age : 21,
    productId : 65645
}

const obj4 : Readonly<customer> = {  // I can read only don't able to change property
     c_name : "ravi",
     c_age : 22,
    productId : 5445
}
//obj4.c_age = 24;

// array of object
const arr1:{name:string, age:number}[] = [{name:"prince", age:20},{name:"Ankit", age:18}];

//other way to write
interface people {
    name : string,
    age : number
}

const arr2 : people[] = [{name : "prince", age : 20},{name : "ankit", age : 18},{name : "raj", age : 16}]

// function in ts
function great(a:number):number{   // second number is return type
    console.log(a);
    return a+5;
}

function meet(a:string, val:number):void{
   console.log(a,val);
}

//default parameter
function neet(msg:string="jitu"){
    console.log(msg);
};
neet();
neet("Bittu");

//optional parameter
function GATE(person?:string){
    console.log(person||"Mohan");
}
GATE("Rohit");
GATE();

// arrow function
const sum = (a:number,b:number):number=>{
     return a+b;
}
console.log(sum(3,4));

// callback function
function placeOrder(order:number,callback: (amount:number)=>void):void{
    
     const amount:number = order+10;
     callback(amount);
}
placeOrder(10,(amount)=>{
     console.log(amount);
});

//other way to write
type chill = (amount:number)=>void
function placeOrder1(order:number,callback:chill):void{
    
     const amount:number = order+10;
     callback(amount);
}
placeOrder1(10,(amount)=>{
     console.log(amount);
});

// Rest parameter
function total(...arr:number[]){
   let ans:number = 0 ;
   arr.forEach((val:number)=>ans = ans+val);
   console.log(ans);    
}
total(2,3,1,4,123,1,12,10);

// extend keyword
interface human{
     name:string,
     age:number
};
interface Teacher extends human{
    salary:string,
    id:number
};
interface BankEmployee extends human{
     salary: string,
     position: string
};

const obj8:Teacher = {
    name :"Rohit",
    age: 20,
    salary:"chillar",
    id:123
};



class Person{
    name:string;
    age:number;

    constructor(name:string,age:number){
        this.name = name;
        this.age = age;
    }

    greet():void{
        console.log(`hi ${this.name}`);
    }
}

// Blueprint of an object


const obj1 = new Person("Rohit",20);
const obj21 = new Person("Nitin",11);
console.log(obj1);
console.log(obj21);


console.log(obj1.name);
obj1.greet();

// public private protected

class Customer{
    public name:string;
    private age:number;
    protected balance:number;

    constructor(name:string,age:number,balance:number){
        this.name = name;
        this.age = age;
        this.balance = balance
    }

    meet():number{
       this.age = this.age+10;
       return this.age;
    }
}

const P1 = new Customer("Deepak",20,420);
console.log(P1.name);

console.log(P1.meet());
// console.log(P1.balance);

class Employee extends Customer {
    salary:number;

    constructor(salary:number,name:string,age:number,balance:number){
        super(name,age,balance);
        this.salary = salary;
    }

    greet():void{
        console.log(this.balance);
    }

    meet():number{
        console.log("Hello Coder armu");
        return 10;
    }
}

const E1 = new Employee(420,"Rohit", 20,320);
console.log(E1.meet());
console.log(E1.salary);


// Generic: Template

// function value(a:(number|string|number[]|boolean)):(number|string|number[]|boolean){
//    return a;
// }


function value<T>(a:T):T{
    return a;
}


console.log(value<number>(10));
console.log(value<string>("Rohit"));
console.log(value([10,11,12,13,14]));
console.log(value(true));
console.log(value(["MOhan","Rohan"]))



interface Admin<T,U> {
    name:string,
    age:number,
    addhar:T,
    salary:U
}


const obj10: Admin<number,number> = {
    name:"Rohit",
    age:20,
    addhar:123,
    salary:23213
}

const obj11: Admin<string,number>={
    name:"Rohit",
    age:20,
    addhar:"32112",
    salary:13
}

