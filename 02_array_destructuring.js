console.warn("======Given array=========================");
var array = ["J&J", "Pfizer", "Sputnik"];
console.log(array);
for (var index = 0; index < array.length; index++) {
    var element = array[index];
}
array.push("covaxin");
console.warn("=======added one value Covaxin  using push method==============");
console.log(array);
console.warn("======Array destructuring ============================");
var a = array[0], b = array[1], c = array[2], d = array[3];
console.log(a);
console.log(b);
console.log(c);
console.log(d);
