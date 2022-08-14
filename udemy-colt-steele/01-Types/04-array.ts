// Using Brackets
//string array
const activeUsers: string[] = [];
activeUsers.push("Tony");

const ageList: number[] = [45, 56, 13];
ageList[0] = 99;
ageList[0] = "asd"; //integer tanımlanmış bir array'i string ile değiştiremezsin.

// ------------------------------------------------------------------------------------------------
// An Alternative syntax
//  string array
let names: Array<string> = ["hello", "world"];
// number array
let numbers: Array<number> = [14, 512, 62];
// boolean array
let bools: Array<boolean> = [true, false];

// ------------------------------------------------------------------------------------------------
// Custom Array
type Point = { x: number; y: number };
const coords: Point[] = [];
coords.push({ x: 23, y: 8 });

type Point2 = { name: string; age: number };
const person: Point2[] = [];
person.push({ name: "Tolga", age: 23 });

// Multidimensional Arrays (nested arrays)
const board: string[][] = [
  ["X", "O", "X"],
  ["X", "O", "X"],
  ["X", "O", "X"],
];

const demo: number[][][] = [[[2]], [[3]]];
