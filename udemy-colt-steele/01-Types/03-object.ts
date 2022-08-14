const dog = {
  name: "Elton",
  breed: "Australian Shepherd",
  age: 0.5,
};

function printName(person: { first: string; last: string }): void {
  console.log(`${person.first} ${person.last}`);
}

printName({ first: "Thomas", last: "Jenkins" });

let coordinate: { x: number; y: number } = { x: 34, y: 2 };

// Nesne döndüren fonksiyon
function randomCoordinate(): { x: number; y: number } {
  return { x: Math.random(), y: Math.random() };
}

printName({ first: "Mick", last: "Jagger" });

// ----------------------------------------------------------------
//Creating Type Aliases

type Point = {
  x: number;
  y: number;
};

let coordinate2: Point = { x: 34, y: 2 };

function randomCoordinate2(): Point {
  return { x: Math.random(), y: Math.random() };
}

function doublePoint(point: Point): Point {
  return { x: point.x * 2, y: point.y * 2 };
}

type myNum = number;
let age: myNum = 23141;

// Nested Objects
type Song = {
  title: string;
  artist: string;
  numStreams: number;
  credits: { producer: string; writer: string };
};

const calculatePayout = (song: Song): number => {
  return song.numStreams * 0.0033;
};

function printSong(song: Song): void {
  console.log(`${song.title} - ${song.artist}`);
}

const mySong: Song = {
  title: "Unchained Melody",
  artist: "Righteous Brothers",
  numStreams: 1231413,
  credits: {
    producer: "Phil Spector",
    writer: "Alex North",
  },
};

const earnings = calculatePayout(mySong);
console.log(earnings);
printSong(mySong);

//  Optional Properties

type Point2 = {
  x: number;
  y: number;
  z?: number;
};

const myPoint: Point2 = { x: 1, y: 3 };

// The readonly Modifier
type User = {
  readonly id: number;
  username: string;
};

const user: User = {
  id: 12314,
  username: "cat",
};

console.log(user.id);
// user.id = 124123; // Read only

// Intersection Type

type Circle = {
  radius: number;
};

type Colorful = {
  color: string;
};

type ColorfulCircle = Circle & Colorful;

const happFace: ColorfulCircle = {
  radius: 4,
  color: "yellow",
};

type Cat = {
  numLives: number;
};

type Dog = {
  breed: string;
};

type CatDog = Cat &
  Dog & {
    age: number;
  };

const christy: CatDog = { numLives: 7, breed: "Husky", age: 9 };
