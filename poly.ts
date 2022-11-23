class Person{
     firstName:string;
     lastName:string;

     constructor(fname:string,lname:string){
        this.firstName=fname;
        this.lastName=lname;
     }
     display(){
        console.log(`Person name is :- ${this.firstName} ${this.lastName}`);
        
     }
}
class Student1 extends Person{
    mark:number;
    constructor(fname:string,lname:string,marks:number){
        super(fname,lname);
        this.mark=marks;
    }
    display(){
        console.log(`Student name is :- ${this.firstName} ${this.lastName} and mark is ${this.mark}`);
        
    }
}
class Employee extends Person{
    emp_dept:string;
    emp_salary:number;
    constructor(fname:string,lname:string, dept:string, salary:number){
        super(fname,lname);
        this.emp_dept= dept;
        this.emp_salary= salary;
    }
    display(){
        console.log(`Employee name is :- ${this.firstName} ${this.lastName} Department is  ${this.emp_dept} and salary  ${this.emp_salary}`);
        
    }
}
class Trainer extends Person{
    total_exp:any;
    specialization:string;
    constructor(fname:string,lname:string,Experience:any,specialization:string){
        super(fname,lname);
        this.total_exp= Experience;
        this.specialization=specialization;
    }
    display(){
        console.log(`Trainer name is  :- ${this.firstName} ${this.lastName} Experience ${this.total_exp} and specialization is ${this.specialization}`);
        
    }
}
var p = new Person("Daiva" , "Patil");
p.display();
p=new Student1("Vivekanand","Kanole", 98.64);
p.display();
p= new Employee("Madhav","Kanole","HR",75000);
p.display();
p= new Trainer("Dnyanesh","Surya","11 Years","Angular");
p.display();
