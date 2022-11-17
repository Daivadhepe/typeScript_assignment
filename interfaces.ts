interface IProduct {
    id : number;
    name : string;
    description : string;   
    price : number;    /// declaration  only in interfaces
 }
var objProduct : IProduct={
    id : 123,
    name :"Iphone",
     description:"It's awesome",
    price: 60000,  ///I have give implementation for IProduct interface
     }
console.log("Interface declaration and implementation with object :-" ,  objProduct);
console.log("=================================================================================================");
interface IStudent{
name:string;
id?:number; //its optional properties
class:any;
email:any;
isMarried:boolean; //declaration 
}
var detailss: IStudent={
name:"Daiva",
// id:101,
class:"12 th",
email:"dhepedaivashala63@gmail.com",
isMarried:true,       //implementation
}
console.log(`interface declaration with object implementation :-`, detailss);

console.log("===================================================================================================");
interface IMobail {
    id : number;
    name : string;
    description : string;   
    price : number; /// declaration  only in interfaces.
    display():void;  ///its no return.  Adding methods to a object interfaces.
 }
var detail : IMobail={
    id : 204,
    name :"Android",
    description:"It's awesome",
    price: 40000,  ///I have give implementation for IProduct interface
     display():void {
         console.log(this.id+" "+this.name);
         
     },
}
console.log("Interface declaration and implementation with object :-" , detail);




