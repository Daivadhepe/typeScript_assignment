var Human = /** @class */ (function () {
    function Human(gender, age, isMarried, color) {
        this.gender = gender;
        this.age = age;
        this.isMarried = isMarried;
        this.color = color;
    }
    Human.prototype.display = function () {
        console.log("this is the properties :- ".concat(this.gender + "  " + this.age + "  " + this.isMarried + "  " + this.color));
    };
    return Human;
}());
var object = new Human("male", 28, true, "black");
object.display();
var object1 = new Human("female", 23, true, "white");
object1.display();
