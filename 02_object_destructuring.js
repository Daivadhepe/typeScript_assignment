var Employee = {
    emp_id: 1,
    emp_name: "Daiva",
    emp_salary: 75000,
    emp_city: "Nanded",
    emp_pin_code: 431602
};
console.warn("================object=========================");
console.log("Employee id is :- ".concat(Employee.emp_id));
console.log("Employee name is:- ".concat(Employee.emp_name));
console.log("Employee salary is :-".concat(Employee.emp_salary));
console.log("Employee city is :- ".concat(Employee.emp_city));
console.log("Employee pinCode is :- ".concat(Employee.emp_pin_code));
var emp_id = Employee.emp_id, emp_name = Employee.emp_name, emp_salary = Employee.emp_salary, emp_city = Employee.emp_city, emp_pin_code = Employee.emp_pin_code;
console.warn("==============object Destructuring==================================");
console.log("  Employee id is : -  ".concat(emp_id));
console.log("Employee name is :-".concat(emp_name));
console.log("Employee salary is :- ".concat(emp_salary));
console.log("Employee city is :- ".concat(emp_city));
console.log("Employee pinCode".concat(emp_pin_code));
console.warn("===========Object traversing using for in loop====================");
for (var key in Employee) {
    var element = Employee[key];
    console.log(element);
}
