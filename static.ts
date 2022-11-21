class Check{
    static banckName:string ="Bank of India" ;
    static accNo:number=456987;
     static branch:string="Martala";
 display(){
    
    console.log( Check.banckName +" " + Check.accNo +" " + Check.branch );
    
 }
}
   var obj = new Check();
 obj .display();
// var banckName = Check.banckName;
 