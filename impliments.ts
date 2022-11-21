interface IHuman{
    gender:string;
    age:number;
    isMarried:boolean;
    color:string;
}
 class Human implements IHuman{
     gender: string;
     age:number;
     isMarried:boolean;
     color:string;

     constructor (gender:string,age:number,isMarried:boolean,color:string){
        this.gender=gender;
        this.age=age;
        this.isMarried=isMarried;
        this.color=color;
    }
    display(){
        console.log(`this is the properties :- ${this.gender+"  "+this.age+"  "+this.isMarried+"  "+this.color}`);
        
    }
}
var object = new Human("male",28,true,"black");
 object.display();
 var object1=new Human("female",23,true,"white");
 object1.display();
