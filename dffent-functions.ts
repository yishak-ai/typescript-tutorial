//Create a function getStudentAverage
// Takes an array of numbers (grades)
// Returns a number (average)

import * as string_decoder from "node:string_decoder";

function getStudentAverage(grade: number[]): number {
const total: number =
    grade.reduce((acc, val)=>acc+val, 0);
return Math.round(total/grade.length);
}

// Create a function sayHello
// Takes a name (string)
// Returns a greeting message (string)

function satHello(greet: string):string{
    return greet
}
satHello("hi my teacher chatgpt");

// Create an arrow function isPassed
// Takes a number
// Returns true if the score is ≥ 60
 let isPassed = (score:number):boolean=> score>=3?true:false;
isPassed(60);

// Create a function type:
// let combine: (a: string, b: string) => string;
// Then assign a function that joins names.
let CombineName: (A: string, B: string) => string;
CombineName=(X, Y)=>
 CombineName("demeke", "Tefera")

// multiplyAll(...nums: number[])
// Use rest parameters
// Multiply all numbers and return result
 function multiplyAll(...nums:number[]){
    const product =  nums.reduce((ccr,val)=>ccr * val, 0);
 return product;
}
console.log(multiplyAll(100, 200, 1000));
// 🔹 2. getInfo(input)
// Use function overloading
// Accept:
//     string → return greeting
// number → return age message
// boolean → return yes/no response

function getInfo(value : number): string;
function getInfo(value : boolean): string;
function getInfo(value : string): string {
if (typeof value === "string"){
    return `${value} chatgpt.com`;
}
else if (typeof value === "boolean"){
    return `${value} chatgpt.com`;
}
else if (typeof value === "number"){
return `the age of chatgpt.com is morthan ${value} years`;
}
return `invalid data inserted to chatgpt.com`;
}
console.log(getInfo(true));
console.log(getInfo( "Hello"));
console.log(getInfo(2))
// 🔹 3. applyDiscount(price: number, fn: (p: number) => number)
// Use callback function
// Return discounted price from user’s function
function applyDiscount(price:number, fn:(p:number)=>number):number{
    return fn(price);
}
console.log(applyDiscount(100, n=>n*2));