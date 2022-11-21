var Check = /** @class */ (function () {
    function Check() {
    }
    Check.prototype.display = function () {
        console.log(Check.banckName + " " + Check.accNo + " " + Check.branch);
    };
    Check.banckName = "Bank of India";
    Check.accNo = 456987;
    Check.branch = "Martala";
    return Check;
}());
var obj = new Check();
obj.display();
// var banckName = Check.banckName;
