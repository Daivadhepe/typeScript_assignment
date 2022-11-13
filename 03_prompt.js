var number1 = prompt("Please enter your marks of maths");
var number2 = prompt("Please enter your marks of physics");
var number3 = prompt("Please enter your marks of chemistry");
console.log("your meths marks :- ".concat(number1));
console.log("your physics marks :- ".concat(number2));
console.log("your chemistry marks :- ".concat(number3));
var a = +number1;
var b = +number2;
var c = +number3;
var sum = a + b + c;
console.warn("==============================================================");
console.log("Addition of total marks :- ".concat(sum));
console.warn("==============================================================");
var arg = sum / 3;
console.log("average of marks :- ".concat(arg));
console.warn("================================================================");
if (arg < 70) {
    console.log("Your grade is :- C");
}
;
if (arg > 70 && arg < 90) {
    console.log("Your grade is :- B");
}
;
if (arg > 90) {
    console.log("Your grade is :- A");
}
