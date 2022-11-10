var Employee={
    emp_id:1,
    emp_name:"Daiva",
    emp_salary:75000,
    emp_city:"Nanded",
    emp_pin_code:431602,

}
console.warn("================object=========================");
console.log(`Employee id is :- ${Employee.emp_id}`);
console.log(`Employee name is:- ${Employee.emp_name}`);
console.log(`Employee salary is :-${Employee.emp_salary}`);
console.log(`Employee city is :- ${Employee.emp_city}`);
console.log(`Employee pinCode is :- ${ Employee.emp_pin_code}`);
var { emp_id,emp_name,emp_salary,emp_city,emp_pin_code}=Employee
 console.warn("==============object Destructuring==================================");
 console.log(`  Employee id is : -  ${ emp_id}`);
 console.log(`Employee name is :-${emp_name}`);
 console.log(`Employee salary is :- ${emp_salary}`);
 console.log(`Employee city is :- ${emp_city}`);
 console.log(`Employee pinCode${emp_pin_code}`);
 
 console.warn("===========Object traversing using for in loop====================");
 for (const key in Employee) {
     
        const element = Employee[key];
        console.log(element);
        
    }
 