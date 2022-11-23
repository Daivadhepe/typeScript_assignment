var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var Person = /** @class */ (function () {
    function Person(fname, lname) {
        this.firstName = fname;
        this.lastName = lname;
    }
    Person.prototype.display = function () {
        console.log("Person name is :- ".concat(this.firstName, " ").concat(this.lastName));
    };
    return Person;
}());
var Student1 = /** @class */ (function (_super) {
    __extends(Student1, _super);
    function Student1(fname, lname, marks) {
        var _this = _super.call(this, fname, lname) || this;
        _this.mark = marks;
        return _this;
    }
    Student1.prototype.display = function () {
        console.log("Student name is :- ".concat(this.firstName, " ").concat(this.lastName, " and mark is ").concat(this.mark));
    };
    return Student1;
}(Person));
var Employee = /** @class */ (function (_super) {
    __extends(Employee, _super);
    function Employee(fname, lname, dept, salary) {
        var _this = _super.call(this, fname, lname) || this;
        _this.emp_dept = dept;
        _this.emp_salary = salary;
        return _this;
    }
    Employee.prototype.display = function () {
        console.log("Employee name is :- ".concat(this.firstName, " ").concat(this.lastName, " Department is  ").concat(this.emp_dept, " and salary  ").concat(this.emp_salary));
    };
    return Employee;
}(Person));
var Trainer = /** @class */ (function (_super) {
    __extends(Trainer, _super);
    function Trainer(fname, lname, Experience, specialization) {
        var _this = _super.call(this, fname, lname) || this;
        _this.total_exp = Experience;
        _this.specialization = specialization;
        return _this;
    }
    Trainer.prototype.display = function () {
        console.log("Trainer name is  :- ".concat(this.firstName, " ").concat(this.lastName, " Experience ").concat(this.total_exp, " and specialization is ").concat(this.specialization));
    };
    return Trainer;
}(Person));
var p = new Person("Daiva", "Patil");
p.display();
p = new Student1("Vivekanand", "Kanole", 98.64);
p.display();
p = new Employee("Madhav", "Kanole", "HR", 75000);
p.display();
p = new Trainer("Dnyanesh", "Surya", "11 Years", "Angular");
p.display();
