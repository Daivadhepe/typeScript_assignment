console.warn("======Given array=========================");
var array=["J&J" , "Pfizer","Sputnik"];
console.log(array);
 
for (let index = 0; index < array.length; index++) {
    const element = array[index];
    
}
array.push("covaxin");
console.warn("=======added one value Covaxin  using push method==============");

console.log(array);

console.warn("======Array destructuring ============================");
let  [a,b,c,d] = array;
console.log(a);
console.log(b);
console.log(c);
console.log(d);


