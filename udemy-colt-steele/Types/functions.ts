// Number
function square(num: number) {
  return num * num;
}

square(3);

// String

function greet(person: string) {
  return `Hi there, ${person}`;
}

greet("Tolga");

// Arrow Function

const doSomething = (person: string, age: number, isFunny: boolean) => {};

doSomething("ChickenFace", 76, false);

// default parametre

function greet2(person: string = "Tolga") {
  return `Hi there, ${person}`;
}
greet2("Tolga");
greet2(324);

// Return Type Annotations
// Şimdi bu durumda fonksiyonun döndüreceği değeri tanımlamak zorunda değilsin, Typescript bunu kendi belirleyebilir.
// Fakat fonksiyon da return ifadesini çıkarırsan fonksiyonu çalıştırıdğında hata almazsın...
// Eğer Fonksiyonun döndüreceği değer eklenirsa bu sefer sana hata verecektir.
function square2(num: number): number {
  return num * num;
}

square2(2);

const add = (x: number, y: number): number => {
  return x + y;
};

// Böyle bir durumda ( string veya number )  döndürülen fonksiyonda fonksiyonun dönüş değerinin türü belirlenmezse hata alınmaz
// Fakat fonksiyonun döndüreceği değer belli olursa hata verir.
function random(num: number): number {
  if (Math.random() < 0.5) {
    return num.toString();
  }
  return num;
}
// ------------------------------------------------------------------------------------------------

//Anonmyous Functions
const colors = ["red", "orange", "yellow"];
// Arrow function - anonim fonksiyonlarda typescript içeriğe (context) içeriğe göre seçimini yapar.
colors.map((color) => {
  return color.toUpperCase();
});

// Bu durumda "any" tanımlarken
function blah(color) {}
// ------------------------------------------------------------------------------------------------

// Void Type
// Void is return type for functions that don't return anything. It means just tihs function is void of data.

// Fonksiyonu void olarak tanımladığında return edersen hata alırsın.
function printTwice(msg: string): void {
  console.log(msg);
  console.log(msg);
  return "";
}

// Exercise - 1 (fonksiyonu number olarak tanımladı)
function secondsInDay() {
  return 24 * 60 * 60;
}

// Exercise - 2 (fonksiyonu void olarak tanımladı.)
function doNothing() {
  2 + 2;
}

// Never
function makeError(msg: string): never {
  throw new Error(msg);
}

function gameLoop(): never {
  while (true) {
    console.log("Game Loop Running");
  }
}
