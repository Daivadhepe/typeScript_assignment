var objProduct = {
    id: 123,
    name: "Iphone",
    description: "It's awesome",
    price: 60000
};
console.log("Interface declaration and implementation with object :-", objProduct);
console.log("=================================================================================================");
var detailss = {
    name: "Daiva",
    // id:101,
    "class": "12 th",
    email: "dhepedaivashala63@gmail.com",
    isMarried: true
};
console.log("interface declaration with object implementation :-", detailss);
console.log("===================================================================================================");
var detail = {
    id: 204,
    name: "Android",
    description: "It's awesome",
    price: 40000,
    display: function () {
        console.log(this.id + " " + this.name);
    }
};
console.log("Interface declaration and implementation with object :-", detail);
