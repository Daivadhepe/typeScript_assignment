var Calculator = /** @class */ (function () {
    function Calculator() {
    }
    Calculator.Add = function (arg1, arg2) {
        return arg1 + arg2;
    };
    Calculator.Sub = function (arg1, arg2) {
        return arg2 - arg1;
    };
    Calculator.Mul = function (arg1, arg2) {
        return arg1 * arg2;
    };
    Calculator.Div = function (arg1, arg2) {
        return arg1 / arg2;
    };
    Calculator.Mod = function (arg1, arg2) {
        return arg1 % arg2;
    };
    return Calculator;
}());
var cal = new Calculator();
console.warn("---------------static method example -----------------------");
console.log("Addition  of number 10 & 20 is :- ".concat(Calculator.Add(10, 20), " "));
console.log("Subtraction of 10 & 10 is  :- ".concat(Calculator.Sub(10, 10)));
console.log("Multiplication of 10 & 30 is :- ".concat(Calculator.Mul(10, 30)));
console.log("Divagation of 30 & 10 is :- ".concat(Calculator.Div(30, 10)));
console.log("Modules of 30 & 10  is :- ".concat(Calculator.Mod(30, 10)));
