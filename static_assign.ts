class Calculator{
static Add (arg1:number,arg2:number){
    return arg1+arg2;
}
static Sub(arg1:number,arg2:number){
    return arg2-arg1;
}
static Mul(arg1:number,arg2:number){
    return arg1*arg2;
}
static Div(arg1:number,arg2:number){
    return arg1/arg2;

}
static Mod(arg1:number,arg2:number){
    return arg1%arg2;

}
}
var cal = new Calculator();
console.warn("---------------static method example -----------------------");
console.log(`Addition  of number 10 & 20 is :- ${Calculator.Add(10,20)} `);
console.log(`Subtraction of 10 & 10 is  :- ${Calculator.Sub(10,10)}`);
console.log(`Multiplication of 10 & 30 is :- ${Calculator.Mul(10,30)}`);
console.log(`Divagation of 30 & 10 is :- ${Calculator.Div(30,10)}`);
console.log(`Modules of 30 & 10  is :- ${Calculator.Mod(30,10)}`);




