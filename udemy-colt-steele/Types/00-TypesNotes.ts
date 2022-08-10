// TYPES

// JAVASCRIPT VS TYPESCRIPT
/* 
JavaScript için 
Primitive Types : Number - Null - String - Undefined - Boolean - Void

Object Types : Object - Array - Function
----------------------------------------------------------------
TypeScript
Primitive Types : Number - Null - String - Undefined - Boolean Void 
Any - Never - Unknown

Object Types : Object - Array - Function
Tuple - Enum - Others!
*/

// ----------------------------------------------------------------
// VARIABLES
// -- declaring in JS
const myAwesomeVariableJS = "So Awesome";

// -- declaring in TS
const myAwesomeVariableTS: string = "So Awesome";

// syntax
/* let myVAR:type = value */

// --String
let myString: string = "Words!!";
myString = 100; //❌ERROR - string tanımlanan ifadeye number atayamazsın.
myString = "New words!!"; //Reassign ✅

// --Numbers
let myNumber: number = 42;
myNumber="string ifade" ❌
myNumber = 23; //Reassign ✅

// --Booleans
let myBoolean:boolean = true;
myBoolean = 42 ❌
myBoolean = false

// ANY : Değişkenlerin türünün kontrol edilmesini yok sayar.
// Declare
let myAnyTitle: any="Hey";

myAnyTitle = 53 ✅
myAnyTitle = "asda.." ✅
myAnyTitle = true ✅
myAnyTitle(); ✅
myAnyTitle.toUpperCase(); ✅

// ----------------------------------------------------------------
// FUNCTION

// Girilen parametre bir string olmalı
let studentName = (name:string)=>{
  return `Hey ${name}, you're doing GREAT! `
}

studentName('you') ✅
studentName(52) ❌

// Fonksiyonun döndüreceği değer üzerine
const addNums =(x:number,y:number):number => {
  return x + y
}
addNums(2,4)

// -Anon func
const numbers=[51,2,4,2];
numbers.forEach(num => {
  return num.toUpperCase(); ❌
})

// Void - değer döndürmeyecek olan fonksiyon için
// void tanımlanan fonksiyon return ifadesi kullanılırsa hata verir.
const annoyUser = (num:number):void=>{
  for(let i = 0;i <num;i++){
    alert('Hiiiiiiiiiiiiiiii')
  }
}

// -- Never ?? 
const neverStop =():never=>{
  while(true){
    console.log("I'm still going");
  }
}

// ----------------------------------------------------------------
// OBJECT 
// obje elemanların ne türden oluşacağı tanımlanabilir 
function printName3 (person:{first:string,last:string}):void{
  console.log(`${person.first} ${person.last}`);
}
printName3({first:'Thomas',last:'Jenkins'})

// ----------------------------------------------------------------

// TYPE
// A Person Type
type Person = {
  name:string;
  age:number;
}

const hello =(person:Person)=>{
  return `Hey ${person.name},...${person.age}..`
}

//---------------------------------------------------------------

// NESTED OBJECTS
const describePerson = (person:{
  name:string,
  age:number,
  parentNames:{
    mom:string
    dad:string
  }
})=>{
  return `Person: ${name}, Age:${age}, parents: ${this.parentNames.mom},${this.parentNames.dad}`
}

describePerson({name:'Jimmy',age:10,parentNames:{mom:'Kim',dad:'Steve'}})

//---------------------------------------------------------------

// ARRAY TYPES
// - Brackets
let names: string[]=["hello","world"]
let ages: number[]=[23,52,64,2]

// An alternative syntax
// string array
let names2: Array<string> = ['Hello','world'] 
let ages2: Array<number> = [24,32,5,2,]

// ----------------------------------------------------------------

// UNION TYPES
// -- bir değişkene birden fazla türün atanmasın sağlar
// number ve string olabilir... boolean veya number

let guessAge = (age:number| string)=>{
  return "Your age is: " + age
}

guessAge(30) // ✅
guessAge("22") // ✅

guessAge({age:32}) // ❌


// - Narrowing the Type
const isTeenager = (age:number | string){
  if(typeof age ==="string"){
    console.log(age.charAt(0)===1);
  }
  if(typeof age === "number"){
    console.log(age > 12 && age <20);
  }
}

isTeenager('20')
isTeenager(13)

// ----------------------------------------------------------------
// -- Literal Types
// Literal + UNION TYPE PARAMETER FUNCTION
const giveAnswer = (answer:'yes'| 'no'|'maybe')=>{
  return `The answer is ${answer}`
}

giveAnswer("no") //✅
giveAnswer("nooo") //❌

// ----------------------------------------------------------------

// Tuples : Dizinin uzunluğunu ve sırasını sabitler

let myTuple: [number,string]
myTuple = [10,'Typescript is fun!'] //✅
myTuple = ['Typescript is fun!',10] //❌


// ENUMS 
// oluşturulan kod boyunca yeniden kullanılabilen adlandırılmış dizi sabiti
// hepsi bir türden oluşmak zorunda değil ama genelde tek türden oluşturulur.
enum ArrowKeys {
  UP = "up",
  DOWN = "down",
  LEFT = "left",
  RIGHT = "right",
  ERROR = 234,
}

// ----------------------------------------------------------------

// INTERFACES
// Sadece nesneler için kullanılır.




interface newPerson {
  name:string;
  age: number;
}

const greeting =(person:newPerson) =>{
  return `Hey ${person.name}, .... ${person.age}`
}

greeting({name:'Jerry',age:24})

// ----------------------------------------------------------------
// Type vs Interface
