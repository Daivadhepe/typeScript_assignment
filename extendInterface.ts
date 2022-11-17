interface IMale{
    hight:any;
 age:number;

}
interface IFemale{
    profession:string;
    salary:number;
   
    city:string
}
interface IHuman extends IMale,IFemale{
    isMarried:boolean;
    isHuman:boolean;
    place:string;
}
var details :IHuman={
isMarried:true,
isHuman:true,
place:"Earth",
city:"Pune",
salary:50000,
profession:"UI Developer",
age:35,
hight:"4.7 inch"
}
console.log(details);

