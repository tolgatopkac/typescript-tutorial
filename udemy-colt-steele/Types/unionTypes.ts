// union types bir değişkenin string,array... farklı türe sahip olma imkanı sunar.

let age: number = 21;
age = 23;
age = "24"; // bu şekilde age değişkenine 24 değerini atayamam.

let age2: number | string = 34;
age2 = 23;
age2 = "55";

// ----------------------------------------------------------------

type Point = {
  x: number;
  y: number;
};

type Loc = {
  lat: number;
  long: number;
};

let coordinates: Point | Loc = { x: 234, y: 32 };
coordinates = { lat: 321.52, long: 235.41 };
// ----------------------------------------------------------------
//  Type Narrowing w/ Union Types
// Narrowing Type

function printAge(age: number | string): void {
  console.log(`You are ${age} years old`);
}

printAge(65);
printAge("65");

function calculateTax(price: number | string, tax: number) {
  if (typeof price === "string") {
    price.replace("$", "");
  } else {
    price * tax;
  }
  // Replace işlemini condition dışında yaparsan hata alırsın.
  // price.replace("$", "");
}

// Alternative
function calculateTax2(price: number | string, tax: number) {
  if (typeof price === "string") {
    price = parseFloat(price.replace("$", ""));
  }
  return price * tax;
}

// ----------------------------------------------------------------
// Union Types and Arrays

// Only Numbers
const nums: number[] = [1, 24, 5];

// All types
const stuff: any[] = [1, 24, 5, "2", true, {}];

// Number or string
const stuff2: (number | string)[] = [2, "asdasd"];

// bu şekilde yaparsan array sadece number veya sadece string elamanlardan oluşur
const stuff3: number[] | string[] = [123, 4123];
const stuff4: number[] | string[] = ["123", "4123"];

// --------------------------------------------------------------------------
// Literal Types
let mood: "Happy" | "Sad" = "Happy";
mood: "Sad";
mood: "angry";

// custom type
type DayOfWeek =
  | "Monday"
  | "Tuesday"
  | "Wednesday"
  | "Thursday"
  | "Friday"
  | "Saturday"
  | "Sunday";

let today: DayOfWeek = "Monday";
